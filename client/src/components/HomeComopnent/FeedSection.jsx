import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ing from '../../assets/fd.png';
import {Link} from 'react-router-dom'

function FeedSection() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Calculate the index range for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col gap-4 w-3/4 rounded-lg">
      {/* Display the fetched posts for the current page */}
      {currentPosts.map((post) => (
        <Link to={`/feeds/:${post.id}`} className="flex gap-6 bg-gray-500 rounded-xl p-4" key={post.id}>
          <div>
            <img src={ing} alt="" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-gray-200">{post.title}</h1>
            <h1 className="font-semibold text-base text-gray-700">{post.body}</h1>
          </div>
        </Link>
      ))}

      {/* Pagination controls */}
      <div className="flex justify-center mt-4">
        {[...Array(Math.ceil(posts.length / postsPerPage))].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 p-2 rounded-md ${
              index + 1 === currentPage ? 'bg-blue-800 text-white' : 'bg-gray-300'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FeedSection;
