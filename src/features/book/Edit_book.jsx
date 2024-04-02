import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BooksSlice';


const Edit_book = () => {

  const loaction = useLocation();

  const dispatch = useDispatch();

  const navigate = useNavigate();


  const [id, setId] = useState(loaction.state.id);
  const [title, setTitle] = useState(loaction.state.title);
  const [author, setAuthor] = useState(loaction.state.author);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author }));
    navigate("/show-books", { replace: true });
  };

  return (

    <>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            required />
        </div>
        <div>
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e)=> setAuthor(e.target.value)}
            required />
        </div>
        <button type='submit'>Update Book</button>
      </form>
    </>
  )
}

export default Edit_book;
