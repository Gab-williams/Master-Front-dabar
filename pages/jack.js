import React, { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
// import '../../node_modules/react-flags-select/css/react-flags-select.css'; 
export default function Jack() {
    const [selected, setSelected] = useState("GB");



    useEffect(() => {

      const changlang = async (selectedx, word) => {
          const options = {
              method: 'POST',
              url: 'https://deepl-translator2.p.rapidapi.com/translate',
              headers: {
                  'content-type': 'application/json',
                  'X-RapidAPI-Key': '7bddd58440msh9a827296af53740p1be7eajsn6674d57991b0',
                  'X-RapidAPI-Host': 'deepl-translator2.p.rapidapi.com'
              },
              data: {
                  source_lang: 'EN',
                  target_lang: selectedx,
                  text: word
              }
          };
  
          let res = await axios.request(options);
          return res.data;
      };
  
      const HeroAPi = async () => {
          let urlz = '/api/randomcategory';
          await apiClient.get('/sanctum/csrf-cookie');
          let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          let topx = await apiClient.get(urlz, headers);
  
          const newData = await Promise.all(
              topx.data.success.map(async (item) => {
                  let timez = new Date(item.created_at);
                  const monthNames = [
                      "Jan", "Feb", "Mar",
                      "Apr", "May", "Jun", "Jul",
                      "Aug", "Sept", "Oct",
                      "Nov", "Dec"
                  ];
                  const day = timez.getDate();
                  const monthIndex = timez.getMonth();
                  const year = timez.getFullYear();
                  const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;
                  const originalString = JSON.stringify(item.id);
                  const encryptedString = CryptoJS.AES.encrypt(originalString, 'TheDabar').toString();
                  const sanitizedEncryptedString = encryptedString.replace(/\//g, '');
  
                  return {
                      heading: item.heading,
                      summary: item.presummary,
                      thumbnail: item.main_image,
                      subcategories: item.category,
                      id: item.id,
                      writername: item.writer,
                      timez: formattedDate
                  };
              })
          );
  
          if (selectedx === 'GB') {
              setHerodata(newData);
          } else if (selectedx !== "" && selectedx !== 'GB') {
              const translatedData = await Promise.all(newData.map(async (item) => {
                  let heading = await changlang(selectedx, item.heading);
                  let summary = await changlang(selectedx, item.summary);
                  let subcategories = await changlang(selectedx, item.subcategories);
                  let timez = await changlang(selectedx, item.timez);
  
                  return {
                      heading: heading,
                      summary: summary,
                      thumbnail: item.thumbnail,
                      subcategories: subcategories,
                      id: item.id,
                      writername: item.writername,
                      timez: timez
                  };
              }));
              setHerodata(translatedData);
          } else {
              setHerodata(newData);
          }
      };
  
      HeroAPi();
  
  }, []);
  

    return (
        <div>
<div style={{ width:"140px" }}>
<ReactFlagsSelect
  countries={["US", "GB", "FR", "DE", "IT"]}
  customLabels={{ US: "EN-US", GB: "EN-GB", FR: "FR", DE: "DE", IT: "IT" }}
  placeholder="Select Language"
  selected={selected}
  defaultCountry="US"
  onSelect={(code) => setSelected(code)}
/>
</div>

            
        </div>
    )
}
