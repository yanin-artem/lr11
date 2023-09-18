export const fetchItems = (store) => {
  const { dispatch } = store;
  dispatch("students/fetchItems");
};

export const selectItems = (store) => {
  const { getters } = store;
  return getters["students/items"];
};

export const removeItem = (store, id) => {
  const { dispatch } = store;
  dispatch("students/removeItem", id);
};

export const addItem = (store, { name, surname, year, group_name }) => {
  const { dispatch } = store;
  dispatch("students/addItem", { name, surname, year, group_name });
};

export const updateItem = (store, { id, name, surname, year, group_name }) => {
  const { dispatch } = store;
  dispatch("students/updateItem", { id, name, surname, year, group_name });
};

export const selectItemById = (store, id) => {
  const { getters } = store;
  return getters["students/itemsByKey"][id] || {};
};

export const filter = (store, group_id) => {
  const { dispatch } = store;
  dispatch("students/filter", { group_id });
};
