<template>
  <div :class="$style.root">
    <Table
      :headers="[
        { isStudents: 'true' },
        { value: 'group_id', text: 'ID' },
        { value: 'group_name', text: 'Группа' },
        { value: 'control', text: 'Действие' },
      ]"
      :items="items"
    >
      <template v-slot:control="{ item }">
        <Btn
          @click="onClickEdit(item['group_id'], item['group_name'])"
          theme="info"
          >Изменить</Btn
        >
        <Btn @click="onClickRemove(item['group_id'])" theme="danger"
          >Удалить</Btn
        >
      </template>
    </Table>
    <RouterLink :to="{ name: 'GroupsEdit' }">
      <Btn :class="$style.create" theme="info">Создать</Btn>
    </RouterLink>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";

import { selectItems, removeItem, fetchItems } from "@/store/groups/selectors";
import Table from "@/components/Table/Table";
import Btn from "@/components/Btn/Btn";
export default {
  name: "GroupList",
  components: {
    Btn,
    Table,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const items = computed(() => selectItems(store));
    onMounted(() => {
      fetchItems(store);
    });
    return {
      items,
      onClickRemove: (id) => {
        const isConfirmRemove = confirm(
          "Вы действительно хотите удалить запись?"
        );
        if (isConfirmRemove) {
          removeItem(store, id);
          fetchItems(store);
        }
      },
      onClickEdit: (id, name) => {
        router.push({ name: "GroupsEdit", params: { id: id, name: name } });
      },
    };
  },
};
</script>

<style module lang="scss">
.root {
  .create {
    margin-top: 16px;
  }
}
</style>
@/store/groups/selectors
