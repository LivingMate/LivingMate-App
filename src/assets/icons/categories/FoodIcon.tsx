// 네비게이션 홈아이콘 컴포넌트
import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
import IconProps from '../IconProps';

const FoodIcon: React.FC<IconProps> = ({ color }) => {

  return (
    <Svg width="45" height="55" viewBox="0 0 59 56" fill="none">
      <Path d="M14.5833 48.6611V52.5695C14.5833 53.343 14.8906 54.0849 15.4376 54.6319C15.9846 55.1788 16.7265 55.4861 17.5 55.4861H40.8333C41.6069 55.4861 42.3488 55.1788 42.8957 54.6319C43.4427 54.0849 43.75 53.343 43.75 52.5695V48.6611C48.1838 46.1013 51.8657 42.4195 54.4256 37.9857C56.9855 33.552 58.3332 28.5225 58.3333 23.4028C58.3333 22.6292 58.026 21.8874 57.4791 21.3404C56.9321 20.7934 56.1902 20.4861 55.4167 20.4861C55.3633 18.7003 54.8525 16.9581 53.9333 15.4261C53.0141 13.8941 51.7172 12.6236 50.1667 11.7361C49.7949 9.19553 48.5198 6.87407 46.5752 5.19733C44.6306 3.5206 42.1468 2.60094 39.5792 2.60696C38.5945 2.60526 37.614 2.73274 36.6625 2.98612C34.6549 1.06945 31.986 0 29.2104 0C26.4348 0 23.7659 1.06945 21.7583 2.98612C20.8069 2.73274 19.8263 2.60526 18.8417 2.60696C16.264 2.58684 13.7661 3.50012 11.8093 5.17813C9.85255 6.85615 8.56903 9.18554 8.19583 11.7361C6.63984 12.62 5.33711 13.8889 4.41266 15.4212C3.48822 16.9534 2.97307 18.6975 2.91667 20.4861C2.14312 20.4861 1.40125 20.7934 0.854272 21.3404C0.307291 21.8874 0 22.6292 0 23.4028C0.000130061 28.5225 1.34787 33.552 3.90778 37.9857C6.46768 42.4195 10.1495 46.1013 14.5833 48.6611ZM11.9875 16.5778L14.4083 15.8195L13.9417 13.1945C13.9493 12.5663 14.0806 11.9458 14.328 11.3683C14.5755 10.7909 14.9342 10.2679 15.3838 9.82911C15.8334 9.39034 16.365 9.04444 16.9483 8.81115C17.5316 8.57785 18.1552 8.46175 18.7833 8.46946C19.6257 8.46463 20.4565 8.66484 21.2042 9.05279L23.5667 10.3653L25.025 8.11946C25.4811 7.43969 26.0975 6.88263 26.8198 6.49744C27.5421 6.11225 28.3481 5.91076 29.1667 5.91076C29.9853 5.91076 30.7913 6.11225 31.5136 6.49744C32.2359 6.88263 32.8523 7.43969 33.3083 8.11946L34.7667 10.3653L37.1292 9.05279C37.8768 8.66484 38.7077 8.46463 39.55 8.46946C40.8115 8.45359 42.0289 8.93375 42.9399 9.80657C43.8509 10.6794 44.3827 11.8751 44.4208 13.1361L43.9542 15.6153L46.3458 16.432C47.2281 16.7081 48.0077 17.2416 48.5846 17.9639C49.1614 18.6863 49.5092 19.5646 49.5833 20.4861H8.75C8.82409 19.5646 9.17189 18.6863 9.74876 17.9639C10.3256 17.2416 11.1052 16.7081 11.9875 16.432V16.5778ZM52.325 26.3195C51.8384 30.138 50.4146 33.7769 48.1805 36.9117C45.9465 40.0465 42.9715 42.5799 39.5208 44.2861C39.0354 44.5307 38.628 44.9061 38.3445 45.3699C38.0611 45.8338 37.9129 46.3676 37.9167 46.9111V49.6528H20.4167V46.9111C20.4205 46.3676 20.2723 45.8338 19.9888 45.3699C19.7054 44.9061 19.2979 44.5307 18.8125 44.2861C15.3618 42.5799 12.3869 40.0465 10.1528 36.9117C7.91873 33.7769 6.49494 30.138 6.00833 26.3195H52.325Z" 
            fill={color}/>
    </Svg>
  );
};

export default FoodIcon;

