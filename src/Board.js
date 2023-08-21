import React from 'react';
import PropTypes from 'prop-types';
import Feed from './Feed';


function Board(props) {
  return (
    props.list.map(item =><Feed img={item.img} title={item.title} 
                                subTitle={item.subTitle} imgList={item.imgList} 
                                description={item.description}
                                key={item.id}
                          ></Feed>)
  );
}

Board.defaultProps = {
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

Board.propTypes = {
    list: PropTypes.array  
}

export default Board;
