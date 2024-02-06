//ServerInterfaces

interface ServerPost {
    id: number,
    content: string,
    pin: boolean,
    userId: string,
    groupId: string,
    createdAt: string,
}

interface ServerBudget {
    id: number,
    spendingName: string,
    spendings: number,
    userId: string,
    category: string,
    subCategory:string,
    createdAt:string,
}

export {ServerPost, ServerBudget};