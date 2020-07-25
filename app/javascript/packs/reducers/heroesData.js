const heroesData = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        heroesData: action.payload,
      };
    case 'ERRASE':
      return {
        heroesData: [],
      };
    default:
      return state;
  }
};

export default heroesData;