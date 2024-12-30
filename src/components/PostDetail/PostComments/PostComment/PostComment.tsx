import styles from "./PostComment.module.css";
import { Comment } from '../../../../types';

interface PostCommentProps {
  comment: Comment;
}

const PostComment = ({ comment }: PostCommentProps) => {
  return (
    <div className={styles.postComment}>
      <h3 className={styles.commentTitle}>{comment.name}</h3>
      <p className={styles.commentBody}>{comment.body}</p>
      <p className={styles.commentEmail}>{comment.email}</p>
    </div>
  );
};

export default PostComment;