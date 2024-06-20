import React from 'react';
import './searchitem.css'; // Ensure the correct path to your CSS file

const SearchItem = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=",
      name: "The ParkWood",
      dist: "500 m",
      desc: "free wifi",
      rating: "8.9",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square240/309927413.webp?k=1f39da921c46ec19ec4244334e013ea56627cdba04884e92187e2e43f41db253&o=",
      name: "Happy Homes",
      dist: "700 m",
      desc: "free wifi",
      rating: "8.8",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square240/328927479.webp?k=faa2ef0d17ca9b7b697e629b8a6d12b53a6fe18a24cc80f844e7a561892c2213&o=",
      name: "Lucky Crane villas",
      dist: "800 m",
      desc: "free wifi",
      rating: "8.7",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square240/344556317.webp?k=1268607af61ac185028748884505957ac426d76b1202840e1e94f4f87f889fe5&o=",
      name: "Views Lodge",
      dist: "850 m",
      desc: "free wifi",
      rating: "8.5",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square240/482467564.webp?k=3dbd7823baf2fc1c4de8e3f8b46f8711aef0823c42b381f183cf5b8f1559a751&o=",
      name: "Dunes Resort",
      dist: "1 km",
      desc: "free wifi",
      rating: "8.7",
    }
  ];

  const handleAvailabilityClick = (hotelName) => {
    window.alert(`The hotel "${hotelName}" is booked.`);
  };

  return (
    <div className="searchItem">
      {photos.map((photo, index) => (
        <div key={index} className="siItem">
          <img
            src={photo.src}
            alt={photo.name}
            className="siImg"
          />
          <div className="siDesc">
            <h1 className="siTitle">{photo.name}</h1>
            <span className="siDistance">{photo.dist} from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
              Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
              {photo.desc}
            </span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today
            </span>
            <button className="siCheckButton" onClick={() => handleAvailabilityClick(photo.name)}>See Availablity</button>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>Excellent</span>
              <button>{photo.rating}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchItem;
