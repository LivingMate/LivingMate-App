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
interface SchedulingProps {
  id: number,
  groupId: string,
  title: string,
  dates: string[];
  startTime: string,
  endTime: string,
}

type modeType = 'create' | 'edit';

export {AgendaItemProps, MarkedDateProps, EventProps, modeType, SchedulingProps}