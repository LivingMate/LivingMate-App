import { DateTableProps, TimeTableProps } from "../types";

// 30분 간격으로 TimeTable을 생성하는 함수
const createTimeTable = (startTime: string, endTime: string): TimeTableProps => {
    const timeTable: TimeTableProps = {};

    let currentTime = startTime;
    while (currentTime <= endTime) {
        timeTable[currentTime] = []; // 해당 시간에 대한 TimeSlotProps 배열 초기화
        // 현재 시간을 30분 후로 업데이트
        const [hours, minutes] = currentTime.split(':').map(Number);
        const nextMinutes = minutes + 30;
        const nextHours = hours + Math.floor(nextMinutes / 60);
        currentTime = `${String(nextHours).padStart(2, '0')}:${String(nextMinutes % 60).padStart(2, '0')}`;
    }

    return timeTable;
};

const createDateTables = (dates: string[], startTime: string, endTime: string): DateTableProps => {
    const dateTables: DateTableProps = {};

    dates.forEach(date => {
        const timeTable = createTimeTable(startTime, endTime);
        dateTables[date] = timeTable;
    });

    return dateTables;
};

// 사용자 수에 따른 색상을 미리 생성하여 Map으로 저장하는 함수
const createColorMap = (maxUsers: number, initialColor: string): Map<number, string> => {
    const colorMap = new Map<number, string>();
    const colorStep = 20; // 각 사용자 수마다 색상이 얼마나 진해질지에 대한 값

    // 초기 색상을 기준으로 색상을 계산하고 Map에 저장
    for (let i = 0; i <= maxUsers; i++) {
        const newColor = darkenColor(initialColor, i * colorStep); // 진해진 색상 계산
        colorMap.set(i, newColor); // Map에 색상 추가
    }

    return colorMap;
};

// 색상을 어둡게 만드는 함수
const darkenColor = (color: string, amount: number): string => {
    // RGB 값을 분리
    const [r, g, b] = color.match(/\w\w/g)?.map((hex) => parseInt(hex, 16)) || [0, 0, 0];
    // 색상을 어둡게 만들기 위해 각 채널 값을 조절
    const newR = Math.max(0, r - amount);
    const newG = Math.max(0, g - amount);
    const newB = Math.max(0, b - amount);
    // 새로운 RGB 값을 합쳐서 새로운 색상을 반환
    return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
};

// 예시: 초기 색상과 최대 사용자 수를 기반으로 색상 맵 생성
const maxUsers = 10; // 최대 사용자 수
const initialColor = '#407CBF'; // 초기 색상
const colorMap = createColorMap(maxUsers, initialColor);

// 예시: 사용자 수에 따른 색상 출력
for (let i = 0; i <= maxUsers; i++) {
   //console.log(`Color for ${i} users:`, colorMap.get(i)); // 각 사용자 수에 따른 색상 출력
}

//예를 들어, colorMap에서 key가 3에 해당하는 value를 가져오려면 다음과 같이 할 수 있습니다:
const colorForThreeUsers = colorMap.get(3);

export {createColorMap, createDateTables};

//배열 합치는거
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = array1.concat(array2);

//맵들을 배열로 바꾸고 그 배열들을 전부 합치는 거
const combineMaps = (...maps: Map<any, any>[]): any[] => {
    const result: any[] = [];
    for (const map of maps) {
        for (const value of map.values()) {
            result.push(value);
        }
    }
    return result;
};

// 예시
const map1 = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
]);
const map2 = new Map([
    ['key3', 'value3'],
    ['key4', 'value4']
]);

const combinedArray2 = combineMaps(map1, map2);
console.log(combinedArray);
