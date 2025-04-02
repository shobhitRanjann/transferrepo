"use client"
import { useParams } from "next/navigation"
import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useState } from "react";




export default function BlogDetails() {
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
      const params = useParams();
      const { blogid, blogtitle } = params;
      const [responseData, setResponseData] = useState<BlogData>();
      const [theme, setTheme] = useState(
            typeof window !== "undefined" ? localStorage.getItem("theme") || "" : ""
      ); // 'day', 'night', or 'system'

      // Load theme preference on mount
      const getBlog = async () => {
            try {
                  const response = await fetch(`http://localhost:8080/api/blogs/${blogid}/${blogtitle}`, {
                        method: "GET",
                  });

                  if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                  }

                  const data = await response.json();
                  setResponseData(data)
            } catch (error) {
                  console.log("Error fetching blogs:", error);
            }
      }

      useEffect(() => {
            console.log(blogid)
            getBlog();
      }, [blogid, blogtitle])

      useEffect(() => {
            if (!theme) {
                  // If no saved theme, follow system preference
                  const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "night" : "day";
                  setTheme(systemPreference);
            }
      }, []);

      useEffect(() => {
            if (theme) {
                  if (theme === "day") {
                        document.documentElement.classList.remove("dark");
                  } else {
                        document.documentElement.classList.add("dark");
                  }
                  localStorage.setItem("theme", theme);
            }
      }, [theme]);

      const handleThemeToggle = () => {
            setTheme(theme === 'day' ? 'night' : 'day');
      };

      if (!responseData) {
            return <div className="flex items-center justify-center h-screen">
                  <div className="loader">
            <div className="cell d-0"></div>
            <div className="cell d-1"></div>
            <div className="cell d-2"></div>
          
            <div className="cell d-1"></div>
            <div className="cell d-2"></div>
            
            
            <div className="cell d-2"></div>
            <div className="cell d-3"></div>
            
            
            <div className="cell d-3"></div>
            <div className="cell d-4"></div>
            </div>
            
          </div>;
      }

      return (
            <div className="bg-gray-50 dark:bg-gray-700">
                  <div className="w-full flex flex-col items-center">
                        {/* Banner Section */}
                        <div className="w-full bg-blue-600 text-white text-center py-4 text-xl font-bold">
                              This is a banner - Add announcements or promotions here!
                        </div>

                        {/* Mobile Sidebar Top */}
                        <div className="md:hidden w-full bg-gray-200 dark:bg-gray-600 p-4 rounded-lg mt-4">
                              <p className="text-gray-600 dark:text-gray-400">Left Sidebar Content (Mobile View)</p>
                        </div>

                        <div className="max-w-screen-2xl w-full flex flex-col md:flex-row gap-6 p-6">
                              {/* Left Sidebar (For Future Ads or Widgets) */}
                              <aside className="hidden md:block w-1/4 bg-gray-100 dark:bg-gray-600 p-4 rounded-lg">
                                    <p className="text-gray-600 dark:text-gray-400">Left Sidebar Content</p>
                              </aside>

                              {/* Main Content */}
                              <main className="flex-1 bg-white dark:bg-gray-600 p-6 rounded-lg shadow-lg">
                                    <div className="flex justify-between items-center mb-4">
                                          <Link href="/">
                                                <p className="text-red-500 dark:text-blue-400 underline">
                                                      {'<< Home'}
                                                </p>
                                          </Link>
                                          {/* Theme Toggle */} <div className="px-4 py-2">
                                                <label className="ui-switch">
                                                      <input type="checkbox" />
                                                      <div className="slider" onClick={handleThemeToggle}>
                                                            <div className="circle" />
                                                      </div>
                                                </label>
                                          </div>
                                    </div>
                                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">{responseData.blogTitle}</h1>
                                    <p className="text-gray-400">{'date'}</p>

                                    {responseData.blogImages && (
                                          <div className="w-full h-64 relative my-4">
                                                <Image src={`http://localhost:8080/api/blogs/${responseData.blogImages[1].imageUrl}`} alt={''} layout="fill" objectFit="cover" className="rounded-lg" priority={false} loading="lazy" />
                                          </div>
                                    )}

                                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed" dangerouslySetInnerHTML={{ __html: responseData.blogContent }}></p>
                              </main>

                              {/* Right Sidebar (For Future Ads or Widgets) */}
                              <aside className="hidden md:block w-1/4 bg-gray-100 dark:bg-gray-600 p-4 rounded-lg">
                                    <p className="text-gray-600 dark:text-gray-400">Right Sidebar Content</p>
                              </aside>
                        </div>

                        {/* Mobile Sidebar Bottom */}
                        <div className="md:hidden w-full bg-gray-200 dark:bg-gray-600 p-4 rounded-lg mb-4">
                              <p className="text-gray-600 dark:text-gray-400">Right Sidebar Content (Mobile View)</p>
                        </div>
                  </div>
            </div>
      );
}