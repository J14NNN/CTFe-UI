<template>
  <div>
    <nav class="navbar">
      <el-menu
        :router="true"
        :ellipsis="false"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item class="logo">
          <a href="/">
            <h4 class="navbar-title">
              <img src="../assets/imgs/AHU.jpg" class="navbar-brand-img" />
              CTFe
            </h4>
          </a>
        </el-menu-item>

        <el-menu-item index="/main" :class="menuItemClass">
          <el-icon>
            <House />
          </el-icon>
          {{ $t("home") }}
        </el-menu-item>

        <el-menu-item v-if="!showBadge" index="/notifications" :class="menuItemClass">
          <el-icon>
            <Notification />
          </el-icon>
            {{ $t("notifications") }}
        </el-menu-item>

        <el-menu-item v-else index="/notifications" :class="menuItemClass">
          <el-icon>
            <Notification />
          </el-icon>
          <el-badge value="new" class="item" style="font-weight: 500">
            {{ $t("notifications") }}</el-badge
          >
        </el-menu-item>



        <el-menu-item index="/challenges" :class="menuItemClass">
          <el-icon>
            <Flag />
          </el-icon>
          {{ $t("challenges") }}
        </el-menu-item>

        <el-menu-item index="/scoreboard" :class="menuItemClass">
          <el-icon>
            <Histogram />
          </el-icon>
          {{ $t("scoreboard") }}
        </el-menu-item>

        <div class="flex-grow" />

        <el-sub-menu>
          <template #title>
            <svg
              t="1690039126878"
              class="icon-earth"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1561"
              width="20"
              height="20"
            >
              <path
                d="M511.786667 85.333333c-235.733333 0-426.453333 190.933333-426.453333 426.666667s190.72 426.666667 426.453333 426.666667c235.733333 0 426.88-190.933333 426.88-426.666667s-191.146667-426.666667-426.88-426.666667zM807.253333 341.333333l-125.866667 0c-13.866667-53.333333-33.28-104.533333-58.88-151.893333 78.506667 26.88 143.786667 81.28 184.746667 151.893333zM512 172.16c35.626667 51.2 63.36 108.16 81.493333 169.173333l-162.986667 0c18.133333-61.013333 45.866667-117.973333 81.493333-169.173333zM181.76 597.333333c-7.04-27.306667-11.093333-55.893333-11.093333-85.333333s4.053333-58.026667 11.093333-85.333333l144 0c-3.413333 27.946667-5.76 56.32-5.76 85.333333s2.346667 57.386667 5.973333 85.333333l-144.213333 0zM216.533333 682.666667l125.866667 0c13.866667 53.333333 33.28 104.533333 58.88 152.106667-78.506667-26.88-143.786667-81.493333-184.746667-152.106667zM342.4 341.333333l-125.866667 0c40.96-70.613333 106.24-125.226667 184.746667-152.106667-25.6 47.573333-45.013333 98.773333-58.88 152.106667zM512 851.84c-35.413333-51.2-63.146667-108.16-81.493333-169.173333l162.986667 0c-18.346667 61.013333-46.08 117.973333-81.493333 169.173333zM611.84 597.333333l-199.68 0c-4.053333-27.946667-6.826667-56.32-6.826667-85.333333s2.773333-57.386667 6.826667-85.333333l199.68 0c4.053333 27.946667 6.826667 56.32 6.826667 85.333333s-2.773333 57.386667-6.826667 85.333333zM622.72 834.56c25.6-47.573333 45.013333-98.56 58.88-151.893333l125.866667 0c-41.173333 70.613333-106.453333 125.013333-184.746667 151.893333zM698.026667 597.333333c3.413333-27.946667 5.973333-56.32 5.973333-85.333333s-2.346667-57.386667-5.973333-85.333333l144 0c7.04 27.306667 11.306667 55.893333 11.306667 85.333333s-4.053333 58.026667-11.306667 85.333333l-144 0z"
                fill="#444444"
                p-id="1562"
              />
            </svg>
            <lang-change style="font-size: 15px; font-weight: 500">
              {{ $t("language") }}
            </lang-change>
          </template>
          <el-menu-item @click="changeLang('zh')">中文</el-menu-item>
          <el-menu-item @click="changeLang('en')">English</el-menu-item>
        </el-sub-menu>

        <line>|</line>

        <el-menu-item v-if="isUser" index="/profile" :class="menuItemClass">
          <el-icon>
            <Avatar />
          </el-icon>
          {{ $t("profile") }}
        </el-menu-item>


        <el-menu-item v-if="!isAdmin" index="/admin" :class="menuItemClass">
          <el-icon>
            <Avatar />
          </el-icon>
          {{ $t("adminPanel") }}
        </el-menu-item>

        <el-menu-item v-if="!isUser" index="/login" :class="menuItemClass">
          <el-icon>
            <Right />
          </el-icon>
          {{ $t("login") }}
        </el-menu-item>
      </el-menu>
    </nav>
  </div>
</template>


<script>
import { ref } from "vue";

export default {
  data() {
    return {
      centerDialogVisible: false,

      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      input: "",
      loading: false,

      isUser: false,
      isAdmin: false,
    };
  },

  methods: {
    Cancel() {
      this.loading = false;
      this.centerDialogVisible = false;
    },
    onSubmit() {
      // this.centerDialogVisible = false;

      console.log("submit!");
      this.loading = true;
    },

    toggleLang() {
      if (this.$i18n.locale === "zh") {
        this.$i18n.locale = "en";
      } else {
        this.$i18n.locale = "zh";
      }
    },
    langtozh() {
      this.$i18n.locale = "zh";
    },
    langtoen() {
      this.$i18n.locale = "en";
    },

    //使用localStorage
    // changeLang(lang) {
    //   this.$i18n.locale = lang // 更新VueI18n实例的locale属性
    //   localStorage.setItem('locale', lang) // 将语言设置保存到localStorage中
    // },

    //使用浏览器的localStorage和URL参数的组合
    changeLang(lang) {
      localStorage.setItem("locale", lang); // 将语言设置保存到localStorage中
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("lang", lang); // 将语言设置作为URL参数
      window.location.search = searchParams.toString(); // 重载页面并传递语言设置作为URL参数
    },








    getNotificationsCount() {
      // 发送请求获取通知数量
      const notificationCount = 4;

      const localNotificationsCount = Number(localStorage.getItem("LocalNotificationsCount") || 0);

      // 比较存储在本地的通知数量和实际通知数量
      if (notificationCount !== localNotificationsCount) {
        // 显示 el-badge 组件
        this.showBadge = true;
      } else {
        // 隐藏 el-badge 组件
        this.showBadge = false;
      }
    },
  },
  watch: {},
  computed: {
    navbarClass() {
      return {
        navbar: true,
        "navbar-en": this.$i18n.locale === "en",
        "navbar-zh": this.$i18n.locale === "zh",
      };
    },
    menuItemClass() {
      // 根据当前的语言环境返回不同的样式对象
      if (this.$i18n.locale === "en") {
        return {
          "menu-item--en": true,
          "menu-item--zh": false,
        };
      } else {
        return {
          "menu-item--en": false,
          "menu-item--zh": true,
        };
      }
    },
  },
  data() {
    return {
      isRed: false,
      textColor: "red",
      showBadge:false,
    };
  },

  beforeMount(){
    this.getNotificationsCount()
    console.log(localStorage.getItem("LocalNotificationsCount"))
  }
};
</script>


<style scoped>
* {
  box-sizing: border-box;
  user-select: none;
}
.flex-grow {
  flex-grow: 1;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}

body {
  margin: 0;
}

.example-showcase .el-loading-mask {
  z-index: 9;
}

.icon-earth {
  margin-right: 10px;
}

.navbar-zh {
  width: 5rem;
  padding: 5px 5px 5px 5px !important;

  font-size: 15px;
  font-weight: 500;
}

.menu-item--en {
  width: 10rem;
  padding: 5px 5px 5px 5px !important;
  font-size: 15px;
  font-weight: 500;
}
.menu-item--zh {
  width: 5.5rem;
  padding: 5px 5px 5px 5px;
  font-size: 15px;

  font-weight: 500;
}
line {
  padding: 5px 0px 10px 0px;

  color: rgba(112, 108, 108, 0.413);
}
.menu-item--zh:hover {
  background-color: rgba(0, 0, 0, 0) !important;
}
.menu-item--zh {
  background-color: rgba(0, 0, 0, 0) !important;
}

.navbar {
  background-color: #fff;
  padding-left: 10% !important;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.16);
  align-items: center;
  /* justify-content: space-between; */
  transition: all 0.2s ease-in-out;
  top: 0;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
  align-items: center;
  /* width:auto!important; */
}
.el-menu-demo {
  background-color: #fff;
  /* display: flex!important;
    flex-wrap:wrap!important; */
  align-items: center;
  transition: all 0.2s ease-in-out;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

/*  去导航栏淡蓝背景 */
/* .el-menu-item:hover{
    background-color: #fff!important;
}
.el-menu-item{

    background: #409EFF !important;
    background-color: #fff!important;
  
  } */

.navbar-brand-img {
  width: 1.3em;
  height: 1.3em;
  vertical-align: middle;
  fill: currentColor;
  justify-content: middle;
  /* margin:auto!important; */
  max-width: 100%;
  /* max-height:2rem!important; */
  /* vertical-align: middle; */
  position: relative;
  margin-bottom: 6px;
}

.navbar-title {
  padding: 5px 5px 5px 5px !important;

  /* margin: 0 auto!important; */
  justify-content: center !important;
  font-size: 30px;
  font-weight: 700;
  color: black;
  margin-right: 15px !important;
  margin-left: auto !important;
}
.logo {
  background-color: #fff !important;
}
.logo:hover {
  background-color: #fff !important;
  text-shadow: 0 0 5px #989898;
}
.left {
  width: 10rem;
  padding: 5px 5px 5px 5px !important;
  /* margin: 0 0 0 0; */
  font-size: 15px;
  font-weight: 500;
}

.right {
  width: 10rem;
  padding: 5px 5px 5px 5px !important;
  font-size: 15px;
  font-weight: 500;
}

.text-center {
  text-align: center;
}

/* /** */
</style>