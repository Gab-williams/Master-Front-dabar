import BlogSidebar2 from "@/components/elements/BlogSidebar2";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { FaFacebookF, FaTwitter as FaXTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import { createClient } from "contentful";
import ReactPaginate from "react-paginate";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { useRouter } from "next/router";

export default function Blog() {
  const router = useRouter();
  const [Data, setData] = useState([]);
  const [orignalarr, setOrignalarr] = useState([]);
  const [numberofpage, setNumberofpage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const client = createClient({
    space: "t0pszie0jiqu",
    accessToken: "bm2qgxL1ruXxTPkEQT0KgtAuHOwVxlOzOuj-AoNo-AM",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let story = await client.getEntries({
          content_type: "currentstories",
          select: "fields",
        });
        const newData = await Promise.all(
          story?.items.map(async (item) => {
            let timez = new Date(item.fields.storyId.sys.createdAt);
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

        setOrignalarr(newData);
        let page = Math.ceil(newData.length / pageSize);
        const indexofLastPost = currentPage * pageSize;
        const indexofFirstPost = indexofLastPost - pageSize;
        let ansdata = newData?.slice(indexofFirstPost, indexofLastPost);
        setData(ansdata);
        setNumberofpage(page);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleNext = (ans) => {
    let number = ans.selected + 1;
    const indexofLastPost = number * pageSize;
    const indexofFirstPost = indexofLastPost - pageSize;
    let ansdata = orignalarr.slice(indexofFirstPost, indexofLastPost);
    setData(ansdata);
  };

  return (
    <>
      <Layout breadcrumbCategory="Category">
        <section className="blog-details-area pt-80 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-1">
                <div className="blog-details-social">
                  <ul className="list-wrap">
                    <li>
                      <TwitterShareButton url={`https://${router.asPath}`}>
                        <FaXTwitter />
                      </TwitterShareButton>
                    </li>
                    <li>
                      <FacebookShareButton url={`https://${router.asPath}`}>
                        <FaFacebookF />
                      </FacebookShareButton>
                    </li>
                    <li>
                      <LinkedinShareButton url={`https://${router.asPath}`}>
                        <i className="fab fa-linkedin-in" />
                      </LinkedinShareButton>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7">
                <div className="blog-post-wrapper">
                  {Data.map((item) => (
                    <div className="latest__post-item" key={item.id}>
                      <div className="latest__post-thumb tgImage__hover">
                        <Link href={`/blog/${item.id}`}>
                          <img src={item.thumbnail} alt="img" />
                        </Link>
                      </div>
                      <div className="latest__post-content">
                        <ul className="tgbanner__content-meta list-wrap">
                          <li className="category">
                            <Link href="/blog">{item.category}</Link>
                          </li>
                          <li>
                            <span className="by">By</span>{" "}
                            <Link href="/blog">{item.writer}.</Link>
                          </li>
                          <li>{item.timez}</li>
                        </ul>
                        <h3 className="title tgcommon__hover">
                          <Link href={`/blog/${item.id}`}>{item.heading}</Link>
                        </h3>
                        <p>{item.presummary}</p>
                        <div className="latest__post-read-more">
                          <Link href={`/blog/${item.id}`}>
                            Read More <i className="far fa-long-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="pagination__wrap">
                    <ReactPaginate
                      previousLabel={"<"}
                      nextLabel={">"}
                      pageCount={numberofpage}
                      breakLabel={"..."}
                      marginPagesDisplayed={1}
                      pageRangeDisplayed={1}
                      onPageChange={handleNext}
                      containerClassName={"list-wrap"}
                      pageLinkClassName={"pagination-number"}
                      previousClassName={"pagination-arrow"}
                      nextClassName={"pagination-arrow"}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <BlogSidebar2 />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
