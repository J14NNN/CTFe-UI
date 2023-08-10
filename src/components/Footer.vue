<template>
    <div class="footer">
      <el-divider></el-divider>
      <p class="text">{{ text }}</p>
    </div>
  </template>
  
  <script>

  export default{
    data(){
        return{
            text:'666666666666666'
        }
        
    }
  };
  </script>
  
  <style scoped>
.footer {
    height:200px;
    width:100%;
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    padding: 20px;
    background-color: #f5f5f5;
    font-size: 14px;
    color: #ffffff;
    margin-top:200px;
    margin-bottom:0px;
    bottom: 0%;
  }
  
  .text {
    margin-top: 10px;
  }
  </style>