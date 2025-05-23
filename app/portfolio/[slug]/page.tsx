import { data } from "@/data";
import Image from "next/image";
import React from "react";

function getPageData(slug: string) {
  return data.find((sample) => sample.slug === slug);
}

const Page = ({ params }: { params: { slug: string } }) => {
  const dataImg = getPageData(params.slug);

  if (!dataImg) return <div>Not found</div>;

  return (
    <div className="relative">
      <Image
        src={dataImg.url}
        alt="Image"
        className="w-[350px] h-[350px] object-cover"
      />
    </div>
  );
};

export default Page;
