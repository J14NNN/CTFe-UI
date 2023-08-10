<template>
  <div class="background">
    <el-container>
    <el-aside class="Aside">
      <!-- <h5 class="mb-2">Default colors</h5> -->
      <div class="Nav">
        <el-menu
          default-active="/admin/challengeManager"
          class="el-menu-vertical-demo"
          :router="true"
        
        >
          <el-sub-menu index="1" >
          <template #title>
            <el-icon><Flag /></el-icon>
            <span>挑战管理</span>
          </template>
            <el-menu-item index="/admin/challengeManager">
                <el-icon><Operation /></el-icon>
            <span class="sub-menu-title">全部挑战</span>
            </el-menu-item>
            <el-menu-item index="/admin/addChallenge">
                <el-icon><Plus /></el-icon>
            <span class="sub-menu-title">添加挑战</span>
            </el-menu-item>
        </el-sub-menu>

          <!-- <el-menu-item index="/admin/challengeManager">
            <el-icon><Flag /></el-icon>
            <span>挑战管理</span>
          </el-menu-item> -->
          <el-menu-item index="/admin/userManager">
            <el-icon><Avatar /></el-icon>
            <span>用户管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/notificationManager">
            <el-icon><BellFilled /></el-icon>
            <span>通知管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/containerManager">
            <el-icon><Opportunity /></el-icon>
            <span>容器管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/platformManager">
            <el-icon><Setting /></el-icon>
            <span>平台管理</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-aside>
    <el-scrollbar max-height="100vh">
    <el-main class="Main">
        
        <router-view></router-view>
    </el-main></el-scrollbar>
</el-container>
  </div>
</template>

<script>
</script>

<style scoped>
.background {
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  position: absolute;
  overflow: auto;
  background-color: #ecf0f3;
}

.Aside {
  width: 200px;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.16);
}

.Nav {
  margin-top: 100px;
}


.sub-menu-title{
    margin-left:0px
}

.Main{
    width:calc(100vw - 200px);
    margin-left:0px;
    margin-top:65px;
    margin-right:0px!important;
    /* padding:0 0 0 0; */
    /* background-color: #fff; */
    

}
</style>