import { UserProps } from "../mypage/types";

interface EventProps {
    id: string,
    userId?: string,
    groupId?: string,
    title: string,
    memo: string,
    start: string,
    end: string,
    term: number,
    participants: UserProps[],
}

interface AgendaItemProps {
  [date: string]: {
    [id: string]: EventProps;
  }
}

interface MarkedDateProps {
  [date: string]: {
    marked: boolean; 
    selected?: boolean;
  };
}

type modeType = 'create' | 'edit';

export {AgendaItemProps, MarkedDateProps, EventProps, modeType}