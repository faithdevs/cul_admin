<template>
  <!-- Page Header -->
  <main
    class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3"
  >
    <div class="main-content-container container-fluid px-4">
      <Panel title="Overview">Dashboard</Panel>
      <SmallStats></SmallStats>
      <div class="row">
        <Draft></Draft>
        <Discussion></Discussion>
        <TopSeminars></TopSeminars>
      </div>
    </div>
  </main>
  <!-- End Page Header -->
</template>

<script>
/* eslint-disable no-unused-vars */
import instance from "../http";
import { mapGetters } from "vuex";
import router from "../router";

import SmallStats from "@/components/home/SmallStats";
import Draft from "@/components/home/Draft";
import Discussion from "@/components/home/Discussion";
import TopSeminars from "@/components/home/TopSeminars";
export default {
  name: "home",
  components: {
    SmallStats,
    Draft,
    Discussion,
    TopSeminars
  },
  mounted() {
    if (!this.isLoggedIn) {
      router.push("/login");
    }
  },
  computed: {
    ...mapGetters("authentication", ["isLoggedIn"])
  }
};
</script>
