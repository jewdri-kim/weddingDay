import React from 'react';
import PropTypes from 'prop-types';

import Gallery from './Gallery';
import styled from 'styled-components';

const Top = styled.header`
    
  display:flex;
  justify-content:space-between;
  background: ${props => props.color === 'blue' ? 'blue' : ''} ;
  padding:12px 0;
  .author{
    display:inline-flex;
  }
`;

const AuthorImg = styled.div`
  display:inline-flex;
  overflow:hidden;
  position:relative;
  width:32px;
  height:32px;
  border-radius: 100%;
  img{
    position:relative;
    background:#fff;
    border-radius: 100%;
  }

  ${props=>
    props.active && `        
      width:36px;height:36px;
      padding:2px;
      &:before{
        display:block;
        content:'';
        width:100%;
        height:100%;
        position:absolute;
        top:0;left:0;
        background: linear-gradient(to bottom, #FF9702, #f00);
        border-radius: 100%;
      }
    `
  }


`;
const Feed = props => {
  

 
  return (      
      <article className="feed-wrap">
        <Top> 
          <div className="author">
            <AuthorImg active={false}>
              <img src={require('./asset/img/'+props.img+'.png')} alt="" />
            </AuthorImg>
            <dl className="info-box">
              <dt> {props.title} </dt>
              <dd className="time">{props.subTitle}</dd>
            </dl>
          </div>
        </Top>
        <div className="feed-content">
          {
            props.imgList.length > 1 ?
              <Gallery list={props.imgList}></Gallery> :
              <img src={require('./asset/img/'+props.imgList[0])} alt="" />
           
          }
        </div>
        <div className="feed-description" dangerouslySetInnerHTML={{__html: props.description}}>
        </div>
      </article>
  );
};



Feed.defaultProps = {
  img : "invitation",
  title : "invitation",
  subTitle: "초대합니다",
  content: 'wedding_pic.png', 
  imgList : [ 'wedding_pic.png' ],
  description: '유진이와 지혜의 결혼식을 초대합니다. <br> 오셔서 많이 축하해주세요.'
}

Feed.propTypes = {
  img : PropTypes.string,
  title : PropTypes.string,
  subTitle : PropTypes.string,
  description : PropTypes.string,
  imgList : PropTypes.array,

}
export default Feed;
