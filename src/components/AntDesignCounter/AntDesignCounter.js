import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
  resetToZero,
} from '../counter/counterSlice';
import styles from '../counter/Counter.module.css';
import {StyledCounter} from './AntDesignCounter.styles';

import { Card, Button } from 'antd';

export function AntDesignCounter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  let isOdd = (((count / 2) != 1) && (count != 0)) ? true : false;

  return (
    <div>
      <div>
        <Button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
        <StyledCounter onChange={isOdd} isOdd={isOdd}>
          <span className={styles.value}>
            {count}
          </span>
        </StyledCounter>
        <Button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <Button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </Button>
        <Button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </Button>
      </div>
      <div className={styles.row}>
        <Card title="Ant Design Counter" bordered={true} style={{ width: 300}}>
          <Button
          className={styles.button}
          onClick={() => dispatch(resetToZero())}>
            Reset to 0
          </Button>
        </Card>
      </div>
    </div>
  );
}