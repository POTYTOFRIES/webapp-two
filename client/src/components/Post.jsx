import React from "react";
import axios from "axios";
import Ratings from "./Ratings";


const Post = ({isVisible, onClose}) => {
  if ( !isVisible ) return null;

  const getUsers = async () => {
    const response = await axios.get("/all-users");
    console.log(response.data);
  };

  function handleImage() {

  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div>
        <button className="border-0 "
          onClick={() => {
            getUsers();
          }}
        >
          
        </button>
      </div>
      <div className="w-[800px] flex flex-col">
        <div class="heading text-center font-bold text-2xl m-5 text-gray-200">
          New Post
        </div>

        <div class="editor mx-auto rounded-xl bg-gray-100 w-10/12 flex flex-col text-gray-800 border border-gray-500 p-4 shadow-lg max-w-2xl">
          <input
            class="title bg-gray-200 border rounded-lg border-gray-300 p-2 mb-4 outline-none"
            spellcheck="false"
            placeholder="Title"
            type="text"
          />
          <textarea
            class="description bg-gray-200 sec p-3 h-60 border rounded-lg border-gray-300 outline-none"
            spellcheck="false"
            placeholder="Describe everything about this post here"
          ></textarea>

          <div class="icons flex text-gray-500 m-2">
            <Ratings />
            <svg
              class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>

            <div>
            <input 
                  type="file" 
                  name="add image" 
                  onChange={handleImage}
                 
                  />
             
                  
            </div>

            <div class="count ml-auto text-gray-400 text-xs font-semibold">
              0/300
            </div>
          </div>

          <div class="buttons flex">
            <div class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto" onClick={() => onClose()}>
              Cancel
            </div>
            <div class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
              Post
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
