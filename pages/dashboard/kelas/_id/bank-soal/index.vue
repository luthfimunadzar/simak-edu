<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col lg="12">
          <div class="input-tugas">
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data(){
    return{
      modalShow: false,
      loading: false,
      gurus: [
        {
          id: 1,
          img: '/profile.svg',
          name: 'Ahmad Anshori'
        },
        {
          id: 2,
          img: '/profile2.svg',
          name: 'Asep Balon'
        }
      ],
    }
  },
  mounted(){
    this.$store.commit("kelas/setMenu", true);
    this.$store.commit("kelas/setIdKelas", this.$route.params.id);
    this.closeSidebarMenu()
  },
	methods: {
    closeSidebarMenu(){
      var menu = document.querySelector('.menu-rombongan')
      var sidebar = document.querySelector('.sidebar')

      menu.classList.remove('slideBot')
      sidebar.classList.remove('slideIn')
    },
	}
}
</script>