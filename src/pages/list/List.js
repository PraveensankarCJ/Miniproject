import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchitem/SearchItem";
import useFetch from "../../components/hooks/useFetch";
const List = () =>{

  const location = useLocation();
  const [destination,setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date)
  const [OpenDate,setOpenDate] = useState(false)
  const [Options,setOptions] = useState(location.state.Options)
  const [minPrice,setMinPrice] =  useState("")
  const [maxPrice,setMaxPrice] = useState("")

  const {data,loading,error,reFetch} = useFetch(`/hotels?city=${destination}&min=$(minPrice)&max=$(maxPrice)
  &adult=$(Options.adult)&children=$(Options.children)&room=$(Options.room)`)
 
  const handleSearch = ()=>{
    reFetch();
  };

  
  return(
    <div>
      <Navbar/>
      <Header type="list"/>
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="listTitle">Search</h1>
          <div className="listItem">
            <label>Destination</label>
            <input placeholder={destination} type="text" onChange={(e)=>setDestination(e.target.value)}/>
          </div>
          <div className="listItem">
          <label>Check-in Date</label>
          <span onClick={()=>setOpenDate(!OpenDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to 
              ${format(date[0].endDate,"MM/dd/yyyy")}`}
          </span> 
          { OpenDate && (
            <DateRange 
            onChange={(item) => setDate([item.selection])} 
            minDate={new Date()}
            ranges={date}
          />)}
          </div>
          <div className="listItem">
            <label>Options</label>
          <div className="listOptions">
          <div className="listOptionItem">
            <span className="listOptionText">
              Min Price <small>per night</small>
            </span>
            <input type="number" className="listOptionInput" value={minPrice} onChange={(e)=>setMinPrice(e.target.value)}/>
          </div>
          <div className="listOptionItem">
            <span className="listOptionText">
              Max Price <small>per night</small>
            </span>
            <input type="number" className="listOptionInput" value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)}/>
          </div>
          <div className="listOptionItem">
            <span className="listOptionText">
              Adult
            </span>
            <input type="number" min={1} className="listOptionInput" placeholder={Options.adult} onChange={(e) => setOptions(prev=>({...prev,children: e.target.value}))}/>
          </div>
          <div className="listOptionItem">
            <span className="listOptionText">
              Children
            </span>
            <input type="number" min={0} className="listOptionInput" placeholder={Options.children} onChange={(e) => setOptions(prev =>({...prev,children: e.target.value}))}/>
          </div>
          <div className="listOptionItem">
            <span className="listOptionText">
              Room 
            </span>
            <input type="number" min={1} className="listOptionInput" placeholder={Options.room} onChange={(e) => setOptions(prev =>({...prev,children: e.target.value}))}/>
          </div>
          </div>
          </div>
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="listResult">
          <SearchItem />
          
        </div>
       </div>
      </div>
    </div>
  )
}

export default List;