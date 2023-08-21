import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';

const Item = props => {
    return (
      <Paper>
         <img src={props.item} alt="" />
      </Paper>
    )
};

const Gallery = ({list}) => {
  return (
      <main className="App-main">
        <Carousel animation='slide'
          indicatorContainerProps={{
            style: {
                marginTop: '5px',
            }
    
        }}>
            {
                list.map( (img, i) => <Item key={i} item={require('./asset/img/'+img)} /> )
            }
        </Carousel>
      </main>
  );
};


Gallery.defaultProps = {
    list : [
        {
            name : "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name : "Random Name #2",
            description: "Hello World!"
        }
    ]
}

Gallery.propTypes = {
    list: PropTypes.array  
}
export default Gallery;
