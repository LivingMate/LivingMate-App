interface CurrentExpenseViewProps {
    groupAvg: number;
    groupSum: number;
    mateSpendings: MateSpendingProps[];
}

interface MateSpendingProps {
    userId: string;
    userName: string;
    userColor: string;
    spendingNet: number;
    spendingsOnAvg: number;
}

interface BudgetProps {
    id: number;
    price: number;
    category: string;
    groupId: string;
    subCategory: string;
    content: string;
    userId?: string;
    userName?: string;
    userColor?: string;
    date: string;
}

type modeType = 'create' | 'edit';

interface CategoryProps { name: string };

export {BudgetProps, CurrentExpenseViewProps, MateSpendingProps, modeType, CategoryProps}