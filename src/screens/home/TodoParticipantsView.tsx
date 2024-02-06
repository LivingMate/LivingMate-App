// TodoParticipantsView.tsx
import React from 'react';
import { View } from 'react-native';
import MateBox from '../../common/MateBox';

interface TodoParticipantsProps {
    participants: string[]
}

const TodoParticipantsView: React.FC<TodoParticipantsProps> = ({participants}) => {
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
                key={index.toString()}
                userId={participants[index]}
                textSize={10}
                showOnlyFirstLetter={true}
            />
            ))}
        </View>
    )
}

export default TodoParticipantsView;