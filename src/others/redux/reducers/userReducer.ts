import { createSlice } from '@reduxjs/toolkit';

interface State {
  user: any;
  authToken: any;
  userRole: string;
  loggedInUser: string;
  snackBar: {
    duration: 3000,
    message: '',
    type: 'error', //'success' || 'error' ||  'info',
  };
}

const initialState: State = {
  user: null,
  authToken: null,
  userRole: "",
  loggedInUser: "",
  snackBar: {
    duration: 3000,
    message: '',
    type: 'error', //'success' || 'error' ||  'info',
  },
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },
    setLoggedInUser: (state, action) => {
      console.log("payload", action.payload);
      state.loggedInUser = action.payload;
    },
    updateSnackBar: (state, action) => {
      state.snackBar.type = action.payload.type
      state.snackBar.message = action.payload.message
    },

  },
});
//will give the all user Redux data from store
export const getUserDetails = (state: any) => state.entities.user;
//will give the only user Roles Redux data from store
export const getUserRoles = (state: any) => state.entities.user.userRole;
//will give the only LogedInuser Roles Redux data from store
export const getLoggedInUser = (state: any) => state.entities.user.loggedInUser;

export const { setUser, setAuthToken, setUserRole, updateSnackBar, setLoggedInUser } = userReducer.actions;

export default userReducer.reducer;
