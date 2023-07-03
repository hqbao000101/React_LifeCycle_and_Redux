import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducer/productReducer";

export const store = configureStore({
  // * reducer
  reducer: {
    hoTen: (state = "Hoang Kim", action) => {
      // ! arrow function nhận 2 tham số, state và action, khi bắn dispatch từ component lên redux cần phải có check xem nên lắng nghe dispatch nào bằng cách check type
      if (action.type === "setHoTen") {
        state = action.payload;
      }
      return state;
    },
    product: productReducer,
  },
});
