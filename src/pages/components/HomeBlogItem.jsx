// src/pages/components/BlogItem.jsx
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomeBlogItem = ({ link, thumbnail, authorImage, authorName, readTime, title }) => {
  return (
    <Link to={link} className="blog">
      <div className="blog_thumbnail">
        <img src={thumbnail} alt="blog thumbnail" />
      </div>
      <div className="blog_details">
        <div className="blog_insight">
          <div className="blog_writer_details">
            <div className="blog_writer_thumbnail">
              <img src={authorImage} alt="blog writer image" />
            </div>
            <span>{authorName}</span>
          </div>
          <span> • </span>
          <p>{readTime}</p>
        </div>
        <b>{title}</b>
      </div>
    </Link>
  );
};

HomeBlogItem.propTypes = {
  link: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HomeBlogItem;