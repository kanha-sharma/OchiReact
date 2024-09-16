import React, { useState } from "react";
import axios from "axios";

const AddPost = () => {
  // State to store the form data
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to submit the form data using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
      console.log("Post created:", response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="w-full h-[50vh] bg-zinc-700 text-black">
        <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" placeholder="title" name="title" onChange={handleChange} className="m-10" />
      </label>
      <br />
      <label>
        Body:
        <textarea placeholder="text" name="body"onChange={handleChange} className="ml-10"></textarea>
      </label>
      <br />
      <button type="submit" className="px-3 py-2 bg-blue-500 rounded-lg">Add Post</button>
    </form>
    </div>
  );
};

export default AddPost;