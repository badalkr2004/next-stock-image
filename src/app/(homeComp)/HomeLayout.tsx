'use client'
import React from 'react'
import Header from './Header'
import HeroSec from './HeroSec'
import Collection from './Collection'
import MainContent from './MainContent'
import Footer from './Footer'
import ResponsiveHeader from './ResponsiveHeader'

const HomeLayout = () => {
  return (
    <>
      <Header/>
      {/* <Collection/> */}
      <HeroSec/>
      <MainContent/>
      <Footer/>
    </>
  )
}

export default HomeLayout
