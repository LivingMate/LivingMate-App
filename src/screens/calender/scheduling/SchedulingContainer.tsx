import React, { useEffect, useState } from 'react';
import { SchedulingProps } from '../types';
import SchedulingView from './SchedulingView';

interface SchedulingContainerProps {
  schedulingData: SchedulingProps | undefined,
  setIsScheduling: () => void;
}

const SchedulingContainer: React.FC<SchedulingContainerProps> = ({setIsScheduling, schedulingData}) => {
  return (
    schedulingData && (
      <SchedulingView schedulingData={schedulingData} setIsScheduling={setIsScheduling}/> )
  );
};

export default SchedulingContainer;
