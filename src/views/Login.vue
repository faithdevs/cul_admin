<template>
  <main class="main-content col">
      <div class="main-content-container container-fluid px-4 my-auto h-100">
        <div class="row no-gutters h-100">
          <div class="col-lg-3 col-md-5 auth-form mx-auto my-auto">
            <div class="card">
              <div class="card-body">
                <img
                  class="auth-form__logo d-table mx-auto mb-3"
                  src="../assets/logo.png"
                  alt="CBS Logo"
                  width="50"
                />
                <h5 class="auth-form__title text-center mb-4">
                  Access Your Account
                </h5>
                <form @submit.prevent="login">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter email"
                      required
                      :value="loginEmail"
                      @input="setLoginEmail($event.target.value)"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      required
                      :value="loginPassword"
                      @input="setLoginPassword($event.target.value)"
                    />
                  </div>
                  <div class="form-group mb-3 d-table mx-auto">
                    <div class="custom-control custom-checkbox mb-1">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck2"
                      />
                      <label class="custom-control-label" for="customCheck2"
                        >Remember me for 30 days.</label
                      >
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-pill btn-accent d-table mx-auto"
                  >
                    Access Account
                  </button>
                </form>
              </div>
            </div>
            <div class="auth-form__meta d-flex mt-4">
              <a href="forgot-password.html">Forgot your password?</a>
              <a class="ml-auto" href="register.html">Create new account?</a>
            </div>
          </div>
        </div>
      </div>
  </main>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("authentication", ["loginEmail", "loginPassword", "loginError"])
  },
  methods: {
    ...mapMutations("authentication", ["setLoginEmail", "setLoginPassword"]),
    ...mapActions("authentication", ["login"])
  }
};
</script>
