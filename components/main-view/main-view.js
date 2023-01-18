import styles from '../../styles/main-view.module.css';
import FlipCard from '../flip-card/flip-card';
import BarIcons from '../bar-icons/bar-icons';

function MainView() {
  return (
    <div className={styles.container}>
      <div className={styles.sky}></div>
      <div className={styles.land}></div>
      <div className={styles.title}>{"WE'RE LAUNCHING SOON"}</div>
      <div className={styles.containerSegments}>
        <div className={styles.containerSegment}>
          <FlipCard label='days' />
          <span className={styles.subtitle}>DAYS</span>
        </div>
        <div className={styles.containerSegment}>
          <FlipCard label='hours' />
          <span className={styles.subtitle}>HOURS</span>
        </div>
        <div className={styles.containerSegment}>
          <FlipCard label='minutes' />
          <span className={styles.subtitle}>MINUTES</span>
        </div>
        <div className={styles.containerSegment}>
          <FlipCard label='seconds' />
          <span className={styles.subtitle}>SECONDS</span>
        </div>
      </div>
      <BarIcons />
    </div>
  );
}

export default MainView;
