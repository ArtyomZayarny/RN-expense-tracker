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

  const token = response.data.idToken;
  return token;
};
export const createUser = (email, password) => {
  return authenticate('signUp', email, password);
};

export const login = (email, password) => {
  return authenticate('signInWithPassword', email, password);
};
