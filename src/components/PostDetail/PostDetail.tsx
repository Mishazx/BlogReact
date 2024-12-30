import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostById, fetchCommentsByPostId } from '../../services/api';
import { Post, Comment } from '../../types';
import PostHeader from './PostHeader/PostHeader';
import styles from './PostDetail.module.css';
import PostComments from './PostComments/PostComments';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPostAndComments = async () => {
      try {
        const postId = Number(id);
        const fetchedPost = await fetchPostById(postId);
        const fetchedComments = await fetchCommentsByPostId(postId);
        
        setPost(fetchedPost);
        setComments(fetchedComments);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post or comments:', error);
        setLoading(false);
      }
    };

    loadPostAndComments();
  }, [id]);

  if (loading) return <LoadingSpinner/>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className={styles.detailContainer}>
      <PostHeader title={post.title} />
      <div className={styles.postBody}>{post.body}</div>
      
      <PostComments comments={comments} />
    </div>
  );
};

export default PostDetail;
