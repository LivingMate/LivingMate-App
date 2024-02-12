interface EventProps {
    id: number,
    userId: string,
    groupId: string,
    title: string,
    memo: string,
    startTime: string,
    endTime: string,
    term: string,
    participants: string[],
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

const today = new Date().toISOString().split('T')[0];

export {AgendaItemProps, MarkedDateProps, EventProps, today}