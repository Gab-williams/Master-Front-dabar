import BlogSidebar from "@/components/elements/BlogSidebar";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import data from "../../util/blogData";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function BlogDetails() {
  let Router = useRouter();
  const [item, setItem] = useState(null);
  const [fieldsdata, setfielddata] = useState({});
  const [datex, setdatex] = useState("");
  const [writername, setwritername] = useState("");
  const { id } = Router.query;
  const [category, setcategory] = useState("");
  const [dataLocial, setdataLocial] = useState({});
  const [readtime, setreadtime] = useState("");
  const client = createClient({
    space: "t0pszie0jiqu",
    accessToken: "bm2qgxL1ruXxTPkEQT0KgtAuHOwVxlOzOuj-AoNo-AM",
  });

  useEffect(() => {
    //setItem(data.find((data) => data.id == id))

    const fetchData = async () => {
      let story = await client.getEntry(id);
      //    let writeridx = fieldsdata.writerId?.sys.id

      try {
        if (story?.fields.storyId) {
          setfielddata(story?.fields.storyId.fields);
          setreadtime(story?.fields.storyId.fields.readTime);
          console.log(story?.fields.storyId.fields.heading);

          let cate = await client?.getEntry(fieldsdata.categoryId?.sys.id);
          setcategory(cate.fields.category);
        } else {
          // fieldsdata.categoryId?.fields.category
          setcategory(story?.fields.categoryId?.fields.category);
          setfielddata(story?.fields);
          setwritername(story?.fields.writerId?.fields.name);
        }
      } catch (error) {}

      try {
        if (story?.fields.storyId) {
          let writername = await client.getEntry(fieldsdata.writerId.sys.id);
          setwritername(writername.fields.name);
        }
      } catch (error) {}

      let timez = new Date(story.sys.updatedAt);
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];

      const day = timez.getDate();
      const monthIndex = timez.getMonth();
      const year = timez.getFullYear();
      const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;
      setdatex(formattedDate);
    };

    fetchData();
  }, [id]);

  let localinfo = localStorage.getItem("stories");
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (localinfo) {
        let story = JSON.parse(localStorage.getItem("stories"));
        let ans = story.find(
          (item) =>
            item.heading?.toLowerCase() == fieldsdata.heading?.toLowerCase()
        );

        setdataLocial((dataLocial) => ans);
      }
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [fieldsdata.heading]);

  const [random, setrandom] = useState([]);
  useEffect(() => {
    const recentstories = async () => {
      let newstories = await client.getEntries({
        content_type: "currentstories",
        select: "fields",
      });

      const newData = await Promise.all(
        newstories?.items.map(async (item) => {
          let data = await client.getEntry(
            item.fields.storyId.fields.categoryId.sys.id
          );
          let writer = await client.getEntry(
            item.fields.storyId.fields.writerId.sys.id
          );
          let answer = data.fields.category;
          let answriter = writer.fields.name;
          return {
            heading: item.fields.storyId.fields.heading,
            summary: item.fields.storyId.fields.summary,
            thumbnail: item.fields.storyId.fields.thumbnail.fields.file.url,
            category: answer,
            writer: answriter,
            id: item.sys.id,
          };
        })
      );

      const shuffledArray = newData.slice().sort(() => Math.random() - 0.5);
      let arrx = shuffledArray.slice(0, 2);
      setrandom(arrx);
      // console.log(arrx)
      // setData(Data=>arrx)
    };

    recentstories();
    const Local = async () => {
      let story = await client.getEntries({
        content_type: "currentstories",
        select: "fields",
      });
      const newData = await Promise.all(
        story?.items.map(async (item) => {
          let timez = new Date(item.fields.storyId.sys.updatedAt);
          const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ];
          const day = timez.getDate();
          const monthIndex = timez.getMonth();
          const year = timez.getFullYear();
          const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;

          let data = await client.getEntry(
            item.fields.storyId.fields.categoryId.sys.id
          );
          let writer = await client.getEntry(
            item.fields.storyId.fields.writerId.sys.id
          );
          let answer = data.fields.category;
          let answriter = writer.fields.name;
          return {
            heading: item.fields.storyId.fields.heading,
            summary: item.fields.storyId.fields.summary,
            presummary: item.fields.storyId.fields.preSummary,
            thumbnail: item.fields.storyId.fields.thumbnail.fields.file.url,
            category: answer,
            writer: answriter,
            id: item.sys.id,
            timez: formattedDate,
          };
        })
      );
      localStorage.setItem("stories", JSON.stringify(newData));
    };
    Local();
  }, []);

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        return (
          <img
            src={node.data.target.fields.file.url}
            alt={node.data.target.fields.description}
          />
        );
      },
    },
  };
  const contentbody = documentToReactComponents(fieldsdata.body, options);
  return (
    <>
      {fieldsdata && (
        <Layout
          breadcrumbCategory={category}
          breadcrumbPostTitle={fieldsdata.heading}
        >
          <>
            <section className="blog-details-area pt-80 pb-100">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-1">
                    <div className="blog-details-social">
                      <ul className="list-wrap">
                        <li>
                          <Link href="#">
                            <TwitterShareButton
                              url={`https://${location.hostname}`}
                            >
                              <FaXTwitter />
                            </TwitterShareButton>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <FacebookShareButton
                              url={`https://${location.hostname}`}
                            >
                              <FaFacebookF />
                            </FacebookShareButton>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <LinkedinShareButton
                              url={`https://${location.hostname}`}
                            >
                              <i className="fab fa-linkedin-in" />
                            </LinkedinShareButton>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-7">
                    <div className="blog-details-wrap">
                      <ul className="tgbanner__content-meta list-wrap">
                        <li className="category">
                          <Link href={`/blog/${id}`}>
                            {dataLocial?.category}
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">{dataLocial?.writer}.</Link>
                        </li>
                        <li>{dataLocial?.timez}</li>
                        <li>{readtime}</li>
                      </ul>
                      <h2 className="title">{fieldsdata.heading}</h2>
                      <div className="blog-details-thumb">
                        <img
                          src={fieldsdata.thumbnail?.fields.file.url}
                          alt=""
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div className="blog-details-content">
                      
                              <div className="blog-details-inner ">
                                <div className="blog-details-images ">
                                  <div className="row ">
                                    <div className="col-md-12 col-sm-6">
                                      <div className="details-inner-image ">
                                      {contentbody}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            

                        <div className="details-advertisement">
                          <Link href="#">
                            <img
                              src="/assets/img/others/advertisement02.png"
                              alt="img"
                            />
                          </Link>
                        </div>
   
                      </div>
                      <div className="blog-details-bottom">
                        <div className="row align-items-baseline">
                          <div className="col-xl-6 col-md-7">
                         
                          </div>
                        </div>
                      </div>

                      <div className="blog-prev-next-posts">
                        <div className="row">
                          {random.length > 0
                            ? random.map((item, i) => {
                                return (
                                  <div
                                    className="col-xl-6 col-lg-8 col-md-6"
                                    key={i}
                                  >
                                    <div className="pn-post-item">
                                      <div className="thumb">
                                        <Link href={`/blog/${item.id}`}>
                                          <img src={item.thumbnail} alt="img" />
                                        </Link>
                                      </div>
                                      <div className="content">
                                        {i == 0 ? (
                                          <span>Prev Post</span>
                                        ) : (
                                          <span>Next Post</span>
                                        )}

                                        <h5 className="title tgcommon__hover">
                                          <Link href={`/blog/${item.id}`}>
                                            {item.heading.length > 70
                                              ? item.heading.substr(0, 70) +
                                                ".."
                                              : item.heading}
                                          </Link>
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })
                            : ""}

                          {/* <div className="col-xl-6 col-lg-8 col-md-6">
                                                        <div className="pn-post-item next-post">
                                                            <div className="thumb">
                                                                <Link href="/blog/1"><img src="/assets/img/lifestyle/life_style07.jpg" alt="img" /></Link>
                                                            </div>
                                                            <div className="content">
                                                                <span>Next Post</span>
                                                                <h5 className="title tgcommon__hover"><Link href="/blog/1">Mood Boards for Product Designers dome...</Link></h5>
                                                            </div>
                                                        </div>
                                                    </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <BlogSidebar writer={dataLocial?.writer} />
                  </div>
                </div>
              </div>
            </section>
          </>
        </Layout>
      )}
    </>
  );
}
