import Button from "../../Common/Button/Button";
import styles from "./Filters.module.css";

const Filters = ({ columns, setColumns }: { columns: number; setColumns: React.Dispatch<React.SetStateAction<number>>}) => {
  return (
    <div className={styles.layoutButtons}>
    <Button 
      active={columns === 1} 
      onClick={() => setColumns(1)}
    >
      1 Column
    </Button>
    <Button 
      active={columns === 2} 
      onClick={() => setColumns(2)}
    >
      2 Columns
    </Button>
    <Button 
      active={columns === 3} 
      onClick={() => setColumns(3)}
    >
      3 Columns
    </Button>
  </div>
  );
};

export default Filters;