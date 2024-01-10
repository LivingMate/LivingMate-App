// TodoParticipants.tsx
import React from 'react';
import { View } from 'react-native';
import MateBox from '../../Components/MateBox';

interface TodoParticipantsListProps {
    participants: string[]
}

const TodoParticipants: React.FC<TodoParticipantsListProps> = ({participants}) => {

    return(
        <View 
            style={{
                display: 'flex', 
                flexWrap: 'wrap', 
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
            {participants.map((participants, index) => (
            <MateBox
                key={index}
                userId={participants[index]}
                textSize={10}
                showOnlyFirstLetter={true}
            />
            ))}
        </View>
    )
}

export default TodoParticipants;