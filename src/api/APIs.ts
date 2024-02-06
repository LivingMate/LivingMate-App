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

// 함수들을 export 합니다.
export { fetchData, addData, deleteData };
