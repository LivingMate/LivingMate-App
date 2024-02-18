// 네비게이션 홈아이콘 컴포넌트
import React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
import IconProps from '../IconProps';

const EtcIcon: React.FC<IconProps> = ({ color }) => {

  return (
    <Svg width="45" height="55" viewBox="0 0 57 61" fill="none">
    <Path d="M15.125 19.5V15.125C15.125 11.644 16.5078 8.30564 18.9692 5.84422C21.4306 3.38281 24.769 2 28.25 2C31.731 2 35.0694 3.38281 37.5308 5.84422C39.9922 8.30564 41.375 11.644 41.375 15.125V19.5M4.1875 19.5C3.60734 19.5 3.05094 19.7305 2.6407 20.1407C2.23047 20.5509 2 21.1073 2 21.6875V51.2188C2 55.3531 5.52188 58.875 9.65625 58.875H46.8438C50.9781 58.875 54.5 55.524 54.5 51.3896V21.6875C54.5 21.1073 54.2695 20.5509 53.8593 20.1407C53.4491 19.7305 52.8927 19.5 52.3125 19.5H4.1875Z" 
          stroke={color} stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
    
  );
};

export default EtcIcon;


