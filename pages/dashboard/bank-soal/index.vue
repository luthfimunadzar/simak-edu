<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col lg="12">
          <div class="head-bank-soal">
            <div class="intro">
              <b-row>
                <b-col md="8" offset-md="2">
                  <div class="row align-items-center">
                    <b-col md="4" class="text-center">
                      <img src="/intro-bank.svg" alt="" class="img-fluid">
                    </b-col>
                    <b-col md="8">
                      <h3>Bank Soal</h3>
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </b-col>
                  </div>
                </b-col>
              </b-row>
            </div>
            <b-row>
              <b-col md="3">
                <div class="nav-bank">
                  <h5>Buat Soal</h5>
                  <p>Membuat Bank Soal, yang akan disimpan di database kami.</p>
                  <b-link>
                    Buat Soal
                  </b-link>
                </div>
              </b-col>
              <b-col md="3">
                <div class="nav-bank">
                  <h5>Buat Paket Soal</h5>
                  <p>Membuat Bank Soal, yang akan disimpan di database kami.</p>
                  <b-link>
                    Buat Paket Soal
                  </b-link>
                </div>
              </b-col>
              <b-col md="3">
                <div class="nav-bank">
                  <h5>Data Soal</h5>
                  <p>Membuat Bank Soal, yang akan disimpan di database kami.</p>
                  <b-link>
                    Lihat Data Soal
                  </b-link>
                </div>
              </b-col>
              <b-col md="3">
                <div class="nav-bank">
                  <h5>Data Paket Soal</h5>
                  <p>Membuat Bank Soal, yang akan disimpan di database kami.</p>
                  <b-link>
                    Lihat Paket Soal
                  </b-link>
                </div>
              </b-col>
            </b-row>
          </div>

          <div class="list-bank">
            <div class="list-head">
              <h3>List Bank Soal</h3>
              <p>List bank soal yang terakhir anda buat.</p>
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
              <b-col md="12" class="text-center">
                <b-link :to="localePath({ name: 'dashboard-bank-soal-data-bank-soal' })" class="more">Selengkapnya</b-link>
              </b-col>
            </b-row>
          </div>

          <div class="list-bank">
            <div class="list-head">
              <h3>List Paket Soal</h3>
              <p>List Paket soal yang terakhir anda buat.</p>
            </div>
            <b-row>
              <b-col md="4" v-for="item in pakets" :key="item.id">
                <div class="bank-item">
                  <div class="image">
                    <span class="matpel">{{ item.matpel }}</span>
                    <img :src="item.img" alt="">
                  </div>
                  <h5>{{ item.nama_bab }}</h5>
                  <p>{{ item.matpel }}</p>
                  <p>{{ item.kelas }}</p>
                  <ul>
                    <li v-for="komp in item.komposisi" :key="komp.id">
                      <span class="count">{{ komp.jumlah }}</span>
                      {{ komp.name }}
                    </li>
                  </ul>
                  <div class="status">
                    <span class="soal">{{ item.soal }} Soal</span>
                    Terakhir diubah - {{ item.date }}
                  </div>
                  <b-link to="" class="float-btn">
                    Lihat Bank Soal
                  </b-link>
                </div>
              </b-col>
              <b-col md="12" class="text-center">
                <b-link :to="localePath({ name: 'dashboard-bank-soal-list-paket-soal' })" class="more">Selengkapnya</b-link>
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
      pakets: [
        {
          id: 1,
          img: '/illu-rombel-mini.svg',
          matpel: 'Bahasa Indonesia',
          nama_bab: 'BAB II - Pengenalan Bahasa',
          kelas: 'Kelas XII',
          soal: 100,
          komposisi: [
            {
              id: 1,
              name: 'Soal Pilihan Ganda',
              jumlah: 20,
            },
            {
              id: 2,
              name: 'Soal Uraian',
              jumlah: 30,
            },
            {
              id: 3,
              name: 'Soal Jawaban Singkat',
              jumlah: 50,
            },
          ],
          date: '13 Juni 2020'
        },
        {
          id: 2,
          img: '/illu-rombel.svg',
          matpel: 'Matematika',
          nama_bab: 'BAB II - Aljabar',
          kelas: 'Kelas XII',
          soal: 100,
          komposisi: [
            {
              id: 1,
              name: 'Soal Pilihan Ganda',
              jumlah: 20,
            },
            {
              id: 2,
              name: 'Soal Uraian',
              jumlah: 30,
            },
            {
              id: 3,
              name: 'Soal Jawaban Singkat',
              jumlah: 50,
            },
          ],
          date: '13 Juni 2020'
        },
        {
          id: 3,
          img: '/illu-rombel-mini.svg',
          matpel: 'Bahasa Indonesia',
          nama_bab: 'BAB II - Pengenalan Bahasa',
          kelas: 'Kelas XII',
          soal: 100,
          komposisi: [
            {
              id: 1,
              name: 'Soal Pilihan Ganda',
              jumlah: 20,
            },
            {
              id: 2,
              name: 'Soal Uraian',
              jumlah: 30,
            },
            {
              id: 3,
              name: 'Soal Jawaban Singkat',
              jumlah: 50,
            },
          ],
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