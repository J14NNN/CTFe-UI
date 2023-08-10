<template>
  <!-- <h3>{{ $route.params.cid }}</h3>
  <h3>{{ challenge}}</h3> -->
  <!-- <h3>{{ challengesVuex}}</h3> -->

  <div class="common-layout" v-if="this.challenge!=='error'">
    <el-container class="chall-container">
      <el-main class="chall-main">
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane label="Chall" name="first">
            <div>
              <p style="font-size: 40px; text-align: center">
                {{ challenge.name }}
              </p>
              <h1>题目分数 : {{ challenge.score }}</h1>

              <h1>题目类型 : {{ challenge.type }}</h1>

              <h1>已&ensp;解&ensp;决 : {{ challenge.solved }}</h1>

              <h1>题目描述:</h1>

              <h1>{{ challenge.description }}</h1>
              <br />
              <h1>
                题目附件:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <el-button type="primary">
                  <el-icon><Download /> </el-icon>
                  Download
                </el-button>
              </h1>
              <br />

              <div
                v-if="challenge.type === 'Web' || challenge.type === 'Pwn'"
                class="container-container"
              >
                <div
                  v-if="
                    !isContainerOpen &&
                    (challenge.type === 'Web' || challenge.type === 'Pwn')
                  "
                >
                  <el-button
                    type="primary"
                    size="large"
                    class="launch-button"
                    @click="openContainer"
                  >
                    <el-icon
                      ><div v-html="getcommonSvg('container')"></div>
                    </el-icon>
                    &nbsp;开启容器
                  </el-button>
                </div>

                <div v-if="isContainerOpen">
                  <a @click="autoCopy()" class="container-address"
                    >http://example.com</a
                  >
                  <el-progress
                    :percentage="percentage.toFixed(2)"
                    :stroke-width="16"
                  />
                  <p style="font-size: large">{{ timeLeft }}</p>
                  <el-button
                    type="primary"
                    size="large"
                    class="close-button"
                    @click="closeContainer"
                    >关闭容器</el-button
                  >
                  <el-button
                    type="primary"
                    size="large"
                    class="extend-button"
                    @click="extendTime"
                    >延长时间</el-button
                  >
                </div>
              </div>

              <br />
              <div>
                <el-form :model="form" label-width="40px">
                  <el-form-item
                    label="flag"
                    style="align-items: center; font-size: large"
                  >
                    <el-input
                      size="large"
                      v-model="form.flag"
                      placeholder="Please input flag"
                      class="input-with-button"
                    >
                      <template #append>
                        <el-button
                          size="large"
                          type="primary"
                          @click="submitFlag"
                          >提&nbsp;&nbsp;交</el-button
                        >
                      </template>
                    </el-input>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="排行榜" name="second">
            <el-table
              :data="solvedUsers.slice(startIndex, endIndex)"
              height="516"
              style="width: 100%"
            >
              <el-table-column prop="id" label="ID" width="180" />
              <el-table-column prop="name" label="Name" width="180" />
              <el-table-column prop="time" label="Date" />
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[10, 20, 50]"
              :page-size="pageSize"
              background
              layout="total, prev, pager, next"
              :total="solvedUsers.length"
              class="pagination"
            >
            </el-pagination>
          </el-tab-pane>

          <el-tab-pane label="Hint" name="third">
            <el-empty description="暂无提示" />
          </el-tab-pane>



          <el-tab-pane label="留言" name="fourth">
            
            <div v-if="messages.length">
              <h3>留言列表</h3>
              <ul>
                <li v-for="message in messages" :key="message.id">
                  <strong>{{ message.author }}</strong> 于
                  {{ message.time }} 留言：
                  <p>{{ message.content }}</p>
                </li>
              </ul>
            </div>
            <div v-else>
              <el-empty description="暂无留言"></el-empty>
            </div>
            <el-divider></el-divider>
            <el-form :model="messageForm" label-position="top">
              <el-form-item label="留言内容">
                <el-input
                  v-model="messageForm.content"
                  type="textarea"
                  :rows="5"
                  placeholder="请输入留言内容"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitMessage"
                  >提交</el-button
                >
                <el-button @click="resetMessageForm">重置</el-button>
              </el-form-item>
            </el-form>
            
          </el-tab-pane>
        </el-tabs>
      </el-main>

      <el-aside class="chall-aside">
        <!-- <div class="rank-container"> -->
        <el-row :gutter="0" justify="center">
          <el-col :span="10">
            <div class="chall-rank-title">
              <h1 style="text-align: center">解题前十名</h1>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="0" justify="start">
          <el-col :span="4"><div>排名</div></el-col>
          <el-col :span="1"> <el-divider direction="vertical" /></el-col>
          <el-col :span="8">
            <div>用户名</div>
          </el-col>
          <el-col :span="1"> <el-divider direction="vertical" /></el-col>
          <el-col :span="8">
            <div>时间</div>
          </el-col>
        </el-row>
        <el-empty v-if="solvedUsers.length === 0" description="一血会是你吗?" />

        <el-row
          v-else
          :gutter="0"
          v-for="(player, index) in topThree"
          :key="player.id"
          justify="start"
        >
          <!-- <el-space > -->
          <el-col :span="4"><div v-html="getSvg(index)"></div></el-col>
          <el-col :span="1"> <el-divider direction="vertical" /></el-col>
          <el-col :span="8">
            <div>{{ player.name }}</div>
          </el-col>
          <el-col :span="1"> <el-divider direction="vertical" /></el-col>
          <el-col :span="8">
            <div>{{ player.time.slice(5) }}</div>
          </el-col>

          <!-- </el-space> -->
        </el-row>
        <!-- </div> -->
        <el-row
          :gutter="0"
          v-for="(player, index) in solvedUsers.slice(3, 10)"
          :key="player.id"
          justify="start"
        >
          <!-- <el-space > -->
          <el-col :span="4"
            ><div>{{ index + 4 }}</div></el-col
          >
          <el-col :span="1"> <el-divider direction="vertical" /></el-col>
          <el-col :span="8">
            <div>{{ player.name }}</div>
          </el-col>
          <el-col :span="1"> <el-divider direction="vertical" /></el-col>
          <el-col :span="8">
            <div>{{ player.time.slice(5) }}</div>
          </el-col>

          <!-- </el-space> -->
        </el-row>
      </el-aside>
    </el-container>
    <!-- <Footer></Footer> -->
  </div>
  <div v-else class="emptyBackground" >
      <el-empty :image-size="300" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import { getRankSvg } from "../assets/js/svg.js";
import { getCommonSvg } from "../assets/js/svg.js";
import { ref } from "vue";


export default {
  data() {
    return {
      text:'666666666666666',
      messageForm: {
        content: '',
      },
      messages: [],
    
      isContainerOpen: false,

      timeLeft: "1:00:00",
      totalSecond: 3600,
      percentage: 100,
      timer: null,
      hasAdded: false,

      form: {
        flag: "",
      },
      challenge: {},
      challenges: [],

      currentPage: 1, // 当前页码
      pageSize: 12, // 每页显示条数
      solvedUsers: [
        {
          id: 237428,
          name: "三三三",
          time: "2023-07-29 13:30:00",
        },
        {
          id: 829175,
          name: "四四四四",
          time: "2023-07-30 09:00:00",
        },
        {
          id: 543090,
          name: "Frank",
          time: "2023-07-29 14:00:00",
        },
        {
          id: 617682,
          name: "Bella",
          time: "2023-07-30 10:00:00",
        },
        {
          id: 862114,
          name: "George",
          time: "2023-07-28 15:00:00",
        },
        {
          id: 429471,
          name: "Cathy",
          time: "2023-07-29 11:00:00",
        },
        {
          id: 161755,
          name: "Hank",
          time: "2023-07-28 16:00:00",
        },
        {
          id: 216390,
          name: "Derek",
          time: "2023-07-30 12:00:00",
        },
        {
          id: 470666,
          name: "Iris",
          time: "2023-07-28 14:00:00",
        },
        {
          id: 132016,
          name: "Emily",
          time: "2023-07-29 15:00:00",
        },
        {
          id: 953642,
          name: "ZXJ",
          time: "2023-07-30 15:00:00",
        },
        {
          id: 952719,
          name: "111111",
          time: "2023-07-27 15:00:00",
        },
        {
          id: 531083,
          name: "五五五五五",
          time: "2023-07-26 15:00:00",
        },
        {
          id: 798615,
          name: "六六六六六六",
          time: "2023-07-26 15:00:00",
        },
      ],

      activeName: ref("first"),
    };
  },
  // computed:{
  //   ...mapState(["challenge"])
  // }
  methods: {
    ...mapMutations(["setChallId"]),
    ...mapMutations(["setChallenges"]),

    getSvg(ranking) {
      return getRankSvg(ranking);
    },
    getcommonSvg(name) {
      return getCommonSvg(name);
    },

    handleCurrentChange(newPage) {
      this.currentPage = newPage;
    },

    openContainer() {
      this.isContainerOpen = true;
      this.timer = setInterval(() => {
        let [hour, minute, second] = this.timeLeft.split(":");
        second--;
        if (second < 0) {
          second = 59;
          minute--;
        }
        if (minute < 0) {
          minute = 59;
          hour--;
        }
        this.timeLeft = hour + ":" + minute + ":" + second;
        this.percentage = this.calculatePercentage();
        if (hour === 0 && minute === 0 && second === 0) {
          this.stop();
        }
      }, 1000);
    },
    closeContainer() {
      clearInterval(this.timer);
      this.isContainerOpen = false;
      this.timeLeft = "1:00:00";
      this.percentage = 100;
      this.totalSecond = 3600;
      this.timer = null;
      this.hasAdded = false;
    },
    extendTime() {
      if (!this.hasAdded) {
        this.hasAdded = true;
        let [hour, minute, second] = this.timeLeft.split(":");
        this.timeLeft = parseInt(hour) + 1 + ":" + minute + ":" + second;
        this.totalSecond += 3600;
      } else {
        this.warning();
      }
    },
    calculatePercentage() {
      let [hour, minute, second] = this.timeLeft.split(":");
      let hourToSecond = parseInt(hour) * 3600;
      let minuteToSecond = parseInt(minute) * 60;
      let currentSecond = hourToSecond + minuteToSecond + parseInt(second);
      return (currentSecond * 100) / this.totalSecond;
    },
    warning() {
      ElNotification({
        title: "Warning",
        message: "只能延长一次时间",
        type: "warning",
        offset: 100,
      });
    },
    success() {
      ElNotification({
        title: "Succuss",
        message: "复制成功",
        type: "success",
        offset: 100,
      });
    },

    autoCopy() {
      document.execCommand("copy");
      this.success();
    },

    handleSizeChange(size) {
      // 每页显示条数发生变化时的回调函数
      this.pageSize = size;
      this.currentPage = 1;
    },
    handleCurrentChange(page) {
      // 当前页码发生变化时的回调函数
      this.currentPage = page;
    },
  },
  computed: {
    ...mapState(["challId"]),
    ...mapState(["challengesVuex"]),
    ...mapGetters(["getChallenge"]),

    solvedUsers() {
      return this.solvedUsers.sort((a, b) => (a.time > b.time ? 1 : -1));
    },
    topThree() {
      const sortedPlayers = this.solvedUsers.sort((a, b) => a.time - b.time);
      return sortedPlayers.slice(0, 3);
    },

    startIndex() {
      return (this.currentPage - 1) * this.pageSize;
    },
    endIndex() {
      return this.currentPage * this.pageSize;
    },
  },
  beforeMount() {
    (this.challenges = JSON.parse(localStorage.getItem("challenges"))),
      this.setChallenges(this.challenges),
      // this.challengesVuex=this.challenges,
      this.setChallId(this.$route.params.cid),
      (this.challenge = this.getChallenge);
      console.log(this.challenge)
  },

};
</script>

<style scoped>
* {
  box-sizing: border-box;
  user-select: none;
}
.emptyBackground{
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  position: absolute;
  overflow: auto;
  padding-top:10%;

}
.container-address {
  user-select: all;
  font-size: large;
}
.common-layout {
  width: 100vw;
  height: 100vh;
  padding-right: 10px;
  margin-right: 10px;
  background-color: #ecf0f3;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  position: absolute;
  overflow: auto;
  /* overflow-y:auto; */
}

.chall-aside {
  top: 100px;
  width: 20%;
  height: auto;
  min-height: 100px;
  min-width: 340px;

  /* background-color: #ecf0f3; */
  background-color: white;
  margin: 100px 10% auto 0%;
  border-radius: 12px;
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  text-align: center;
  overflow: hidden;
}

.el-col {
  margin-bottom: 20px;
  /* background-color: #d1d9e6; */
}
.el-row {
  align-items: center; /* 在垂直方向上居中对齐 */
}

.chall-main {
  width: 60%;
  height: 100%;
  /* min-height: 670px; */
  min-width: 800px;
  /* background-color: #ecf0f3; */
  background-color: white;

  border-radius: 12px;
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  /* margin-right: 30px;
  margin-top:100px;
  margin-left:10%;
  margin-bottom:500px; */
  margin: 100px 30px auto 10%;
  padding-bottom: 0px;
  padding-top: 10px;
  overflow: hidden;
}

.container-container {
  text-align: center;
}

.launch-button {
  display: flex;
  margin: 0 auto;
  font-size: large;
}
.input-with-button {
  font-size: large;
}
.input-with-button .el-button {
  background-color: var(--el-color-primary);
  color: var(--el-color-white);
}
.input-with-button .el-button:hover {
  background-color: var(--el-color-primary-light-3) !important;
  color: var(--el-color-white);
}

.pagination {
  justify-content: center;
  margin: 20px auto 10px auto;
}



h3 {
  color: red;
}
</style>
