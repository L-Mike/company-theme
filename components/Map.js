<<<<<<< HEAD
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withScriptjs(withGoogleMap((props) => (
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{
            lat: 41.878114,
            lng: -87.629798,        
        }}
        defaultOptions={{
            scrollwheel: false,
            draggable: false
        }}
        >
        {props.isMarkerShown && <Marker position={{lat: 41.878114, lng: -87.629798}} />}
    </GoogleMap>        
    ))
);

=======
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withScriptjs(withGoogleMap((props) => (
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{
            lat: 41.878114,
            lng: -87.629798,        
        }}
        defaultOptions={{
            scrollwheel: false,
            draggable: false
        }}
        >
        {props.isMarkerShown && <Marker position={{lat: 41.878114, lng: -87.629798}} />}
    </GoogleMap>        
    ))
);

>>>>>>> origin/master
export default Map;