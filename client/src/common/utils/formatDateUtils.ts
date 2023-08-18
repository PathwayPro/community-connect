const formatDate = (date: Date): string => {
  const currentDate = new Date();
  const diffInMilliseconds = currentDate.getTime() - date.getTime() + 100000;

  const millisecondsIn24Hours = 24 * 60 * 60 * 1000;

  if (diffInMilliseconds < millisecondsIn24Hours) {
    const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleTimeString(undefined, options);
  } else {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }
};

export default formatDate;
