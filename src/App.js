import './App.css';
import {Button, Alert, Breadcrumb,Card,Form,Container, Row, Col, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Mynav from './components/Mynav'
import Imghead from './components/Imghead';
import Welcome from './components/Welcome';
import Welpic from './components/Welpic';
import Features from './components/Features'
import Imgwatch from './components/Imgwatch';
import Categories from './components/Categories';
import Aftercategsec from './components/Aftercategsec';
import Tsfn from './components/Tsfn';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">

<Header></Header>
<Mynav></Mynav>
<Imghead></Imghead>
<Welcome></Welcome>
<Welpic></Welpic>
<Features></Features>
<Imgwatch></Imgwatch>
<Categories></Categories>
<Aftercategsec></Aftercategsec>
<Tsfn></Tsfn>
<Blog></Blog>
    </div>
 
  );
}

export default App;
