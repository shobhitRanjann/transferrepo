import Card from "./card";

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

  return (
    <div className="w-full mx-auto flex flex-col gap-6 p-4">
      {blogPosts.map((post, index) => (
        <Card key={index} {...post} />
      ))}
    </div>
  );
}