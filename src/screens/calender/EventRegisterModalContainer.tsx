import React, { useState } from 'react';
import EventRegisterModalView from './EventRegisterModalView';

interface EventRegisterModalContainerProps {
  isVisible: boolean;
  onClose: () => void;
}

const EventRegisterModalContainer: React.FC<EventRegisterModalContainerProps> = ({ isVisible, onClose }) => {
  
  return (  
   <EventRegisterModalView mode={'create'} isVisible={isVisible} onClose={onClose}/>
  );
};

export default EventRegisterModalContainer;
