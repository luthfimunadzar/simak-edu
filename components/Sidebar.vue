<template>
  <aside class="sidebar">
		<div class="sidebar-wrap">
			<b-link class="sidebar-close" @click="closeSidebar">
				<img src="/close.svg" alt="">
			</b-link>
			<b-link to="/dashboard" class="sidebar-main">
				<i class="fas fa-home"></i>
				<h6>Rombongan Belajar</h6>
			</b-link>
			<b-link to="#" class="sidebar-main">
				<i class="fas fa-folder"></i>
				<h6>Untuk Diperiksa</h6>
			</b-link>
			<hr/>
			<h6 class="ket">Mengajar</h6>
			<ul class="list-rombongan">
				<li v-for="kelas in classes" :key="kelas.id">
					<b-link :to="'dashboard/rombongan/' + kelas.id">
						<div class="icon">{{ kelas.class_name.substring(0, 1) }}</div>
						<h5>{{ kelas.class_name }}</h5>
						<h6>{{ kelas.subject }}</h6>
					</b-link>
				</li>
			</ul>
		</div>
  </aside>
</template>

<script>
export default {
	data(){
		return{
			classes: [
				{ id: 1, class_name: 'X IPA 2', subject: 'Matematika'},
				{ id: 2, class_name: 'X IPA 3', subject: 'Matematika'},
			]
		}
	},
  methods: {
    closeSidebar() {
      var sidebar = document.querySelector('.sidebar')
      var overlay = document.querySelector('.overlay')
      sidebar.classList.remove('opened')
      overlay.classList.remove('d-show')
    },
  }
}
</script>
