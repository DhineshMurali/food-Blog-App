import {Collapse, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import {AppBar} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useState,useEffect } from "react";
import { Link as Scroll} from 'react-scroll'
import ContactMailIcon from '@material-ui/icons/ContactMail';

const useStyles = makeStyles((theme)=>({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
    },
    appbar:{
        background: 'none',
    },
    appbarTitle:{
        flexGrow :'1',
        fontFamily : 'Nunito'
    },
    appbarWrapper:{
        width:'80%',
        margin:'0 auto',
    },
    container:{
        textAlign:'center',
        width:'70%',
        marginLeft:'220px',
        borderRadius:'50px',
        backgroundColor:'#000',
        color:'#fff',
        opacity:0.5,
    },
    icon:{
        color: '#000',
        fontSize:'2rem',
        opacity:0.5
    },
    goDown:{
        color: '#fff',
        fontSize:'4.5rem',
    },
   
    
}));
export default function Header(){

    const classes = useStyles();
    const [checked,setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, [])
    return <div className={classes.root} >
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}> 
            <h1 className={classes.appbarTitle}>Food Blog</h1>
            <Scroll to="visit-contact" smooth={true}>
            <IconButton>
                <ContactMailIcon className={classes.icon}/>
            </IconButton>
            </Scroll>
            </Toolbar>
        </AppBar>
        <Collapse in={checked} {...(checked? {timeout:3000}:{})} collapsedHeight={50}>
        <div className={classes.container}>
           
            <h3>
                Welcome to Puducherry Food-Blog Page 
            </h3>
            <h2>
                This is the only food-blog page for the restaurents located at best tourist place - Puducherry, where you can find all the famous restaurents and their respective price range.
                Happy Eating :)
            </h2>
            
            <Scroll to="project-to-visit" smooth={true}>
            <IconButton>
                <ExpandMoreIcon className={classes.goDown}></ExpandMoreIcon>
            </IconButton>
            </Scroll>
            </div> 
        
        </Collapse>
    </div>
}