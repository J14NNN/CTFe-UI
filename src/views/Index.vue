<template>
  <div>
      <NavBar></NavBar>
      <router-view></router-view>
  </div>


</template>

<script>
import NavBar from '../components/NavBar.vue';
export default{
  data(){
    return{

    }
  },
  components:{
    NavBar
  },
  

}
</script>

<style scoped>

</style>