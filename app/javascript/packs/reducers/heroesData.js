const heroesData = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE':
      return action.payload;
    case 'ERRASE':
      return [];
    default:
      return state;
  }
};

export default heroesData;