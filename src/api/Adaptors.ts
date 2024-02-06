import * as Interfaces from './Interfaces';
import * as ServerInterfaces from './ServerInterfaces';

const adaptPost = (item: ServerInterfaces.ServerPost): Interfaces.Post => {
    return {
        id: item.id,
        content: item.content,
        isPinned: item.pin,
        userId: item.userId, // 서버의 'user_id'를 클라이언트의 'userId'로 변환
        groupId: item.groupId,
        date: item.createdAt.substring(0,10),
    };
};

const adaptBudget = (item: ServerInterfaces.ServerBudget): Interfaces.Budget => {
    return {
        id: item.id,
        content: item.spendingName,
        amount: item.spendings,
        userId: item.userId,
        category: item.category,
        subCategory: item.subCategory,
        date: item.createdAt.substring(0,10),  
    };
};
  
export {adaptBudget, adaptPost};