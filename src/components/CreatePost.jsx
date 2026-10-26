import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const CreatePost = () => {
  const { posts, create } = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const postId = posts.length + 1;

  const handleSubmitt = (e) => {
    e.preventDefault();

    const postId = posts.length + 1;
    const newPost = {
      id: postId,
      title,
      content,
    };

    create(newPost);
    console.log(posts);
  };

  const onSubmit = (data) => {
    // console.log(data)
    create(data);
    reset();
    navigate('/');
    // console.log(posts)
  };

  const navigate = useNavigate();

  return (
    <div className="bg-white my-4 p-8 rounded shadow">
      <h2 className="mb-2">Create a New Post</h2>
      <form className="w-1/2" onSubmit={handleSubmit(onSubmit)}>
        {/* <input type="hidden" value={postId} {...register("id")} /> */}
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          className="p-2 border border-gray-300 rounded mb-2 w-1/2"
          {...register("title", { required: "Post Title is required" })}
        />
        <br />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
        <label htmlFor="content">Content: </label>
        <textarea
          id="content"
          className="p-2 border border-gray-300 rounded h-32 w-1/2"
          {...register("content", { required: "Post Content is required" })}
        ></textarea>
        <br />
        {errors.content && (
          <p className="text-red-500 text-sm">{errors.content.message}</p>
        )}
        <button
          type="submit"
          className="bg-sky-500 p-2 text-white rounded w-full"
        >
          Create a post
        </button>
      </form>
    </div>
  );
};
