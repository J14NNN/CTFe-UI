<template>
  <div class="background">
    <el-scrollbar height="100vh">
      <div class="profile-container">
        <!-- <p>{{ $route.params.uid }}</p> -->
        <div class="Name-container">
          <h1>{{ getUsername }}</h1>
        </div>
        <div class="Score-container">
          <h1>Score:{{ totalScore }}</h1>
        </div>
          <div ref="chart" class="Chart-container" id="score-graph" style=""></div>
          <div class="Table-container">
            <el-table :data="user.solves" stripe style="width: 100%">
    <el-table-column prop="id" label="题目id" width="280" />
    <el-table-column prop="name" label="Name" >
      <template #default="scope">
      {{ getChallengeName(scope.row) }}
    </template>
    </el-table-column>
    <el-table-column prop="score" label="题目得分" >
      <template #default="scope">
      {{ getChallengeScore(scope.row) }}
    </template>
    </el-table-column>
    <el-table-column prop="time" label="解题时间" />
  </el-table>
          </div>
      </div>
    </el-scrollbar>
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
      totalScore:null,
    };
  },
  computed: {
    getUsername() {
      return this.user.name;
    },
    getUserscore() {
      return this.user.score;
    },
  },
  methods:{
    getChallengeName(row) {
      console.log(row);
    const matchingChallenge = this.challenges.find(challenge => challenge.id === row.id);
    return matchingChallenge ? matchingChallenge.name : '';
  },
  getChallengeScore(row) {
    const matchingChallenge = this.challenges.find(challenge => challenge.id === row.id);
    return matchingChallenge ? matchingChallenge.score : '';
  },


    //图表
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
        const places = this.user.solves;

        if (places.length === 0) {
          return false;
        }

        const option = {
          title: {
            left: "center",
            // text: `Top 10 ${CTFd.config.userMode === "teams" ? "Teams" : "Users"}`
            text: "得分情况"
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

          const team_score = [];
          const times = [];
          for (let j = 0; j < places.length; j++) {
            team_score.push(this.challenges.find((challenge) => places[j].id === challenge.id).score);//
            //this.challenges.find((challenge) => places[i]["solves"][j].id === challenge.id).score
            const date = dayjs(places[j].time);
            times.push(date.toDate());}
          

          const total_scores = this.cumulativeSum(team_score);
          const scores = times.map(function(e, i) {
            return [e, total_scores[i]];
          });

          option.legend.data.push(this.user.name);

          const data = {
            name: this.user.name,
            type: "line",
            label: {
              normal: {
                position: "top"
              }
            },


            data: scores
          };
          option.series.push(data);
        

        return option;

    },
    cumulativeSum(team_score) {
  return team_score.reduce((acc, val) => {
    const num = parseInt(val, 10);
    let sum = 0;
    if (!isNaN(num)) {
      sum = (acc.length > 0 ? parseInt(acc[acc.length - 1], 10) : 0) + num;
      acc.push(sum.toString());
    }
    this.totalScore=sum;
    return acc;
  }, []);
}

  },
  beforeMount() {
    this.id = this.$route.params.uid;
    this.user = this.teams.find((team) => team.id === this.id);
  },
  mounted() {
    this.createGraph();

  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  user-select: none;
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

.profile-container {
  margin-top: 100px;
}

.Name-container {
  font-family: "Times New Roman", Times, serif;
  font-size: 50px;

  text-align: center;
  color: transparent;
  -webkit-text-stroke-width: 2px;
  -moz-text-stroke-width: 2px;
  -webkit-text-stroke-color: #333;
  -moz-text-stroke-color: #333;
  text-shadow: 6px 6px rgb(255, 105, 105);
}
.Score-container {
  text-align: center;
  font-size: 15px;
}

.Chart-container{
  margin-left:auto;
  margin-right:auto;
  width: 80%; 
  height: 500px;
}

.Table-container{

  margin:100px auto 100px auto;
  width:80%
}
h1 {
  font-weight: 900;
}
</style>
