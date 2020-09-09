<template>
  <div>
    <Sidebar />
    <Header />
    <MenuRom />
    <div :class="['dashboard-content', {'fullRes': onKelas}]">
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
  },
}
</script>