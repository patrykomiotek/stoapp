import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface AuthState {
  isLoggedIn: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  isLoggedIn: false,
};

// class AuthMobx {
//   state = {
//     isLoggedIn: false
//   };

//   login() {
//     this.state.isLoggedIn = true;
//   }
//   logOut() {
//     this.state.isLoggedIn = false;
//   }

//   toggle() {
//     this.state.isLoggedIn = !this.state.isLoggedIn;
//   }
// }

export const authSlice = createSlice({
  name: 'auth', // { type: 'auth/logOut' }
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
    // toggle: (state, action: PayloadAction<number>) => {
    toggle: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

// dispatch(login())
export const { login, logOut, toggle } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.auth;

export const authReducer = authSlice.reducer;
