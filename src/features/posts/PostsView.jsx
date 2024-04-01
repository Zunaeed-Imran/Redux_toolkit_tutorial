import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';



const PostsView = () => {
  
  const {isLoading, posts, error} = useSelector((state) => state.posts);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [])

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {posts && posts.map((post) => {
        return <article key={post.id}>

          <h5>{post.title}</h5>
        </article>
      })}
    </>
  );
}

export default PostsView;
