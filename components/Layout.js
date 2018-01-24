<<<<<<< HEAD
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Prices from './Prices';
import Contact from './Contact';
import Map from './Map';
import Footer from './Footer';

const Layout = () => (

    <div>
        <Navbar/>
        <Jumbotron/>
        <About/>
        <Services/>
        <Portfolio/>
        <Prices/>
        <Contact/>
        <Map
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
        <Footer/>              
    </div>
);

=======
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Prices from './Prices';
import Contact from './Contact';
import Map from './Map';
import Footer from './Footer';

const Layout = () => (

    <div>
        <Navbar/>
        <Jumbotron/>
        <About/>
        <Services/>
        <Portfolio/>
        <Prices/>
        <Contact/>
        <Map
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
        <Footer/>              
    </div>
);

>>>>>>> origin/master
export default Layout;