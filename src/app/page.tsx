import { AuthorOutput, IResponse } from "@/@custom-types/graphql";
import { getAuthorGraphql, getBlogsHomePageGraphql } from "@/graphql";
import AdminDashBoardScreen from "@/screens/admin/dashboard";
import { first } from "lodash";
import { Suspense } from "react";

export const runtime = "edge";

const baseUrl = process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}` : "http://localhost:3000";

export async function generateMetadata({ params }: any) {
  const { authors } = (await getAuthorGraphql()) ?? {};
  const data = first(authors?.data) as IResponse<AuthorOutput>;
  const imageUrl = process.env.NEXT_GRAPHQL_API_ENDPOINT + data?.attributes.avatar.data.attributes.url;
  const pageTitle = "HomeEase - Nền Tảng Kết Nối Việc Làm Toàn Quốc";
  const pageDes =
    "HomeEase mang đến những cơ hội kết nối giữa các cô giúp việc và những chủ nhà hàng đầu, xây dựng sự tin cậy và chất lượng dịch vụ cao.";
  const keywords = ["HomeEase", "Nền tảng kết nối việc làm toàn quốc", "Chủ nhà", "Giúp việc"];

  return {
    title: {
      default: pageTitle,
      template: `%s`,
    },
    description: pageDes, //description
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: baseUrl,
    },
    keywords,
    openGraph: {
      url: baseUrl,
      type: "article", // Assuming it's a blog article, set the correct type
      title: pageTitle, // og:title
      description: pageDes, // og:description
      images: [
        {
          url: imageUrl,
          alt: pageTitle, // Alt text for the image
          width: 40, // Specify image width
          height: 40,
        },
      ],
    },

    twitter: {
      card: "summary_large_image", // Ensuring the image is displayed large in tweets
      title: pageTitle,
      description: pageDes,
      images: [imageUrl],
    },
    additionalMetaTags: [
      {
        name: "title",
        content: pageTitle,
      },
      {
        name: "image",
        content: imageUrl, // Equivalent to <meta name="image" content="...">
      },
    ],
  };
}

export default async function HomePage({
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  let blogs: any = [];
  try {
    const data = await getBlogsHomePageGraphql().catch((e) => console.log(e));
    blogs = data?.blogs;
  } catch (error) {
    console.log("Error fetching author data:", error);
  }

  return (
    <div>
      <Suspense>
        <AdminDashBoardScreen />
      </Suspense>
    </div>
  );
}
