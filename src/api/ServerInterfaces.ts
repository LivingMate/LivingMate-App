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
    id: number,
    spendingName: string,
    spendings: number,
    userId?: string,
    userName?: string,
    userColor?: string,
    category: string,
    subCategory:string,
    createdAt:string,
    groupId: string,
}

interface ServerEvent {
    id: number; 
    userId?: string,
    userName?: string,
    userColor?: string,
    groupId: string; 
    title: string; 
    memo: string; 
    dateStart: string; 
    dateEnd: string; 
    term: string; 
    participants: string[];
}

interface ServerTodo {
    id: number,
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