import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../../services/api';
import { Post } from '../../types';
import styles from './PostList.module.css';
import PostCard from './PostCard/PostCard';
import TitleLine from '../Common/TitleLine/TitleLine';
import Filters from './Filters/Filters';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className={styles.pageContainer}>

      <TitleLine/>
      <Filters columns={columns} setColumns={setColumns} />
      <div className={styles.postGrid} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
