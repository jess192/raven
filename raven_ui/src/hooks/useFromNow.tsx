import React, { useState, useEffect } from 'react';

enum FromNowEnum {
  SECONDS = 's',
  MINUTES = 'm',
  HOURS = 'h',
  DAYS = 'd'
}

enum TimeEnum {
  MILLISECONDS_IN_SECOND = 1000,
  SECONDS_IN_MINUTE = 60,
  MINUTES_IN_HOUR = 60,
  HOURS_IN_DAY = 24
}

type FromNowType = {
  value: number,
  unit: FromNowEnum
}

function getTimeFromNow(timestamp: string): FromNowType {
  const then: Date = new Date(timestamp);
  const now: Date = new Date();
  const milliseconds: number = +now - +then;

  const seconds: number = milliseconds / TimeEnum.MILLISECONDS_IN_SECOND;
  if (seconds < TimeEnum.SECONDS_IN_MINUTE) {
    return { value: seconds, unit: FromNowEnum.SECONDS };
  }

  const minutes: number = seconds / TimeEnum.SECONDS_IN_MINUTE;
  if (minutes < TimeEnum.MINUTES_IN_HOUR) {
    return { value: minutes, unit: FromNowEnum.MINUTES };
  }

  const hours: number = minutes / TimeEnum.MINUTES_IN_HOUR;
  if (hours < TimeEnum.HOURS_IN_DAY) {
    return { value: hours, unit: FromNowEnum.HOURS };
  }

  const days: number = hours / TimeEnum.HOURS_IN_DAY;
  return { value: days, unit: FromNowEnum.DAYS };
}

export const useFromNow = (timestamp: string) => {
  const [fromNow, setFromNow] = useState<FromNowType>(getTimeFromNow(timestamp));

  useEffect(() => {
    let timeout: NodeJS.Timeout = null;
    if (fromNow.unit === FromNowEnum.SECONDS || fromNow.unit === FromNowEnum.MINUTES) {
      timeout = setTimeout(() => {
        setFromNow(getTimeFromNow(timestamp));
      }, TimeEnum.MILLISECONDS_IN_SECOND * TimeEnum.SECONDS_IN_MINUTE);
    }
    return () => {
      clearTimeout(timeout);
    };
  });
  return fromNow;
};
