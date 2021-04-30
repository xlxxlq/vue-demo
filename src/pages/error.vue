<template>
  <div class="page">
    <a-result status="warning" :title="errMsg">
    <template #extra>
      <a-button key="console" type="primary" @click="backLogin">
        重新登录
      </a-button>
    </template>
  </a-result>
  </div>
</template>

<script>
export default {
  name: 'Error',
  data() {
    return {
        errMsg:'登录错误'
    }
  },
  mounted(){
      this.errMsg =this.errMsg + '：'+ this.$route.query.errMsg
  },
  methods:{
      backLogin() {
          this.$router.push('/')
      }
  }
}
</script>

<style scoped>
</style>


