import React, { useCallback, useEffect, useState } from 'react'
import './Map.css'
import * as L from 'leaflet';
import {useSelector} from 'react-redux';

function Map() {

  const location = useSelector((state) => state);
  const [map, setMap] = useState(null);

 const mapRef = useCallback((mapContainer) => {

    if(mapContainer == null) return;

    mapContainer.innerHTML = '';

    
    const leafmap = new L.map(mapContainer).setView([-26.029744,28.0579063],14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
    }).addTo(leafmap);

    setMap(leafmap);

  },[]);

  useEffect(()=>{
    if(map !== null){
      map.setView([location.lat,location.lng]);
      const marker = L.marker([location.lat,location.lng],{
        icon: L.icon({iconUrl :'/images/icon-location.svg',iconSize: [46,56]})
      }).addTo(map)
    }
  },[map,location])

  return (
    <main className="MapContainer" ref={mapRef}>

    </main>
  )
}

export default Map

// function mapStateToProps(state, props) {

// }