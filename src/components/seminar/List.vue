<template>
  <table class="transaction-history d-none">
    <thead>
      <tr>
        <th>#</th>
        <th>Topic</th>
        <th>Description</th>
        <th>Venue</th>
        <th>Seats</th>
        <th>Status</th>
        <th>Start</th>
        <th>End</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(seminar, i) in seminars" :key="seminar.id">
        <td>{{ i + 1 }}</td>
        <td>{{ seminar.topic }}</td>
        <td>{{ seminar.description }}</td>
        <td>{{ seminar.venue }}</td>
        <td>{{ seminar.seat }}</td>
        <td>
          <span class="text-success" v-if="seminar.event == 'New'">{{
            seminar.event
          }}</span>
          <span class="text-danger" v-else>{{ seminar.event }}</span>
        </td>
        <td>{{ seminar.strStart }}</td>
        <td>{{ seminar.strEnd }}</td>
        <td>
          <div
            class="btn-group btn-group-sm"
            role="group"
            aria-label="Table row actions"
          >
            <button
              type="button"
              class="btn btn-white"
              @click="setEditMode(seminar)"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <i class="material-icons">&#xE254;</i>
            </button>
            <button type="button" class="btn btn-white">
              <i class="material-icons">&#xE872;</i>
            </button>
          </div>
        </td>
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          v-if="seminar.isEditMode"
        >
          <edit v-if="seminar.isEditMode" :seminar="seminar"></edit>
        </div>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import edit from "@/components/seminar/Edit";
export default {
  name: "SeminarList",
  components: {
    edit
  },
  computed: {
    ...mapState("seminar", ["seminars"])
  },
  methods: {
    ...mapMutations("seminar", ["setEditMode", "unsetEditMode"]),
    sync() {
      $(document).ready(function() {
        $(".transaction-history").DataTable({ responsive: !0 });
      });
    }
  },
  watch: {
    $route: "sync"
  },
  created() {
    this.sync();
  }
};
</script>

<style></style>
