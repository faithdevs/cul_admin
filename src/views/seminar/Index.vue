<template>
  <main
    class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3"
  >
    <div class="main-content-container container-fluid px-4">
      <Panel title="Seminars">Dashboard</Panel>
      <div class="col-lg-3 col-md-5 auth-form mx-auto my-auto" v-if="seminarError && seminars.length == 0">
        <p class="d-table mx-auto">Something went wrong</p>
        <button type="button" class="btn btn-pill btn-accent d-table mx-auto" @click="index()">Try again</button>
      </div>
      <list v-if="seminars.length > 0"></list>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import router from "../../router";

import list from "@/components/seminar/List";

export default {
  name: "Seminar",
  components: {
    list
  },
  mounted() {
    if (!this.isLoggedIn) {
      router.push("/login");
    } else {
      this.index();
    }
  },
  computed: {
    ...mapGetters("authentication", ["isLoggedIn"]),
    ...mapState("seminar", ["seminars","seminarError"])
  },
  methods: {
    ...mapActions("seminar", ["index"])
  }
};
</script>

<style></style>
