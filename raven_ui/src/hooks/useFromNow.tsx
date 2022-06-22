import React, { useState, useEffect } from 'react';

enum FromNowEnum {
  SECONDS = 'second',
  MINUTES = 'minute',
  HOURS = 'hour',
  DAYS = 'day',
  WEEKS = 'week',
  MONTHS = 'month',
  YEARS = 'year'
}

enum TimeEnum {
  MILLISECONDS_IN_SECOND = 1000,
  SECONDS_IN_MINUTE = 60,
  MINUTES_IN_HOUR = 60,
  HOURS_IN_DAY = 24,
  DAYS_IN_WEEK = 7,
  WEEKS_IN_MONTH = 4,
  MONTHS_IN_YEAR = 12
}

type FromNowType = {
  value: number,
  unit: string
}

function formatFromNow(value: number, unit: FromNowEnum|string): FromNowType {
  return { value: Math.floor(value), unit: Math.floor(value) > 1 ? unit.concat('s') : unit };
}

function getTimeFromNow(timestamp: string): FromNowType {
  const then: Date = new Date(timestamp);
  const now: Date = new Date();
  const milliseconds: number = +now - +then;

  const seconds: number = milliseconds / TimeEnum.MILLISECONDS_IN_SECOND;
  if (seconds < TimeEnum.SECONDS_IN_MINUTE) {
    return formatFromNow(seconds, FromNowEnum.SECONDS);
  }

  const minutes: number = seconds / TimeEnum.SECONDS_IN_MINUTE;
  if (minutes < TimeEnum.MINUTES_IN_HOUR) {
    return formatFromNow(minutes, FromNowEnum.MINUTES);
  }

  const hours: number = minutes / TimeEnum.MINUTES_IN_HOUR;
  if (hours < TimeEnum.HOURS_IN_DAY) {
    return formatFromNow(hours, FromNowEnum.HOURS);
  }

  const days: number = hours / TimeEnum.HOURS_IN_DAY;
  if (days < TimeEnum.DAYS_IN_WEEK) {
    return formatFromNow(days, FromNowEnum.DAYS);
  }

  const weeks: number = days / TimeEnum.DAYS_IN_WEEK;
  if (weeks < TimeEnum.WEEKS_IN_MONTH) {
    return formatFromNow(weeks, FromNowEnum.WEEKS);
  }

  const months: number = weeks / TimeEnum.WEEKS_IN_MONTH;
  if (months < TimeEnum.MONTHS_IN_YEAR) {
    return formatFromNow(months, FromNowEnum.MONTHS);
  }

  const years : number = months / TimeEnum.MONTHS_IN_YEAR;
  return formatFromNow(years, FromNowEnum.YEARS);
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
