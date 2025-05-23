import { data } from "@/data";
import Image from "next/image";
import { notFound } from "next/navigation";

function getPageData(slug: string) {
  return data.find((item) => item.slug === slug);
}

// params هنا متوقع أن يكون Promise<{ slug: string }>
const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params; // انتظر params
  const slug = resolvedParams.slug;

  const dataImg = getPageData(slug);
  if (!dataImg) return notFound();

  return (
    <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Image
        src={dataImg.url}
        alt={dataImg.text || "Image"}
        className="object-cover w-[200px] h-[200px] md:w-[400px] lg:h-[400px] rounded-lg shadow-md"
      />
    </div>
  );
};

export default Page;
