import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'; 

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 46.629829,
      lng: 29.961041
    },
    zoom: 8
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div clasName="mapFull" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBoe_CNHgqKQtOvyg8RSwoGnJ7CBEoYRgA' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={46.929829}
            lng={29.961041}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;