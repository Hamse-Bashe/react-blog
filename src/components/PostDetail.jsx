import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router'
import { PostContext } from '../context/PostContext';

export const PostDetail = () => {

  const { postId } = useParams();
  const { posts } = useContext(PostContext);
  const currentId = parseInt(postId);

  const navigate = useNavigate();

  const selectedPost = posts.filter((post)=> (
    post.id == postId
  ))[0]
  // console.log(selectedPost)

  const handleNavigation = (direction) => {
    const newId = direction === 'next' ? currentId + 1 : currentId - 1;
    const newPost = posts.find((p) => p.id === newId);

    if (newPost) {
      navigate(`/posts/${newId}`, {
        state: { fromPostId: currentId },
      });
    }
  };

  return (
    <div className='bg-white p-8 my-4 shadow rounded'>
      <div className='space-y-2'>
        <p>{selectedPost.title}</p>
        <p>Content of post {selectedPost.id}</p>
        <div className='space-x-2'>
              <button onClick={()=> handleNavigation('prev')} className='bg-sky-500 text-white p-2 rounded'>Previous</button>
              <button onClick={()=> handleNavigation('next')} className='bg-sky-500 text-white p-2 rounded'>Next</button>
        </div>
      </div>
    </div>
  )
}


