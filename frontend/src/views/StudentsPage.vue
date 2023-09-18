<template>
  <Layout title="Студенты">
    <StudentsList />
  </Layout>
</template>

<script>
import Layout from "@/components/Layout/Layout";
import StudentsList from "@/components/StudentsList/StudentsList";
import Btn from "@/components/Btn/Btn.vue";

export default {
  name: "Students",
  components: {
    Layout,
    StudentsList,
    Btn,
  },
};
</script>
