<template>
  <div class="ChallengeManager">

      <!-- <div class="AddChallbtn">
      <el-button  @click="ToAddChallenge" type="primary">添加挑战</el-button>
      </div> -->

      <div class="challengeTable">
        <div class="filter-container">
        <el-button @click="clearFilter"  type=primary size="large" >reset all filters</el-button>
        <el-input v-model="search"  class="search-box" size="large" placeholder="Type to search" >
          <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
        </el-input>
        </div>
        <el-table ref="tableRef" :data="filterChallengesData" stripe style="width: 100%" v-loading="loading">
  <el-table-column prop="id" label="ID" width="180" />
  <el-table-column prop="name" label="Name" />
  <el-table-column 
    prop="type" 
    label="Type"
    :filters="[
      {text:'Misc',value:'Misc'},
      {text:'Web',value:'Web'},
      {text:'Crypto',value:'Crypto'},
      {text:'Reverse',value:'Reverse'},
      {text:'Pwn',value:'Pwn'},
    ]"
    :filter-method="filterType"
    />
  <el-table-column prop="score" label="Score" />


  <el-table-column label="Operations">
    <template #default="scope">
      <el-button size="small" @click="handleEdit(scope.row.id)"
        >Edit</el-button
      >
      <el-button
        size="small"
        type="danger"
        @click="handleDelete(scope.row.id)"
        >Delete</el-button
      >
    </template>
  </el-table-column>

</el-table>
      </div>
  </div>
</template>

<script>
import { markRaw } from 'vue'
import { Delete } from '@element-plus/icons-vue'
import {ref} from 'vue'
export default {
methods: {
  // ToAddChallenge() {
  //   this.$router.push('/admin/addChallenge');
  // },
  filterType(value, row){
    return row.type === value
  },
  clearFilter() {
    this.$refs.tableRef.clearFilter()
  },


  handleEdit(cid){
    this.$router.push({ name: 'editChallenge', params: { cid: cid } })
  },
  handleDelete(index, row) {
    ElMessageBox.confirm(
  'It will permanently delete the challenge. Continue?',
  'Warning',
  {
    type: 'warning',
    icon: markRaw(Delete),
    
  }
)
  .then(() => {
    ElMessage({
      type: 'success',
      message: 'Delete completed',
      offset:75
    })
  })
  .catch(() => {
    ElMessage({
      type: 'info',
      message: 'Delete canceled',
      offset:75
    })
  })
  }
},


computed:{
  filterChallengesData(){
    return this.challenges.filter(
    (data) =>
      !this.search ||
      data.name.toLowerCase().includes(this.search.toLowerCase())
  )
  }
},
data(){
  return{
    search:ref(''),
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
loading: false,
  }
}
}
</script>

<style scoped>
.ChallengeManager{
  /* background-color:white; */
  width:100%;
  height:100%;
  
}
.filter-container{
  display: flex;
  float:right;
  margin-bottom:10px;
}
.AddChallbtn{
  margin-right:5%;
  
}
.search-box{
  margin-left:10px;
  width:300px;

}
</style>
