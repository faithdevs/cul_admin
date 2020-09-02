<template>
  <div class="register">
    <h1>Register</h1>
    <input
      type="email"
      placeholder="Email"
      :value="registerEmail"
      @input="setRegisterEmail($event.target.value)"
    />
    <br />
    <input
      type="password"
      placeholder="Password"
      autocomplete="new-password"
      :value="registerPassword"
      @input="setRegisterPassword($event.target.value)"
    />
    <br />
    <span :value="registerError" v-html="registerError"></span> <br>
    <button @click="register">Register</button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("authentication", ["registerEmail", "registerPassword", "registerError"])
  },
  methods: {
    ...mapMutations("authentication", [
      "setRegisterEmail",
      "setRegisterPassword"
    ]),
    ...mapActions('authentication', [
      'register',
      ])
  }
};
</script>
