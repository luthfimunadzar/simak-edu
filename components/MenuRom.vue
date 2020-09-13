<template>
  	<div class="menu-rombongan">
      <b-link @click="closeMenu" class="menu-close d-lg-none d-block"><img src="/sb-close.svg" alt=""></b-link>
      <div class="logo">
        <img src="/logo-full-white.svg" alt="" class="rela">
      </div>
        
      <b-navbar-nav>
        <b-nav-item :to="localePath({ name: 'dashboard-kelas-id', params: { id: idKelas } })">FORUM</b-nav-item>
        <b-nav-item :to="localePath({ name: 'dashboard-kelas-id-pembelajaran', params: { id: idKelas } })">PEMBELAJARAN</b-nav-item>
        <b-nav-item :to="localePath({ name: 'dashboard-kelas-id-anggota', params: { id: idKelas } })">ANGGOTA</b-nav-item>
        <b-nav-item to="#">NILAI</b-nav-item>
      </b-navbar-nav>

      <div class="login-simak">
        <div class="ket">
          <span>Login Simak App</span>
        </div>
        <b-link to="#" style="background-image: url('https://via.placeholder.com/70')" class="simak-link"></b-link>
        <b-link to="#" style="background-image: url('https://via.placeholder.com/70')" class="simak-link"></b-link>
      </div>
  	</div>
</template>

<script>
export default {
	data(){
		return{
		}
	},
  computed: {
    idKelas(){
      return this.$store.state.kelas.idKelas
    }
  },
  methods: {
    closeMenu() {
      var menu = document.querySelector('.menu-rombongan')

      menu.classList.remove('slideBot')
    },
  }
}
</script>
