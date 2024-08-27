interface BlogType {
    slug: string;
    content: string;
    title: string;
    description: string;
    imageUrl?: string;
  }
  
  const SampleBlogs: BlogType[] = [
    {
      slug: "mastering-react-components",
      title: "Mastering React Components",
      description: "An in-depth guide to understanding and creating React components.",
      content: `
  # Mastering React Components
  
  React components are the building blocks of any React application. In this blog, we will dive deep into:
  
  - **Functional vs. Class Components**
  - **Lifecycle Methods**
  - **State and Props**
  - **Hooks**
  
  By the end, you’ll have a solid understanding of how to create and manage components effectively.
      `
    },
    {
      slug: "tailwind-css-beginners",
      title: "Tailwind CSS for Beginners",
      description: "Learn how to quickly style your web applications using Tailwind CSS.",
      imageUrl: "https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: `
  # Tailwind CSS for Beginners
  
  Tailwind CSS is a utility-first CSS framework that allows you to style your web application directly in your HTML.
  
  ## Key Topics Covered:
  
  - Setting up Tailwind CSS
  - Using Utility Classes
  - Customizing Styles
  
  Tailwind CSS makes it easier to build responsive, custom designs without writing a lot of custom CSS.
      `
    },
    {
      slug: "javascript-closures",
      title: "Understanding JavaScript Closures",
      description: "A comprehensive explanation of closures in JavaScript with examples.",
      content: `
  # Understanding JavaScript Closures
  
  Closures are one of the most powerful features in JavaScript. This blog will cover:
  
  - **What are Closures?**
  - **How Closures Work**
  - **Practical Examples**
  
  Closures allow functions to access variables from an enclosing scope even after the outer function has closed.
      `
    },
    {
      slug: "power-of-flexbox",
      title: "The Power of Flexbox in CSS",
      description: "How to use Flexbox to create flexible and responsive layouts.",
      content: `
  # The Power of Flexbox in CSS
  
  Flexbox is a CSS layout module that makes it easier to design flexible and responsive layouts.
  
  ### Topics Include:
  
  - Flex Container and Items
  - Flexbox Properties and Alignment
  - Real-world Examples
  
  Mastering Flexbox will make your layouts more efficient and easier to manage.
      `
    },
    {
      slug: "introduction-to-nextjs",
      title: "Introduction to Next.js",
      description: "Get started with Next.js, a powerful React framework for building web applications.",
      content: `
  # Introduction to Next.js
  
  Next.js is a popular React framework that provides server-side rendering and many other features out of the box.
  
  ## This Guide Covers:
  
  - Setting up a Next.js Project
  - Pages and Routing
  - Server-side Rendering vs. Static Generation
  
  Next.js is an excellent choice for building fast and SEO-friendly React applications.
      `
    },
    {
      slug: "advanced-git-tips",
      title: "Advanced Git Tips and Tricks",
      description: "Improve your Git skills with these advanced tips and best practices.",
      content: `
  # Advanced Git Tips and Tricks
  
  Level up your Git skills with these advanced techniques:
  
  - **Interactive Rebase**
  - **Cherry-picking Commits**
  - **Git Hooks**
  
  Understanding these advanced features will help you manage your projects more effectively and maintain a cleaner commit history.
      `
    }
  ];

  export default SampleBlogs