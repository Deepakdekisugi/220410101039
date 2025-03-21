import axios from "axios";

const API_URL = "http://20.244.56.144/test/";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNTM0NDI3LCJpYXQiOjE3NDI1MzQxMjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjI5ZGY4M2I0LTMxMGEtNDJhYy1iZWMzLWY2NzZhMmEyOWZlYiIsInN1YiI6ImRrMzc2OTA3QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6IlNoaXZhbGlrIGNvbGxlZ2Ugb2YgZW5naW5lZXJpbmciLCJjbGllbnRJRCI6IjI5ZGY4M2I0LTMxMGEtNDJhYy1iZWMzLWY2NzZhMmEyOWZlYiIsImNsaWVudFNlY3JldCI6IkZHU2hsbm5oQllTb3hmV04iLCJvd25lck5hbWUiOiJEZWVwYWsgS3VtYXIiLCJvd25lckVtYWlsIjoiZGszNzY5MDdAZ21haWwuY29tIiwicm9sbE5vIjoiMjIwNDEwMTAxMDM5In0.j_TDIGM6jP_cwzGnKh5p6g09VZFKeKTxCeqpC9gUa90";

  const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
    },
});

export const fPosts = async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
};

export const fUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};
