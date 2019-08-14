import React from 'react';
import './App.css';

import{Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';

//import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
       <Layout>
         <Header className = "header-color" title="My Portfolio" scroll>
           <Navigation>
             <Link to="/">Resume</Link>
             <Link to="/about">About</Link>
             <Link to="/projects">Projects</Link>
             <Link to="/contact">Contact</Link>
           </Navigation>
         </Header>
         <Drawer title="My Portfolio">
           <Navigation>
           <Link to="/">Resume</Link>
             <Link to="/about">About</Link>
             <Link to="/projects">Projects</Link>
             <Link to="/contact">Contact</Link>
           </Navigation>
         </Drawer>
         <Content>
           <div className="page-content" />
           <Main/>
         </Content>
       </Layout>
    </div>
  );
}

export default App;



//Steps:

//npm install --save react-mdl

//past it to index.html within the head
//<link rel= "stylesheet" href="https://fonts.googleapi.com/icon?family=Material+Icons">

//import 'react-mdl/extra/material.css';
//import 'react-mdl/extra/material.js';
//add these lines to src/index.js file



//for more details and more layout  visit....

//https://tleunen.github.io/react-mdl/components/layout/

//this site is very helpful