import { useEffect, useState } from 'react';

function useFilteredAndSortedPosts(posts, categories) {
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // Define your filter criteria using the dynamic categories
    const filteredPosts = posts.filter(post => categories.includes(post.category));

    // Sort the filtered posts if needed (e.g., by date)
    const sortedPosts = filteredPosts.sort((post1, post2) => post1.date - post2.date);

    setFilteredPosts(sortedPosts);
  }, [posts, categories]);

  return filteredPosts;
}

export default useFilteredAndSortedPosts;
