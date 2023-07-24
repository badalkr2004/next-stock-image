'use client'
import React from "react";



const Footer = () => {
  return (
    <>
      <footer className="w-full  px-4 sm:px-10 py-14 shadow">
        <div className="grid xs:grid-cols-1  xs:space-y-5 sm:grid-cols-2">

          <div className="w-full space-y-10">
            <div className="w-full space-y-2">
              <div>
                <a
                  href="#Logo"
                  className="font-sans font-bold text-2xl tracking-wider"
                >
                  PictureWorld  
                </a>
              </div>
              <p className="font-roboto font-normal text-sm">
                Around 2.3million-high quality photos and vidos are available
                here
              </p>
            </div>
            <div className="w-full h-full flex space-x-5">
              <div>
                <a href="https://www.facebook.com " className="hover:text-green transition-all">
                  <i className="bi bi-facebook text-lg"></i>
                </a>
              </div>
              <div>
                <a href="https://www.Instagram.com " className="hover:text-green transition-all">
                  <i className="bi bi-instagram text-lg"></i>
                </a>
              </div>
              <div>
                <a href="https://www.Linkdin.com " className="hover:text-green transition-all">
                  <i className="bi bi-linkedin text-lg"></i>
                </a>
              </div>
              <div>
                <a href="https://www.twitter.com " className="hover:text-green transition-all">
                  <i className="bi bi-twitter text-lg"></i>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-full flex flex-col justify-start items-start space-y-3">
              <h1 className="font-serif font-bold text-lg">Important link</h1>
              <div>
                <ul className="flex flex-col justify-start items-start ">
                  <li className="">
                    <a
                      href=""
                      className="font-serif font-normal text-lg tracking-wide"
                    >
                      Collection
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-serif font-normal text-lg tracking-wide"
                    >
                      NewPhotos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        <hr />
        </div>
        <div className="w-full  flex justify-start items-center py-5">
            <h3>Copyright &#169; all right reserved 2023-24</h3>
        </div>
      </footer>
    </>
  );
};

export default Footer;
