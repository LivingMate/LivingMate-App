import React, { useState, useEffect } from 'react';
import { AdjustedResultItemProps } from '../types';
import AdjustedBudgetInNoticificationView from './AdjustedBudgetInNoticificationView';
import { useAuth } from '../../../auth/AuthContext';
import { getData } from '../../../api/APIs';
interface FinalData {
    LastCalculatedDate: string;
    AdjustedResult: AdjustedResultItemProps[];
}

interface AdjustedBudgetInNoticificationContainerProps {
    isUpdated?: boolean;
}

const AdjustedBudgetInNoticificationContainer: React.FC<AdjustedBudgetInNoticificationContainerProps> = ({isUpdated}) => {

    const [lastCalculatedDate, setLastCalculatedDate] = useState<string>('');
    const [adjustedBudgetData, setAdjustedBudgetData] = useState<AdjustedResultItemProps[]>([]);

    const { userToken } = useAuth();

    const getAdjustedBudgets = async () => {
        try {
            const path = '/budget/calc';
            const serverData = await getData<FinalData>(path, userToken);
            console.log('/budget/calc serverData', serverData);
            setLastCalculatedDate(serverData.LastCalculatedDate);
            setAdjustedBudgetData(serverData.AdjustedResult);
            console.log('/budget/calc sucessed');
        } catch (error) {
            if (error instanceof TypeError) {
            // TypeError 타입의 에러 처리
            console.error('budgets TypeError:', error);
            } else if (error instanceof ReferenceError) {
            // ReferenceError 타입의 에러 처리
            console.error('budgets ReferenceError:', error);
            } else {
            // 다른 모든 에러 처리
            console.error('budgets Unknown Error:', error);
            }
        }
    };

    useEffect(() => {
        getAdjustedBudgets();
    }, [lastCalculatedDate]);

    return (
        <AdjustedBudgetInNoticificationView lastCalculatedDate={lastCalculatedDate} adjustedResult={adjustedBudgetData}/>
    );
};


export default AdjustedBudgetInNoticificationContainer;

