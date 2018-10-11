import React from 'react'
import NavigationUser from '../nav/NavigationUser'
import Header from '../home/Header'
import FirstContent from '../home/How'
import SecondContent from '../home/Popular'
import ThirdContent from '../home/Rank'
import FourthComponent from '../home/About'
import FifthComponent from '../home/Interest'
import Footer from '../home/Footer'
import FirstContentAfterLogin from '../home/HowAfterLogin'

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <NavigationUser />
      {/* <FirstContentAfterLogin /> */}
      <FirstContent />
      <SecondContent />
      <ThirdContent />
      <FourthComponent />
      <FifthComponent />
      <Footer />
    </div>
  )
}

export default HomeLayout
