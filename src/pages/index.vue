<template>
  <div class="my">
    <div class="info">
      <a-avatar :size="64"
                src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2650200369,2661885489&fm=26&gp=0.jpg' />
      <a-divider>用户信息</a-divider>
      <div style="background:#ECECEC">
        <a-card :bordered="false" style="width: 400px">
          <template slot="actions" class="ant-card-actions">
            <a-icon key="setting" type="setting" />
            <a-icon key="edit" type="edit" @click=""/>
            <a-icon key="ellipsis" type="ellipsis" />
          </template>
          <div class="info-content">
          <p>名称：admin</p>
          <p>职业：web前端开发</p>
          <p>性别：女</p>
          <p>年龄：xx</p>
          <p>兴趣：xxx</p>
          <p>爱好：xxxxx</p>
          <p>特长：xxxxxxxxxxxx</p>
          </div>
        </a-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      description: '',
    }
  },
}
</script>
<style>
.my {
  width: 100%;
  height: 100%;
  background-image: url(../assets/bg.jpg);
  /* background-size: cover; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.info {
  width: 400px;
  padding-top: 16px;
  background: #99B1D8;
}
.ant-divider-inner-text {
    display: inline-block;
    padding: 0 20px;
    color: white;
    font-size: 18px;
}
.info-content{
    width: 100%;
    text-align: start;
}
</style>
