<template>
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle"><slot>Component</slot></span>
        <h3 class="page-title">{{ title }}</h3>
      </div>
    </div>
    <!-- End Page Header -->
</template>

<script>
export default {
  name: "Panel",
  props: {
    title: String
  }
};
</script>

<style></style>
