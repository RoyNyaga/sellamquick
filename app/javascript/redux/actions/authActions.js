

const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';


const createUserSuccessAction = user => ({
  type: CREATE_USER_SUCCESS,
  user,
});

export {
  createUserSuccessAction,
  CREATE_USER_SUCCESS,
} 
