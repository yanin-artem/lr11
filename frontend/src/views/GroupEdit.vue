<template>
  <Layout :title="id ? 'Редактирование записи' : 'Создание записи'">
    <GroupForm :id="id" :name="name" @submit="onSubmit" />
  </Layout>
</template>

<script>
import { useStore } from "vuex";

import { updateItem, addItem } from "@/store/groups/selectors";
import Layout from "@/components/Layout/Layout";
import GroupForm from "@/components/GroupForm/GroupForm";
export default {
  name: "GroupsEdit",
  props: {
    id: String,
    name: String,
  },
  components: {
    Layout,
    GroupForm,
  },
  setup() {
    const store = useStore();
    return {
      onSubmit: ({ group_id, group_name }) =>
        group_id
          ? updateItem(store, { group_id, group_name })
          : addItem(store, { group_name }),
    };
  },
};
</script>
