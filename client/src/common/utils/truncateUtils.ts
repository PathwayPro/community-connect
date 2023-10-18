const truncateString = (str: string, maxLength: number): string => {
  if (str.length > maxLength) {
    return `${str.substring(0, maxLength - 3)}...`;
  }
  return str;
};

const truncateFileName = (fileName: string, maxLength: number): string => {
  if (fileName.length <= maxLength) {
    return fileName;
  }

  const fileFormat = fileName.split('.').pop();
  const truncatedName = fileName.slice(0, maxLength - 4);
  return `${truncatedName}[...].${fileFormat}`;
};

export { truncateString, truncateFileName };
