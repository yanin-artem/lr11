export const fetchItems = (store) => {
  const { dispatch } = store;
  dispatch("groups/fetchItems");
};

export const selectItems = (store) => {
  const { getters } = store;
  return getters["groups/items"];
};

export const removeItem = (store, id) => {
  const { dispatch } = store;
  dispatch("groups/removeItem", id);
};

export const addItem = (store, { group_name }) => {
  const { dispatch } = store;
  dispatch("groups/addItem", { group_name });
};

export const updateItem = (store, { group_id, group_name }) => {
  const { dispatch } = store;
  dispatch("groups/updateItem", { group_id, group_name });
};

export const selectItemById = (store, group_id) => {
  const { getters } = store;
  return getters["groups/itemsByKey"][group_id] || {};
};
