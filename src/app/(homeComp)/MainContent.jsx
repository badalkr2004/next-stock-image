"use client"
import React from "react";
import PopularChoice from "./PopularChoice";
import MainBtnContentChoice from "./MainBtnContentChoice";
import ImgCard from "./ImgCard";

const MainContent = () => {
  const mainContentBtn = [
    {
        name : 'Home',
        icon : <i className="bi bi-house-door-fill"></i>
    },
    {
        name : 'Photos',
        icon : <i className="bi bi-camera-fill"></i>
    },
    {
        name : 'Video',
        icon : <i className="bi bi-camera-reels-fill"></i>
    },
    {
        name : 'Illustration',
        icon : <i className="bi bi-brush-fill"></i>
    },
  ]  
  const Popularchoice = [
    "All",
    "Nature",
    "Animal",
    "Wallpaper",
    "Mountain",
    "Person",
    "women",
    "children",
    "food",
    "game",
  ];

  const img = [
    {
      id: 1,
      url: 'https://source.unsplash.com/random/300×300' 
    },
    {
      id: 2,
      url: 'https://source.unsplash.com/random/300×300' 
    },
    {
      id: 3,
      url: 'https://source.unsplash.com/random/300×300'
    },
    {
      id: 4,
      url: 'https://source.unsplash.com/random/300×300'
    },
    {
      id: 5,
      url: 'https://source.unsplash.com/random/300×300'
    },
    {
      id: 6,
      url: 'https://source.unsplash.com/random/300×300'
    },
    {
      id: 7,
      url: 'https://source.unsplash.com/random/300×300'
    },
    {
      id: 8,
      url: 'https://source.unsplash.com/random/300×300'
    },
    {
      id: 9,
      url: 'https://source.unsplash.com/random/300×300'
    },
    {
      id: 10,
      url: 'https://source.unsplash.com/random/300×300'
    },
    {
      id: 11,
      url: 'https://source.unsplash.com/random/300×300'
    },

  ]
  return (
    <>
      <main className="w-full h-[3040px] max-h-[2800px] pb-44">
          <div className="w-full h-52 flex flex-col justify-center items-center">
            <div className=" w-full flex  items-center px-3 xs:justify-normal sm:px-10 md:justify-center space-x-7 py-12 overflow-x-scroll overflow-y-hidden content_btn_Scroller">
              {
                  mainContentBtn.map((item,index)=>{
                      return(
                          <MainBtnContentChoice key={index} name={item} icon={item}/>
                      )
                  })
              }
            </div>
            <div className="w-full flex  items-center px-3 sm:px-10 my-5 space-x-7 py-8  overflow-x-scroll  overflow-y-hidden content_btn_Scroller">
              { 
                Popularchoice.map((item, index)=> {
                return( 
                  <PopularChoice key={index} name={item} />
                  )
              })
              }
            </div>
          </div>
          <section className="w-full h-full py-8 px-3">
            <div className="w-full h-full relative">
              <div className="w-full h-full overflow-hidden xs:ResponsiveImageCollectionGrid3 sm:ResponsiveImageCollectionGrid2 md:ImageCollectionGrid3 lg:ResponsiveImageCollectionGrid1 xl:ImageCollectionGrid">
                <div className="w-full h-full">
                  <div className="w-full h-full overflow-hidden imageContainerCol1">
                        {
                          img.map((item,index)=>{
                            return index <=10 ? 
                            (
                              <ImgCard key={index} url={item}/>
                            ) 
                            : 
                            (
                                null
                            );
                          })
                        }
                  </div>
                </div>
                <div className="w-full h-full">
                  <div className="w-full h-full overflow-hidden imageContainerCol2">
                        {
                          img.map((item,index)=>{
                            return index <=6 ? 
                            (
                              <ImgCard key={index} url={item}/>
                            ) 
                            : 
                            (
                              null                                 
                            );
                          })
                        }
                  </div>
                </div>
                <div className="w-full h-full">
                  <div className="w-full h-full overflow-hidden imageContainerCol3">
                        {
                          img.map((item,index)=>{
                            return index <=7 ? 
                            (
                              <ImgCard key={index} url={item}/>
                            ) 
                            : 
                            (
                                null
                            );
                          })
                        }
                  </div>
                </div>
                <div className="w-full h-full">
                  <div className="w-full h-full overflow-hidden imageContainerCol4">
                        {
                          img.map((item,index)=>{
                            return(
                                <ImgCard key={index} url={item}/>
                            )
                          })
                        }
                  </div>
                </div>
              </div>
              <div className="absolute bottom-40 xs:bottom-0 sx:bottom-28 sm:bottom-0 md:bottom-40 lg:bottom-40 left-0 py-14 w-full h-60 flex justify-center items-center discover_gradient z-10 shadow-sm">
                <a href="" className="px-6 py-2 rounded-3xl  bg-white shadow-lg outline-none transition-all font-roboto font-bold  text-sm hover:border-[1.5px] ">
                  Discover more
                </a>
              </div>
            </div>  
          </section>
      </main>
    </>
  );
};

export default MainContent;
