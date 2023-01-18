import { useRef, useState, useEffect, Fragment, useContext } from 'react';
import classNames from 'classnames';

import styles from '../../styles/flip-card.module.css';
import TimerContext from '../../store/timer-context';

function FlipCard({ label }) {
  const timerCtx = useContext(TimerContext);

  const [startNumber, setStartNumber] = useState(
    label === 'seconds'
      ? timerCtx.secunds
      : label === 'minutes'
      ? timerCtx.minutes
      : label === 'hours'
      ? timerCtx.hours
      : timerCtx.days
  );
  const [upperFlipText, setUpperFlipText] = useState();
  const [lowerText, setLowerText] = useState();
  const [lowerFlipText, setLowerFlipText] = useState();
  const [animate, setAnimate] = useState(false);
  const upperPartRef = useRef();
  const upperPartFlipRef = useRef();
  const lowerPartRef = useRef();
  const lowerPartFlipRef = useRef();

  // const handleUpperPartFlipAnimationStart = (e) => {
  //   console.log(
  //     `s-a executat handleUpperPartFlipAnimationStart: ${e.nativeEvent.animationName}!`
  //   );
  //   if (upperPartFlipRef.current !== startNumber) {
  //     upperPartFlipRef.current = startNumber;
  //   }

  //   // setAnimate(true);
  // };

  const handleUpperPartFlipAnimationEnd = (e) => {
    // console.log(
    //   `s-a executat handleUpperPartFlipAnimationEnd: ${e.nativeEvent.animationName}!`
    // );
    if (upperPartFlipRef.current !== startNumber) {
      setUpperFlipText(startNumber);
      upperPartFlipRef.current = startNumber;
    }
    if (lowerPartFlipRef.current !== startNumber) {
      setLowerFlipText(startNumber);
      lowerPartFlipRef.current = startNumber;
    }
  };

  const handleLowerPartFlipAnimationStart = (e) => {
    // console.log(
    //   `s-a executat handleLowerPartFlipAnimationStart: ${e.nativeEvent.animationName}!`
    // );
    // if (lowerPartFlipRef.current !== startNumber) {
    //   setLowerFlipText(startNumber);
    //   lowerPartFlipRef.current = startNumber;
    // }
    if (lowerPartRef.current !== startNumber) {
      setLowerText(startNumber);
      lowerPartRef.current = startNumber;
    }
  };

  const handleLowerPartFlipAnimationEnd = (e) => {
    // console.log(
    //   `s-a executat handleLowerPartFlipAnimationEnd: ${e.nativeEvent.animationName}!`
    // );
    // // if (upperPartFlipRef.current !== startNumber) {
    // //   upperPartFlipRef.current = startNumber;
    // // }
    // console.log(
    //   `s-a executat handleLowerPartFlipAnimationStart: ${e.nativeEvent.animationName}!`
    // );
    if (lowerPartRef.current !== startNumber) {
      setLowerText(startNumber);
      lowerPartRef.current = startNumber;
    }

    // if (lowerPartFlipRef.current !== startNumber) {
    //   setLowerFlipText(startNumber);
    //   lowerPartFlipRef.current = startNumber;
    // }
    setAnimate(false);
  };

  useEffect(() => {
    setAnimate(true);
  }, [startNumber]);

  useEffect(() => {
    const newNumber =
      label === 'seconds'
        ? timerCtx?.seconds
        : label === 'minutes'
        ? timerCtx.minutes
        : label === 'hours'
        ? timerCtx.hours
        : timerCtx.days;
    if (newNumber !== startNumber) {
      // if (upperPartFlipRef.current !== newNumber + 1) {
      //   setUpperFlipText(newNumber + 1);
      //   upperPartFlipRef.current = newNumber + 1;
      // }

      if (upperPartRef.current !== newNumber) {
        // setUpperText(newNumber);
        upperPartRef.current = newNumber;
      }

      // if (lowerPartFlipRef.current !== newNumber + 1) {
      //   setLowerFlipText(newNumber);
      //   lowerPartFlipRef.current = newNumber;
      // }

      // if (lowerPartRef.current !== newNumber + 1) {
      //   setLowerText(newNumber + 1);
      //   lowerPartRef.current = newNumber + 1;
      // }
      setAnimate(false);
      setStartNumber(newNumber);
    }
    // setAnimate(true);

    // setStartNumber(newNumber);
  }, [timerCtx, label]);

  function padding(num, size) {
    num = num.toString();
    while (num.length < size) num = '0' + num;
    return num;
  }

  return (
    <Fragment>
      <div className={styles.flipCard}>
        <div className={styles.upperPart} ref={upperPartRef}>
          {upperPartRef.current >= 0 && padding(upperPartRef.current, 2)}
        </div>
        <div
          className={classNames(
            styles.upperPartFlip,
            !animate
              ? styles.upperPartRepeatFlipStop
              : styles.upperPartRepeatFlipStart
          )}
          // onAnimationStart={handleUpperPartFlipAnimationStart}
          onAnimationEnd={handleUpperPartFlipAnimationEnd}
          ref={upperPartFlipRef}
        >
          {upperPartFlipRef.current >= 0 &&
            padding(upperPartFlipRef.current, 2)}
        </div>
        <div className={styles.lowerPart} ref={lowerPartRef}>
          {lowerPartRef.current >= 0 && padding(lowerPartRef.current, 2)}
        </div>
        <div
          className={classNames(
            styles.lowerPartFlip,
            !animate
              ? styles.lowerPartRepeatFlipStop
              : styles.lowerPartRepeatFlipStart
          )}
          onAnimationStart={handleLowerPartFlipAnimationStart}
          onAnimationEnd={handleLowerPartFlipAnimationEnd}
          ref={lowerPartFlipRef}
        >
          {lowerPartFlipRef.current >= 0 &&
            padding(lowerPartFlipRef.current, 2)}
        </div>
      </div>
    </Fragment>
  );
}

export default FlipCard;
