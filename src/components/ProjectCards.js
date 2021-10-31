import * as React from 'react';
import Card from '@material-ui/core/Card'


import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
root:{
maxWidth:300,
background: 'rgba(0,0,0,0.5)',
color:'#fff',
margin:'30px',
},
media:{
    height:200,
},
title:{
fontFamily:'Nunito',
fontWeight:'bold',
fontSize:'2rem',
},
});
export default function ProjectCards({project}) {
    const classes = useStyles();
  return (
    
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        image={project.imageUrl}
        
      />
      <CardContent>
        <Typography gutterBottom  className={classes.title}>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {project.description}
        <br />
        {project.price}
        </Typography>
      </CardContent>
     
    </Card>
    
  );
}