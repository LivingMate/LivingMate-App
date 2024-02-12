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
    groupId: string,
}

interface ServerEvent {
    id: number; 
    userId: string; 
    groupId: string; 
    title: string; 
    memo: string; 
    dateStart: string; 
    dateEnd: string; 
    term: string; 
    participants: string[];
}

export {ServerPost, ServerBudget,ServerEvent};