<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col lg="12">
          <div class="list-bank">
            <div class="list-head">
              <h3>
                <b-link :to="localePath({ name: 'dashboard-bank-soal' })" class="back"><img src="/back.svg" alt=""></b-link>
                Data Bank Soal
              </h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</p>
            </div>
            <div class="list-filter">
              <b-form-input v-model="search" placeholder="Cari Topik dan pelajaran.." class="search"></b-form-input>
              <button class="btn btn-default sorted"><img src="/sort-black.svg" alt=""></button>
              <b-form-select v-model="tingkat">
                <option :value="opt.id" v-for="opt in optTingkat" :key="opt.id">{{ opt.name }}</option>
              </b-form-select>
              <b-form-select v-model="matpel" class="w-mr">
                <option :value="opt.id" v-for="opt in optMatpel" :key="opt.id">{{ opt.name }}</option>
              </b-form-select>
              <b-button variant="secondary"><img src="/plus.svg" alt=""> Buat Bank Soal</b-button>
              <b-button variant="secondary"><img src="/plus.svg" alt=""> Buat Paket Soal</b-button>
            </div>
            <b-row>
              <b-col md="4" v-for="item in banks" :key="item.id">
                <div class="bank-item">
                  <div class="image">
                    <span class="matpel">{{ item.matpel }}</span>
                    <img :src="item.img" alt="">
                  </div>
                  <h5>{{ item.nama_bab }}</h5>
                  <p>{{ item.matpel }}</p>
                  <p>{{ item.kelas }}</p>
                  <div class="status">
                    <span class="soal">{{ item.soal }} Soal</span>
                    Terakhir diubah - {{ item.date }}
                  </div>
                  <b-link to="" class="float-btn">
                    Lihat Bank Soal
                  </b-link>
                </div>
              </b-col>
            </b-row>
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
      search: '',
      matpel: '',
      tingkat: '',
      optTingkat: [
        {
          id: 1,
          name: 'Kelas XII',
        },
        {
          id: 2,
          name: 'Kelas XI',
        },
        {
          id: 3,
          name: 'Kelas X',
        },
      ],
      optMatpel: [
        {
          id: 1,
          name: 'Bahasa Indonesia',
        },
        {
          id: 2,
          name: 'Matematika',
        },
        {
          id: 3,
          name: 'IPA',
        },
      ],
      banks: [
        {
          id: 1,
          img: '/illu-rombel-mini.svg',
          matpel: 'Bahasa Indonesia',
          nama_bab: 'BAB II - Pengenalan Bahasa',
          kelas: 'Kelas XII',
          soal: 100,
          date: '13 Juni 2020'
        },
        {
          id: 2,
          img: '/illu-rombel.svg',
          matpel: 'Matematika',
          nama_bab: 'BAB II - Aljabar',
          kelas: 'Kelas XII',
          soal: 100,
          date: '13 Juni 2020'
        },
        {
          id: 3,
          img: '/illu-rombel-mini.svg',
          matpel: 'Bahasa Indonesia',
          nama_bab: 'BAB II - Pengenalan Bahasa',
          kelas: 'Kelas XII',
          soal: 100,
          date: '13 Juni 2020'
        },
        {
          id: 4,
          img: '/illu-rombel.svg',
          matpel: 'Matematika',
          nama_bab: 'BAB II - Aljabar',
          kelas: 'Kelas XII',
          soal: 100,
          date: '13 Juni 2020'
        },
        {
          id: 5,
          img: '/illu-rombel-mini.svg',
          matpel: 'Bahasa Indonesia',
          nama_bab: 'BAB II - Pengenalan Bahasa',
          kelas: 'Kelas XII',
          soal: 100,
          date: '13 Juni 2020'
        },
        {
          id: 6,
          img: '/illu-rombel.svg',
          matpel: 'Matematika',
          nama_bab: 'BAB II - Aljabar',
          kelas: 'Kelas XII',
          soal: 100,
          date: '13 Juni 2020'
        },
      ],
    }
  },
  mounted(){
    this.$store.commit("kelas/setMenu", false);
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