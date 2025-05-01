import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { fetchPostFromReddit } from "../services/api";

// Simulated Twitter Data (you would normally fetch this from Twitter's API)


const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      // Fetch Reddit posts
      const redditResponse = await fetchPostFromReddit();
      const redditPosts = redditResponse.data.data.children.map(post => ({
        id: post.data.id,
        content: post.data.title,
        author: post.data.author,
        url: `https://www.reddit.com${post.data.permalink}`,
        thumbnail: post.data.thumbnail,
        // selftext_html: post.data.selftext_html || "", // Fallback to empty string if selftext_html is not available
      }));

      console.log(redditPosts, "reddit posts");
      

      setPosts(redditPosts);
      setLoading(false);
    } catch (err) {
      setError("Error fetching posts");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSavePost = (postId) => {
    const postToSave = posts.find(post => post.id === postId);
    
    // Check if the post is already in the savedPosts list
    const isPostAlreadySaved = savedPosts.some(savedPost => savedPost.id === postId);

    if (!isPostAlreadySaved && postToSave) {
      
      setSavedPosts(prevSaved => [...prevSaved, postToSave]);
    } else {
      console.log("Post is already saved or doesn't exist.");
    }
  };

  const handleSharePost = (url) => {
    // Simulate sharing by copying the link
    navigator.clipboard.writeText(url).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  const handleReportPost = (postId) => {
    alert(`Reported post with ID: ${postId}`);
  };

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div class="w-screen h-screen flex  bg-[#F8F9FF]">
        <div class="sm:w-64 w-16 h-full bg-[#081A51] flex flex-col px-4 py-5">
        <div class="logo flex items-center mb-6">
          <div class="bg-[#017EFA] sm:mr-5 p-2.5 rounded-md text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h4 class="text-white hidden sm:block font-bold">Dash</h4>
        </div>
        <ul className="space-y-4 text-white w-full">
          <Link to="/dashboard">
            <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">
              Dashboard
            </li>
          </Link>
          <Link to="/admin">
            <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">
              Admin
            </li>
          </Link>
          <Link to="/feed">
            <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">
              Feed
            </li>
          </Link>
        </ul>
      </div>
      <div class="content-wrapper flex flex-col flex-1 h-full">
      <div class="navbar bg-white h-[90px] flex items-center px-9 shadow-md">
          <h2 class="font-bold text-[#1C1F37] text-3xl">Feed</h2>
          <nav class="ml-auto flex space-x-6 items-center">
            <div class="bg-[#F5F7FB] h-10 w-10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div class="bg-[#F5F7FB] h-10 w-10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <div class="user flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="font-bold text-base">Username</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-[#9A9A9A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>

              
            </div>
          </nav>
        </div>
        


    <div className="p-4 space-y-4">
      {/* <h1 className="text-2xl font-semibold mb-4">Feed</h1> */}
      <div className="overflow-auto h-200 space-y-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-sm text-gray-600">{post.content}</p>
            
            
            <img src={post.thumbnail} alt="" />
            <h2 className="text-lg font-semibold">{post.author}</h2>
            <div className="mt-2 flex space-x-4">
              <button
                onClick={() => handleSavePost(post.id)}
                className="text-blue-500 hover:underline"
              >
                Save
              </button>
              <button
                onClick={() => handleSharePost(post.url)}
                className="text-blue-500 hover:underline"
              >
                Share
              </button>
              <button
                onClick={() => handleReportPost(post.id)}
                className="text-red-500 hover:underline"
              >
                Report
              </button>
            </div>
            <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-2 block">
              View Post
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Feed;
