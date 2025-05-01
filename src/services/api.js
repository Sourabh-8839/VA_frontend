import axios from 'axios';

const axiosInstance = axios.create({
//   baseURL: 'https://chatapp-o0u2.onrender.com/chatapp',

  baseURL: 'http://localhost:8000/api/v1',
});

export const registerUser = async (data,config) => {
  try {
    let user = await axiosInstance.post('/user/registerUser', data, config);
    return user
  } catch (error) {
    console.log('Error while Calling AddUserApi ', error);
    return error.response.data;
  }
};

export const LoginUser = async (form, config) => {
  try {
    let user = await axiosInstance.post('/user/login', form, config);
    return user;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};


export const fetchPostFromReddit = async()=>{

  try {
    const redditResponse = await axios.get(`https://www.reddit.com/r/reactjs/new.json?limit=10`);

    return redditResponse
  } catch (error) {
    
    console.log(error);
    
  }
}
