<template>
  <div class="login-base">
    <div class="loginArea">

      <div class="container LoginContainer" id="LoginContainer">
        <form action method class="form" id="a-form">
          <span class="form_span">Please input your username and password</span>
          <input type="text" class="form_input" placeholder="Username/Email/Phone Number" required/>
          
          <input type="password" class="form_input" placeholder="Password" required/>
          <a class="form_link" @click="ErrorMessage">Forgot your password?</a>

          <button class="form_button button submit">SIGN IN</button>
        </form>
      </div>

      <div class="container RegisterContainer" id="RegisterContainer">
        <form action method class="form" id="b-form">
          <h2 class="form_title title">Create an Account</h2>
          <span class="form_span">Please input the correct information!</span>
          <input type="text" class="form_input" placeholder="Real Name" required/>
          <input type="text" class="form_input" placeholder="Username" required/>
          <input type="password" class="form_input" placeholder="Password" required/>
          <input type="password" class="form_input" placeholder="Repeat Password" required />
          <input type="text" class="form_input" placeholder="Email" required/>
          <input type="text" class="form_input" placeholder="Phone Number" required/>
          <input type="text" class="form_input" placeholder="QQ" required/>
          
          <button class="form_button button submit">SIGN UP</button>
        </form>
      </div>

      

      <div class="switch" id="switch-cnt">
        <div class="switch_circle"></div>
        <div class="switch_circle switch_circle-t"></div>

        <div class="switch_container " id="switch-c1">
          <h2 class="switch_title title" style="letter-spacing: 0;">Welcome CTFer！</h2>
          <p class="switch_description description">Click here to register an account and start to play the game!</p>
          <button class="switch_button button switch-btn">SIGN UP</button>
        </div>

        <div class="switch_container is-hidden" id="switch-c2">
          <h2 class="switch_title title" style="letter-spacing: 0;">Hello CTFer！</h2>
          <p class="switch_description description">Already have an account?Log in and have fun!</p>
          <button class="switch_button button switch-btn">SIGN IN</button>
        </div>

        
      </div>
    </div>
  </div>
</template>
    
  
<script>
export default {
  mounted() {
    let switchCtn = document.querySelector("#switch-cnt");
    let switchC1 = document.querySelector("#switch-c1");
    let switchC2 = document.querySelector("#switch-c2");
    let switchCircle = document.querySelectorAll(".switch_circle");
    let switchBtn = document.querySelectorAll(".switch-btn");
    let aContainer = document.querySelector("#LoginContainer");
    let bContainer = document.querySelector("#RegisterContainer");
    let allButtons = document.querySelectorAll(".submit");

    let getButtons = e => e.preventDefault();

    let changeForm = e => {
      switchCtn.classList.add("is-gx");
      setTimeout(function() {
        switchCtn.classList.remove("is-gx");
      }, 1500);
      switchCtn.classList.toggle("is-txr");
      switchCircle[0].classList.toggle("is-txr");
      switchCircle[1].classList.toggle("is-txr");
      switchC1.classList.toggle("is-hidden");
      switchC2.classList.toggle("is-hidden");
      aContainer.classList.toggle("is-txl");
      bContainer.classList.toggle("is-txl");
      bContainer.classList.toggle("is-z");
    };

    let loginArea = e => {
      for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener("click", getButtons);
      }
      for (var i = 0; i < switchBtn.length; i++) {
        switchBtn[i].addEventListener("click", changeForm);
      }
    };

    loginArea();


    
  },
  methods:{
    ErrorMessage(){ 
      ElMessage({
        message: 'testtttttttt',
        type: 'error',
        offset: 90
  })
}
  }
};
</script>
  
  <style scoped>
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.login-base {
  margin-top: 2%;
  flex: 1;
  /* box-shadow: 0 0 20px rgba(25, 71, 220, 0.1); */
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 100px;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  background-color: #ecf0f3;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: #ecf0f3;
  color: #a0a5a8;
}

.loginArea {
  position: relative;
  width: 1000px;
  min-width: 1000px;
  min-height: 600px;
  height: 600px;
  padding: 25px;
  background-color: #ecf0f3;
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  /* box-shadow: 10px 10px 10px #d1d9e6; */
  border-radius: 12px;
  overflow: hidden;
}

/* 设置响应式 */
@media (max-width: 1200px) {
  .loginArea {
    transform: scale(0.7);
  }
}

@media (max-width: 1000px) {
  .loginArea {
    transform: scale(0.6);
  }
}

@media (max-width: 800px) {
  .loginArea {
    transform: scale(0.5);
  }
}

@media (max-width: 600px) {
  .loginArea {
    transform: scale(0.4);
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 600px;
  height: 100%;
  padding: 25px;
  background-color: #ecf0f3;
  transition: 1.25s;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.iconfont {
  margin: 0 5px;
  border: rgba(0, 0, 0, 0.5) 2px solid;
  border-radius: 50%;
  font-size: 25px;
  padding: 3px;
  opacity: 0.5;
  transition: 0.1s;
}

.iconfont:hover {
  opacity: 1;
  transition: 0.15s;
  cursor: pointer;
}

.form_input {
  width: 350px;
  height: 40px;
  margin: 4px 0;
  padding-left: 25px;
  font-size: 13px;
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  background-color: #ecf0f3;
  transition: 0.25s ease;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
}

.form_input:focus {
  box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
}

.form_span {
  margin-top: 30px;
  margin-bottom: 12px;
}

.form_link {
  color: #181818;
  font-size: 15px;
  margin-top: 25px;
  border-bottom: 1px solid #a0a5a8;
  line-height: 2;
}

.title {
  font-size: 34px;
  font-weight: 700;
  line-height: 3;
  color: #181818;
  letter-spacing: 3px;
}

.description {
  font-size: 14px;
  letter-spacing: 0.25px;
  text-align: center;
  line-height: 1.6;
}

.button {
  width: 180px;
  height: 50px;
  border-radius: 25px;
  margin-top: 50px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1.15px;
  background-color: #4b70e2;
  color: #f9f9f9;
  box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
  border: none;
  outline: none;
}

.LoginContainer {
  z-index: 100;
  left: calc(100% - 600px);
}

.RegisterContainer {
  left: calc(100% - 600px);
  z-index: 0;
}

.switch {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 400px;
  padding: 50px;
  z-index: 200;
  transition: 1.25s;
  background-color: #ecf0f3;
  overflow: hidden;
  box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #d1d9e6;
}

.switch_circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: #ecf0f3;
  box-shadow: inset 8px 8px 12px #b8bec7, inset -8px -8px 12px #fff;
  bottom: -60%;
  left: -60%;
  transition: 1.25s;
}

.switch_circle-t {
  top: -30%;
  left: 60%;
  width: 300px;
  height: 300px;
}

.switch_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 400px;
  padding: 50px 55px;
  transition: 1.25s;
}

.switch_button {
  cursor: pointer;
}

.switch_button:hover,
.submit:hover {
  box-shadow: 6px 6px 10px #d1d9e6, -6px -6px 10px #f9f9f9;
  transform: scale(0.985);
  transition: 0.25s;
}

.switch_button:active,
.switch_button:focus {
  box-shadow: 2px 2px 6px #d1d9e6, -2px -2px 6px #f9f9f9;
  transform: scale(0.97);
  transition: 0.25s;
}

.is-txr {
  left: calc(100% - 400px);
  transition: 1.25s;
  transform-origin: left;
}

.is-txl {
  left: 0;
  transition: 1.25s;
  transform-origin: right;
}

.is-z {
  z-index: 200;
  transition: 1.25s;
}

.is-hidden {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: 1.25s;
}

.is-gx {
  animation: is-gx 1.25s;
}

@keyframes is-gx {
  0%,
  10%,
  100% {
    width: 400px;
  }

  30%,
  50% {
    width: 500px;
  }
}

.switch_text {
  font-size: 48px; /* 设置文字大小 */
  font-weight: bold; /* 设置文字粗细 */
  animation: color-cycle 5s infinite; /* 设置动画效果，名称为color-cycle，持续时间为5秒，无限循环 */
  position: absolute;
  width: 500px;
  height: 500px;
  background-color: #ecf0f3;
  bottom: -60%;
  left: -60%;
  transition: 1.25s;
}

@keyframes color-cycle {
  0% {
    color: #ff0000; /* 从红色开始 */
  }
  25% {
    color: #00ff00; /* 到绿色 */
  }
  50% {
    color: #0000ff; /* 再到蓝色 */
  }
  75% {
    color: #ffff00; /* 最后到黄色 */
  }
  100% {
    color: #ff0000; /* 再回到红色 */
  }
}
</style>