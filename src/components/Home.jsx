import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../context/PostContext";
import { NavLink, useLocation, useNavigate } from "react-router";

export const Home = () => {
  const { posts } = useContext(PostContext);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();

  const searchPost = query.get("search") || "";

  const [search, setSearch] = useState(searchPost);

  const navigate = useNavigate();

  useEffect(() => {
    if (search) {
      navigate(`?search=${search}`);
    } else {
      navigate("");
    }
  }, [search, navigate]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchPost.toLowerCase()),
  );

  return (
    <div className="bg-white p-8 my-4 shadow">
      <p className="mb-2">Blog Posts</p>
      <form className="w-1/2 space-y-2">
        <input
          type="text"
          className="p-2 w-full border border-gray-300 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-sky-500 text-white text-center p-2 w-full rounded">
          Search
        </button>
      </form>
      <div className="flex flex-col gap-2 my-2">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <NavLink
              to={`/posts/${post.id}`}
              className="text-sky-500 hover:underline"
              key={post.id}
            >
              {post.title}
            </NavLink>
          ))
        ) : (
          <p className="text-red-500 font-semibold mt-4">No posts found</p>
        )}
      </div>
    </div>
  );
};
