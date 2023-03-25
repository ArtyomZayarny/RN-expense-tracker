import axios from 'axios';

const API_KEY = 'AIzaSyBsG9rd3NmZsuwG_szeSLpfelpBFIQUKnk';
const ROOT_ENDPOINT = 'https://identitytoolkit.googleapis.com/v1/accounts:';

export const authenticate = async (mode, email, password) => {
  const url = `${ROOT_ENDPOINT}${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  console.log(response.data);
};
export const createUser = async (email, password) => {
  await authenticate('signUp', email, password);
};

export const login = async (email, password) => {
  await authenticate('signInWithPassword', email, password);
};
