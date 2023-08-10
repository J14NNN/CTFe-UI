<template>
  <div class="background">
    <div class="timeline-container">
      <el-timeline>
        <el-timeline-item 
          v-for="(item, index) in timelineItems" 
          :key="index"
          :timestamp="item.timestamp"
          type= primary
          hollow= true
          placement="top"
        >
          <el-card>
            <h2>{{ item.title }}</h2>
            <p>{{ item.content }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default{
  data() {
  return {
    timelineItems: [
      {
        timestamp: "2023/8/12 20:46",
        title: "更新",
        content: "xxxxxxxxxxxxxxxxxxxxxx"
      },
      {
        timestamp: "2023/8/3 20:46",
        title: "xxxxxxxxxxxxxxx",
        content: "xxxxxxxxxxxxxxxxxxxxxx"
      },
      {
        timestamp: "2023/8/2 20:46",
        title: "xxxxxxxxxxxxxxx",
        content: "xxxxxxxxxxxxxxxxxxxxxxxxxxx"
      }
    ]
  }
},
methods:{
  getNotificationsCount(){
    return 4;
  },


  enterNotificationPage() {
    // 获取当前的通知数量
    const notificationCount = this.getNotificationsCount();

    // 将当前的通知数量存储到本地
    localStorage.setItem('LocalNotificationsCount', notificationCount);
  }
},
mounted() {
  if (!localStorage.getItem('isRefreshed')) {
    this.enterNotificationPage();
    localStorage.setItem('isRefreshed', true);
    location.reload();
  }
}
}
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

.timeline-container{
  width:80%;
  align-content:center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin: 100px auto;
}
.el-card{
  border-radius: 12px;
}
</style>
