<template>
  <Layout title="Работы">
    <StudentsSortedList />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout/Layout";
import StudentsSortedList from "@/components/StudentsSortedList/StudentsSortedList";
import Btn from "@/components/Btn/Btn.vue";

export default {
  name: "Students",
  components: {
    Layout,
    StudentsSortedList,
    Btn,
  },
};
</script>
