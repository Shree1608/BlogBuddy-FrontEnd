import React from 'react'
import { FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <div className="gap-2 mt-28 md:m-12 md:mt-32 about-scroll m-12" >
    <h1 className="text-lg md:text-2xl font-semibold mb-3">
      Welcome to Blog Buddy!
      🚀  Elevate Your Blogging Experience
    </h1>
    <ul className="flex flex-col gap-3 md:gap-4 mb-3 text-sm md:text-xl font-medium">
      <li className="">
        <span className="text-cyan-700">◉</span> 
        <span className="font-bold">📝 Streamlined Blogging:</span>  BlogBuddy offers an intuitive and user-friendly platform to make your blogging journey delightful. Write and publish your content with ease.
      </li>
      <li>
        <span className="text-cyan-700">◉</span>
        <span className="font-bold">📊 Efficient Data Management: </span> BlogBuddy harnesses the power of Redux Toolkit for efficient state management and seamless data flow. Say goodbye to data-related hassles and focus on your content.
      </li>
     
      <li>
        <span className="text-cyan-700">◉</span>
        <span className="font-bold">🛠️ Streamlined Development: </span> BlogBuddy introduces custom hooks to enhance code readability, modularity, and maintainability. Simplify your development process and breeze through project.
      </li>
      <li>
        <span className="text-cyan-700">◉</span>
        <span className="font-bold">🌐 Robust Backend with Node.js: </span> Powering BlogBuddy's server-side operations, Node.js ensures a reliable and efficient foundation for blogging platform.

      </li>

      <li className="">
       
        <a
          className="flex w-fit items-center gap-2 text-blue-800 hover:font-bold transition-all"
          href="https://github.com/rakhikeshri/Foodie-react-app"
          target="_blank"
        >
          <p className="">
          </p>
            Source Code here!  <FaGithub />
          
        </a>
      </li>
    </ul>
  </div>
  )
}

export default About
