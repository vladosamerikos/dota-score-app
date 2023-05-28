const isAuthenticatedCache =  sessionStorage.getItem('isAuthenticated')
const tokenCache = sessionStorage.getItem('token')
const nicknameCache = sessionStorage.getItem('nickname')
const logoCache = sessionStorage.getItem('logo')


const initialState = {
    isAuthenticated: isAuthenticatedCache,
    token: tokenCache,
    nickname: nicknameCache,
    logo: logoCache,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        console.log(state.isAuthenticated);
        return {
          ...state,
          isAuthenticated: true,
          token: action.payload.access,
          nickname: action.payload.nickname,
          logo: action.payload.logo,
          error: null,
        };

      case 'LOGIN_ERROR':
        return {
          ...state,
          isAuthenticated: false,
          token: null,
          nickname: null,
          error: action.payload,
        };
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          token: action.payload.access,
          nickname: action.payload.nickname,
          error: null,
        };
      case 'REGISTER_ERROR':
        return {
          ...state,
          isAuthenticated: false,
          token: null,
          nickname: null,
          error: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          token: null,
          nickname: null,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  