import './App.css';
import api from './API/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Collage from './components/collage/Collage';
import Projects from './components/projects/Projects';
import AboutMe from './components/aboutme/AboutMe';
import Contact from './components/contact/Contact';

function App() {

  const [collage, setCollage] = useState([]);

  const getCollage = async () => {
    console.log("Fetching collage data...");
    try {
      var apiLink = ""
      const response = await api.get(apiLink);

      //console.log(response.data);

      setCollage(response.data);

    } catch(err) {
      console.error("Error fetching collage data:", err);
    }
    
  }

  useEffect(()=> {
    getCollage();
  },[])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element = {<Home images = {collage}/>} />
        </Route>
        <Route path="/Collage" element={<Collage images = {collage}/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/AboutMe" element={<AboutMe/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
