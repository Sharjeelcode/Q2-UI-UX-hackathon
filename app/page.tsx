"use client";
import Hero from "./components/Hero";
import Image from "next/image";
import HomeSection6 from "./components/homeSection6";
import foodBanner from "./assets/food-banner.png";
import stats from "./assets/stats.webp";
import {
  heroBackgroundImg,
  aboutFont,
  check,
  egg,
  dish,
  sandwich,
  foodCatagory,
  save30,
  nugets,
  burger,
  fruits,
  sec4Image,
  sec4font,
  iconbox,
  experience,
  choose,
  sec6pic,
  s6i1,
  s6i2,
  s6i3,
  s6i4,
  s6i5,
  s6i6,
  s6i7,
  s6i8,
  chef,
  blogPost,
} from "@/app/assets/exportAssets";
import BlogCard from "./components/BlogCard";
import Testmonials from "./components/Testmonials";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Chefs from "./components/Chefs";
import {
  FaAward,
  FaPlay,
  FaSmile,
  FaUserTie,
  FaUtensils,
} from "react-icons/fa";
interface blogCard {
  name: string;
  releaseDate: string;
  image: string;
  _id: string;
}

const query = `*[_type == "Blogs"]{
  name,
  blog_short_description,
  image,
  releaseDate,
  _id
}`;

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      const blogdata = await client.fetch(query);
      try {
        setBlogs(blogdata);
      } catch (error) {
        console.log(error, "Blog card data not found");
      }
    };
    getBlogs();
  }, []);

  return (
    <>
      <div className="bg-[#0a0a0a] text-[#ededed]">
        <div
          className="w-full min-h-screen"
          style={{
            backgroundImage: `url(${heroBackgroundImg.src})`, // Optional: Replace with a background color if needed
            backgroundSize: "cover", // Makes the image cover the entire div
            backgroundPosition: "center", // Centers the background
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
            backgroundColor: "#f0f0f0", // Add a fallback background color
            opacity: "",
          }}
        >
          <div className="w-full min-h-screen bg-black opacity-85"></div>
          {/* Hero Content */}
          <div className="">
            <Hero />
          </div>
        </div>
        {/* About us section */}
        <div className="mx-4 md:mx-[10vw] my-[5vh] flex flex-wrap">
          <div className="flex gap-6  flex-wrap lg:flex-nowrap justify-center">
            <div className="flex flex-col gap-4 justify-center lg:w-[50%]">
              <Image src={aboutFont} alt="" />
              <h1 className=" text-2xl md:text-[35px] font-bold">
                <span className="text-[#FF9F0D]">We </span> Create the best{" "}
                <br /> foody product
              </h1>
              <p className="lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
                sit eu velit in consequat.
              </p>
              <div className="flex gap-4 items-center">
                <span>
                  <Image src={check} alt="" />
                </span>
                <p className="lg:text-lg">
                  {" "}
                  Lacus nisi, et ac dapibus sit eu velit in consequat.
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <span>
                  <Image src={check} alt="" />
                </span>
                <p className="lg:text-lg">
                  {" "}
                  Quisque diam pellentesque bibendum non dui volutpat fringilla{" "}
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <span>
                  <Image src={check} alt="" />
                </span>
                <p className="lg:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="hidden lg:flex">
                <Link
                  href={"/About"}
                  className="bg-[#FF9F0D] rounded-full text-xl px-12 py-4"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="w-auto lg:w-[50%] mx-4">
              <div>
                <Image src={egg} alt="" className="w-full mb-2" />
              </div>
              <div className="flex gap-2 w-[100%]">
                <Image src={dish} alt="" className="w-[50%] lg:w-[50%] " />
                <Image src={sandwich} alt="" className="w-[50%] lg:w-[50%]" />
              </div>
              <div className=" flex justify-center mt-4 lg:hidden">
                <button className="bg-[#FF9F0D] rounded-full text-xl px-12 py-4">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Food Catagory section */}
        <div className="mx-[10vw] my-[10vh]">
          <div className="flex flex-col items-center mb-3">
            <Image src={foodCatagory} alt="" className="items-center" />
            <h1 className="text-2xl md:text-[35px] font-bold">
              <span className="text-[#FF9F0D]">Ch</span>oose Food Iteam
            </h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image src={save30} alt="" className="w-auto sm:w-full mb-2" />
            <Image src={burger} alt="" className="w-auto sm:w-full mb-2" />
            <Image src={fruits} alt="" className="w-auto sm:w-full mb-2" />
            <Image src={nugets} alt="" className="w-auto sm:w-full mb-2" />
          </div>
        </div>
        {/* Why Choose us section */}
        <div className="mx-4 md:mx-[10vw] my-[5vh] flex flex-wrap">
          <div className="flex gap-6  flex-wrap lg:flex-nowrap justify-center">
            <div className="flex flex-col gap-4 justify-center lg:w-[50%]">
              <Image src={sec4font} alt="" />
              <h1 className=" text-2xl md:text-[35px] font-bold leading-10">
                <span className="text-[#FF9F0D]">Ex</span>ordinary taste <br />{" "}
                and Experienced
              </h1>
              <p className="lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
                sit eu velit in consequat.
              </p>
              <Image src={iconbox} alt="" />
              <Image src={experience} alt="" />
            </div>
            <div className="w-auto lg:w-[50%] mx-4">
              <Image src={sec4Image} alt="" className="w-full mb-2" />
            </div>
          </div>
        </div>
        {/* section */}
        <div className="w-full flex  sm:flex-row md:block">
          {/* Background Image */}

          {/* Overlay with Stats */}
          <div
            className=" flex flex-col justify-evenly sm:flex-row items-center  gap-8 px-6 py-6 w-full  lg:h-96 text-white"
            style={{
              backgroundImage: `url(${stats.src})`, // Replace with your image path
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Stat 1: Professional Chefs */}
            <div className="flex flex-col justify-center items-center text-center ">
              <FaUserTie className="text-4xl md:text-5xl mb-2 text-[#FF9F0D]" />
              <h3 className="text-lg md:text-xl font-bold">Chefs</h3>
              <p className="text-xl md:text-2xl">420</p>
            </div>

            {/* Stat 2: Items Of Food */}
            <div className="flex flex-col justify-center items-center ">
              <FaUtensils className="text-4xl md:text-5xl mb-2 text-[#FF9F0D]" />
              <h3 className="text-lg md:text-xl font-bold">Food Items</h3>
              <p className="text-xl md:text-2xl">320</p>
            </div>

            {/* Stat 3: Years Of Experience */}
            <div className="flex flex-col justify-center items-center  ">
              <FaAward className="text-4xl md:text-5xl mb-2 text-[#FF9F0D]" />
              <h3 className="text-lg md:text-xl font-bold">Experience</h3>
              <p className="text-xl md:text-2xl">30+</p>
            </div>

            {/* Stat 4: Happy Customers */}
            <div className="flex flex-col justify-center items-center  ">
              <FaSmile className="text-4xl md:text-5xl mb-2 text-[#FF9F0D]" />
              <h3 className="text-lg md:text-xl font-bold">Customers</h3>
              <p className="text-xl md:text-2xl">220</p>
            </div>
          </div>
        </div>
        {/* Choose & pick  section */}
        <div className="mx-4 md:mx-[10vw] my-[10vh]">
          <div className="flex flex-col items-center mb-3">
            <Image src={choose} alt="" className="items-center" />
            <h1 className="text-2xl md:text-[35px] font-bold">
              <span className="text-[#FF9F0D]">Fr</span>om Our Menu
            </h1>
          </div>
          <ul className="flex flex-wrap gap-4 item-center justify-center lg:gap-20">
            <li className="text-[#FF9F0D]">Breakfast</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Desert</li>
            <li>Drink</li>
            <li>Snack</li>
            <li>Suops</li>
          </ul>
          <div className="my-4 flex gap-4 flex-wrap md:flex-nowrap">
            <div className="lg:w-[45%] h-auto">
              <Image src={sec6pic} alt="" />
            </div>
            <div className="lg:w-[55%] ">
              <div className="flex flex-col md:flex-row ">
                <div className="flex flex-col gap-4 ">
                  <HomeSection6
                    src={s6i1}
                    title="Lettuce Leaf"
                    description="Lacus nisi, et ac dapibus velit in consequat."
                    price="12.5$"
                  />
                  <HomeSection6
                    src={s6i2}
                    title="Fresh Breakfast"
                    description="Lacus nisi, et ac dapibus velit in consequat."
                    price="12.5$"
                  />
                  <HomeSection6
                    src={s6i3}
                    title="Mild Butter"
                    description="Lacus nisi, et ac dapibus velit in consequat."
                    price="12.5$"
                  />
                  <HomeSection6
                    src={s6i4}
                    title="Fresh Bread"
                    description="Lacus nisi, et ac dapibus velit in consequat."
                    price="12.5$"
                  />
                </div>
                <div className="flex flex-col gap-4 mt-4 md:mt-0">
                  <HomeSection6
                    src={s6i5}
                    title="Glow Cheese"
                    description="Lacus nisi, et ac dapibus velit in consequat."
                    price="12.5$"
                  />
                  <HomeSection6
                    src={s6i6}
                    title="Italian Pizza"
                    description="Lacus nisi, et ac dapibus velit in consequat."
                    price="12.5$"
                  />
                  <HomeSection6
                    src={s6i7}
                    title="Sllice Beef"
                    description="Lacus nisi, et ac dapibus velit in consequat."
                    price="12.5$"
                  />
                  <HomeSection6
                    src={s6i8}
                    title="Mushaom Pizza"
                    description="Lacus nisi, et ac dapibus velit in consequat."
                    price="12.5$"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Meet Our Chefs section */}
        <div>
          <div className="mx-4 md:mx-[10vw] my-[5vh]">
            <div className="flex flex-col items-center mb-3">
              <Image src={chef} alt="" className="items-center" />
              <h1 className="text-2xl md:text-[35px] font-bold">
                <span className="text-[#FF9F0D]">Me</span>et Our Chef
              </h1>
            </div>
          </div>
          <Chefs />
          <div className="flex justify-center my-7 ">
            <Link
              href={"/Chefs"}
              className="rounded-full px-12 py-4 border-2 border-[#FF9F0D]"
            >
              See More
            </Link>
          </div>
        </div>
        {/* 8th section */}
        <Testmonials />
        {/* 9th section */}

        <div
          className="relative flex flex-col md:flex-row items-center justify-center  text-white p-6 h-full"
          style={{
            backgroundImage: `url(${foodBanner.src})`, // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0  z-0"></div>

          {/* Text Section */}
          <div className="relative z-10 md:w-1/2 space-y-6 text-right px-10 md:text-right md:ml-auto">
            <h3 className="text-lg font-semibold text-[#FF9F0D] font-great-vibes">
              Roasted Elite Plates
            </h3>
            <h1 className="text-3xl font-bold leading-snug">
              We Document Every Food
              <br /> Bean Process
              <span className="text-[#FF9F0D]">until it is saved</span>
            </h1>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum.
            </p>
            <div className="flex justify-end   gap-4">
              <Link
                href={"/About"}
                className="bg-[#FF9F0D] text-white px-6 py-3 rounded-md hover:bg-[#FF9F0D] transition"
              >
                Read More
              </Link>
              <button className="flex items-center gap-2 border border-[#FF9F0D] text-[#FF9F0D] px-6 py-3 rounded-md hover:bg-[#FF9F0D] hover:text-white transition">
                <FaPlay className="text-sm" />
                Play Video
              </button>
            </div>
          </div>
        </div>

        {/* 10th section */}
        <div className="mx-4 md:mx-[10vw] my-[5vh]">
          <div className="flex flex-col items-center mb-3">
            <Image src={blogPost} alt="" className="items-center" />
            <h1 className="text-2xl md:text-[35px] font-bold">
              <span className="text-[#FF9F0D]">La</span>test News & Blog
            </h1>
          </div>
        </div>
        {/* 11th section */}
        <div className="flex flex-col items-center justify-center gap-2 lg:flex-row ">
          {blogs.slice(0, 3).map((blog: blogCard) => {
            return (
              <BlogCard
                key={blog._id}
                id={blog._id}
                image={blog.image}
                name={blog.name}
                releaseDate={blog.releaseDate}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
