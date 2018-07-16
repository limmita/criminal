import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'; 
import './SimpleMap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
library.add(faCrown)



const AnyReactComponent = ({ text }) => <div className="marker"><FontAwesomeIcon icon="crown" />{text}</div>;


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 46.629829,
      lng: 29.961041
    },
    zoom: 8,
  };

  render() {

    let vorZakon = this.props.expl


 var vorElement = vorZakon.map(function(item, i) {
    // console.log(item);
      return  item.lacLng.map((itemLaclng,iN) => {
        console.log(itemLaclng);
        var N = i + '';
         return <AnyReactComponent
            key = {N+iN}
            lat={itemLaclng[0]}
            lng={itemLaclng[1]}
            text={'вор'}
          />
        })  
    })
    
    return (
      <div className="mapFull" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBoe_CNHgqKQtOvyg8RSwoGnJ7CBEoYRgA' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        
        {vorElement}
          

        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

// <AnyReactComponent
//             lat={46.929829}
//             lng={29.961041}
//             text={'вор'}
//           />
//           <AnyReactComponent
//             lat={45.473493}
//             lng={29.243601}
//             text={'вор'}