import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';

import Header from './components/Header.js';
import Projects from './components/Projects';
import Contact from './components/Contact.js';

const useStyles = makeStyles((theme) => ({
  root:{
    minHeight:'100vh',
   // backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
   backgroundImage: `url("https://64.media.tumblr.com/ece2397f94b130ebfbcc9a7d2b36d422/tumblr_onxq178MiE1uc9x1zo1_1280.jpg")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function App(){
  const classes = useStyles();
  return(
    <div className= {classes.root}>
      
      <CssBaseline/>
      <Header />
      <Projects />
      <Contact />
      </div>
  );
}