// src/pages/components/BlogItem.jsx
// import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogItem = ({ link, thumbnail, date, title, description, tags }) => {
  return (
    <Link to={link} className="published-blog">
      <div className="published-blog-thumbnail">
        <img src={thumbnail} alt="" />
      </div>
      <div className="published-blog-details">
        <span>{date}</span>
        <b>{title}</b>
        <p>{description}</p>
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
};
BlogItem.propTypes = {
  link: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BlogItem;
// export default BlogItem;