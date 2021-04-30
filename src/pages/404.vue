

<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <a-button type="primary" @click="backLogin">
        返回登录
      </a-button>
    </template>
  </a-result>
</template>
<script>
export default {
  name: 'Page404',
  data() {
    return {};
  },
  methods:{
      backLogin() {
          this.$router.push('/')
      }
  }
};
</script>
