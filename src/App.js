import './App.css';
import api from './API/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';

import Collage from './components/collage/Collage';
import Projects from './components/projects/Projects';
import AboutMe from './components/aboutme/AboutMe';
import Contact from './components/contact/Contact';
import NoPage from './components/nopage/NoPage';

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
      setCollage([{'src': 'https://i.imgur.com/s8YYowu.jpeg','title': 'Backend has failed us.','description': 'Need to get better provider. Please Refresh.'},{'src': 'https://i.imgur.com/9fK6vcW.jpeg', 'title': 'Backend has failed us. Please Refresh.','description': 'Need to get better provider for backend'}]);
      console.error("Error fetching collage data:", err);
      console.log('Need to get better provider for backend. Maybe refresh to see if the provider works');
    }
    
  }

  useEffect(()=> {
    getCollage();
  },[])

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element = {<Home images = {collage}/>} />
          <Route path="/Collage" element={<Collage images = {collage}/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/AboutMe" element={<AboutMe/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/*" element = {<NoPage/>} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
