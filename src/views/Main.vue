<template>
  <div class="background">
    <div class="Index-container">
      <h1 class="Title ">2023年安徽大学信息安全实验室招新赛</h1>
  <div class="glowing Timer">
    <h1>开始倒计时</h1>
    <h1>{{ countdown }}</h1>
  </div>
    </div>
    
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  mounted() {
    const title = document.querySelector(".Title");
    title.addEventListener("mouseover", () => {
      title.classList.add("shine");
    });
    title.addEventListener("animationend", () => {
      title.classList.remove("shine");
    });
  },
  setup() {
    const countdown = ref('');

    const targetDate = new Date('2023-09-15');
    const updateCountdown = () => {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdown.value = `${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`;
      } else {
        countdown.value = '倒计时已结束';
      }
    };

    // 更新倒计时
    setInterval(updateCountdown, 1000);

    return {
      countdown
    };
  }
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

.Index-container {
  margin: 150px auto;
  text-align: center;
}

.Title {
  font-size: 50px;
  color: #000000;
  text-align: center;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  */
  font-family:幼圆;
}

.glowing {
  color: #fff;
  text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000;
  animation: glow 2s ease-in-out infinite;
}

@keyframes glow {
  0% {
    text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000;
  }
  50% {
    text-shadow: 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 50px #ff0000, 0 0 60px #ff0000;
  }
  100% {
    text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000;
  }
}


.Timer {
  font-size: 26px;
  margin-top:100px;
}

</style>