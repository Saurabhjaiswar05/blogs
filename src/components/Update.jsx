import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DataContext } from '../context/AllContext';

const Update = () => {
  const { state } = useLocation(); 
  const { blogs, updateBlog } = useContext(DataContext); 
  const { index } = state; 
  const [formData, setFormData] = useState(blogs[index]); 

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlog(index, formData); 
    navigate("/"); 
  };

  return (
    <div>
      <h1 className="head">Update Blog</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="subform">
          <label>Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="subform">
          <label>Author</label>
          <input
            name="author"
            value={formData.author}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="subform">
          <label>Content</label>
          <input
            name="content"
            value={formData.content}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="subform">
          <label>City</label>
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="subform">
          <label>Date</label>
          <input
            name="date"
            value={formData.date}
            onChange={handleChange}
            type="date"
          />
        </div>
        <button className="createbtn" type="submit">Update Blog</button>
      </form>
    </div>
  );
};

export default Update;
