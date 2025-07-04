"use client";

import LatestNewsBLock from "@/components/latest-news-block";
import { BlogOverViewScreenContent, BlogOverViewScreenWrapper } from "./styled";
import BlockBorderTop from "@/components/block-border-top";
import { IoDocumentText } from "react-icons/io5";
import ReadMoreButton from "@/components/read-more-btn";
import { BusinessCategory } from "../blog-personal-business";
import { LifeStyleCategory } from "../blog-personal-lifestyle";
import { EducationCategory } from "../blog-personal-education";
import Link from "next/link";

//hàm xóa khoảng trắng
function removeSpace(str: string) {
  return str.replace(" ", "");
}

const BlogPersonalOverview = () => {
  return (
    <BlogOverViewScreenWrapper>
      <BlogOverViewScreenContent>
        {/*Phần tin tức mới nhất*/}
        <LatestNewsBLock />
        {/*Phần content market hiện tại chưa có nên để trống*/}
        <div className="overview-block market-pannel">
          <BlockBorderTop pt={"20px"}>
            <div className="flex flex-col justify-between h-[500px]">
              <h2 className="mb-5">Market </h2>
              <ReadMoreButton link={"/blog/personal"} title="All Market" state="market" />
            </div>
          </BlockBorderTop>
        </div>
        {/*Phần content resources */}
        <div className="overview-block resources-pannel">
          <BlockBorderTop pt={"20px"}>
            <h2 className="mb-5">Resources </h2>
            <div className="flex gap-4">
              <img
                alt="resource-content"
                src="https://s203.q4cdn.com/265353345/files/doc_downloads/factsheet/2024/TCPC-Fact-Sheet_December-2024_vF.png"
              />
              <div>
                <p>December 2024</p>
                <div className="flex items-center cursor-pointer gap-3 mt-3">
                  <div className="px-1 py-1 rounded-full border-2 border-gray-300 text-orange-600">
                    <IoDocumentText />
                  </div>
                  <p className="">Download PDF</p>
                </div>
              </div>
            </div>
            <div className="mt-9">
              <ReadMoreButton link={"/blog/personal"} title="ALL Resources" state="resources" />
            </div>
          </BlockBorderTop>
        </div>
        {/*Phần content business */}
        <div className="overview-block business-pannel">
          <BlockBorderTop pt={"20px"}>
            <h2 className="mb-5">Business </h2>
            <div className="flex gap-2 flex-col ">
              {BusinessCategory.subCategories.map((subCategory, index) => (
                <div key={index} className="business-item cursor-pointer">
                  <Link
                    className="cursor-pointer hover:underline capitalize"
                    href={`/blog/personal/${removeSpace(subCategory)}/`}
                  >
                    {subCategory}
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-9">
              <ReadMoreButton link={"/blog/personal"} title="All business" state="business" />
            </div>
          </BlockBorderTop>
        </div>
        {/*Phần content LifeStyle */}
        <div className="overview-block business-pannel">
          <BlockBorderTop pt={"20px"}>
            <h2 className="mb-5">LifeStyle </h2>
            <div className="grid grid-cols-2 grid-rows-5 gap-2">
              {LifeStyleCategory.subCategories.map((subCategory: string, index) => (
                <div key={index} className="business-item cursor-pointer">
                  <Link
                    className="cursor-pointer hover:underline capitalize"
                    href={`/blog/personal/${removeSpace(subCategory)}/`}
                  >
                    {subCategory}
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-9">
              <ReadMoreButton link={"/blog/personal"} title="All Lifestyle" state="lifestyle" />
            </div>
          </BlockBorderTop>
        </div>
        {/*Phần content Education */}
        <div className="overview-block education-pannel">
          <BlockBorderTop pt={"20px"}>
            <h2 className="mb-5">Education </h2>
            <div className="flex gap-2 flex-col ">
              {EducationCategory.subCategories.map((subCategory: string, index) => (
                <div key={index} className="business-item cursor-pointer">
                  <Link
                    className="cursor-pointer hover:underline capitalize"
                    href={`/blog/personal/${removeSpace(subCategory)}/`}
                  >
                    {subCategory}
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-9">
              <ReadMoreButton link={"/blog/personal"} title="All education" state="education" />
            </div>
          </BlockBorderTop>
        </div>
      </BlogOverViewScreenContent>
    </BlogOverViewScreenWrapper>
  );
};
export default BlogPersonalOverview;
