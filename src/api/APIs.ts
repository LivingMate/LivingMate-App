import ApiEndpoints from './ApiEndpoints';

// GET 요청을 위한 함수
const fetchData = async <T>(path: string): Promise<T> => {
  try {
    console.log(`fetchData api path: ${ApiEndpoints.baseURL}${path}`);
    const response = await fetch(`${ApiEndpoints.baseURL}${path}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json() as Promise<T>;
  } catch (error) {
    console.error('fetch Data error', error);
    throw error;
  }
};

/* POST 요청을 위한 함수
  T: POST 할 데이터의 type
  R: return type
*/
const addData = async <T, R>(path: string, data: T): Promise<R> => {
  try {
    const response = await fetch(`${ApiEndpoints.baseURL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json() as Promise<R>;
  } catch (error) {
    console.error('Error creating data:', error);
    throw error;
  }
};

// DELETE 요청을 위한 함수
const deleteData = async <T>(path: string): Promise<T> => {
  try {
    const response = await fetch(`${ApiEndpoints.baseURL}${path}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json() as Promise<T>;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};

const updateData = async <T, R>(path: string, data: T): Promise<R> => {
  try {
    const response = await fetch(`${ApiEndpoints.baseURL}${path}`, {
      method: 'PATCH', // HTTP 메소드 지정
      headers: {
        'Content-Type': 'application/json', // 컨텐트 타입 지정
      },
      body: JSON.stringify(data), // 요청 본문에 JSON 데이터 포함
    });

    if (!response.ok) {
      // 응답 상태가 OK가 아닌 경우, 오류 처리
      throw new Error(`Failed to update: ${response.status}`);
    }

    // 성공적인 응답 처리
    return await response.json() as R; // 응답 데이터를 R 타입으로 파싱
  } catch (error) {
    // 네트워크 오류 또는 response.ok가 false일 때의 오류 처리
    console.error('Error updating data:', error);
    throw error; // 오류를 상위 호출자에게 전파
  }
};

// 함수들을 export 합니다.
export { fetchData, addData, deleteData, updateData};
