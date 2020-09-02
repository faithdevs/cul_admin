<template>
  <!-- Small Stats Blocks -->
  <div class="row">
    <div class="col-lg col-md-6 col-sm-6 mb-4">
      <div class="stats-small stats-small--1 card card-small">
        <div class="card-body p-0 d-flex">
          <div class="d-flex flex-column m-auto">
            <div class="stats-small__data text-center">
              <span class="stats-small__label text-uppercase">Articles</span>
              <h6 class="stats-small__value count my-3">2,390</h6>
            </div>
            <div class="stats-small__data">
              <span
                class="stats-small__percentage stats-small__percentage--increase"
                >4.7%</span
              >
            </div>
          </div>
          <canvas height="120" class="blog-overview-stats-small-1"></canvas>
        </div>
      </div>
    </div>
    <div class="col-lg col-md-6 col-sm-6 mb-4">
      <div class="stats-small stats-small--1 card card-small">
        <div class="card-body p-0 d-flex">
          <div class="d-flex flex-column m-auto">
            <div class="stats-small__data text-center">
              <span class="stats-small__label text-uppercase">Seminars</span>
              <h6 class="stats-small__value count my-3">182</h6>
            </div>
            <div class="stats-small__data">
              <span
                class="stats-small__percentage stats-small__percentage--increase"
                >12.4%</span
              >
            </div>
          </div>
          <canvas height="120" class="blog-overview-stats-small-2"></canvas>
        </div>
      </div>
    </div>
    <div class="col-lg col-md-4 col-sm-6 mb-4">
      <div class="stats-small stats-small--1 card card-small">
        <div class="card-body p-0 d-flex">
          <div class="d-flex flex-column m-auto">
            <div class="stats-small__data text-center">
              <span class="stats-small__label text-uppercase">Comments</span>
              <h6 class="stats-small__value count my-3">8,147</h6>
            </div>
            <div class="stats-small__data">
              <span
                class="stats-small__percentage stats-small__percentage--decrease"
                >3.8%</span
              >
            </div>
          </div>
          <canvas height="120" class="blog-overview-stats-small-3"></canvas>
        </div>
      </div>
    </div>
    <div class="col-lg col-md-4 col-sm-6 mb-4">
      <div class="stats-small stats-small--1 card card-small">
        <div class="card-body p-0 d-flex">
          <div class="d-flex flex-column m-auto">
            <div class="stats-small__data text-center">
              <span class="stats-small__label text-uppercase">Users</span>
              <h6 class="stats-small__value count my-3">2,413</h6>
            </div>
            <div class="stats-small__data">
              <span
                class="stats-small__percentage stats-small__percentage--increase"
                >12.4%</span
              >
            </div>
          </div>
          <canvas height="120" class="blog-overview-stats-small-4"></canvas>
        </div>
      </div>
    </div>
  </div>
  <!-- End Small Stats Blocks -->
</template>

<script>
export default {
  name: "SmallStats",
  methods: {
    sync() {
      $(document).ready(() => {
        // Datasets
        var boSmallStatsDatasets = [
          {
            backgroundColor: "rgba(0, 184, 216, 0.1)",
            borderColor: "rgb(0, 184, 216)",
            data: [1, 2, 1, 3, 5, 4, 7]
          },
          {
            backgroundColor: "rgba(23,198,113,0.1)",
            borderColor: "rgb(23,198,113)",
            data: [1, 2, 3, 3, 3, 4, 4]
          },
          {
            backgroundColor: "rgba(255,180,0,0.1)",
            borderColor: "rgb(255,180,0)",
            data: [2, 3, 3, 3, 4, 3, 3]
          },
          {
            backgroundColor: "rgba(255,65,105,0.1)",
            borderColor: "rgb(255,65,105)",
            data: [1, 7, 1, 3, 1, 4, 8]
          },
          {
            backgroundColor: "rgb(0,123,255,0.1)",
            borderColor: "rgb(0,123,255)",
            data: [3, 2, 3, 2, 4, 5, 4]
          }
        ];

        // Options
        function boSmallStatsOptions(max) {
          return {
            maintainAspectRatio: true,
            responsive: true,
            // Uncomment the following line in order to disable the animations.
            // animation: false,
            legend: {
              display: false
            },
            tooltips: {
              enabled: false,
              custom: false
            },
            elements: {
              point: {
                radius: 0
              },
              line: {
                tension: 0.3
              }
            },
            scales: {
              xAxes: [
                {
                  gridLines: false,
                  scaleLabel: false,
                  ticks: {
                    display: false
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: false,
                  scaleLabel: false,
                  ticks: {
                    display: false,
                    suggestedMax: max
                  }
                }
              ]
            }
          };
        }

        // Generate the small charts
        boSmallStatsDatasets.map(function(el, index) {
          var chartOptions = boSmallStatsOptions(
            Math.max.apply(Math, el.data) + 1
          );
          var ctx = document.getElementsByClassName(
            "blog-overview-stats-small-" + (index + 1)
          );
          new Chart(ctx, {
            type: "line",
            data: {
              labels: [
                "Label 1",
                "Label 2",
                "Label 3",
                "Label 4",
                "Label 5",
                "Label 6",
                "Label 7"
              ],
              datasets: [
                {
                  label: "Today",
                  fill: "start",
                  data: el.data,
                  backgroundColor: el.backgroundColor,
                  borderColor: el.borderColor,
                  borderWidth: 1.5
                }
              ]
            },
            options: chartOptions
          });
        });
      });
    }
  },
  watch: {
    "$route": "sync"
  },
  created() {
    this.sync();
  }
};
</script>

<style></style>
