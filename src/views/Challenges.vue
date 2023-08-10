<template>
  <div class="container">
    <el-row class="tac" >
      <el-col :span="12">
        <div class="Nav-container">
        <div class="changeDisplay-btn">
          <el-radio-group v-model="radio1" >
            <el-radio-button label="Card" @click="DisplayCard"></el-radio-button>
            <el-radio-button label="List" @click="DisplayList"></el-radio-button>
            
          </el-radio-group>
        </div>
        
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
        >


          <el-menu-item index="1" @click="displayType = 'All'">
            <el-icon>
              <div class="menuIcon" v-html="getSvg('All')"></div>
            </el-icon>
            <span>All</span>
          </el-menu-item>

          <el-menu-item index="2" @click="displayType = 'Misc'">
            <el-icon>
              <div v-html="getSvg('Misc')"></div>
            </el-icon>
            <span>Misc</span>
          </el-menu-item>

          <el-menu-item index="3" @click="displayType = 'Web'">
            <el-icon>
              <div v-html="getSvg('Web')"></div>
            </el-icon>
            <span>Web</span>
          </el-menu-item>

          <el-menu-item index="4" @click="displayType = 'Crypto'">
            <el-icon>
              <div v-html="getSvg('Crypto')"></div>
            </el-icon>
            <span>Crypto</span>
          </el-menu-item>

          <el-menu-item index="5" @click="displayType = 'Reverse'">
            <el-icon >
              <div  v-html="getSvg('Reverse')"></div>
            </el-icon>
            <span>Reverse</span>
          </el-menu-item>

          <el-menu-item index="6" @click="displayType = 'Pwn'">
            <el-icon >
              <div v-html="getSvg('Pwn')"></div>
            </el-icon>
            <span>Pwn</span>
          </el-menu-item>
        </el-menu></div>
      </el-col>

      <el-space v-show="showCard">
        <el-scrollbar max-height="100vh" style="position: fixed; left: 0">
          <div class="challtype-title"><p>{{ displayType }}</p></div>
          <div class="card-container">
            <el-card
              v-for="(challenge, index) in challengesVuex"
              v-show="isChallShow(challenge)"
              :key="index"
              class="box-card"
              style="width: 250px"
              @click="enterChallenge(challenge.id)"
              ref="cards"
            >
            <!-- <a :href="'challenge/'+challenge.id"> -->
              <h1 >{{ challenge.name }}</h1>
              <el-divider class="line" />
              <div class="score-container">
                <p class="scorenum">{{ challenge.score }}</p>
                <p class="pt">pt</p>
              </div>
              <div class="solvedNum">
                <p>solved:{{ challenge.solved }}</p>
              </div>
              <div
                class="icon-container"
                v-html="getSvg(challenge.type)"
              ></div>
            <!-- </a> -->
            </el-card>
          </div>
        </el-scrollbar>
      </el-space>


      <el-space v-show="!showCard">
        <el-scrollbar max-height="100vh" style="position: fixed; left: 0">
          <div class="challtype-title"><p>{{ displayType }}</p></div>
          <div class="card-container">

            <el-table @row-click="ListenterChallenge" :data="filteredChallenges" stripe style="width: 100%">
              <el-table-column prop="id" label="ID" width="200" />
    <el-table-column prop="name" label="Name" width="400" />
    <el-table-column prop="type" label="Type" />
    <el-table-column prop="score" label="Score" />
    <el-table-column prop="solved" label="Sovled" />
  </el-table>
        

          </div>
        </el-scrollbar>
      </el-space>
    </el-row>
  </div>
</template>
  
<script>
import { ref } from "vue";
import { getChallSvg } from "../assets/js/svg"

import { mapState,mapMutations } from 'vuex';

export default {
  data() {
    return {
      
      displayType: "All",
      radio1: ref("Card"),
      radio2: ref("List"),
      

      showCard:true,
      showList:false,

      selectedType: "",

      challTypes: ["Misc", "Web", "Crypto", "Reverse", "Pwn"],
      
      challenges: [
  { 
    id: 1, 
    name: "hedgehog", 
    type: "Web", 
    score: "500",
    solved: "5",
    description: "In this web challenge, you need to find and exploit vulnerabilities to obtain the flag. This challenge will test your web vulnerability exploitation skills."
  },
  { 
    id: 2, 
    name: "koala", 
    type: "Misc", 
    score: "400",
    solved: "4",
    description: "This is a multi-disciplinary challenge where you need to use various skills to solve the problem."
  },
  { 
    id: 3, 
    name: "vulture", 
    type: "Crypto", 
    score: "300",
    solved: "3",
    description: "This crypto challenge requires you to use your cryptography knowledge to decrypt an encrypted message."
  },
  { 
    id: 4, 
    name: "lemur", 
    type: "Reverse", 
    score: "200",
    solved: "2",
    description: "This is a reverse engineering challenge where you need to analyze a binary file and find hidden information."
  },
  { 
    id: 5, 
    name: "otter", 
    type: "Pwn", 
    score: "100",
    solved: "1",
    description: "This is a pwn challenge where you need to exploit a vulnerability in a program to obtain the flag."
  },
  { 
    id: 6, 
    name: "unicorn", 
    type: "Web", 
    score: "500", 
    solved: "5",
    description: "In this web challenge, you need to find and exploit vulnerabilities to obtain the flag. This challenge will test your web vulnerability exploitation skills."
  },
  { 
    id: 7, 
    name: "iguana", 
    type: "Misc", 
    score: "400", 
    solved: "4",
    description: "This is a multi-disciplinary challenge where you need to use various skills to solve the problem."
  },
  { 
    id: 8, 
    name: "toucan", 
    type: "Crypto", 
    score: "300", 
    solved: "3",
    description: "This crypto challenge requires you to use your cryptography knowledge to decrypt an encrypted message."
  },
  { 
    id: 9, 
    name: "zebra", 
    type: "Reverse", 
    score: "200", 
    solved: "2",
    description: "This is a reverse engineering challenge where you need to analyze a binary file and find hidden information."
  },
  { 
    id: 10, 
    name: "narwhal", 
    type: "Pwn", 
    score: "100", 
    solved: "1",
    description: "This is a pwn challenge where you need to exploit a vulnerability in a program to obtain the flag."
  },
  { 
    id: 11, 
    name: "flamingo", 
    type: "Web", 
    score: "500", 
    solved: "5",
    description: "In this web challenge, you need to find and exploit vulnerabilities to obtain the flag. This challenge will test your web vulnerability exploitation skills."
  },
  { 
    id: 12, 
    name: "jaguar", 
    type: "Misc", 
    score: "400", 
    solved: "4",
    description: "This is a multi-disciplinary challenge where you need to use various skills to solve the problem."
  },
  { 
    id: 13, 
    name: "walrus", 
    type: "Crypto", 
    score: "300", 
    solved: "3",
    description: "This crypto challenge requires you to use your cryptography knowledge to decrypt an encrypted message."
  },
  { 
    id: 14, 
    name: "cactus", 
    type: "Reverse", 
    score: "200", 
    solved: "2",
    description: "This is a reverse engineering challenge where you need to analyze a binary file and find hidden information."
  },
  { 
    id: 15, 
    name: "monkey", 
    type: "Pwn", 
    score: "100", 
    solved: "1",
    description: "This is a pwn challenge where you need to exploit a vulnerability in a program to obtain the flag."
  },
  { 
    id: 16, 
    name: "sloth", 
    type: "Web", 
    score: "500", 
    solved: "5",
    description: "In this web challenge, you need to find and exploit vulnerabilities to obtain the flag. This challenge will test your web vulnerability exploitation skills."
  },
  { 
    id: 17, 
    name: "dragon", 
    type: "Misc", 
    score: "400", 
    solved: "4",
    description: "This is a multi-disciplinary challenge where you need to use various skills to solve the problem."
  },
  { 
    id: 18, 
    name: "xenops", 
    type: "Crypto", 
    score: "300", 
    solved: "3",
    description: "This crypto challenge requires you to use your cryptography knowledge to decrypt an encrypted message."
  },
  { 
    id: 19, 
    name: "rhinoceros", 
    type: "Reverse", 
    score: "200", 
    solved: "2",
    description: "This is a reverse engineering challenge where you need to analyze a binary file and find hidden information."
  },
  { 
    id: 20, 
    name: "panda", 
    type: "Pwn", 
    score: "100", 
    solved: "1",
    description: "This is a pwn challenge where you need to exploit a vulnerability in a program to obtain the flag."
  },
  { 
    id: 21, 
    name: "elephant", 
    type: "Web", 
    score: "500", 
    solved: "5",
    description: "In this web challenge, you need to find and exploit vulnerabilities to obtain the flag. This challenge will test your web vulnerability exploitation skills."
  },
  { 
    id: 22, 
    name: "quokka", 
    type: "Misc", 
    score: "400", 
    solved: "4",
    description: "This is a multi-disciplinary challenge where you need to use various skills to solve the problem."
  },
  { 
    id: 23, 
    name: "giraffe", 
    type: "Crypto", 
    score: "300", 
    solved: "3",
    description: "This crypto challenge requires you to use your cryptography knowledge to decrypt an encrypted message."
  },
  { 
    id: 24, 
    name: "hedgehog", 
    type: "Reverse", 
    score: "200", 
    solved: "2",
    description: "This is a reverse engineering challenge where you need to analyze a binary file and find hidden information."
  },
  { 
    id: 25, 
    name: "otter", 
    type: "Pwn", 
    score: "100", 
    solved: "1",
    description: "This is a pwn challenge where you need to exploit a vulnerability in a program to obtain the flag."
  },
  { 
    id: 26, 
    name: "koala", 
    type: "Web", 
    score: "500", 
    solved: "5",
    description: "In this web challenge, you need to find and exploit vulnerabilities to obtain the flag. This challenge will test your web vulnerability exploitation skills."
  },
  { 
    id: 27, 
    name: "unicorn", 
    type: "Misc", 
    score: "400", 
    solved: "4",
    description: "This is a multi-disciplinary challenge where you need to use various skills to solve the problem."
  },
  { 
    id: 28, 
    name: "iguana", 
    type: "Crypto", 
    score: "300", 
    solved: "3",
    description: "This crypto challenge requires you to use your cryptography knowledge to decrypt an encrypted message."
  },
  { 
    id: 29, 
    name: "lemur", 
    type: "Reverse", 
    score: "200", 
    solved: "2",
    description: "This is a reverse engineering challenge where you need to analyze a binary file and find hidden information."
  },
  { 
    id: 30, 
    name: "toucan", 
    type: "Pwn", 
    score: "100", 
    solved: "1",
    description: "This is a pwn challenge where you need to exploit a vulnerability in a program to obtain the flag."
  }
],
    };
  },
  methods: {
    echo() {
      console.log(666);
    },
    toggleShadow(index) {
      const cards = this.$refs.cards;
      const target = cards[index].$el;
      target.style.boxShadow = "inset 0 0px 0px rgb(255, 255, 255)";
      setTimeout(() => {
        target.style.transition = "box-shadow 0.5s ease-in-out";
        target.style.boxShadow =
          "inset 10px 10px 10px #d1d9e6, inset -10px -10px 10px #f9f9f9";
        setTimeout(() => {
          target.style.transition = "box-shadow 0.5s ease-in-out";
          target.style.boxShadow = "none";
          setTimeout(() => {
            target.style.transition = "box-shadow 0s ease-in-out";
            target.style.boxShadow = "0 0px 0px rgb(255, 255, 255)";
            setTimeout(() => {
              target.style.transition = "box-shadow 0.5s ease-in-out";
              target.style.boxShadow =
                "10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9";
            }, 10);
          }, 500);
        }, 500);
      }, 0);
    },

    

    isChallShow(challenge) {
      return this.displayType === "All" || challenge.type === this.displayType;
    },

    getSvg(type){
      return getChallSvg(type)
    },

    DisplayCard(){
      this.showCard=true
    },
    DisplayList(){
      this.showCard=false
    },

    enterChallenge(cid){
      
      this.$router.push({ name: 'challenge', params: { cid: cid } })
      
    },
    ListenterChallenge(e){
      console.log(e.id)
      this.$router.push({ name: 'challenge', params: { cid: e.id } })
    },


    ...mapMutations(["setChallenges"]), 
  },
  computed: {
    filteredChallenges() {
      if (this.selectedType === ""&&this.displayType === "All") {
        return this.challenges;
      } else {
        return this.challengesVuex.filter(
          (challenge) => challenge.type === this.displayType
        );
      }
    },

    ...mapState(["challengesVuex"]) ,
    
  },

  beforeMount(){
    this.setChallenges(this.challenges)
    localStorage.setItem('challenges', JSON.stringify(this.challenges) )
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  user-select: none;
}
.container {
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  font-size: 12px;
  background-color: #ecf0f3;
  color: #a4a0a8;
  position: absolute;
}
.Nav-container{
  width:calc(10% + 150px);
  height:100vh;
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.16);
  overflow: hidden;

}
.changeDisplay-btn {
  z-index: 999;
  position: absolute;
  margin-top: 140px;
  margin-left: calc(1.5% + 35px);
}


.el-menu-vertical-demo {
  top: 200px;
  left: 0%;
  

  margin:0 auto;
  /* background-color: #ecf0f3; */
  background-color: #fff;
  
  z-index: 99;
  
}



span{
  font-size: 20px;
  
}
.el-icon {
  transform: scale(1.5);
  padding-right: 10px;
  margin-left:30%
}

.challtitle1 {
  top: 80px !important;
  left: 0px !important;
  padding-left: 4%;
  font-size: 30px;
  position: fixed;
}
.challtitle2 {
  top: 80px !important;
  left: 40px !important;
  padding-left: 40px;
  font-size: 20px;
}



.el-scrollbar {
  width: 100%; 
}


.el-space {
  top: 0px;
  left: 200px;
  padding-left: 5%;
  margin-top: 70px;
  margin-bottom: 10px;
  /* padding-left:10% */
  position: absolute;
}
.challtype-title {
  text-align: center;
  margin-top: 30px;
  margin-left: calc(10%);
  font-size: 50px;
  margin-bottom: 20px;
  color:black;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(5% + 200px);
  margin-bottom: 100px;
  /* padding-left:10% */
}

.box-card {
  margin: 10px 10px;
  /* background-color: #ecf0f3; */
  background-color: #ffffff;
  border-radius: 12px;
  min-width: 200px;
  max-width: 300px;
  height: 200px;
  /* border: 3px solid white; */
  /* box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9; */
  box-shadow: 0px 5px 12px rgba(0,0,0,0.2);
  
  transition: all 0.5s ease-in-out;
}

.box-card:hover {
  /* border: 3px  white; */
  /* box-shadow: 0 0px 0px rgb(255, 255, 255); */

  transform: translateY(-8px) scale(1.01,1.01);
  /* box-shadow: 10px 15px 15px #d1d9e6, -10px -15px 15px #f9f9f9; */
  box-shadow: 0px 10px 20px rgba(0,0,0,0.3);

}

/* .box-card.active {
  box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
} */
/* .box-card:active {
  box-shadow: inset 0 0px 0px rgb(255, 255, 255);
  transition: box-shadow 0.5s ease-in-out;
} */

.box-card {
  width: 250px;
  display: flex;
  flex-direction: column;
}

.icon-container {
  margin-left: 130px;
  margin-top: -10px;
  opacity: 0.3;
}
.solvedNum{
  margin-left: 140px;
  margin-top: -120px;
  font-size:20px
}
.score-container {
  position: relative;
  margin-top: 20px;
}

.scorenum {
  margin-left: 0px;
  margin-bottom: -10px;
  margin-top: -20px;
  font-size: 50px;
  position: relative;
}

.pt {
  margin-left: 25px;
  margin-bottom: -20px;
  font-size: 30px;
  position: relative;
}

.line {
  margin-top: 10px;
  border-width: 3px;
}



</style>
  