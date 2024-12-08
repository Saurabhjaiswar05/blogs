import React, { createContext, useState } from 'react';

const DataContext = createContext();

const AllContext = ({ children }) => {
  
  const [blogs, setBlogs] = useState(JSON.parse(localStorage.getItem("blogs")) || []);

 
  const addBlog = (newBlog) => {
    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  
  const updateBlog = (index, updatedBlog) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index] = updatedBlog;
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  
  const deleteBlog = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  return (
    <DataContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </DataContext.Provider>
  );
};

export default AllContext;
export { DataContext };
