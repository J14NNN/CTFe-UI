
        

<template>
    
    <div class="Background">
        <h3>{{ $route.params.cid }}</h3>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
      
    >
    <el-row>
    <el-col :span="11">
      <el-form-item  label="挑战名称" prop="name" class="challName InputBox" >
        <el-input v-model="ruleForm.challenge_name" placeholder="challenge name"/>
      </el-form-item>
      <el-form-item  label="挑战类型" prop="type" class="InputBox">
        <el-select v-model="ruleForm.challenge_type" placeholder="challenge type" class="InputBox">
          <el-option label="misc" value="misc" />
          <el-option label="web" value="web" />
          <el-option label="crypto" value="crypto" />
          <el-option label="reverse" value="reverse" />
          <el-option label="pwn" value="pwn" />
        </el-select>
      </el-form-item>

      <el-form-item label="挑战分数" prop="score" class="InputBox">
        <el-input v-model="ruleForm.init_score" placeholder="challenge score"/>
    </el-form-item>
    <el-form-item label="挑战附件" prop="attachment" class="InputBox">
        <el-upload
    class="upload-demo InputBox"
    drag
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
    <!-- <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template> -->
  </el-upload>
    </el-form-item>
    <el-form-item label="挑战描述" prop="desc" class="InputBox">
        <el-input v-model="ruleForm.description" type="textarea" placeholder="challenge description"/>
      </el-form-item>

      <el-form-item label="开启动态靶机">
        <el-switch
    v-model="dynamic"
    class="ml-2"
    inline-prompt
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    active-text="是"
    inactive-text="否"
  />
      </el-form-item>

      <el-form-item label="flag" prop="flag" class="InputBox">
        <el-input v-model="ruleForm.port" placeholder="port number"/>
    </el-form-item>
    

    </el-col>

    <el-col :span="2">

    </el-col>

    <el-col v-if="!dynamic" :span="11">
        <el-form-item  label="镜像名" prop="image" class="challName InputBox" >
        <el-input v-model="ruleForm.image_name" placeholder="image name"/>
      </el-form-item>


      <el-form-item label="端口" prop="port" class="InputBox">
        <el-input v-model="ruleForm.port" placeholder="port number"/>
    </el-form-item>

    <el-form-item label="CPU数量"  class="InputBox">
        <el-input v-model="ruleForm.cpuCount" placeholder="CPU count"/>
    </el-form-item>

    <el-form-item label="内存上限"  class="InputBox">
        <el-input v-model="ruleForm.memry" placeholder="memry limit"/>
    </el-form-item>



    </el-col></el-row>
      
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Create
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
</div>
  </template>
  
  <script>
  import { reactive, ref } from 'vue'

  export default {
  data() {
    return {
      formSize: 'default',
      ruleFormRef: null,
      ruleForm: {
        challenge_name: '',
        challenge_type: '',
        description: '',
        init_score:'',

        image_name:'',
        port:'',
        cpuCount:'',
        
      },
      dynamic:false,
      rules: {
        name: [
          { required: true, message: 'Please input challenge name', trigger: 'blur' },
         
        ],
        type: [
          {
            required: true,
            message: 'Please select challenge type',
            trigger: 'change',
          },
        ],
        score: [
          {
            required: true,
            message: 'Please input challenge score',
            trigger: 'change',
          },
          {
              validator: (rule, value, callback) => {
                const score = parseInt(value)
                if (isNaN(score)) {
                  callback(new Error('Score must be a number'))
                } else if (score <= 0 || score >= 10000) {
                  callback(new Error('Score must be greater than 0 and less than 10000'))
                } else {
                  callback()
                }
              },
              trigger: 'change',
            },
        ],
    

        desc: [
          { required: true, message: 'Please input challenge description', trigger: 'blur' },
        ],

        image: [
            { 
                required: true,
                message: 'Please Input image name',
                trigger: 'blur'
            }
        ],
        port: [
            { 
                required: true,
                message: 'Please Input port num',
                trigger: 'blur'
            }
        ],
        flag: [
            { 
                required: true,
                message: 'Please Input flag',
                trigger: 'blur'
            }
        ],
      },
    }
  },
  methods: {
    async submitForm(formEl) {
      if (!formEl) return
      await formEl.validate((valid, fields) => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!', fields)
        }
      })
    },
    resetForm(formEl) {
      if (!formEl) return
      formEl.resetFields()
    },
  },
  computed: {
    options() {
      return Array.from({ length: 10000 }).map((_, idx) => ({
        value: `${idx + 1}`,
        label: `${idx + 1}`,
      }))
    },
  },
}
  </script>

  <style scoped>
  .Background{
    margin-top:30px
  }



  .InputBox{
    width:600px
  }
  </style>
  
