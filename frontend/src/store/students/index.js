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
        res[cur["id"]] = cur;
        return res;
      }, {}),
  },
  mutations: {
    setItems: (state, items) => {
      state.items = items;
    },
    setItem: (state, item) => {
      state.items.push(item);
    },
    removeItem: (state, idRemove) => {
      state.items = state.items.filter(({ id }) => id !== idRemove);
    },
    updateItem: (state, updateItem) => {
      const index = state.items.findIndex(
        (item) => +item.id === +updateItem.id
      );
      state.items[index] = updateItem;
    },
    filterTypes: (state, filter) => {
      state.items = filter;
    },
  },
  actions: {
    fetchItems: async ({ commit }) => {
      const response = await api.students();
      const items = await response.json();
      commit("setItems", items);
    },
    removeItem: async ({ commit }, id) => {
      const idRemovedItem = await api.remove(id);
      commit("removeItem", idRemovedItem);
    },
    addItem: async ({ commit }, { name, surname, year, group_name }) => {
      const item = await api.add({ name, surname, year, group_name });
      commit("setItem", item);
    },
    updateItem: async ({ commit }, { id, name, surname, year, group_name }) => {
      const item = await api.update({
        id,
        name,
        surname,
        year,
        group_name,
      });
      commit("updateItem", item);
    },
    filter: async ({ commit }, { group_id }) => {
      const filter = await api.filter(group_id);
      const items = await filter.json();
      commit("filterTypes", items);
    },
  },
};
