import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FeedSection() {
  const [posts, setPosts] = useState([]);

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
  console.log(posts)
  return (
    <div className="w-3/4 bg-gray-500 rounded-lg">
      {/* Display the fetched posts */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FeedSection;
