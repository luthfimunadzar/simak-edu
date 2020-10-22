<template>
  	<aside class="sidebar">
		<div class="sidebar-wrap">
			<div class="logo">
				<img src="/logo-white.svg" alt="" class="abso">
				<img src="/logo-full-white.svg" alt="" class="rela">
				<b-link @click="closeSidebar" class="sb-close d-lg-none d-block"><img src="/sb-close.svg" alt=""></b-link>
			</div>
			<b-link :to="localePath({ name: 'dashboard' })" class="sidebar-main">
				<img src="/rb.svg" alt="">
				<h6>Rombongan Belajar</h6>
			</b-link>
			<b-link to="#" class="sidebar-main">
				<img src="/ud.svg" alt="">
				<h6>Untuk Diperiksa</h6>
			</b-link>
			<b-link :to="localePath({ name: 'dashboard-bank-soal' })" class="sidebar-main">
				<img src="/rb.svg" alt="">
				<h6>Bank Soal</h6>
			</b-link>
			<h6 class="ket">Kelas yg diajar</h6>
			<ul class="list-rombongan">
				<li v-for="kelas in classes" :key="kelas.id">
					<b-link :to="'dashboard/rombongan/' + kelas.id">
						<div class="icon">{{ kelas.class_name.substring(0, kelas.class_name.indexOf(" ")) }}</div>
						<h5>{{ kelas.class_name }}</h5>
						<!-- <h6>{{ kelas.subject }}</h6> -->
					</b-link>
				</li>
			</ul>
			<b-link to="" class="view-more d-lg-none d-block">
				Lihat Semua >
			</b-link>
			<div class="profile-sidebar d-lg-none d-block">
				<div class="wrap-profile">
					<div class="profile-image big" :style="{ backgroundImage: 'url(' + '/profile.svg' + ')' }"></div>
					<h5 class="name">Ahmed Ansori</h5>
					<h6 class="school">achasdfsasdf@gmail.com</h6>
				</div>
				<b-link to="#" class="logout btn btn-outline-danger">Logout</b-link>
			</div>
		</div>
  	</aside>
</template>

<script>
export default {
	data(){
		return{
			classes: [
				{ id: 1, class_name: 'XI IPA 2', subject: 'Matematika'},
				{ id: 2, class_name: 'XII IPA 3', subject: 'Matematika'},
			]
		}
	},
  methods: {
    closeSidebar() {
      var sidebar = document.querySelector('.sidebar')

      sidebar.classList.remove('slideIn')
    },
  }
}
</script>
