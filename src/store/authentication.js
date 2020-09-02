import router from "../router";
import instance from "../http";
import errorHandler from "../errorHandler";

export default {
  namespaced: true,
  state: {
    registerEmail: "",
    registerPassword: "",
    registerError: null,
    loginEmail: "",
    loginPassword: "",
    loginError: null,
    token: null,
    user: []
  },
  actions: {
    logout({ commit }) {
      commit("setToken", null);
      commit("setProfile", []);
      instance.defaults.headers.Authorization = null;
      router.push("/login");
    },
    register({ commit, state }) {
      commit("setRegisterError", null);
      return instance
        .post("/api/auth/signup", {
          email: state.registerEmail,
          password: state.registerPassword,
          name: "",
          username: "",
          reg_no: "",
          programme: "",
          position: ""
        })
        .then(({ data }) => {
          if (data.error) {
            commit("setRegisterError", data.msg);
          } else {
            commit("setToken", data.token);
            router.push("/");
          }
        })
        .catch(() => {
          commit(
            "setRegisterError",
            "An error occured trying to create your account."
          );
        });
    },
    login({ commit, state }) {
      commit("setLoginError", null);
      return instance
        .post("/api/auth/login", {
          email: state.loginEmail,
          password: state.loginPassword
        })
        .then(({ data }) => {
          commit("setToken", data.token);
          commit("setLoginEmail", "");
          commit("setLoginPassword", "");
          instance.defaults.headers.Authorization = `Bearer ${data.token}`;
          router.push("/");
        })
        .catch(error => {
          if (error.response) {
            if (error.response.status == 401) {
              iziToast.error({
                title: "Something happened",
                position: "topRight",
                timeout: 10000,
                message: response.data[0].message
              });
            } else {
              errorHandler(error, "Login error");
            }
          } else if (error.request) {
            iziToast.error({
              title: "Something happened",
              position: "bottomCenter",
              timeout: 10000,
              message: "Make sure you're connected to the internet"
            });
          } else {
            iziToast.error({
              title: "Something happened",
              position: "bottomCenter",
              timeout: 10000,
              message: error.message
            });
          }
        });
    },
    getUser({ commit }) {
      return instance
        .get("/api/user")
        .then(({ data }) => {
          commit("setProfile", data);
        })
        .catch(err => {
          errorHandler(err, "User Profile");
        });
    }
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setRegisterError(state, error) {
      state.registerError = error;
    },
    setRegisterEmail(state, email) {
      state.registerEmail = email;
    },
    setRegisterPassword(state, password) {
      state.registerPassword = password;
    },
    setLoginError(state, error) {
      state.loginError = error;
    },
    setLoginEmail(state, email) {
      state.loginEmail = email;
    },
    setLoginPassword(state, password) {
      state.loginPassword = password;
    },
    setProfile(state, data) {
      state.user = [];
      state.user.push(data);
    }
  }
};
