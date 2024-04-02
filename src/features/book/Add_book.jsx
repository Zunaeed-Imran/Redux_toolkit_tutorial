import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Add_book = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const numberofBooks = useSelector(state => state.booksReducer.books.length);

  const handleSubmit = e => {
    e.preventDefault();
    const book = { id: numberofBooks + 1, title, author };
    dispatch(Add_book(book));
    Navigate("/show-books", { replace: true });
  };

  return (
    <>
      <h1>Add Book.</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="BookTitle"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default Add_book;
