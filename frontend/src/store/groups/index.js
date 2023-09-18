import api from "./api";

export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    items: (state) => state.items,
    itemsByKey: (state) =>
      state.items.reduce((res, cur) => {
        res[cur["group_id"]] = cur;
        return res;
      }, {}),
  },
  mutations: {
    setItems: (state, items) => {
      state.items = items;
    },
    addItem: (state, item) => {
      state.items.push(item);
    },
    removeItem: (state, idRemove) => {
      state.items = state.items.filter(({ group_id }) => group_id !== idRemove);
    },
    updateItem: (state, updateItem) => {
      const index = state.items.findIndex(
        (item) => +item.id === +updateItem.id
      );
      state.items[index] = updateItem;
    },
  },
  actions: {
    fetchItems: async ({ commit }) => {
      const response = await api.groups();
      const items = await response.json();
      commit("setItems", items);
    },
    removeItem: async ({ commit }, id) => {
      const idRemovedItem = await api.remove(id);
      commit("removeItem", idRemovedItem);
    },
    addItem: async ({ commit }, { group_name }) => {
      const item = await api.add({ group_name });
      commit("addItem", item);
    },
    updateItem: async ({ commit }, { group_id, group_name }) => {
      const item = await api.update({ group_id, group_name });
      commit("updateItem", item);
    },
  },
};
