import { Post } from "../../../types";
import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';

const PostCard = ({ post }: { post: Post }) => {
  const { title, body } = post;
  return (
    <Link className={styles.postCard} to={`/post/${post.id}`}>
      <h1>{title}</h1>
      <p>{body}</p>
    </Link>
  );
};

export default PostCard;