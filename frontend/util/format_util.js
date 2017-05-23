const NUMBERS_TO_MONTHS = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
};

const convertDate = date => {
  const dateArr = date.split('-');
  return `${NUMBERS_TO_MONTHS[dateArr[1]]} ${dateArr[2]}, ${dateArr[0]}`;
};

const convertTime = time => {
  const timeArr = time.split(':');

  let hour = parseInt(timeArr[0]);
  let amPm;

  amPm = hour < 12 ? 'AM' : 'PM';
  if (hour === 0) {
    hour = 12;
  } else {
    hour %= 12;
  }

  return `${hour}:${timeArr[1]} ${amPm}`;
};

export const formatDate = datetime => {
  const dateString = datetime.slice(0, 16).replace('T', '');
  const date = dateString.slice(0, 10);
  const time = dateString.slice(10);

  return `${convertDate(date)} at ${convertTime(time)}`;
};

export const formatDuration = sec => {
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;

  return `${hours}h ${minutes}m ${seconds}s`;
};

export const formatDistance = miles => {
  if (miles % 1 === 0) {
    return `${miles}.0`;
  } else {
    return `${miles}`;
  }
};

export const formatPace = avgDuration => {
  const hours = Math.floor(avgDuration / 3600);
  const minutes = Math.floor((avgDuration % 3600) / 60);
  const seconds = avgDuration % 60;

  const formattedArr = [hours, minutes, seconds].map(time => (
    time < 10 ? `0${time}` : `${time}`
  ));

  return formattedArr.join(':');
};
