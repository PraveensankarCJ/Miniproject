import useFetch from "../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  
const {data,loading,error,} = useFetch("/hotels/countByCity?cities=Chennai,Kochin,Mumbai")
 
  
  return(
    <div className="featured">
  {loading ? (
    "Loading please wait"
  ) : (
  <>
  <div className="featuredItem">
    <img 
      src="https://cf.bstatic.com/xdata/images/hotel/square240/454940944.webp?k=60829dd68fd30c7bcf5093a037b133f257465b21cdc9b559baf296a398c2d438&o=" 
      alt=""
      className="featuredImg"
     />
     
    <div className="featuredTitles">
    <h1>Chennai</h1>
    <h2>{data[0]}properties</h2>
    </div>
    </div>
    <div className="featuredItem">
    <img 
      src="https://cf.bstatic.com/xdata/images/hotel/square240/157513205.webp?k=6d9b4fd88e00dc281e792fd955bb6bf1d770b4d71fe8667cfffce8149df5ae27&o="   
      alt=""
      className="featuredImg"
     />
     
    <div className="featuredTitles">
    <h1>Kochin</h1>
    <h2>{data[1]}properties</h2>
    </div>
    </div>
    <div className="featuredItem">
    <img 
      src="https://cf.bstatic.com/xdata/images/hotel/square240/269510985.webp?k=21a14931b7f8cb33c42bb9bda3b1c2e0e2bafaf3297abb1e568991c8e8b16bfd&o=" 
      alt=""
      className="featuredImg"
     />
     
    <div className="featuredTitles">
    <h1>Mumbai</h1>
    <h2>{data[2]}properties</h2>
    </div>
    </div></>)}
    </div>
   
  )
}

export default Featured;