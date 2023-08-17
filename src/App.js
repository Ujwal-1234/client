
import { FcGoogle, FcTreeStructure, FcPortraitMode, FcGlobe, FcCamcorderPro, FcCollaboration, FcAdvertising } from "react-icons/fc";
import { BsInstagram } from "react-icons/bs";
import { IoIosChatboxes } from "react-icons/io";
import logo from "./assets/logo/logo.png"
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import Typewriter from "./component/Typewriter";
import Contact from "./component/Contact";
function App() {
  const [contact, setContact] = useState(false)
  return (
    <>
      <header className=" flex scroll bg-slate-950 fixed w-full min-w-screen z-40 h-20">
        <div className="bg-white bg-opacity-10 text-white justify-center items-center flex w-1/4"> <i className=""><img className=" hover:cursor-pointer h-36 mt-4" src={logo} alt="logo" /></i> </div>
        <div className=" bg-white flex justify-center items-center w-1/2 right-0 bg-opacity-10">
            <a href="#home" className="text-white hover:underline p-2 hover:cursor-pointer" onClick={()=>setContact(false)}>Home</a>
            <a href="#services" className="text-white hover:underline p-2 hover:cursor-pointer" onClick={()=>setContact(false)}>Services</a>
            <a href="#blog" className="text-white hover:underline p-2 hover:cursor-pointer" onClick={()=>setContact(false)}>Blog</a>
            <a href="#about" className="text-white hover:underline p-2 hover:cursor-pointer" onClick={()=>setContact(false)}>About</a>
        </div>
        <div className="bg-white  bg-opacity-20 justify-center items-center flex w-1/4">
          <a className="text-white hover:underline p-2 hover:cursor-pointer" onClick={()=>{contact?setContact(false):setContact(true)}}>{contact?<a><AiFillCloseCircle className="inline text-5xl" /> Contact</a>:<a>Contact Us</a>}</a>
        </div>
      </header>
      <section id="home" className="bg-slate-600 flex w-full top-0 h-screen">
        <div className=" w-1/2 h-full bg-gradient-to-r from-slate-300">
          <div className=" mt-28 m-8 flex flex-wrap p-10 items-center justify-center from-slate-200 bg-gradient-to-r  bg-opacity-50  shadow-lg shadow-black leading-6 rounded-lg">
            <span className="block text-4xl w-full">We Help You to Get</span> 
            <span className="text-5xl mb-5 mt-8 justify-end block font-bold w-full">-more<Typewriter text={"  Customers"} delay={100}/></span>
            <span className="text-5xl mb-5 mt-8 justify-end block font-bold w-full">-more<Typewriter text={"  Sales"} delay={200}/></span>
            <span className="text-5xl mb-5 mt-8 justify-end block font-bold w-full">-more<Typewriter text={"  Money"} delay={500}/></span>
            <span className="text-5xl mb-5 mt-8 justify-end block font-bold w-full">-more<Typewriter text={"  Profit"} delay={200}/></span>
            <span className="text-5xl mb-5 mt-8 justify-end block font-bold w-full">-more<Typewriter text={"  Revenue"} delay={100}/></span>
            
          </div>
        </div>
        <div className="bg-white w-1/2 flex bg-opacity-20 h-full absolute right-0 z-0">
          <div className=" mt-28 m-8 p-10 transition duration-500 ease-in-out hover:to-slate-200 flex flex-wrap items-center justify-center from-slate-200 bg-gradient-to-r  bg-opacity-50  shadow-lg shadow-black w-full leading-6 rounded-lg  text-right">
            <span className="text-8xl mb-5 block font-bold w-full"></span>
            <span className="block text-4xl w-full"><img src={logo} className="" /></span>
          </div>
        </div>
      </section>
      <section id="services" className="bg-slate-800 flex items-center justify-center w-full top-0 h-screen">
        <div className="bg-white w-3/4 flex flex-wrap items-center justify-center bg-opacity-5 rounded-2xl shadow-2xl shadow-black p-4">
          <p className="w-80 m-3 p-5 text-white hover:text-black hover:bg-white hover:cursor-pointer rounded-full flex flex-wrap items-center text-center bg-gradient-to-b from-slate-500"><i className=" w-full flex items-center justify-center text-8xl p-2"><FcGoogle/></i><span className="  w-full">Google & Youtube Ads</span></p>
          <p className="w-80 m-3 p-5 text-white hover:text-black hover:bg-white hover:cursor-pointer rounded-full flex flex-wrap items-center text-center bg-gradient-to-b from-slate-500"><i className=" w-full flex items-center justify-center text-8xl p-2"><FcTreeStructure/></i><span className=" w-full">Influencer Marketing</span></p>
          <p className="w-80 m-3 p-5 text-white hover:text-black hover:bg-white hover:cursor-pointer rounded-full flex flex-wrap items-center text-center bg-gradient-to-b from-slate-500"><i className=" w-full flex items-center justify-center text-8xl p-2"><BsInstagram className=" text-pink-700"/></i><span className=" w-full">Facebook and Instagram Ads</span></p>
          <p className="w-80 m-3 p-5 text-white hover:text-black hover:bg-white hover:cursor-pointer rounded-full flex flex-wrap items-center text-center bg-gradient-to-b from-slate-500"><i className=" w-full flex items-center justify-center text-8xl p-2"><FcPortraitMode/></i><span className=" w-full">Creative and Poster Design</span></p>
          <p className="w-80 m-3 p-5 text-white hover:text-black hover:bg-white hover:cursor-pointer rounded-full flex flex-wrap items-center text-center bg-gradient-to-b from-slate-500"><i className=" w-full flex items-center justify-center text-8xl p-2"><IoIosChatboxes className="text-blue-300"/></i><span className=" w-full">Social Media Management</span></p>
          <p className="w-80 m-3 p-5 text-white hover:text-black hover:bg-white hover:cursor-pointer rounded-full flex flex-wrap items-center text-center bg-gradient-to-b from-slate-500"><i className=" w-full flex items-center justify-center text-8xl p-2"><FcGlobe/></i><span className=" w-full">Web Development & Landing Page</span></p>
          <p className="w-80 m-3 p-5 text-white hover:text-black hover:bg-white hover:cursor-pointer rounded-full flex flex-wrap items-center text-center bg-gradient-to-b from-slate-500"><i className=" w-full flex items-center justify-center text-8xl p-2"><FcCamcorderPro/></i><span className=" w-full">Video Editing</span></p>
          <p className="w-80 m-3 p-5 text-white hover:text-black hover:bg-white hover:cursor-pointer rounded-full flex flex-wrap items-center text-center bg-gradient-to-b from-slate-500"><i className=" w-full flex items-center justify-center text-8xl p-2"><FcAdvertising/></i><span className=" w-full">Press Release</span></p>
          <p className="w-80 m-3 p-5 text-white hover:text-black hover:bg-white hover:cursor-pointer rounded-full flex flex-wrap items-center text-center bg-gradient-to-b from-slate-500"><i className=" w-full flex items-center justify-center text-8xl p-2"><FcCollaboration/></i><span className=" w-full">Business Growth Consultation</span></p>
        </div>
      </section>
      <section id="blog" className="bg-slate-600 w-full top-0 h-screen flex  justify-center items-center">
        <div className=" w-1/2 bg-slate-500 h-3/4 bg-gradient-to-tr shadow-lg shadow-black from-slate-400">
          <span className="block text-6xl p-5">Heading Of Blog</span>
          <soan className="block p-5 text-2xl text-black">The reason we use Lorem Ipsum is simple. If we used real text, it would possibly distract from the DESIGN of a page (or indeed, might even be mistakenly inappropriate. Or if we used something like "Insert Text Here...",</soan>
        </div>
        <div className=" bg-gradient-to-bl from-slate-100 w-1/3 h-3/4 shadow-lg shadow-black rounded-r-lg">

        </div>
      </section>
      <section id="about" className="bg-slate-500 flex items-center flex-wrap justify-center w-full top-0 overflow-auto h-screen">
        <p className=" w-1/3 h-1/4 m-5 flex flex-wrap items-center justify-center "><span className=" w-1/4 text-5xl text-white shadow-xl hover:cursor-pointer hover:shadow-md shadow-transparrent block text-center">About</span><img src={logo} className=" shadow-lg shadow-black rounded-full hover:cursor-pointer hover:shadow-md bg-white h-52 w-52"/></p>
        <p className=" w-1/3 h-2/4 m-5 bg-white "></p>
        <p className=" w-1/3 h-2/4 m-5 bg-white "></p>
        <p className=" w-1/3 h-1/4 m-5 bg-white "></p>

      </section>
      {contact?<Contact/>:<></>}
      {/* <Home/> */}
    </>
  );
}

export default App;
