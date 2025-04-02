import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect } from "react";

// { cardid, title, description, image, date }: { cardid: string, title: string, description: string, image: string, date: string }
export default function Card(props: any) {
  
  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-center gap-4 p-4 shadow-lg rounded-2xl border border-gray-200 bg-white dark:bg-gray-700">
        {props.blogImages[0].imageUrl && (
          <div className="relative w-full md:w-1/3 h-48 md:h-40 rounded-lg overflow-hidden">
            <Image src={`http://localhost:8080/api/blogs/${props.blogImages[0].imageUrl}`} alt={'test'} layout="fill" objectFit="cover" priority={false} loading="lazy" />
          </div>
        )}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">{props.blogTitle}</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {props.blogContent.length > 100 ? (
              <>
              <span dangerouslySetInnerHTML={{ __html: props.blogContent.slice(0, 100) }}/>
                
                <Link href={`/blog/${props.id}/${props.slug}`} className="text-blue-500 hover:underline"> Continue Reading...</Link>
              </>
            ) : (
              ''
            )}
          </p>
          <p className="text-gray-400 dark:text-gray-200 text-sm mt-2">{props.createDate}</p>
        </div>
      </div>
    </>
  )
}