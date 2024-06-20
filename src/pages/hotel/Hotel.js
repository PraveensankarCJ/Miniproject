import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer"

const Hotel = () =>{
  const photos = [
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/261707388.jpg?k=15ccd09d838bf7f20853053e14cca116365b2ecdd0b86cf27f70275679976022&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/261707355.jpg?k=2f1a5ce712bafb735ecdbcfe71dca42e06d8c9f9a4a595c1adc0df6c1a75332e&o=&hp=1" 
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/261708859.jpg?k=9638ab3422a3621146ef7eae45cb2a272a00531dcf08f4115d744294ad25d282&o=&hp=1" 
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/261708750.jpg?k=f56c21c8d76968e7997e15d42f77b115f745d5d70a2a5502569c0758680883d4&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/261707742.jpg?k=a780887ad01159ad77a134b0e7db228335ad54e50e637a5029a89db149b773ae&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/261707384.jpg?k=e20beaf39a2016c4f719f68fa9668fd911dfa5fb90fd745c8747cfdc6e1e02d1&o=&hp=1"
    },
  ];
  return(
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContaimer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>No:18/A Ambattur Chennai</span>
          </div>
          <span className="hotelDistance">
            Excellent Location - 777m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a price over $143 at this property and book a free airport taxi 
          </span>
          <div className="hotelImages">
            {photos.map(photos=>(
              <div className="hotelImgWrapper">
                <img src={photos.src} className="hotelImg"/>
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of chennai</h1>
              <p className="hotelDesc">
                You're eligible for a Genius discount at Tower Street Apartments! 
                To save at this property, all you have to do is sign in.
                Offering inner courtyard views, Tower Street Apartments is an accommodation set in chennai,
                700 metres from Main Market Square and 700 metres from Cloth Hall. 
                It is situated 800 metres from Town Hall Tower and features a lift. 
                The property is 1.4 km from National Museum of chennai, and within 500 metres of the city centre.
              </p>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 4-night stay!</h1>
              <span>
                Located in the real heart of chennai, this property has an
                excellent score of 9.9!
              </span>
              <h2>
                <b>$431</b> (4 nights)
              </h2>
              <button>Reserve or Book now!</button>
            </div>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel;