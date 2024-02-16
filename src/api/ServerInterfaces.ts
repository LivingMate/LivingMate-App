//ServerInterfaces
interface ServerPost {
    feedId: number,
    content: string,
    pinned: boolean,
    groupId: string,
    createdAt: string,
    userId?: string,
    userName?: string,
    userColor?: string,
}

interface ServerBudget {
    id: string,
    spendingName: string,
    spendings: number,
    userId: string,
    category: string,
    subCategory:string,
    createdAt:string,
    groupId: string,
}

interface ServerEvent {
    id: string; 
    userId: string; 
    groupId: string; 
    title: string; 
    memo: string; 
    dateStart: string; 
    dateEnd: string; 
    term: string; 
    participants: string[];
}

interface ServerTodo {
    id: string,
    title: string,
    groupId: string,
    daysOfWeek: string[],
    participants: ServerUser[],
}

interface ServerUser {
    id: string,
    name: string,
    color: string,
}

export {ServerPost, ServerBudget, ServerEvent, ServerTodo, ServerUser};