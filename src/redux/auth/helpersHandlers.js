export const pending = state => {
  state.isLoading = true;
};
export const fulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
export const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const registration = (state, { payload }) => {
  state.isLoginIn = true;
  state.token = payload.token;
  state.user = payload.user;
};

export const login = (state, { payload }) => {
  state.isLoginIn = true;
  state.token = payload.token;
  state.user = payload.user;
};

export const logout = state => {
  state.isLoginIn = false;
  state.token = null;
  state.user = { name: '', email: '' };
};
