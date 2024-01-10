// TestData.tsx
// Feed.tsx 테스트할 데이터 이름: postsData

export const posts2Data = []

export const postsData = [
    // 예시:
    { 
        id: 0, 
        content: "집세: 매달 11일.\n우리 1002-256-ffffff(윤민지)", 
        isPinned: true, 
        userId: "001",
        date: "2023-12-20"
    },
    { 
        id: 1, 
        content: "청파메이트 규칙\n1. 재밌게 살자!\n2. 화장실청소 돌아가면서 하기", 
        isPinned: true, 
        userId: "002",
        date: "2023-12-21"
    },
    { 
        id: 2, 
        content: "얘들아 미안 나 오늘 늦게 들어가!", 
        isPinned: false, 
        userId: "003",
        date: "2023-12-22"
    },
    { 
        id: 3, 
        content: "연말 파티 같이 할 사람~!~!~!~!", 
        isPinned: false, 
        userId: "004",
        date: "2023-12-23"
    },
    { 
        id: 4, 
        content: "세제 구매 완료하였습니다!\n가계부에 지출내역 추가해둘게", 
        isPinned: false, 
        userId: "001",
        date: "2023-12-24"
    },
    { 
        id: 5, 
        content: "탈퇴한 사용자 블록 예시", 
        isPinned: true, 
        date: "2023-12-26"
    }
];

export const todosData = [
    { 
        id: 0,
        content: "대청소. 범위는 거실, 각자 방, 화장실, 계단, 부엌, 냉장고, 등등등 다 함",
        weekDays: '월,수,목,금,토,일',
        participants: ['01', '02', '03', '04','05']
      //  participants: [{userName: '김', userColor: 'black'}],
    },
    { 
        id: 1, 
        content: "설거지",
        weekDays: '주말',
        participants: ['01']
    },
    { 
        id: 2,
        content: "장보기",
        weekDays: '월',
        participants: ['01', '02', '03']
      //  participants: [{userName: '김', userColor: 'black'}, {userName: '이', userColor: 'red'}, {userName: '송', userColor: 'yellow'}],
    },
    { 
        id: 3,
        content: "회의",
        weekDays: '월,수,금',
        participants: ['01', '02']
       // participants: [{userName: '김', userColor: 'black'}, {userName: '이', userColor: 'red'}, {userName: '송', userColor: 'yellow'}, {userName: '이', userColor: 'red'}, {userName: '송', userColor: 'yellow'}],
    },
];

export default postsData;

/*
    { 
        id: 0, 
        content: "수요일 청소", 
    }
*/