const filter = (state = '0', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.payload;
    default:
      return state;
  }
};

export default filter;
