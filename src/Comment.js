import React from 'react';
import PropTypes from 'prop-types';

const CommentList = props => {
    return (
      <ul className="comment-list">
         {
            props.list.map( (item)=> <li key={item.id}><strong>{item.name}</strong>{item.description}</li>)
         }
      </ul>
    )
};

const Comment = props => {
  return (
    <div className="comment-wrap">
    {
        props.list.length > 1  ?
        <CommentList list={props.list}/> :
        <div>
            <p>댓글을 남겨주세요</p>
        </div>
 
    }
    </div>
    
  );
}

Comment.defaultProps = {
    list : [
        {
            id : "Random Name #1",
            name: "쥬드리", 
            description: "우리 결혼식 축하해!! 왕창 더욱더 행복하자. 나랑 계속 운동해야해!!"
        },
        {
            id : "Random Name #2",
            name: "지나가는 사람", 
            description: "Hello World!"
        }
    ]
}

Comment.propTypes = {
    list: PropTypes.array  
}

export default Comment;
