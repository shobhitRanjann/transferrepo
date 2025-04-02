import { useEffect, useState } from "react";
import Card from "./card";

interface BlogImage {
  imageUrl: string;
  imageOrder: number;
}

interface Tag {
  id: string;
  name: string;
}

interface BlogData {
  id: string;
  blogTitle: string;
  slug: string;
  blogContent: string;
  blogImages: BlogImage[];
  tags: Tag[];
  status: string;
  createDate: Date;
  updateDate: Date;
  createdBy: string;
  viewCount: number;
  likeCount: number;
}

export default function Dashboard() {
  const blogPosts = [
    {
      cardid: '1',
      title: "Understanding Next.js",
      description: "Next.js is a powerful React framework for server-side rendering, static site generation, and more. wwwww Next.js is a powerful React framework for server-side rendering, static site generation, and more. wwwww Next.js is a powerful React framework for server-side rendering, static site generation, and more. wwwww..",
      image: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "March 22, 2025",

    },
    {
      cardid: '2',
      title: "Tailwind CSS for Rapid UI Development",
      description: "Tailwind CSS is a utility-first CSS framework that enables fast UI building with minimal custom styles...",
      image: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "March 20, 2025",

    },
    {
      cardid: '3',
      title: "Mastering React Hooks",
      description: "React Hooks provide a way to use state and other React features without writing a class component.wqqqqqqqq..",
      image: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "March 18, 2025",

    }
  ];

  const [responseData, setResponseData] = useState<BlogData[]>([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await fetch('/api/blogs', {
          headers: {
            Accept: "application/json",
            method: "GET",
          },
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
  
        const data = await response.json();
       // console.log(data)
       // setResponseData(data);
       setResponseData(Array.isArray(data.data) ? data.data : []);
        // Ensure data is an array before setting state
        // if (Array.isArray(data)) {
          
        // } else {
        //   console.error("API did not return an array:", data);
        //   setResponseData([]); // Set empty array to avoid `.map()` error
        // }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setResponseData([]); // Ensure responseData is always an array
      }
    };
  
    getBlogs();
  }, []); // Include empty dependency array to avoid infinite re-renders
  

  return (
<div className="w-full mx-auto flex flex-col gap-6 p-4">
{responseData.map((post, index) => <Card key={index} {...post} />)}
  {/* {Array.isArray(responseData) && responseData.length > 0 ? (
    
  ) : (
    <p>No blogs found</p> // Fallback UI
  )} */}
</div>
  );
}