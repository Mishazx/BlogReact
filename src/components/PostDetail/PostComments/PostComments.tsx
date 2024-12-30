import { Comment } from '../../../types';
import PostComment from './PostComment/PostComment';
import styles from "./PostComments.module.css";

const PostComments = ({ comments }: { comments: Comment[] }) => {
  return (
    <div className={styles.postComments}>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <PostComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default PostComments;