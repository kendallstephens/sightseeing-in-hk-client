import React from 'react';
import GoogleMapReact from 'google-map-react';

class SimpleMap extends React.Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
     
      render() {
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              {/* <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              /> */}
            </GoogleMapReact>
          </div>
        );
      }
    }
     
    export default SimpleMap;
    