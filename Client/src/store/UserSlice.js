import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
  'user/createUser',
  async (userdata) => {
    const req = await axios.post('https://66d189ca62816af9a4f40211.mockapi.io/users', userdata)
    const response = await req.data
    // const token = 'jx0SfMR3KB0Kz7Maa7ztJuCdqKaY51b80sbCaRUf9jXyUcCDKMyWWRaa16KF3mwy'
    // localStorage.setItem('user', JSON.stringify(response))
    return response;
  }
)

export const checkUser = createAsyncThunk(
  'user/checkUser',
  async (userdata) => {
    // const req = await axios.post('') // checkdata login ต้องส่ง data ไปตรวจสอบ
    const data = await JSON.parse(localStorage.getItem('user'))
    if (data) {
      if (data.email == userdata.email) {
        if (data.password == userdata.password) {
          const token = 'jx0SfMR3KB0Kz7Maa7ztJuCdqKaY51b80sbCaRUf9jXyUcCDKMyWWRaa16KF3mwy'
          localStorage.setItem('token', JSON.stringify(token))
          return alert('Login!!!')
        } else {
          return alert('Password is wrong!!!')
        }
      } else {
        return alert('Email is wrong!!')
      }
    }
  }
)

const UserSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.loading = false;
          if (action.type.includes("createUser")) {
            state.user = action.payload
            console.log(current(state))
          }
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.error.message
        }
      )
  }
})

export default UserSlice.reducer;