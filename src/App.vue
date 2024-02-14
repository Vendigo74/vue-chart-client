<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-button>Hello button</el-button>
        <main-page />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import MainPage from './pages/MainPage.vue';

export default {
  name: 'App',
  components: {
    MainPage
  },
};
</script>
<style>
.common-layout {
  max-width: 1200px;
  margin: 0 auto;
}
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 60px;
}

.container {
  display: flex;
  width: 400px;
  height: 400px;
}
</style>
