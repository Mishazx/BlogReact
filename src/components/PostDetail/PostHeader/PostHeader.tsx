import styles from "./PostHeader.module.css";

const PostHeader = ({ title }: { title: string }) => {
  return (
    <div className={styles.postHeader}>
      <h1>{title}</h1>
    </div>
  );
};

export default PostHeader;