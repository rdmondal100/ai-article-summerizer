import { useEffect, useState } from "react";
import { tick, copy, linkIcon, loader } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";
import { nanoid } from "@reduxjs/toolkit";


const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
    id:""
  });

  const [copied, setCopied] = useState([]);
  const [allArticles, setAllArticles] = useState([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const articleUrl = formData.get("url");

    try {
      const { data } = await getSummary({ articleUrl });

      if (data?.summary) {
        const urlSummary = { url: articleUrl, summary: data.summary,id:nanoid() };
        const newArticles = [urlSummary, ...allArticles];

        setAllArticles(newArticles);
        setArticle(urlSummary);

        localStorage.setItem("articles", JSON.stringify(newArticles));
      }
    } catch (error) {
      console.error("Error fetching summary:", error);
    }
  };

  const handleCopy = (copyUrl,id) => {
    setCopied(id);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          action=""
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link-icon"
            className="absolute left-0 ml-2 w-5"
          ></img>
          <input
            type="url"
            name="url"
            placeholder="Enter a URL"
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
          >
            {" "}
            ↩{" "}
          </button>
        </form>
        <div className="flex flex-col gap-1 max-h-60  w-full overflow-y-auto ">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className=" w-full flex items-center  bg-white border border-gray-200  rounded-lg   p-3 gap-4 hover:text-green-400"
            >
              <div
                className=" w-1/12 cursor-pointer hover:own-gradien"
                onClick={() => {
                  handleCopy(item?.url,item?.id);
                }}
              >
                <img
                  src={copied === item?.id ? tick : copy}
                  alt="copy_icon"
                  className=" w-5 md:w-6 lg:w-7"
                  
                />
              </div>
              <p className="relative w-11/12   text-sm md:text-base overflow-hidden ">{item.url}</p>
            </div>
          ))}
        </div>
      </div>
      {/* display summary */}
      <div className="my-10 max-w-full flex justify-center items-center ">
        {isFetching ? (
          <img
            src={loader}
            alt="loader"
            className="w-20 h-20 object-contain"
          ></img>
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Well, that's not supposed to happen... <br />
            <span className="font-satoshi font-normal text-gray-700">
              {error?.data?.error}
            </span>{" "}
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                Article <span className="own-gradien">Summary</span>
              </h2>
              <div className="summary_box">
                <p className="font-inter font-medium text-sm text-gray-700">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;

// /////////////////////////////////
// <div className="card border-success mb-3" style="max-width: 18rem;">
//   <div className="card-header bg-transparent border-success">Header</div>
//   <div className="card-body text-success">
//     <h5 className="card-title">Success card title</h5>
//     <input
//           id={amountInputId}
//             type="number"
//             className="form-control"
//             aria-label="Dollar amount (with dot and two decimal places)"
//             placeholder="Enter the Amount"
//             disabled={amountDisable}
//             // value={amount}
//             onChange={(e) =>
//               onAmountChange && onAmountChange(Number(e.target.value))
//             }
//           />
//   </div>
//   <div className="card-footer bg-transparent border-success">Footer</div>
// </div>;
