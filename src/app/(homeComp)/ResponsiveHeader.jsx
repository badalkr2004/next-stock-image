'use client'
import React,{useState} from "react";

const ResponsiveHeader = () => {
  return (
    <>
      <div className="w-full h-[60vh] max-h-[100vh] bg-gray absolute top-0 left-0 z-30 overflow-y-scroll"> 
        <div className="w-full h-14 shadow flex justify-end items-center pr-2">
          <button >
            <i className="bi bi-x text-5xl text-white"></i>
          </button>
        </div>
        <div className="w-full h-full">
          <div className="w-full h-full py-8 overflow-y-scroll ResponsiveNavbarScroller">
            <ul className="w-full flex flex-col justify-start items-center px-10">
              <li className="w-full py-3 cursor-pointer ">
                <button className="w-full flex justify-between items-baseline">
                  <a
                    href=""
                    className="font-serif font-normal text-2xl tracking-wide text-white"
                  >
                    Collection
                  </a>
                  <i className="bi bi-chevron-down cursor-pointer text-white"></i>
                </button>
                <ul className="w-full flex flex-col justify-start items-start space-y-5 border-l-[1px] border-white ">
                  <li className="w-full px-3">
                    <h2 className="font-roboto font-bold text-lg text-white">
                      <a href="">Animal</a>
                    </h2>
                  </li>
                  <li className="w-full  px-3">
                    <h2 className="font-roboto font-bold text-lg text-white">
                      <a href="">Animal</a>
                    </h2>
                  </li>
                  <li className="w-full  px-3">
                    <h2 className="font-roboto font-bold text-lg text-white">
                      <a href="">Animal</a>
                    </h2>
                  </li>
                  <li className="w-full  px-3">
                    <h2 className="font-roboto font-bold text-lg text-white">
                      <a href="">Animal</a>
                    </h2>
                  </li>
                  <li className="w-full  px-3">
                    <h2 className="font-roboto font-bold text-lg text-white">
                      <a href="">Animal</a>
                    </h2>
                  </li>
                  <li className="w-full  px-3">
                    <h2 className="font-roboto font-bold text-lg text-white">
                      <a href="">Animal</a>
                    </h2>
                  </li>
                  <li className="w-full  px-3">
                    <h2 className="font-roboto font-bold text-lg text-white">
                      <a href="">Animal</a>
                    </h2>
                  </li>
                  <li className="w-full  px-3">
                    <h2 className="font-roboto font-bold text-lg text-white">
                      <a href="">Animal</a>
                    </h2>
                  </li>
                  <li className="w-full  px-3">
                    <h2 className="font-roboto font-bold text-lg text-white">
                      <a href="">Animal</a>
                    </h2>
                  </li>
                  <li className="w-full  px-3">
                    <h2 className="font-roboto font-bold text-lg text-white">
                      <a href="">Animal</a>
                    </h2>
                  </li>
                  <li className="w-full  px-3">
                    <h2 className="font-roboto font-bold text-lg text-white">
                      <a href="">Animal</a>
                    </h2>
                  </li>
                  <li className="w-full  px-3">
                    <h2 className="font-roboto font-bold text-lg text-white">
                      <a href="">Animal</a>
                    </h2>
                  </li>
                </ul>
              </li>
              <li className="w-full flex justify-start items-center py-4">
                <h2 className="">
                  <a
                    href=""
                    className="font-serif font-normal text-2xl tracking-wide text-white"
                  >
                    NewPhotos
                  </a>
                </h2>
              </li>
              <li className="w-full h-full py-3">
                <ul className="w-full flex flex-col space-y-5">
                  <li>
                    <button className="w-48 border-[1.5px] border-white rounded-md px-2 py-[0.18rem]">
                      <a
                        href=""
                        className="font-serif font-normal text-lg tracking-wide text-white"
                      >
                        BecomeMember
                      </a>
                    </button>
                  </li>
                  <li>
                    <button className=" border-none outline-none bg-green rounded-md px-3 py-1 hover:bg-darkGreen hover:transition-all">
                      <a
                        href=""
                        className="font-serif font-normal text-lg tracking-wide text-white"
                      >
                        Login
                      </a>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveHeader;
