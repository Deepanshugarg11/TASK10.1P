import React from 'react';
import './FeaturedTutorial.css';

function FeaturedTutorial({ imageUrls, titles, descriptions, authors, ratings }) {
  return (
    <div className="FeaturedT">
      <div className="Container">
        {imageUrls.map((url, index) => (
          <div key={index} className="Tutorial">
            <img src={url} alt={`Tutorial ${index}`} className="Image" />
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

export default FeaturedTutorial;
