import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects'
import Services from './components/Services'
import Aboutus from './components/Aboutus'
class App extends React.Component {

  


render() {
  return (
  <div> <Navbar></Navbar>

  <Home></Home>
  <Aboutus></Aboutus>
  <Services></Services>
  <Projects></Projects>
  <Contact></Contact>
  <Footer></Footer>

  </div>

  );
}}

export default App;
