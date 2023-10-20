import React from 'react'
import { Button  } from '@chakra-ui/react' ;
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <section className=' h-[30vh]'>
        <div className="text-center my-40">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to best blogging platform
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover the platform that gives you the freedom to create your blog exactly the ay you want
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to={'/register'} >
            <Button colorScheme='cyan'>
              Get started
            </Button>
              </Link>
              
          </div>
        </div>
      </section>
      <br />
      <div className="overflow-hidden bg-white py-24 sm:py-32  " id='money'>
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
            <div className="lg:pr-8 lg:pt-4  md:-ml-[70px]">
              <div className="lg:max-w-lg  lg:ml-20">
                <h2 className="text-base font-semibold leading-7  text-cyan-600">Create faster</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create blog and share it with your friends</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Find out which posts are a hit with Blogger’s built-in analytics. You’ll see where your audience is coming from and what they’re interested in.
                You can even connect your blog directly to Google Analytics for a more detailed look.
                </p>

              </div>
            </div>
            <img
              src="https://img.freepik.com/free-vector/businesswoman-office-with-e-mail-marketing-icons_24877-51249.jpg?size=626&ext=jpg&ga=GA1.1.629035055.1681884183&semt=ais"
              alt="Product screenshot"
              className="  w-[35rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[28rem] md:-ml-5 lg:-ml-[-100px]  transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-24 sm:py-32  " id='memory' >
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-moodboard-template_23-2150402754.jpg?w=740&t=st=1687330398~exp=1687330998~hmac=0c10684a019862eadaef5d5a29c51b69ca950a310a22ca25e1a0c2b99eeb431f"
              alt="Product screenshot"
              className="  w-[35rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[28rem] md:-ml-5 lg:-ml-[-10px]  transition duration-300 ease-in-out hover:scale-110"
            />
            <div className="lg:pr-8 lg:pt-4 md:-ml-[-30px]">
              <div className="lg:max-w-lg  lg:ml-20">
                <h2 className="text-base font-semibold leading-7  text-cyan-600">Create faster</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hang onto your memories</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Save the moments that matter. Blogger lets you safely store thousands of posts, photos, and more with Google.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
      
    </div>
    </div>
  )
}

export default Home
