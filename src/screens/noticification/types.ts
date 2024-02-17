interface AdjustedResultItemProps {
    plusUserName?: string,
    plusUserColor?: string,
    minusUserName: string;
    minusUserColor?: string; 
    change: number;
}

interface AdjustedBudgetInNoticificationViewProps {
    lastCalculatedDate: string;
    adjustedResult: AdjustedResultItemProps[]
}

export { AdjustedResultItemProps, AdjustedBudgetInNoticificationViewProps}