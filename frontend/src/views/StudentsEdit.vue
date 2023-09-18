<template>
  <Layout :title="id ? 'Редактирование записи' : 'Создание записи'">
    <StudentsForm @submit="onSubmit" :id="id" />
  </Layout>
</template>

<script>
import { useStore } from "vuex";

import { updateItem, addItem } from "@/store/students/selectors";
import StudentsForm from "@/components/StudentsForm/StudentsForm";
import Layout from "@/components/Layout/Layout";

export default {
  name: "StudentsEdit",
  props: {
    id: String,
  },
  components: {
    Layout,
    StudentsForm,
  },
  setup() {
    const store = useStore();
    return {
      onSubmit: ({ id, name, surname, year, group_name }) =>
        id
          ? updateItem(store, { id, name, surname, year, group_name })
          : addItem(store, { name, surname, year, group_name }),
    };
  },
};
</script>
