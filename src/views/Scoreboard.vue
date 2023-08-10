<template>
  <div class="background">
    <div class="scoreboard-container">
      <h1 class="scoreboard-title">Scoreboard</h1>

      <div
        ref="chart"
        id="score-graph"
        class="Chart-container "
        style="width: 80%; height: 500px"
      ></div>

      <div class="table-container matrix" id="scroll">
        <table id="scoreboard" class="table table-striped">
          <thead>
            <tr>
              <th width="5%" rowspan="3" style="vertical-align: bottom">
                <b>Rank</b>
              </th>
              <th
                width="20%"
                rowspan="3"
                style="vertical-align: bottom; min-width: 200px"
              >
                <b>Name</b>
              </th>
              <th
                width="10%"
                rowspan="3"
                style="vertical-align: bottom; min-width: 100px"
              >
                <b>Score</b>
              </th>
              <!-- TODO: 可适应布局调整  -->
              <th
                data-halign="center"
                data-align="center"
                :colspan="getMiscNum"
                style="text-align: center"
              >
                <b>MISC</b>
              </th>
              <th
                data-halign="center"
                data-align="center"
                :colspan="getWebNum"
                style="text-align: center"
              >
                <b>WEB</b>
              </th>
              <th
                data-halign="center"
                data-align="center"
                :colspan="getCryptoNum"
                style="text-align: center"
              >
                <b>CRYPTO</b>
              </th>
              <th
                data-halign="center"
                data-align="center"
                :colspan="getReverseNum"
                style="text-align: center"
              >
                <b>REVERSE</b>
              </th>
              <th
                data-halign="center"
                data-align="center"
                :colspan="getPwnNum"
                style="text-align: center"
              >
                <b>PWN</b>
              </th>
            </tr>

            <tr>
              <th
                v-for="(chal, index) in getMisc()"
                :key="index"
                class="chalname"
                :title="chal.type"
              >
                <div>
                  <span>{{ chal.name }}</span>
                </div>
              </th>

              <th
                v-for="(chal, index) in getWeb()"
                :key="index"
                class="chalname"
                :title="chal.type"
              >
                <div>
                  <span>{{ chal.name }}</span>
                </div>
              </th>

              <th
                v-for="(chal, index) in getCrypto()"
                :key="index"
                class="chalname"
                :title="chal.type"
              >
                <div>
                  <span>{{ chal.name }}</span>
                </div>
              </th>

              <th
                v-for="(chal, index) in getReverse()"
                :key="index"
                class="chalname"
                :title="chal.type"
              >
                <div>
                  <span>{{ chal.name }}</span>
                </div>
              </th>

              <th
                v-for="(chal, index) in getPwn()"
                :key="index"
                class="chalname"
                :title="chal.type"
              >
                <div>
                  <span>{{ chal.name }}</span>
                </div>
              </th>
            </tr>

            <tr>
              <th
                v-for="(chal, index) in getMisc()"
                :key="index"
                class="score"
                :title="chal.type"
              >
                <div>
                  <span>{{ chal.score }}</span>
                </div>
              </th>

              <th
                v-for="(chal, index) in getWeb()"
                :key="index"
                class="score"
                :title="chal.type"
              >
                <div>
                  <span>{{ chal.score }}</span>
                </div>
              </th>

              <th
                v-for="(chal, index) in getCrypto()"
                :key="index"
                class="score"
                :title="chal.type"
              >
                <div>
                  <span>{{ chal.score }}</span>
                </div>
              </th>

              <th
                v-for="(chal, index) in getReverse()"
                :key="index"
                class="score"
                :title="chal.type"
              >
                <div>
                  <span>{{ chal.score }}</span>
                </div>
              </th>

              <th
                v-for="(chal, index) in getPwn()"
                :key="index"
                class="score"
                :title="chal.type"
              >
                <div>
                  <span>{{ chal.score }}</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(team, index) in sortedTeams" :key="index">
              <td>{{ index + 1 }}</td>
              <!-- <td><a href="{{ request.script_root }}/{{ mode }}/{{ team.teamid }}">{{ team.name }}</a></td> -->
              <td @click="toProfile(team.id)" class="toProfile">{{ team.name }}</td>
              <td>{{ team.score }}</td>

              <td
                class="chalmark"
                v-for="(chal, index) in sortedChal"
                :key="index"
              >
                <div v-if="team.solves.find((solve) => solve.id === chal.id)">
                  <img
                    v-if="1 === team.blood[chal.id]"
                    src="../assets/imgs/medal1.png"
                    width="100%"
                    height="100%"
                  />
                  <img
                    v-else-if="2 === team.blood[chal.id]"
                    src="../assets/imgs/medal2.png"
                    width="100%"
                    height="100%"
                  />
                  <img
                    v-else-if="3 === team.blood[chal.id]"
                    src="../assets/imgs/medal3.png"
                    width="100%"
                    height="100%"
                  />
                  <img
                    v-else
                    src="../assets/imgs/flag.png"
                    width="100%"
                    height="100%"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import dayjs from "dayjs";
export default {
  data() {
    return {
      teams: [
        {
          id: "1",
          name: "五五五五五",
          score: 400,
          solves: [
            { id: 1, time: "2023-08-03T12:30:00Z" },
            { id: 5, time: "2023-08-03T14:00:00Z" },
            { id: 7, time: "2023-08-03T15:45:00Z" },
            { id: 10, time: "2023-08-03T18:20:00Z" },
          ],
          blood: { 1: 1, 5: 2, 7: 3, 10: 4 },
        },
        {
          id: "2",
          name: "六六六六六六",
          score: 300,
          solves: [
            { id: 2, time: "2023-08-03T13:00:00Z" },
            { id: 8, time: "2023-08-03T16:30:00Z" },
            { id: 13, time: "2023-08-03T19:15:00Z" },
          ],
          blood: { 2: 5, 8: 6, 13: 8 },
        },
        {
          id: "3",
          name: "Team3",
          score: 240,
          solves: [
            { id: 4, time: "2023-08-03T13:45:00Z" },
            { id: 11, time: "2023-08-03T17:00:00Z" },
            { id: 20, time: "2023-08-03T20:30:00Z" },
          ],
          blood: { 4: 9, 11: 11, 20: 17 },
        },
        {
          id: "4",
          name: "Team4",
          score: 450,
          solves: [
            { id: 3, time: "2023-08-03T12:45:00Z" },
            { id: 6, time: "2023-08-03T14:30:00Z" },
            { id: 9, time: "2023-08-03T16:00:00Z" },
            { id: 14, time: "2023-08-03T19:30:00Z" },
          ],
          blood: { 3: 7, 6: 12, 9: 14, 14: 19 },
        },
        {
          id: "5",
          name: "Team5",
          score: 350,
          solves: [
            { id: 1, time: "2023-08-03T12:50:00Z" },
            { id: 7, time: "2023-08-03T15:00:00Z" },
            { id: 12, time: "2023-08-03T18:45:00Z" },
          ],
          blood: { 1: 2, 7: 4, 12: 16 },
        },
        {
          id: "6",
          name: "Team6",
          score: 200,
          solves: [
            { id: 2, time: "2023-08-03T13:30:00Z" },
            { id: 8, time: "2023-08-03T16:45:00Z" },
            { id: 15, time: "2023-08-03T20:00:00Z" },
          ],
          blood: { 2: 3, 8: 9, 15: 18 },
        },
        {
          id: "7",
          name: "Team7",
          score: 480,
          solves: [
            { id: 1, time: "2023-08-03T12:15:00Z" },
            { id: 4, time: "2023-08-03T13:15:00Z" },
            { id: 6, time: "2023-08-03T14:15:00Z" },
            { id: 9, time: "2023-08-03T15:15:00Z" },
            { id: 11, time: "2023-08-03T16:15:00Z" },
            { id: 13, time: "2023-08-03T17:15:00Z" },
          ],
          blood: { 1: 3, 4: 8, 6: 10, 9: 13, 11: 15, 13: 20 },
        },
        {
          id: "8",
          name: "Team8",
          score: 320,
          solves: [
            { id: 3, time: "2023-08-03T13:45:00Z" },
            { id: 7, time: "2023-08-03T15:30:00Z" },
            { id: 10, time: "2023-08-03T18:00:00Z" },
          ],
          blood: { 3: 6, 7: 13, 10: 16 },
        },
        {
          id: "9",
          name: "Team9",
          score: 250,
          solves: [
            { id: 4, time: "2023-08-03T13:50:00Z" },
            { id: 6, time: "2023-08-03T14:45:00Z" },
            { id: 8, time: "2023-08-03T15:45:00Z" },
            { id: 11, time: "2023-08-03T16:45:00Z" },
            { id: 13, time: "2023-08-03T17:45:00Z" },
          ],
          blood: { 4: 10, 6: 11, 8: 12, 11: 14, 13: 18 },
        },
        {
          id: "10",
          name: "Team10",
          score: 520,
          solves: [
            { id: 1, time: "2023-08-03T12:00:00Z" },
            { id: 2, time: "2023-08-03T12:45:00Z" },
            { id: 4, time: "2023-08-03T13:30:00Z" },
            { id: 7, time: "2023-08-03T14:45:00Z" },
            { id: 9, time: "2023-08-03T15:45:00Z" },
            { id: 10, time: "2023-08-03T17:00:00Z" },
            { id: 13, time: "2023-08-03T18:00:00Z" },
            { id: 15, time: "2023-08-03T19:00:00Z" },
          ],
          blood: { 1: 4, 2: 5, 4: 6, 7: 9, 9: 12, 10: 1, 13: 17, 15: 19 },
        },
        {
          id: "11",
          name: "Team11",
          score: 360,
          solves: [
            { id: 3, time: "2023-08-03T13:15:00Z" },
            { id: 6, time: "2023-08-03T14:15:00Z" },
            { id: 8, time: "2023-08-03T15:15:00Z" },
            { id: 11, time: "2023-08-03T16:30:00Z" },
          ],
          blood: { 3: 8, 6: 13, 8: 15, 11: 16 },
        },
        {
          id: "12",
          name: "Team12",
          score: 170,
          solves: [
            { id: 5, time: "2023-08-03T14:45:00Z" },
            { id: 12, time: "2023-08-03T18:00:00Z" },
            { id: 14, time: "2023-08-03T19:30:00Z" },
          ],
          blood: { 5: 6, 12: 15, 14: 18 },
        },
        {
          id: "13",
          name: "Team13",
          score: 470,
          solves: [
            { id: 2, time: "2023-08-03T12:10:00Z" },
            { id: 4, time: "2023-08-03T12:30:00Z" },
            { id: 6, time: "2023-08-03T12:50:00Z" },
            { id: 8, time: "2023-08-03T13:10:00Z" },
            { id: 10, time: "2023-08-03T13:30:00Z" },
            { id: 13, time: "2023-08-03T14:00:00Z" },
            { id: 7, time: "2023-08-03T14:00:00Z" },
          ],
          blood: { 2: 1, 4: 2, 6: 3, 8: 4, 10: 5, 13: 7, 7: 3 },
        },
        {
          id: "14",
          name: "Team14",
          score: 340,
          solves: [
            { id: 1, time: "2023-08-03T12:20:00Z" },
            { id: 4, time: "2023-08-03T13:20:00Z" },
            { id: 9, time: "2023-08-03T16:20:00Z" },
            { id: 11, time: "2023-08-03T17:20:00Z" },
            { id: 13, time: "2023-08-03T18:20:00Z" },
          ],
          blood: { 1: 5, 4: 12, 9: 11, 11: 14, 13: 16 },
        },
        {
          id: "15",
          name: "Team15",
          score: 290,
          solves: [
            { id: 1, time: "2023-08-03T13:00:00Z" },
            { id: 5, time: "2023-08-03T14:15:00Z" },
            { id: 9, time: "2023-08-03T16:25:00Z" },
            { id: 11, time: "2023-08-03T17:30:00Z" },
          ],
          blood: { 1: 7, 5: 10, 9: 12, 11: 15 },
        },
      ],
      challenges: [
        {
          id: 1,
          name: "hedgehog",
          type: "Web",
          score: "500",
          solved: "5",
          description:
            "In this web challenge, you need to find and exploit vulnerabilities to obtain the flag. This challenge will test your web vulnerability exploitation skills.",
        },
        {
          id: 2,
          name: "abcdefghijklmnopq",
          type: "Misc",
          score: "400",
          solved: "4",
          description:
            "This is a multi-disciplinary challenge where you need to use various skills to solve the problem.",
        },
        {
          id: 3,
          name: "vulture",
          type: "Crypto",
          score: "300",
          solved: "3",
          description:
            "This crypto challenge requires you to use your cryptography knowledge to decrypt an encrypted message.",
        },
        {
          id: 4,
          name: "lemur",
          type: "Reverse",
          score: "200",
          solved: "2",
          description:
            "This is a reverse engineering challenge where you need to analyze a binary file and find hidden information.",
        },
        {
          id: 5,
          name: "otter",
          type: "Pwn",
          score: "100",
          solved: "1",
          description:
            "This is a pwn challenge where you need to exploit a vulnerability in a program to obtain the flag.",
        },
        {
          id: 6,
          name: "unicorn",
          type: "Web",
          score: "500",
          solved: "5",
          description:
            "In this web challenge, you need to find and exploit vulnerabilities to obtain the flag. This challenge will test your web vulnerability exploitation skills.",
        },
        {
          id: 7,
          name: "iguana66",
          type: "Misc",
          score: "400",
          solved: "4",
          description:
            "This is a multi-disciplinary challenge where you need to use various skills to solve the problem.",
        },
        {
          id: 8,
          name: "toucan",
          type: "Crypto",
          score: "300",
          solved: "3",
          description:
            "This crypto challenge requires you to use your cryptography knowledge to decrypt an encrypted message.",
        },
        {
          id: 9,
          name: "zebra",
          type: "Reverse",
          score: "200",
          solved: "2",
          description:
            "This is a reverse engineering challenge where you need to analyze a binary file and find hidden information.",
        },
        {
          id: 10,
          name: "narwhal",
          type: "Pwn",
          score: "100",
          solved: "1",
          description:
            "This is a pwn challenge where you need to exploit a vulnerability in a program to obtain the flag.",
        },
        {
          id: 11,
          name: "flamingo",
          type: "Web",
          score: "500",
          solved: "5",
          description:
            "In this web challenge, you need to find and exploit vulnerabilities to obtain the flag. This challenge will test your web vulnerability exploitation skills.",
        },
        {
          id: 12,
          name: "jaguar",
          type: "Misc",
          score: "400",
          solved: "4",
          description:
            "This is a multi-disciplinary challenge where you need to use various skills to solve the problem.",
        },
        {
          id: 13,
          name: "walrus",
          type: "Crypto",
          score: "300",
          solved: "3",
          description:
            "This crypto challenge requires you to use your cryptography knowledge to decrypt an encrypted message.",
        },
        {
          id: 14,
          name: "abcdefghijklmnopqrstuvwxyz",
          type: "Reverse",
          score: "200",
          solved: "2",
          description:
            "This is a reverse engineering challenge where you need to analyze a binary file and find hidden information.",
        },
        {
          id: 15,
          name: "monkey",
          type: "Pwn",
          score: "100",
          solved: "1",
          description:
            "This is a pwn challenge where you need to exploit a vulnerability in a program to obtain the flag.",
        },
        {
          id: 16,
          name: "sloth",
          type: "Web",
          score: "500",
          solved: "5",
          description:
            "In this web challenge, you need to find and exploit vulnerabilities to obtain the flag. This challenge will test your web vulnerability exploitation skills.",
        },
        {
          id: 17,
          name: "dragon",
          type: "Misc",
          score: "400",
          solved: "4",
          description:
            "This is a multi-disciplinary challenge where you need to use various skills to solve the problem.",
        },
        {
          id: 18,
          name: "xenops",
          type: "Crypto",
          score: "300",
          solved: "3",
          description:
            "This crypto challenge requires you to use your cryptography knowledge to decrypt an encrypted message.",
        },
        {
          id: 19,
          name: "rhinoceros",
          type: "Reverse",
          score: "200",
          solved: "2",
          description:
            "This is a reverse engineering challenge where you need to analyze a binary file and find hidden information.",
        },
        {
          id: 20,
          name: "panda",
          type: "Pwn",
          score: "100",
          solved: "1",
          description:
            "This is a pwn challenge where you need to exploit a vulnerability in a program to obtain the flag.",
        },
        {
          id: 21,
          name: "elephant",
          type: "Web",
          score: "500",
          solved: "5",
          description:
            "In this web challenge, you need to find and exploit vulnerabilities to obtain the flag. This challenge will test your web vulnerability exploitation skills.",
        },
        {
          id: 22,
          name: "quokka",
          type: "Misc",
          score: "400",
          solved: "4",
          description:
            "This is a multi-disciplinary challenge where you need to use various skills to solve the problem.",
        },
        {
          id: 23,
          name: "giraffe",
          type: "Crypto",
          score: "300",
          solved: "3",
          description:
            "This crypto challenge requires you to use your cryptography knowledge to decrypt an encrypted message.",
        },
        {
          id: 24,
          name: "hedgehog",
          type: "Reverse",
          score: "200",
          solved: "2",
          description:
            "This is a reverse engineering challenge where you need to analyze a binary file and find hidden information.",
        },
        {
          id: 25,
          name: "otter",
          type: "Pwn",
          score: "100",
          solved: "1",
          description:
            "This is a pwn challenge where you need to exploit a vulnerability in a program to obtain the flag.",
        },
        {
          id: 26,
          name: "koala",
          type: "Web",
          score: "500",
          solved: "5",
          description:
            "In this web challenge, you need to find and exploit vulnerabilities to obtain the flag. This challenge will test your web vulnerability exploitation skills.",
        },
        {
          id: 27,
          name: "unicorn",
          type: "Misc",
          score: "400",
          solved: "4",
          description:
            "This is a multi-disciplinary challenge where you need to use various skills to solve the problem.",
        },
        {
          id: 28,
          name: "iguana",
          type: "Crypto",
          score: "300",
          solved: "3",
          description:
            "This crypto challenge requires you to use your cryptography knowledge to decrypt an encrypted message.",
        },
        {
          id: 29,
          name: "lemur",
          type: "Reverse",
          score: "200",
          solved: "2",
          description:
            "This is a reverse engineering challenge where you need to analyze a binary file and find hidden information.",
        },
        {
          id: 30,
          name: "toucan",
          type: "Pwn",
          score: "100",
          solved: "1",
          description:
            "This is a pwn challenge where you need to exploit a vulnerability in a program to obtain the flag.",
        },
      ],
      id: 0,
      user: {},
      totalScore: null,
      myChart: null,
      
    };
  },
  methods: {
    toProfile(id){
      this.$router.push('/profile/' + id)
    },


    getMisc() {
      return this.challenges.filter((challenge) => challenge.type === "Misc");
    },
    getWeb() {
      return this.challenges.filter((challenge) => challenge.type === "Web");
    },
    getCrypto() {
      return this.challenges.filter((challenge) => challenge.type === "Crypto");
    },
    getReverse() {
      return this.challenges.filter(
        (challenge) => challenge.type === "Reverse"
      );
    },
    getPwn() {
      return this.challenges.filter((challenge) => challenge.type === "Pwn");
    },




    async createGraph() {
  // const option = await this.buildGraphData();
  const option = this.buildGraphData();

  if (option === false) {
    const graph = document.querySelector("#score-graph");
    graph.innerHTML = '<h3 class="opacity-50 text-center w-100 justify-content-center align-self-center">No solves yet</h3>';
    return;
  }

  const graph = document.querySelector("#score-graph");
  graph.innerHTML = ""; // Remove spinners

  let chart = echarts.init(graph);
  chart.setOption(option);

  window.addEventListener("resize", () => {
    if (chart != null && chart != undefined) {
      chart.resize();
    }
  });
},

    buildGraphData() {
        const places = this.sortedTeams.slice(0,10);

        if (places.length === 0) {
          return false;
        }

        const option = {
          title: {
            left: "center",
            // text: `Top 10 ${CTFd.config.userMode === "teams" ? "Teams" : "Users"}`
            text: "前十名得分情况"
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross"
            }
          },
          legend: {
            type: "scroll",
            orient: "horizontal",
            align: "left",
            bottom: 35,
            data: []
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: "none"
              },
              saveAsImage: {}
            }
          },
          grid: {
            containLabel: true
          },
          xAxis: [
            {
              type: "time",
              boundaryGap: false,
              data: []
            }
          ],
          yAxis: [
            {
              type: "value"
            }
          ],
          dataZoom: [
            {
              id: "dataZoomX",
              type: "slider",
              xAxisIndex: [0],
              filterMode: "filter",
              height: 20,
              top: 35,
              fillerColor: "rgba(233, 236, 241, 0.4)"
            }
          ],
          series: []
        };

        for (let i = 0; i < 10; i++) {
          const team_score = [];
          const times = [];
          for (let j = 0; j < places[i]["solves"].length; j++) {
            team_score.push(this.challenges.find((challenge) => places[i]["solves"][j].id === challenge.id).score);//
            //this.challenges.find((challenge) => places[i]["solves"][j].id === challenge.id).score
            const date = dayjs(places[i]["solves"][j].time);
            times.push(date.toDate());
          }

          const total_scores = this.cumulativeSum(team_score);
          const scores = times.map(function(e, i) {
            return [e, total_scores[i]];
          });

          option.legend.data.push(places[i]["name"]);

          const data = {
            name: places[i]["name"],
            type: "line",
            label: {
              normal: {
                position: "top"
              }
            },
            emphasis: {
  focus: 'series'
},

            data: scores
          };
          option.series.push(data);
        }

        return option;

    },
    cumulativeSum(team_score) {
  return team_score.reduce((acc, val) => {
    const num = parseInt(val, 10);
    if (!isNaN(num)) {
      const sum = (acc.length > 0 ? parseInt(acc[acc.length - 1], 10) : 0) + num;
      acc.push(sum.toString());
    }
    return acc;
  }, []);
}




    
  },
  computed: {
    getMiscNum() {
      return this.challenges.filter((challenge) => challenge.type === "Misc")
        .length;
    },
    getWebNum() {
      return this.challenges.filter((challenge) => challenge.type === "Web")
        .length;
    },
    getCryptoNum() {
      return this.challenges.filter((challenge) => challenge.type === "Crypto")
        .length;
    },
    getReverseNum() {
      return this.challenges.filter((challenge) => challenge.type === "Reverse")
        .length;
    },
    getPwnNum() {
      return this.challenges.filter((challenge) => challenge.type === "Pwn")
        .length;
    },

    sortedTeams() {
      return this.teams.slice().sort((a, b) => b.score - a.score);
    },

    sortedChal() {
      return this.getMisc()
        .concat(this.getWeb())
        .concat(this.getCrypto())
        .concat(this.getReverse())
        .concat(this.getPwn());
    },
  },
  mounted() {
    this.createGraph();
    const table = document.getElementById('scroll');
    let isDragging = false;
    let startX;
    let scrollLeft;

    table.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - table.offsetLeft;
      scrollLeft = table.scrollLeft;
    });

    table.addEventListener('mouseleave', () => {
      isDragging = false;
    });

    table.addEventListener('mouseup', () => {
      isDragging = false;
    });

    table.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - table.offsetLeft;
      const walk = (x - startX) * 2; // 控制拖动速度
      table.scrollLeft = scrollLeft - walk;
    });
  }

};
</script>

<style scoped>
* {
  box-sizing: border-box;
  user-select: none;
  touch-action: auto !important;
}

.background {
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  position: absolute;
  overflow: auto;
  background-color: #ecf0f3;
}
.scoreboard-container {
  margin-top: 100px;
  margin-bottom: 100px;
}

.scoreboard-title {
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  color: transparent;
  -webkit-text-stroke-width: 2px;
  -moz-text-stroke-width: 2px;
  -webkit-text-stroke-color: #333;
  -moz-text-stroke-color: #333;
  text-shadow: 6px 6px hotpink;
}
.Chart-container {
  margin-left: auto;
  margin-right: auto;
}
.background {
  padding: 20px;
}
.table {
  width: auto;
  border-collapse: collapse;
  background-color: #fff;

  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.5);
  cursor: grab;
  cursor: -o-grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  position: relative;
  overflow: hidden;
}
.table th,
.table td {
  padding: 10px;
  text-align: left;
}
.table th {
  background-color: #fff;
}

.table-striped tbody tr:nth-of-type(odd) {
  /* background-color: #fafafa; */
  background-color: #ecf0f3;
}
.chalname {
  text-align: center;
  padding: 5px;
  font-size: large;
}
.score {
  text-align: center;
  padding: 5px;
}
.chalmark {
  text-align: center;
  padding: 5px;
}
.chalmark img {
  max-width: 100%;
  max-height: 100%;
}

.table-container {
  margin-left: 5%;
  margin-right: 5%;
  width: 100%;
  overflow-x: scroll;
  width: auto;
  cursor: grab;
  cursor: -o-grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  align-items: center;
  z-index: 999;
  text-align: center;
  padding: right -100px !important;
}

th.chalname {
  height: 80px;
  width: 80px;
  min-width: 80px;
  max-width: 80px;
  vertical-align: bottom;
  padding: 0;
  font-size: 16px;
  line-height: 0.8;
}

.chalname > div {
  position: relative;
  top: 0px;
  left: 30px;
  height: 100%;
  overflow: hidden;
  /* TODO border */
  -webkit-transform: skew(-45deg, 0deg);
  transform: skew(-45deg, 0deg);
}

.chalname span {
  display: inline-block;
  position: absolute;
  bottom: 30px;
  left: -30px;
  text-align: left;
  width: 85px;
  -webkit-transform: skew(45deg, 0deg) rotate(315deg);
  transform: skew(45deg, 0deg) rotate(315deg);
}

.table img {
  display: block;
  width: 2.15rem;
  height: auto;
}

.chalmark {
  font-size: 20px;
}

/* 设置表头中的竖线 */

#scoreboard thead tr:first-child th:nth-child(4),
#scoreboard thead tr:first-child th:nth-child(5),
#scoreboard thead tr:first-child th:nth-child(6),
#scoreboard thead tr:first-child th:nth-child(7) {
  border-right: 1px solid black;
}

/* 设置表格中的横线 */
#scoreboard tbody tr td {
  border-bottom: 1px solid black;
}

#scoreboard thead tr th {
  border-bottom: 2px solid black;
  border-top: 2px solid #a4a0a8;
}


.toProfile:hover{
  color:#409EFF;
}
</style>
