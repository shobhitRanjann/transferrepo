"use client"
import { useParams } from "next/navigation"
import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const blogPosts = [
      {
            id: "1",
            title: "Understanding Next.js",
            content: `Next.js is a powerful React framework that enables server-side rendering, static site generation, and more... Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sit asperiores esse doloribus eligendi beatae architecto dolor praesentium ipsam, nam vitae modi sequi atque vero explicabo labore exercitationem vel accusantium. Tenetur reiciendis aspernatur repellat nostrum corrupti dolorum cumque, esse, quis fugit, aliquid facere. Nemo delectus nostrum fugiat veniam ipsa, ab tempora accusantium magnam quaerat consequatur ex, nulla aliquid eius quo earum illo iusto vero laborum corrupti quod fuga officiis blanditiis? Voluptatum dolorum, nesciunt maiores mollitia consequatur dolorem corporis quisquam sit repellat sint animi veniam magnam alias similique soluta numquam. Consectetur autem cupiditate aliquam dolore voluptatem suscipit nulla nesciunt et velit asperiores. Quod nisi quaerat illo cumque praesentium vel nostrum obcaecati itaque ullam est ex consequuntur sunt eius porro necessitatibus quis, incidunt sint. Nihil voluptatem nulla, iusto quas optio animi neque, qui ut sapiente reiciendis voluptatibus unde vero, porro distinctio ea labore laudantium magnam. Animi beatae eum quo eaque vel quibusdam veniam molestias corporis autem repellat aut excepturi vero eos, facere, nemo libero aperiam tenetur perspiciatis est voluptatem repellendus! Ipsa labore vel aperiam quisquam dolore fugiat aut maiores amet optio ex culpa in temporibus, ullam dolor iste adipisci id! Fuga placeat voluptates ab itaque in dolorem illum suscipit eum rem. Unde, animi. Quaerat incidunt esse dolorem. Exercitationem quaerat accusamus animi dolor ea itaque dolores alias? Suscipit dicta facere sequi nesciunt aliquid cupiditate aliquam, porro, inventore molestiae excepturi itaque autem, voluptas necessitatibus labore dolore. Fugit beatae, velit odit eveniet quis nam minima impedit, voluptatum tempore quasi quibusdam quidem. Deleniti accusamus autem, soluta illum porro eaque culpa nulla? Doloribus totam vel aliquid ad voluptatibus adipisci similique nesciunt illo eligendi reiciendis nobis fugit mollitia at expedita officiis, natus aspernatur repellat nulla! Amet natus ipsa dolorum cupiditate incidunt doloremque quaerat. Quos quod, quisquam distinctio neque nostrum labore placeat culpa obcaecati nam. Ut sint neque fugiat repellendus doloremque omnis officia commodi nulla dolor. Libero similique totam fugiat. Dicta animi expedita, assumenda excepturi odit nam id ipsam repudiandae voluptate aperiam labore? Voluptatibus sint maiores cumque corporis, magnam itaque, excepturi quos porro natus vitae adipisci eaque dolorum provident vero, consequuntur dicta recusandae libero? Animi nihil nobis maxime maiores doloremque ut doloribus labore consequatur odio debitis fugiat in neque, inventore accusamus itaque eos eius mollitia nulla accusantium impedit fuga molestiae. Maiores, neque nesciunt impedit exercitationem quas dignissimos eaque nisi repudiandae tempore atque labore qui suscipit sed nobis. Est eius temporibus quam ex iste eaque, eos nesciunt numquam aperiam ipsam nobis voluptates, facere error officia vero! Sint officiis cupiditate dignissimos accusamus explicabo. Vel error ullam rerum ipsum animi. Fuga, saepe cupiditate. Qui corporis eveniet mollitia ea cupiditate aut eum pariatur quis doloribus accusantium delectus veniam quidem impedit labore, veritatis voluptatem error magni rem reprehenderit iste excepturi animi obcaecati. Sed deserunt dignissimos dolore qui, numquam beatae dolorem. Sit quod sunt obcaecati impedit deleniti laboriosam et, sint nobis voluptatem id dicta praesentium quae unde recusandae eius soluta ipsum quaerat placeat sequi iure ullam labore explicabo ea ducimus? Aliquid, quae voluptatem! Temporibus, consequuntur debitis! Placeat, aliquid repellat. Totam est eum accusamus iusto quas!`,
            image: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "March 22, 2025",
      },
      {
            id: "2",
            title: "Tailwind CSS for Rapid UI Development",
            content: "Tailwind CSS is a utility-first framework that makes styling faster and more flexible...",
            image: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "March 20, 2025",
      }
];

export default function BlogDetails() {
      const params = useParams();
      const { blogid, blogtitle } = params;
      const blog = blogPosts.find((post) => post.id === blogid);
      const [theme, setTheme] = useState(
            typeof window !== "undefined" ? localStorage.getItem("theme") || "" : ""
          ); // 'day', 'night', or 'system'

      // Load theme preference on mount
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

      if (!blog) {
            return <p className="text-center text-red-500">Blog not found for {blogtitle}</p>;
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
                                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">{blog.title}</h1>
                                    <p className="text-gray-400">{blog.date}</p>

                                    {blog.image && (
                                          <div className="w-full h-64 relative my-4">
                                                <Image src={blog.image} alt={blog.title} layout="fill" objectFit="cover" className="rounded-lg"  priority={false} loading="lazy"/>
                                          </div>
                                    )}

                                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{blog.content}</p>
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