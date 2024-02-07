import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "images",
  initialState: {
    selfie: "",
    rear: "",
  },
  reducers: {
    saveSelfie: (state, action) => {
      console.log("selfie:", action.payload);
      return  void(state.selfie = action.payload)
    },
    saveRear: (state, action) => {
      console.log("rear:", action.payload);
      return  void(state.rear = action.payload)
    },
  }
});

export const { saveSelfie, saveRear } = slice.actions
export default slice.reducer
