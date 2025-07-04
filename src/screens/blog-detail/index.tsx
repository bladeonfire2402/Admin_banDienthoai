"use client";

import React, { useContext, useEffect, useState } from "react";
import { BlogDetailScreenContent, BlogDetailScreenWrapper } from "./styled";
import NewDetailBar, { NewDetail } from "@/components/new-detail-bar";
import OtherNewsSection from "@/components/other-news-section";
import { coverDateNumberToString } from "@/utils";
import { useParams } from "next/navigation";
import LoadingSection from "@/components/loading";
import AppContext from "@/contexts/app";

const BlogDetailScreen = () => {
  const params = useParams();
  const [post, setPost] = useState<any>();
  const { sortedNews } = useContext(AppContext);
  const [otherPost, setOtherPost] = useState<any>([]);

  // Lọc ra bài viết từ fakeData từ slug
  useEffect(() => {
    if (params) {
      //Lọc bài viết để hiển thị trong sortedNews từ slug
      setPost(sortedNews.find((post: NewDetail) => post.slug === params.slug && params.category === post.subcategory));

      //Lọc bài viết còn lại xong cắt lấy 6 bài viết đầu
      setOtherPost(sortedNews.filter((post: NewDetail) => post.slug !== params.slug).slice(0, 6));
    }
  }, [params, sortedNews]);

  //Hàm để render ra các thành phần trên blog Detail
  const getContentFragment = (index: any, text: any, obj: any, type?: any) => {
    let modifiedText: any = text;

    if (obj.bold) {
      modifiedText = <b key={index}>{text}</b>;
    }
    if (obj.italic) {
      modifiedText = <em key={index}>{text}</em>;
    }
    if (obj.underline) {
      modifiedText = <u key={index}>{text}</u>;
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-3xl font-bold mb-4">
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className={"paragraph"}>
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-2xl font-bold mb-4">
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "grid-img":
        return (
          <div key={index} className="grid grid-cols-2 max-w-[600px]  gap-3 flex-wrap">
            {modifiedText.map((item: any, i: any) => (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img src={item} key={i} className="grid-imgs object-cover w-fit h-max-[50px]!" />
            ))}
          </div>
        );
      case "list-text":
        return (
          <ul key={index} className="list-disc pl-3 mt-6">
            {modifiedText.map((item: any, i: any) => (
              <li className="text-[22px]" key={item}>
                {item}
              </li>
            ))}
          </ul>
        );
      case "video":
        return (
          <div key={index} className="w-full">
            {modifiedText.map((item: any, i: any) => (
              // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-key
              <div className="w-full flex flex-col justify-center items-center">
                <video className="max-h-[500px] min-w-[600px] " muted loop autoPlay src={item.source}></video>
                <p className="alt text-center">{item.alt}</p>
              </div>
            ))}
          </div>
        );
      case "alt-image":
        return (
          <div key={index} className="w-full">
            {modifiedText.map((item: any, i: any) => (
              // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-key
              <div className="w-full flex flex-col justify-center items-center">
                <img className="max-h-[500px] w-full " src={item.source} alt=""></img>
                <p className="alt text-center w-full">{item.alt}</p>
              </div>
            ))}
          </div>
        );
      case "oversized-img":
        // eslint-disable-next-line @next/next/no-img-element
        return (
          <div key={index} className="absolute">
            <img className="relative " alt={index} />
          </div>
        );
      case "image":
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <BlogDetailScreenWrapper>
      {post ? (
        <div className="w-full flex justify-center flex-col items-center">
          <BlogDetailScreenContent>
            {/* content */}
            <div className="relative overflow-hidden shadown-md flex flex-col gap-5 items-center ">
              <h1>{post.title}</h1>
              <p className="intro text-gray-600 font-medium">{post.intro}</p>
              <hr />
              <NewDetailBar NewDetail={post} />
              <img src={post.featuredImage.url} alt={post.title} className="object-top h-full max-h-[700px]  w-full" />

              <div className="flex gap-2  w-full">
                <div className="flex justify-center items-center size-10 bg-black text-white rounded-full ">
                  <span className="font-semibold text-[20px]">M</span>
                </div>
                <div className="flex flex-col justify-between">
                  <span className="font-semibold text-[14px]">By Mircale Corps</span>
                  <span className="text-gray-600 text-[12px]">{coverDateNumberToString(post.extablishedDate)}</span>
                </div>
              </div>
            </div>
            <div className="mt-9 flex flex-col gap-3">
              {post.content.raw.children.map((typeObj: any, index: any) => {
                const children = typeObj.children?.map((item: any, itemIndex: any) => {
                  return getContentFragment(itemIndex, item.text, item);
                });
                return getContentFragment(index, children, typeObj, typeObj.type);
              })}
            </div>
          </BlogDetailScreenContent>
          <OtherNewsSection otherNewList={otherPost} />
        </div>
      ) : (
        <LoadingSection />
      )}
    </BlogDetailScreenWrapper>
  );
};

export default BlogDetailScreen;
