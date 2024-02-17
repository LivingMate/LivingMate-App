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
    date: string;
}

type categoryType = '주거' | '식비' | '생활' | '기타';

interface CategoryProps { name: categoryType };

export {BudgetProps, CurrentExpenseViewProps, MateSpendingProps, categoryType,  CategoryProps}