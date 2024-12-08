import React, { useContext } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/AllContext";

const Show = () => {
  const navigate = useNavigate();
  const { blogs, deleteBlog } = useContext(DataContext);

  const handleUpdate = (index) => {
    navigate(`/update`, { state: { index } });
  };

  return (
    <>
      <div>
        <h1 className="head">Add Blogs</h1>
      </div>
      <div className="addblog">
        <Link to={"/create"}>
          <button> + Add Blog</button>
        </Link>
      </div>
      <div className="blogs">
        {blogs.map((data, index) => (
          <div className="perdata" key={index}>
            <h2>{data.title}</h2>
            <h2>{data.author}</h2>
            <p>{data.content}</p>
            <p>{data.city}</p>
            <p>{data.date}</p>
            <i
              onClick={() => handleUpdate(index)}
              className="fa-solid fa-pen-to-square updateIcon"
            ></i>
            <i
              onClick={() => deleteBlog(index)}
              className="fa-solid fa-trash-can deleteIcon"
            ></i>
          </div>
        ))}
      </div>
    </>
  );
};

export default Show;
