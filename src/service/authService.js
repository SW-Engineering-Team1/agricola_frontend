const API_URL = 'http://localhost:3000/user';

async function signIn(id, password) {
  const response = await fetch(`${API_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, password }),
  });

  const data = await response.json();

  if (!data.isSuccess) {
    throw new Error("로그인 실패");
  }

  return data;
}

async function getPayload(token) {
  const response = await fetch(`${API_URL}/payload`, {
    method: 'GET',
    headers: {
      'token': token
    }
  });

  return await response.json();
}

async function signUp(id, password) {
  const response = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, password }),
  });

  if (!response.ok) {
    throw new Error("회원가입 실패");
  }

  return response.status === 200;
}

export default {
  signIn,
  getPayload,
  signUp
};