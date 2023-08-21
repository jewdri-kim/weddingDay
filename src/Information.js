import React from 'react';
import PropTypes from 'prop-types';
import styles from './asset/scss/module/info.module.scss'

const copyClipBoard = (text) => {
    try{
        navigator.clipboard.writeText(text);
        alert('복사되었습니다.');
    }catch(error){
        alert('복사가 실패 되었습니다.');
    }
}

const Information = (props) => {
  return (
    <div className={styles.wrapper}>
        {
            props.list.map((infoItem) => <dl key={infoItem.id}>
                <dt>{infoItem.title}</dt>
                <dd>{infoItem.description}<button type="button" onClick={()=>copyClipBoard(infoItem.description)}>복사</button></dd>
            </dl>)       
        }
    </div>
    
  ); 
}


Information.defaultProps = {
    list : [
        {
            id : "info #1",
            title: "도로명 주소", 
            description: "서울 강남구 테헤란로13길 33"
        },
        {
            id : "info #2",
            title: "지번 주소", 
            description: "서울 강남구 역삼동 633-31"
        }
    ]
}

Information.propTypes = {
    list: PropTypes.array  
}

export default Information;
