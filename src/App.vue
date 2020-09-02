<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <sidebar v-if="isLoggedIn"></sidebar>
        <navbar v-if="isLoggedIn"></navbar>
        <router-view />
        <Footer v-if="isLoggedIn"></Footer>
      </div>
    </div>
  </div>
</template>
<script>
import sidebar from "@/components/Sidebar";
import navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mapGetters } from "vuex";
export default {
  components: {
    sidebar,
    navbar,
    Footer
  },
  computed: {
    ...mapGetters("authentication", ["isLoggedIn"])
  }
};
</script>
