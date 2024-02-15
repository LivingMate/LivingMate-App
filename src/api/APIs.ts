import ApiEndpoints from './ApiEndpoints';
/*
  http 상태코드: response.status
  sucess: 200
  client error: 400
  server error: 500
*/
// 모든 요청에 공통으로 사용될 인증 헤더를 설정하는 함수
const getAuthHeaders = () => {
  return {
    'Authorization': `Bearer your_access_token_here`, // 실제 애플리케이션에서는 유효한 토큰으로 대체
    'Content-Type': 'application/json',
  };
};

// GET 요청을 위한 함수
const fetchData = async <T>(path: string): Promise<T> => {
  try {
    const response = await fetch(`${ApiEndpoints.baseURL}${path}`, {
      headers: getAuthHeaders(),
    });
    console.log('GET fetch HTTP 상태 코드:', response.status);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json() as Promise<T>;
  } catch (error) {
    console.error('fetch Data error', error);
    throw error;
  }
};

// POST 요청을 위한 함수
const addData = async <T, R>(path: string, data: T): Promise<R> => {
  try {
    const response = await fetch(`${ApiEndpoints.baseURL}${path}`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });
    console.log('POST HTTP 상태 코드:', response.status);
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
      headers: getAuthHeaders(),
    });
    console.log('DELETE HTTP 상태 코드:', response.status);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json() as Promise<T>;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};

// UPDATE (PATCH) 요청을 위한 함수
const updateData = async <T, R>(path: string, data: T): Promise<R> => {
  try {
    const response = await fetch(`${ApiEndpoints.baseURL}${path}`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });
    console.log('PATCH HTTP 상태 코드:', response.status);
    if (!response.ok) {
      throw new Error(`Failed to update: ${response.status}`);
    }
    return await response.json() as R;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

// 함수들을 export 합니다.
export { fetchData, addData, deleteData, updateData };
