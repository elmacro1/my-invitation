"use client";

import { useState, useEffect } from "react";
import { CounterItem } from "@/app/models/counter.model";
import styles from "./Counter.module.css";

const counterFakeData = [
  {
    label: "DÍAS",
    value: 2,
  },
  {
    label: "HORAS",
    value: 23,
  },
  {
    label: "MINUTOS",
    value: 1,
  },
  {
    label: "SEGUNDOS",
    value: 10,
  },
];

const Counter = () => {
  const [counterData, setCounterData] =
    useState<CounterItem[]>(counterFakeData);

  const handleCounter = () => {
    const [daysItem, hoursItem, minutesItem, secondsItem] = counterData;

    let daysValue = daysItem.value;
    let hoursValue = hoursItem.value;
    let minutesValue = minutesItem.value;
    let secondsValue = secondsItem.value;

    if (secondsValue !== 0) {
      secondsValue = secondsValue - 1;
    }

    if (secondsValue === 0 && minutesValue !== 0) {
      minutesValue = minutesValue - 1;
      secondsValue = 59;
    }

    if (minutesValue !== 0 && secondsValue === 0) {
      minutesValue = minutesValue - 1;
    }

    if (minutesValue === 0) {
      if (hoursValue !== 0) {
        hoursValue = hoursValue - 1;
        minutesValue = 59;
      }
    }

    if (hoursValue !== 0 && minutesValue === 0) {
      hoursValue = hoursValue - 1;
    }

    if (hoursValue === 0 && daysValue !== 0) {
      daysValue = daysValue - 1;
      hoursValue = 23;
    }

    daysItem.value = daysValue;
    hoursItem.value = hoursValue;
    minutesItem.value = minutesValue;
    secondsItem.value = secondsValue;

    const currentCounterData = [daysItem, hoursItem, minutesItem, secondsItem];

    setCounterData(() => currentCounterData);
  };

  useEffect(() => {
    const counterInterval = setInterval(handleCounter, 1);

    return () => clearInterval(counterInterval);
  }, []);

  return (
    <div className={styles.main_container}>
      {counterData.map(({ label, value }, index) => (
        <div className={styles.counter} key={index}>
          <div className={styles.value_container}>
            <p className={styles.value}>{value}</p>
          </div>
          <p className={styles.label}>{label}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
