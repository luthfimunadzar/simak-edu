<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col lg="8" offset-lg="2">
          <div class="filter-search d-lg-none d-block">
            <b-link class="filter">
              Urutkan
              <img src="/adown-gray.svg" alt="">
            </b-link>
            <b-link class="search">
              <img src="/search.svg" alt="">
            </b-link>
          </div>

          <h3 class="anggota-title">
            <span>Pendidik</span> 
          </h3>
          <ul class="anggota-list">
            <li v-for="guru in gurus" :key="guru.id">
              <div class="anggota-item">
                <div class="image" :style="{ backgroundImage: 'url(' + guru.img + ')' }"></div>
                <h6>{{ guru.name }}</h6>
              </div>
            </li>
          </ul>
          <h3 class="anggota-title">  
            <span>Peserta Pendidik</span> 
          </h3>
          <span class="count-siswa">{{ murids.length }} Siswa</span>
          <b-link class="sort"><img src="/sort.svg" alt=""></b-link>
          <ul class="anggota-list">
            <li v-for="murid in murids" :key="murid.id">
              <div class="anggota-item">
                <div class="image" :style="{ backgroundImage: 'url(' + murid.img + ')' }"></div>
                <h6>{{ murid.name }}</h6>
              </div>
            </li>
          </ul>
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
      murids: [
        {
          id: 1,
          img: '/profile.svg',
          name: 'Ahmad Anshori'
        },
        {
          id: 2,
          img: '/profile2.svg',
          name: 'Asep Balon'
        },
        {
          id: 3,
          img: '/profile.svg',
          name: 'Ahmad Anshori'
        },
        {
          id: 4,
          img: '/profile2.svg',
          name: 'Asep Balon'
        },
        {
          id: 5,
          img: '/profile.svg',
          name: 'Ahmad Anshori'
        },
        {
          id: 6,
          img: '/profile2.svg',
          name: 'Asep Balon'
        },
        {
          id: 7,
          img: '/profile.svg',
          name: 'Ahmad Anshori'
        },
        {
          id: 8,
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
    }
	}
}
</script>