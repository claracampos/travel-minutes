const generateId = date => {
  return `${date.valueOf()}-${Date.now().valueOf()}`;
};

export default generateId;
