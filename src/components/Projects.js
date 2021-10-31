import { makeStyles } from '@material-ui/core'
import React from 'react'
import ProjectCards from './ProjectCards';
import projectsDone from '../static/projectsDone';


const styles = makeStyles((theme) => ({
root:{
    minheight:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}
}));
export default function Projects() {
    const classes = styles();
   
    return (
        <div>
      <div className={classes.root} id={"project-to-visit"}>
      <ProjectCards project={projectsDone[0]} /> 
      <ProjectCards project={projectsDone[1]} /> 
     
        
      </div>
      <div className={classes.root}>
      <ProjectCards project={projectsDone[2]} /> 
      <ProjectCards project={projectsDone[3]} /> 
      
      </div>
      <div className={classes.root}>
      <ProjectCards project={projectsDone[4]} /> 
      <ProjectCards project={projectsDone[5]} /> 
     
        
      </div>
      <div className={classes.root}>
      <ProjectCards project={projectsDone[6]} /> 
      <ProjectCards project={projectsDone[7]} /> 
      
      </div>
      </div>
      

      
    )
}


