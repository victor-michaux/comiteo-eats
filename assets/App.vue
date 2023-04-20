<template>
    <div
        id="app"
        class="main-container"
    >
        <Header />
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    mounted() {
        console.log('Component mounted.');
    },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
