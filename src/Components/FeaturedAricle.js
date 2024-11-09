import React from 'react';
import './FeaturedArticle.css';

function FeaturedArticle({ imageUrls, titles, descriptions, authors, ratings }) {
  return (
    <div className="Feature">
      <div className="Container">
        {imageUrls.map((url, index) => (
          <div key={index} className="Article">
            <img src={url} alt={`Article ${index}`} className="Image" />
            <div className="Details">
              <h2 className="Title">{titles[index]}</h2>
              <p className="Description">{descriptions[index]}</p>
              <div className="Author">
                <p className="AuthorName">{authors[index]}</p>
                </div>
                <div className="Rating">
                <p className="Rating">{ratings[index]} / 5</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedArticle;
