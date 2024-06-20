import "./footer.css";

const Footer = () => {
  return(
   <div className="footer">
     <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Homes</li>
          <li className="fListItem">Apartments</li>
          <li className="fListItem">Resorts</li>
          <li className="fListItem">Villas</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Unique places to stay</li>
          <li className="fListItem">All Destinations</li>
          <li className="fListItem">All holiday Destinations</li>
          <li className="fListItem">Travel Articles</li>
          <li className="fListItem">Reviews</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Car Hire</li>
          <li className="fListItem">Flight Finder</li>
          <li className="fListItem">Restaurant Reservations</li>
          <li className="fListItem">Booking.com for travel Agents</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Terms & Conditions</li>
          <li className="fListItem">Partner Help</li>
          <li className="fListItem">Customer Service Help</li>
        </ul>
     </div>
     <div className="fText">Copyright @ 2024 WonderStays</div>
   </div>
  )
}

export default Footer;