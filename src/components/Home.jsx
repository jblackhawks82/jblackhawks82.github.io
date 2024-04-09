

import Navbar from "./Navbar"
import Footer from "./Footer"
import Header from "./Header"
import AboutUs from "./AboutUs"
import ServiceMissions from "./ServiceMissions"
import Contactnumber from "./Contactnumber"

// import '../css/home.css'
// import '../main'


function Home() {
  return (
    <div className="home" >
      <div className="components">
           <Navbar />
            <Header />
            <Contactnumber />
            {/* <MissionStatement /> */}
            <AboutUs />
            <ServiceMissions />
            <Footer />
      </div>
             
    </div>
  )
}

export default Home
