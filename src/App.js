import './App.css';
import Prenavbar from './component/Prenavbar';
import Navbar from "./component/Navbar.js"
import Offers from "./component/Offers.js"
import Slider from "./component/Slider.js"
import StarProduct from "./component/StarProduct.js"
import HotAccessoriesMenu from "./component/HotAccessoriesMenu.js"
import HotAccessories from "./component/HotAccessories.js"
import ProductReviews from "./component/ProductReviews.js"
import Videos from "./component/Videos.js"
import Banner from "./component/Banner.js"
import Footer from "./component/Footer.js"
import NavOptions from "./component/NavOptions.js"


import starinfo from "./data/data.json"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import bannerinfo from "./data/data.json"
import Offerinfo from "./data/data.json"
import Heading from "./component/Heading.js"



const offer = Offerinfo.offers;
const banner = bannerinfo.banner;
const starProduct = starinfo.starProduct;
const music = starinfo.hotAccessories.music;
const musicCover = starinfo.hotAccessoriesCover.music;
function App() {
  return (
    <Router>
      <Prenavbar />
      <Navbar />
      <NavOptions miPhones={starinfo.miPhones} redmiPhones={starinfo.redmiPhones} tv={starinfo.tv} laptop={starinfo.laptop} fitnessAndLifeStyle={starinfo.fitnessAndLifeStyle} home={starinfo.home} audio={starinfo.audio}  accessories={starinfo.accessories} />
      <Slider start={banner.start} />
      <Offers offer={offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route exact path="/music" element={<HotAccessories music={music} musicCover={musicCover} />}></Route>
        <Route exact path="/smartDevices" element={<HotAccessories smartDevices={starinfo.hotAccessories.smartDevice} smartDevicesCover={starinfo.hotAccessoriesCover.smartDevice} />}></Route>
        <Route exact path="/home" element={<HotAccessories home={starinfo.hotAccessories.home} homeCover={starinfo.hotAccessoriesCover.home} />}></Route>
        <Route exact path="/lifeStyle" element={<HotAccessories lifeStyle={starinfo.hotAccessories.lifeStyle} lifeStyleCover={starinfo.hotAccessoriesCover.lifeStyle} />}></Route>
        <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={starinfo.hotAccessories.mobileAccessories} mobileAccessoriesCover={starinfo.hotAccessoriesCover.mobileAccessories} />}></Route>
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={starinfo.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={starinfo.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={starinfo.banner}/>
      <Footer footer={starinfo.footer}/>
    </Router>
  );
}

export default App;
