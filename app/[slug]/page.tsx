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
