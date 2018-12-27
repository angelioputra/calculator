const state = {
  history: ''
};

const mutations = {
  ['ADD_HISTORY'](state, value) {
    state.history = state.history + ' ' + value;
  },
  ['CLEAR_HISTORY'](state) {
    state.history = '';
  }
};

const actions = {
  addHistory({ commit }, value) {
    commit('ADD_HISTORY', value);
  },
  clearHistory({ commit }) {
    commit('CLEAR_HISTORY');
  }
};

const getters = {
  history(state) {
    return state.history;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
