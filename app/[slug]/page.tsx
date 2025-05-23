import { data } from "@/data";
import Image from "next/image";
import React from "react";

// ✅ تعريف نوع props
interface PageProps {
  params: {
    slug: string;
  };
}

// ✅ دالة تبحث عن العنصر المناسب بناءً على slug
function getPageData(slug: string) {
  return data.find((sample) => sample.slug === slug);
}

// ✅ دالة صفحة async حسب متطلبات Next.js
const Page = async ({ params }: PageProps) => {
  const dataImg = getPageData(params.slug);

  if (!dataImg) {
    return (
      <div className="p-10 text-center text-red-500">الصورة غير موجودة</div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <Image
        src={dataImg.url}
        alt={dataImg.text || "Image"}
        width={500}
        height={500}
        className="object-cover rounded-lg shadow-md"
      />
    </div>
  );
};

export default Page;
