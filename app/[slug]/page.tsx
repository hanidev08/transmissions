import { data } from "@/data";
import Image from "next/image";
import React from "react";

function getPageData(slug: string) {
  return data.find((sample) => sample.slug === slug);
}

// النوع الصحيح للـ props
interface PageProps {
  params: {
    slug: string;
  };
}

// لا تكتب Promise هنا أبداً ❌
const Page = ({ params }: PageProps) => {
  const dataImg = getPageData(params.slug);

  if (!dataImg) return <div>Not found</div>;

  return (
    <div className="relative">
      <Image
        src={dataImg.url}
        alt="Image"
        width={350}
        height={350}
        className="object-cover"
      />
    </div>
  );
};

export default Page;
