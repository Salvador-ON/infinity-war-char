export const LogIn = value => ({
  type: 'LOG_IN',
  payload: value,
});

export const LogOut = () => ({
  type: 'LOG_OUT',
});

export const ChangeFilter = value => ({
  type: 'CHANGE_FILTER',
  payload: value,
});
