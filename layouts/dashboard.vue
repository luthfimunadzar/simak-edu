<template>
  <div>
    <Sidebar />
    <Header />
    <MenuRom />
    <div :class="['dashboard-content', {'fullRes': onKelas}, {'white-bg': whiteBg}]">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    onKelas(){
      return this.$store.state.kelas.onKelas
    },
    whiteBg(){
      return this.$store.state.kelas.whiteBg
    },
  },
}
</script>