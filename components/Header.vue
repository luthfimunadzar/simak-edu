<template>
  <b-navbar>
    <!-- <b-link class="toggle-sidebar mr-auto" @click="openSidebar"><img src="/menu.svg" alt=""></b-link> -->
    <!-- <div class="whitespace mr-auto"></div> -->

    <b-navbar-brand href="#" class="mr-auto d-lg-none d-flex"><img src="/logo-white.svg" alt=""></b-navbar-brand>
    <div class="info-kelas d-lg-block d-none" v-if="onKelas">
      <h4>XI IPA 1</h4>
      <h6>Matematika</h6>
    </div>


    <b-navbar-nav class="header-menu mx-auto d-lg-flex d-none" v-if="onKelas">
      <b-nav-item :to="localePath({ name: 'dashboard-kelas-id', params: { id: idKelas } })">FORUM</b-nav-item>
      <b-nav-item :to="localePath({ name: 'dashboard-kelas-id-pembelajaran', params: { id: idKelas } })">PEMBELAJARAN</b-nav-item>
      <b-nav-item :to="localePath({ name: 'dashboard-kelas-id-anggota', params: { id: idKelas } })">ANGGOTA</b-nav-item>
      <b-nav-item to="#">NILAI</b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="dropdown-util ml-auto">
      <b-nav-item-dropdown right class="d-lg-inline-block d-none">
        <template v-slot:button-content>
          <div class="profile-image" :style="{ backgroundImage: 'url(' + '/profile.svg' + ')' }"></div>
        </template>
        <li class="profile">
          <div class="profile-image big" :style="{ backgroundImage: 'url(' + '/profile.svg' + ')' }"></div>
          <h5 class="name">Ahmed Ansori</h5>
          <h6 class="school">achasdfsasdf@gmail.com</h6>
          <hr />
          <b-link to="#" class="logout btn btn-outline-danger">Logout</b-link>
        </li>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown right class="other-apps d-lg-inline-block d-none">
        <template v-slot:button-content>
          <img src="/dashboard.svg" alt="">
        </template>
        <li class="other-link">
          <b-link to="#" target="_blank">
            <div class="icon-image" :style="{ backgroundImage: 'url(' + 'https://via.placeholder.com/70' + ')' }"></div>
            <span>SimakID</span>
          </b-link>
        </li>
        <li class="other-link">
          <b-link to="#" target="_blank">
            <div class="icon-image" :style="{ backgroundImage: 'url(' + 'https://via.placeholder.com/70' + ')' }"></div>
            <span>Simak</span>
          </b-link>
        </li>
      </b-nav-item-dropdown>
      <b-nav-item @click="openMenu" class="d-lg-none d-inline-block" v-if="onKelas">
        <img src="/dashboard-white.svg" alt="">
      </b-nav-item>
      <b-nav-item @click="openSidebar" class="d-lg-none ml-2 d-inline-block">
        <img src="/sb-white.svg" alt="">
      </b-nav-item>

    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    onKelas(){
      return this.$store.state.kelas.onKelas
    },
    idKelas(){
      return this.$store.state.kelas.idKelas
    }
  },
  methods: {
    openSidebar() {
      var sidebar = document.querySelector('.sidebar')

      sidebar.classList.add('slideIn')
    },
    openMenu() {
      var menu = document.querySelector('.menu-rombongan')

      menu.classList.add('slideBot')
    },
  }
}
</script>