<template>
  <Layout title="Группы">
    <GroupList />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout/Layout";
import GroupList from "@/components/GroupList/GroupList";

export default {
  name: "Groups",
  components: {
    Layout,
    GroupList,
  },
};
</script>
