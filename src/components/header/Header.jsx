import React, {useState} from 'react'
import IpDetails from '../ip_details/IpDetails';
import './Header.css'
import {setMarker} from '../store';
import {useDispatch} from 'react-redux';
function Header() {

    const [input, setInput] = useState('');
    const [data, setData] = useState({});
    const dispatch = useDispatch();

    const onSumbit = (e) => {
      e.preventDefault();
      console.log(input);
      let ip = input;
      let regEx = new RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/);

      console.log(regEx.test(ip));

     if(input == '') return;
     
     if(regEx.test(ip)){
      fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_tBOKSz1X0MWAEqRzym1grxlESUoOH&ipAddress=${ip}`).then(response => response.json()).then((ip_data)=> {
        console.log(ip_data);
        setData(ip_data);
        dispatch(setMarker(ip_data.location))
      }).catch((error) => {
        console.log(error);
      })
    }
    
  }
  
  return (
    <header className="Header">
        <h1 className="Header__title" id="Header__title">IP Address Tracker</h1>
        <form className="Header__form" onSubmit={onSumbit}>
            <input type="text" className="Header__search_input" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button className="Header__search_button"><img src="./images/icon-arrow.svg" alt="search" /></button>
        </form>

        <IpDetails data={data}/>

    </header>
  )
}

export default Header