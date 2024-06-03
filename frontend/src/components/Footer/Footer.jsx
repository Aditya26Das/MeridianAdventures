import React from 'react'
import { Link} from "react-router-dom";

function Footer() {
  return (
    <footer className='flex flex-row justify-around bg-[#252525]'>
      <ol className=' m-2 mt-5'>
        <div className='text-[#e9e0e0a4] text-xl font-semibold'>Links</div>
        <li className=' text-[#e9e0e0a4] underline my-2 font-medium'><Link to="/">Home</Link></li>
        <li className=' text-[#e9e0e0a4] underline my-2 font-medium'><Link to="/about">About</Link></li>
        <li className=' text-[#e9e0e0a4] underline my-2 font-medium'><Link to = "/contact">Contact</Link></li>
        <li className=' text-[#e9e0e0a4] underline my-2 font-medium'><Link to = "/login">Login</Link></li>
        <li className=' text-[#e9e0e0a4] underline my-2 font-medium'><Link to = "signin">Signin</Link></li>
      </ol>
      <ol className=' m-2 mt-5'>
        <div className='text-[#e9e0e0a4] text-xl font-semibold'>More</div>
        <li className=' text-[#e9e0e0a4] underline my-2 font-medium'><a href="https://github.com/Aditya26Das/MeridianAdventures">Github</a></li>
      </ol>
    </footer>
  )
}

export default Footer
