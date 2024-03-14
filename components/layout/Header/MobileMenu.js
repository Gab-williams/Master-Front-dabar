import Link from "next/link"
import { useState, useContext, useEffect } from "react";
import { context } from "../../../components/context";
import axios from "axios";
const MobileMenu = ({ handleMobileMenuClose, openClass }) => {

  const created = useContext(context);
  const {selectedx, setSelectedx} = created

  const [isActive, setIsActive] = useState({
      status: false,
      key: "",
  })

  const [categoryMenux, SetcategoryMenux] = useState([])

  const handleToggle = (key) => {
      if (isActive.key === key) {
          setIsActive({
              status: false,
          })
      } else {
          setIsActive({
              status: true,
              key,
          })
      }
  }

  const handleCloseMenu = () => {
      // Close the menu by setting isActive to false
      setIsActive({
          status: false,
          key: "",
      });
      // Call the provided handleMobileMenuClose function
      handleMobileMenuClose();
  }

    const categoryMenu = [
        {
          title: "Business Insights",
          subcategories: [
            "Industry Insights",
            "Entrepreneurship",
            "Leadership & Management",
            "Global Economy",
            "Corporate Responsibility",
          ],
        },
        {
          title: "Technology Trends",
          subcategories: [
            "Technology & Innovation",
            "Blockchain & Cryptocurrency",
            "Artificial Intelligence & Machine Learning",
          ],
        },
        {
          title: "Marketing & Finance",
          subcategories: ["Marketing & Advertising", "Finance & Investment"],
        },
        {
          title: "Workplace & Culture",
          subcategories: [
            "Human Resources",
            "Diversity & Inclusion",
            "Career Development",
          ],
        },
        {
          title: "Productivity & Innovation",
          subcategories: ["Productivity & Tools", "Innovation Implementation"],
        },
        {
          title: "Multimedia & Events",
          subcategories: ["Events & Conferences", "Multimedia Content"],
        },
        {
          title: "Opinions & Editorials",
          subcategories: ["Opinion & Editorial"],
        },
      ];


      useEffect(()=>{

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

        const whole = async()=>{
          if (selectedx === 'GB') {
      
            SetcategoryMenux(categoryMenu);
        } else if (selectedx !== "" && selectedx !== 'GB') {
          console.log("here", selectedx)
          const translatedData = await Promise.all(categoryMenu.map(async (item) => {
            let title = await changlang(selectedx, item.title);
    
      
            return {
              title: title.data,
              img: item.img,
       
            };
        }));
        SetcategoryMenux(translatedData);
        
  
        }else {
          SetcategoryMenux(categoryMenu);
  
            }

        }

        whole()
      

      },[selectedx])

    return (
        <>
            <div className="tgmobile__menu">
                <nav className="tgmobile__menu-box">
                    <div className="close-btn" onClick={handleCloseMenu}><i className="fas fa-times" /></div>
                    <div className="nav-logo">
                        <Link href="/" className="logo-dark"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                        <Link href="/" className="logo-light"><img src="/assets/img/logo/w_logo.png" alt="Logo" /></Link>
                    </div>
                    {/* <div className="tgmobile__search">
                        <form action="#">
                            <input type="text" placeholder="Search here..." />
                            <button><i className="far fa-search" /></button>
                        </form>
                    </div> */}
                    <div className="tgmobile__menu-outer">
                        <ul className="navigation">
                            {categoryMenux.map((item,i)=>{
                                return <li className="active menu-item-has-children" key={i}> <Link href={`/business?hello=${encodeURIComponent(item.title)}`} onClick={handleCloseMenu}>{item.title}</Link> </li>

                            })}
                          
                          {/*   <li className="menu-item-has-children" onClick={() => handleToggle(2)}><a  >More</a>
                                <ul className="sub-menu" style={isActive.key == 2 ? { display: 'block' } : { display: 'none' }}>
                                     <li><Link href="/blog">Our Blog</Link></li>

                                    {categoryMenu.slice(4, 7).map((item,i)=>{
                                   return <li  key={i}><Link href={`/blog/${encodeURIComponent(item.title)}`}>{item.title}</Link> </li>

                                      })} 
                                
                                </ul>
                                </li>*/}
                        </ul>
                    </div>
                    <div className="social-links">
                        <ul className="list-wrap">
                        <li>
                      <Link
                        href="https://www.facebook.com/profile.php?id=61552875998422&mibextid=ZbWKwL"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" /> 
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/the.dabar/?igshid=YzAwZjE1ZTI0Zg%3D%3D"
                        target="_blank"
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://twitter.com/Dabarnetwork?t=FdWs0919Lh2CqQxq50VUMg"
                        target="_blank"
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/company/darbar-media/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin" />
                      </Link>
                    </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="tgmobile__menu-backdrop" onClick={handleMobileMenuClose} />
        </>
    )
}

export default MobileMenu