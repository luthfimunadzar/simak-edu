<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col lg="4">
          <div class="menu-pembelajaran">
            <b-link :class="['all', {'active': allTopik}]" @click="initTopik">
              Semua Topik
            </b-link>
            <b-link v-for="(top, index) in list_topik" :class="[{'active': topikActive[index] === true}]" :key="top.id" @click="chooseTopik(top.id, index)">
              {{ top.nama_topik }}
            </b-link>
          </div>
        </b-col>    
        <b-col lg="8">
          <div class="list-pembelajaran" v-if="!detailOpened">
            <div class="head-list">
              <form action="">
                <input type="search" class="search form-control">
              </form>
              <b-link class="sort"><img src="/sort.svg" alt=""></b-link>
              <b-dropdown class="buat" right>
                <template v-slot:button-content>
                  + Buat
                </template>
                <b-dropdown-item href="#">
                  <img src="/materi.svg" alt="" class="rela">
                  <img src="/materi-w.svg" alt="" class="abso">
                  Materi
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  <img src="/tugas.svg" alt="" class="rela">
                  <img src="/tugas-w.svg" alt="" class="abso">
                  Tugas
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  <img src="/tugas-quiz.svg" alt="" class="rela">
                  <img src="/tugas-quiz-w.svg" alt="" class="abso">
                  Tugas Kuis
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  <img src="/tugas-pertanyaan.svg" alt="" class="rela">
                  <img src="/tugas-pertanyaan-w.svg" alt="" class="abso">
                  Pertanyaan
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  <img src="/tugas-sebelumnya.svg" alt="" class="rela">
                  <img src="/tugas-sebelumnya-w.svg" alt="" class="abso">
                  Gunakan Kembali Postingan
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  <img src="/topik.svg" alt="" class="rela">
                  <img src="/topik-w.svg" alt="" class="abso">
                  Topik
                </b-dropdown-item>
              </b-dropdown>
              <b-form-select v-model="kompDasar" class="kompDasar">
                <template v-slot:first>
                  <b-form-select-option :value="null" disabled>Dropdown Semua komp dasar</b-form-select-option>
                </template>
                
                <b-form-select-option v-for="kd in kompetensi_dasar" :key="kd.id" :value="kd.id">{{ kd.name }}</b-form-select-option>
              </b-form-select>
            </div>
            <div class="body-list">
              <template v-if="!wrapTopik.length">
                <div class="topik-item text-center empty">
                  <img src="/empty.svg" alt="" class="mb-3">
                  <h3>Topik Ini belum mempunyai aktifitas</h3>
                </div>
              </template>
              <template v-else>
                <div class="topik-item" v-for="topik in wrapTopik" :key="topik.id">
                  <h3>{{ topik.name }}</h3>
                  <b-dropdown right class="opt">
                    <template v-slot:button-content>
                      <img src="/dots.svg" alt="">
                    </template>
                    <b-dropdown-item href="#">Action</b-dropdown-item>
                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                  </b-dropdown>
                  <h6>{{ topik.kompentensi }}</h6>

                  <b-link class="aktifitas-item" @click="goToDetail" v-for="aktif in topik.aktifitas" :key="aktif.id">
                    <span class="icon" v-if="aktif.type==='materi'"></span>
                    <span class="icon red" v-else-if="aktif.type==='video'"></span>
                    <span class="icon green" v-else-if="aktif.type==='tugas'"></span>
                    <span class="icon yellow" v-else-if="aktif.type==='pertanyaan'"></span>
                    <span class="icon purple" v-else-if="aktif.type==='ulangan'"></span>

                    <p>{{ aktif.name }}</p>

                    <span class="date">Diposting tanggal {{ aktif.date }}</span>
                  </b-link>
                </div>
              </template>
            </div>
          </div>
          <div class="detail-aktifitas" v-else>
            <div class="head-detail">
              <b-link class="back-link" @click="backToTopic">
                <img src="/back.svg" alt="">
              </b-link>
              <h5>Bab 1 Bilangan Bulat</h5>
              <b-dropdown right class="opt">
                <template v-slot:button-content>
                  <img src="/dots.svg" alt="">
                </template>
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
              </b-dropdown>
              <h6 class="kompetensi">KD 3.1 & 4.1</h6>
            </div>
            <div class="body-detail">
              <span class="icon red"></span>
              <h3>Video Penjelasan Phytagoras</h3>
              <span class="date">Diposting Tanggal 03 Agu</span>
              <span class="date">Terakhir diedit (13/09/2020)</span>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea</p>
              <b-link href="" class="video-link">
                <div class="image" :style="{ backgroundImage: 'url(https://img.youtube.com/vi/' + '1T2gaG5vPk8' + '/0.jpg)' }"></div>
                <div class="wrap">
                  <h6>Matematika Kelas 8 - Teori Phytagoras 1</h6>
                  <span>Video durasi 25 menit</span>
                </div>
              </b-link>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  layout: 'dashboard',
  data(){
    return{
      detailOpened: false,
      kompDasar: 1,
      allTopik: true,
      topikActive: [],
      wrapTopik: [],
      list_topik: [
        {
          id: 1,
          nama_topik: 'Bab 1 - Bilangan Bulat'
        },
        {
          id: 2,
          nama_topik: 'Bab 2 - Pecahan'
        },
        {
          id: 3,
          nama_topik: 'Bab 3 - Bentuk Aljabar'
        },
        {
          id: 4,
          nama_topik: 'Bab 4 - Persamaan Dan Pertidaksamaan Linear Satu Variable'
        },
        {
          id: 5,
          nama_topik: 'Bab 5 - Perbandingan dan aritmatika Social'
        },
        {
          id: 6,
          nama_topik: 'Bab 6 - Himpunan'
        },
        {
          id: 7,
          nama_topik: 'Bab 7 - Garis dan Sudut'
        },
        {
          id: 8,
          nama_topik: 'Bab 8 - Segitiga dan Segiempat'
        },
      ],
      kompetensi_dasar: [
        {
          id: 1,
          name: 'KD 3.1 & 4.1',
        },
        {
          id: 2,
          name: 'KD 4.1 & 4.1',
        },
        {
          id: 3,
          name: 'KD 3.1 & 4.1',
        },
      ],
      topik: [
        {
          id: 1,
          name: 'Bab 1 - Bilangan Bulat',
          kompentensi: 'KD 3.1 & 4.1',
          aktifitas: [
            {
              id: 1,
              type: 'video',
              name: 'Video Penjelasan Phytagoras',
              date: '03 Agustus 2020'
            },
            {
              id: 2,
              type: 'materi',
              name: 'Bahan Ajar Phytagoras',
              date: '03 Agustus 2020'
            },
            {
              id: 3,
              type: 'tugas',
              name: 'Tugas sifat sudut segitiga',
              date: '03 Agustus 2020'
            },
            {
              id: 4,
              type: 'pertanyaan',
              name: 'Apakah yang anda ketahui tentang hukum…',
              date: '03 Agustus 2020'
            },
            {
              id: 5,
              type: 'ulangan',
              name: 'Ulangan Harian Phytagoras 1',
              date: '03 Agustus 2020'
            },
          ]
        },
        {
          id: 2,
          name: 'Bab 2 - Pecahan',
          kompentensi: 'KD 3.1 & 4.1',
          aktifitas: [
            {
              id: 1,
              type: 'video',
              name: 'Video Penjelasan Phytagoras',
              date: '03 Agustus 2020'
            },
            {
              id: 2,
              type: 'materi',
              name: 'Bahan Ajar Phytagoras',
              date: '03 Agustus 2020'
            },
            {
              id: 3,
              type: 'tugas',
              name: 'Tugas sifat sudut segitiga',
              date: '03 Agustus 2020'
            },
            {
              id: 4,
              type: 'pertanyaan',
              name: 'Apakah yang anda ketahui tentang hukum…',
              date: '03 Agustus 2020'
            },
            {
              id: 5,
              type: 'ulangan',
              name: 'Ulangan Harian Phytagoras 1',
              date: '03 Agustus 2020'
            },
          ]
        }
      ]
    }
  },
  mounted(){
    this.$store.commit("kelas/setMenu", true);
    this.$store.commit("kelas/setIdKelas", this.$route.params.id);
    this.closeSidebarMenu()
    this.initTopik()
  },
	methods: {
    closeSidebarMenu(){
      var menu = document.querySelector('.menu-rombongan')
      var sidebar = document.querySelector('.sidebar')

      menu.classList.remove('slideBot')
      sidebar.classList.remove('slideIn')
    },
    initTopik(){
      this.topikActive = []
      this.allTopik = true
      this.wrapTopik = this.topik
    },
    chooseTopik(id, index){
      this.allTopik = false
      this.topikActive = []
      this.topikActive[index] = true

      this.wrapTopik = _.filter(this.topik, ['id', id]);
    },
    goToDetail(){
      this.detailOpened = true
    },
    backToTopic(){
      this.detailOpened = false
    }
	}
}
</script>