/*
 * @Author: Orion
 * @Date: 2024-06-10 15:36:47
 * @LastEditors: Orion
 * @LastEditTime: 2024-06-10 16:23:39
 * @Description: 
 * 
 */


import { useState } from 'react'
import styles from './counters.module.css'

function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={handleClick} className={styles.counter}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default function MyApp() {
  return <MyButton />
}
