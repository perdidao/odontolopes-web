export const state = () => {
  return {
    user: null,
  };
};

export const mutations = {
  setUser(state, user) {
    state.user = user || null;
  },
};

export const getters = {
  getUser(state) {
    return state.user;
  },
};
