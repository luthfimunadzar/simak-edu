<template>
  <b-navbar>
    <!-- <b-link class="toggle-sidebar mr-auto" @click="openSidebar"><img src="/menu.svg" alt=""></b-link> -->
    <!-- <div class="whitespace mr-auto"></div> -->

    <!-- <b-navbar-brand href="#" class="mx-auto"><img src="/logo.svg" alt=""></b-navbar-brand> -->
    <b-navbar-nav class="header-menu mx-auto">
      <b-nav-item href="#">FORUM</b-nav-item>
      <b-nav-item href="#">TUGAS KELAS</b-nav-item>
      <b-nav-item href="#">ANGGOTA</b-nav-item>
      <b-nav-item href="#">NILAI</b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="dropdown-util">
      <b-nav-item-dropdown right>
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
      <b-nav-item-dropdown right class="other-apps">
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

    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    // openSidebar() {
    //   var sidebar = document.querySelector('.sidebar')
    //   var overlay = document.querySelector('.overlay')
    //   sidebar.classList.add('opened')
    //   overlay.classList.add('d-show')
    // },
  }
}
</script>