<template>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit seminar</h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
          @click="unsetEditMode(seminar)"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label for="topic">Topic</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter topic"
            required
            :value="seminar.topic"
            @input="setSeminarTopic({ seminar, topic: $event.target.value })"
          />
        </div>
        <div class="form-group">
          <label for="desc">Description</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter description"
            required
            :value="seminar.description"
            @input="
              setSeminarDesc({
                seminar,
                description: $event.target.value
              })
            "
          />
        </div>
        <div class="form-group">
          <label for="desc">Venue</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter venue"
            required
            :value="seminar.venue"
            @input="setSeminarVenue({ seminar, venue: $event.target.value })"
          />
        </div>
        <div class="form-group">
          <label for="desc">Seat</label>
          <input
            type="number"
            class="form-control"
            placeholder="Enter seat"
            required
            :value="seminar.seat"
            @input="setSeminarSeat({ seminar, seat: $event.target.value })"
          />
        </div>
        <div class="form-group">
          <label for="desc">Starting Date</label>
          <input
            type="text"
            class="form-control"
            placeholder="2019-08-12 10:00:00"
            required
            :value="seminar.start"
            @input="setSeminarStart({ seminar, start: $event.target.value })"
          />
        </div>
        <div class="form-group">
          <label for="desc">Ending Date</label>
          <input
            type="text"
            class="form-control"
            placeholder="2019-08-12 10:00:00"
            :value="seminar.end"
            @input="setSeminarEnd({ seminar, end: $event.target.value })"
          />
        </div>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
          @click="unsetEditMode(seminar)"
        >
          Close
        </button>
        <button
          type="button"
          class="btn btn-primary"
          @click="edit(seminar)"
          data-dismiss="modal"
        >
          Edit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  name: "EditSeminar",
  methods: {
      ...mapActions("seminar", ["edit"]),
    ...mapMutations("seminar", [
      "unsetEditMode",
      "setSeminarTopic",
      "setSeminarDesc",
      "setSeminarVenue",
      "setSeminarSeat",
      "setSeminarStart",
      "setSeminarEnd"
    ])
  },
  props: ["seminar"]
};
</script>

<style></style>
