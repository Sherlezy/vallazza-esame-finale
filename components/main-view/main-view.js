import styles from "../../styles/main-view.module.css";
import FlipCard from "../flip-card/flip-card";
import BarIcons from "../bar-icons/bar-icons";

function MainView() {
  return (
    <div className={styles.container}>
      <div className={styles.sky}></div>
      <div className={styles.land}></div>
      <div className={styles.title}>{"ESAME VALLAZZA "}</div>
      <div className={styles.containerSegments}>
        <div className={styles.containerSegment}>
          <FlipCard label="days" initialTime={2} />
          <span className={styles.subtitle}>GIORNI</span>
        </div>
        <div className={styles.containerSegment}>
          <FlipCard label="hours" initialTime={20} />
          <span className={styles.subtitle}>ORE</span>
        </div>
        <div className={styles.containerSegment}>
          <FlipCard label="minutes" initialTime={23} />
          <span className={styles.subtitle}>MINUTI</span>
        </div>
        <div className={styles.containerSegment}>
          <FlipCard label="seconds" initialTime={22} />
          <span className={styles.subtitle}>SECONDI</span>
        </div>
      </div>
    </div>
  );
}

export default MainView;
