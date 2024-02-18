// 네비게이션 홈아이콘 컴포넌트
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../../common/Colors';

const ThreeDotsIcon = () => {
  return (
      <Svg width="12" height="3" viewBox="0 0 12 3" fill="none">
      <Path d="M1.34927 0.197571C0.748768 0.197571 0.261963 0.652658 0.261963 1.21404C0.261963 1.77542 0.748768 2.2305 1.34927 2.2305C1.94978 2.2305 2.43658 1.77542 2.43658 1.21404C2.43658 0.652658 1.94978 0.197571 1.34927 0.197571Z" 
            fill="#B5B5B5"/>
      <Path d="M4.61121 1.21404C4.61121 0.652658 5.09801 0.197571 5.69852 0.197571C6.29902 0.197571 6.78583 0.652658 6.78583 1.21404C6.78583 1.77542 6.29902 2.2305 5.69852 2.2305C5.09801 2.2305 4.61121 1.77542 4.61121 1.21404Z" 
            fill="#B5B5B5"/>
      <Path d="M8.96045 1.21404C8.96045 0.652658 9.44725 0.197571 10.0478 0.197571C10.6483 0.197571 11.1351 0.652658 11.1351 1.21404C11.1351 1.77542 10.6483 2.2305 10.0478 2.2305C9.44725 2.2305 8.96045 1.77542 8.96045 1.21404Z" 
            fill="#B5B5B5"/>
      </Svg>
  );
};

export default ThreeDotsIcon;


