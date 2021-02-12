import GoogleMapReact from 'google-map-react';
import './style.css';

const Map = () => {
   return (
      <div className="map">
         <GoogleMapReact

            bootstrapURLKeys={{ key: 'AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0E' }}
            center={{
               lat: -23.561684,
               lng: -464.625378
            }}
            defaultZoom={15}
         >

         </GoogleMapReact>
      </div>
   )
}

export default Map;
