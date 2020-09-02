// import router from "../router";
import Vue from "vue";
import instance from "../http";
import errorHandler from "../errorHandler";

export default {
  namespaced: true,
  state: {
    seminars: [],
    seminarError: null
  },
  actions: {
    async index({ commit }) {
      try {
        const { data } = await instance.get("/api/seminar");
        if (data.error) {
          commit("setError", true);
          iziToast.error({
            title: "Something happened",
            position: "topRight",
            timeout: 10000,
            message: data.msg
          });
        } else {
          commit("setError", false);
          commit("index", data);
        }
      } catch (err) {
        commit("setError", true);
      }
    },

    create({ commit, state }) {
      return instance
        .get(`/student/${state.reg_no}`)
        .then(({ data }) => {
          if (data == null) {
            iziToast.error({
              title: "Something is not right",
              position: "topRight",
              timeout: 10000,
              message: "This reg no is not registered with landmark"
            });
          } else {
            const { fullname, email, programme, hall, room } = data;
            let check = confirm(
              `Are this details correct: ${fullname}, ${state.reg_no}, ${programme}`
            );
            if (check) {
              return instance
                .post("/api/v1/convert", {
                  name: fullname,
                  reg_no: state.reg_no,
                  webmail: email,
                  programme,
                  hall,
                  room,
                  spiritual: state.spiritual,
                  holy: state.holy,
                  water: state.water
                })
                .then(({ data }) => {
                  if (data.error) {
                    iziToast.error({
                      title: "Something happened",
                      position: "topRight",
                      timeout: 10000,
                      message: data.msg
                    });
                  } else {
                    commit("create", data);
                    commit("setRegNo", null);
                    commit("setSpiritual", "");
                    commit("setHoly", "");
                    commit("setWater", "");
                    iziToast.success({
                      title: "Good job",
                      position: "topRight",
                      timeout: 10000,
                      message: `${fullname} is now born again`
                    });
                  }
                })
                .catch(error => {
                  errorHandler(error, "Converting error");
                });
            }
          }
        })
        .catch(error => {
          errorHandler(error, "Lmu error");
        });
    },

    async edit({ commit }, seminar) {
      commit("unsetEditMode", seminar);
      try {
        const { data } = await instance.patch(
          `/api/seminar/${seminar.id}`,
          seminar
        );
        if (data.error) {
          iziToast.error({
            title: "Something happened",
            position: "topRight",
            timeout: 10000,
            message: data.msg
          });
        } else {
          iziToast.success({
            title: "Good job",
            position: "topRight",
            timeout: 10000,
            message: "Edited successfully"
          });
        }
      } catch (error) {
        errorHandler(error, "Seminar");
      }
    }
  },
  getters: {},
  mutations: {
    index(state, data) {
      state.seminars = data;
    },
    setError(state, error) {
      state.seminarError = error;
    },
    setSeminarTopic(state, { seminar, topic }) {
      seminar.topic = topic;
    },
    setSeminarDesc(state, { seminar, description }) {
      seminar.description = description;
    },
    setSeminarVenue(state, { seminar, venue }) {
      seminar.venue = venue;
    },
    setSeminarSeat(state, { seminar, seat }) {
      seminar.seat = seat;
    },
    setSeminarStart(state, { seminar, start }) {
      seminar.start = start;
    },
    setSeminarEnd(state, { seminar, end }) {
      seminar.end = end;
    },
    setEditMode(state, seminar) {
      Vue.set(seminar, "isEditMode", true);
    },
    unsetEditMode(state, seminar) {
      Vue.set(seminar, "isEditMode", false);
    }
  }
};
