const validateURL = (url: string) => {
  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`;
  }
  return url;
};

export default validateURL;
