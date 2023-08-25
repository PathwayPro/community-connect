const resumeFileFormat = (value: File | undefined) => {
  const file = value || undefined;
  if (
    !file ||
    (file &&
      ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(
        file.type
      ))
  ) {
    return true;
  }
  return 'File must be a .docx or .pdf';
};

const fileSize = (value: File | undefined, maxSize: number) => {
  const file = value || undefined;
  if (!file || (file && file.size <= 5 * 1024 * 1024)) {
    return true;
  }
  return `File must be less than ${maxSize}MB`;
};

const imageFileFormat = (value: File | undefined) => {
  const file = value || undefined;
  if (!file || (file && ['image/jpg', 'image/jpeg', 'image/png'].includes(file.type))) {
    return true;
  }
  return 'Image must be a .jpg, .jpeg or .png format';
};

export { resumeFileFormat, fileSize, imageFileFormat };
