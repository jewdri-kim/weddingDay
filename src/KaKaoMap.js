import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const { kakao } = window;


const KaKaoMap = (props) => {


  useEffect(()=>{
    const container = document.getElementById(props.seletor);
    const options = {
       center: new kakao.maps.LatLng(props.x, props.y),
       level: props.level
    }
    const map = new kakao.maps.Map(container, options);
   
    const imageSrc = require('./asset/img/marker.png');
    const imageSize = new kakao.maps.Size(40, 40);
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    const markerPosition  = new kakao.maps.LatLng(props.x, props.y); 
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage
    });
  
    marker.setMap(map);
  
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, []);

  return (  
    <div className="map-area" id={props.seletor}></div>
  );
};



KaKaoMap.defaultProps = {
    seletor : 'kakao-map',
    x : 33.450701,
    y : 126.570667,
    level : 3, 
}

KaKaoMap.propTypes = {
    seletor : PropTypes.string,
    option: PropTypes.object,
    level: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number
}
export default KaKaoMap;
