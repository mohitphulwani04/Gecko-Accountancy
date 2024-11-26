import React from "react";

const BlogCard = ({ name, writerName, description, imageUrl, createdAt }) => {
  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <div className="bg-white rounded-md shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-xs text-gray-500 mt-1">
          {formattedDate} by <span className="text-blue-500">{writerName}</span>
        </p>
        <p className="text-sm text-gray-700 mt-3 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
