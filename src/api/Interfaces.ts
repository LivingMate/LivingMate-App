//ClientInterfaces

interface Post {
    id: number;
    content: string;
    isPinned: boolean;
    userId?: string;
    groupId: string;
    date: string;
}

interface Budget {
    id: number;
    content: string;
    amount: number;
    userId?: string;
    category: string;
    subCategory: string;
    date: string;
}

export {Post, Budget};