import { createSlice } from "@reduxjs/toolkit";


const initialBooks = {
  books: [
    { id: 1, title: "I am Imran", author: "Imran" },
    { id: 2, title: "I am Julius", author: "Julius" },
    { id: 3, title: "I am Ranas", author: "Ranas" },
  ],
};


export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
  },
});

export const { showBooks } = bookSlice.actions;
export default bookSlice.reducer;