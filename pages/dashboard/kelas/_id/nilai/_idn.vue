<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col lg="8" offset-lg="2">
          <div class="detail-nilai">
            <div class="head-detail-nilai">
              <b-link :to="localePath({ name: 'dashboard-kelas-id-nilai', params: { id: $route.params.id } })" class="back-link"><img src="/back.svg" alt=""> Nilai Siswa</b-link>
              <div class="avatar">
                <span class="image" :style="{ backgroundImage: 'url(' + detailNilai.img + ')' }"></span>
                <h5>{{ detailNilai.name }}</h5>
              </div>
            </div>
            <b-tabs>
              <b-tab active>
                <template v-slot:title>
                  Semua
                </template>
                
                <v-data-table
                  :items="detailNilai.nilai"
                  :hide-default-footer="true"
                  class="table-detail-nilai"
                >
                  <template v-slot:item="{ item }">
                    <tr>
                      <td>{{ item.name }}</td>
                      <td class="text-center">{{ item.batas }}</td>
                      <td class="text-right">{{ (item.status === 'Sudah Dinilai') ? item.grade : item.status }}</td>
                    </tr>
                  </template>
                </v-data-table>
              </b-tab>

              <b-tab>
                <template v-slot:title>
                  Belum Dikumpulkan
                </template>
                
                <v-data-table
                  :items="NilaiBKumpul"
                  :hide-default-footer="true"
                  class="table-detail-nilai"
                >
                  <template v-slot:item="{ item }">
                    <tr>
                      <td>{{ item.name }}</td>
                      <td class="text-center">{{ item.batas }}</td>
                      <td class="text-right">{{ item.status }}</td>
                    </tr>
                  </template>
                </v-data-table>
              </b-tab>

              <b-tab>
                <template v-slot:title>
                  Sudah Dikumpulkan
                </template>
                
                <v-data-table
                  :items="NilaiSKumpul"
                  :hide-default-footer="true"
                  class="table-detail-nilai"
                >
                  <template v-slot:item="{ item }">
                    <tr>
                      <td>{{ item.name }}</td>
                      <td class="text-center">{{ item.batas }}</td>
                      <td class="text-right">{{ item.status }}</td>
                    </tr>
                  </template>
                </v-data-table>
              </b-tab>

              <b-tab>
                <template v-slot:title>
                  Sudah Dinilai
                </template>
                
                <v-data-table
                  :items="NilaiDinilai"
                  :hide-default-footer="true"
                  class="table-detail-nilai"
                >
                  <template v-slot:item="{ item }">
                    <tr>
                      <td>{{ item.name }}</td>
                      <td class="text-center">{{ item.batas }}</td>
                      <td class="text-right">{{ item.grade }}</td>
                    </tr>
                  </template>
                </v-data-table>
              </b-tab>
            </b-tabs>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  layout: 'dashboard',
  data(){
    return{
      date: "",
      detailNilai: {
        id: 1,
        name: 'Achmad Anshori',
        img: '/profile.svg',
        nilai: [
          {
            id: 1,
            name: 'Pangkat Soal - PG',
            batas: '8 Agustus 09:30',
            status: 'Belum Dikumpulkan',
            grade: '',
          },
          {
            id: 2,
            name: 'Pangkat Soal - PG',
            batas: '8 Agustus 09:30',
            status: 'Belum Dikumpulkan',
            grade: '',
          },
          {
            id: 3,
            name: 'Pangkat Soal - PG',
            batas: '8 Agustus 09:30',
            status: 'Belum Dikumpulkan',
            grade: '',
          },
          {
            id: 4,
            name: 'Pangkat Soal - PG',
            batas: '8 Agustus 09:30',
            status: 'Sudah Dikumpulkan',
            grade: '',
          },
          {
            id: 5,
            name: 'Pangkat Soal - PG',
            batas: '8 Agustus 09:30',
            status: 'Sudah Dikumpulkan',
            grade: '',
          },
          {
            id: 6,
            name: 'Pangkat Soal - PG',
            batas: '8 Agustus 09:30',
            status: 'Sudah Dikumpulkan',
            grade: '',
          },
          {
            id: 7,
            name: 'Pangkat Soal - PG',
            batas: '8 Agustus 09:30',
            status: 'Sudah Dinilai',
            grade: '87 / 100',
          },
          {
            id: 8,
            name: 'Pangkat Soal - PG',
            batas: '8 Agustus 09:30',
            status: 'Sudah Dinilai',
            grade: '90 / 100',
          },
          {
            id: 9,
            name: 'Pangkat Soal - PG',
            batas: '8 Agustus 09:30',
            status: 'Sudah Dinilai',
            grade: '100 / 100',
          },
        ]
      }
    }
  },
  computed: {
    NilaiBKumpul(){
      var arrayNilai = _.filter(this.detailNilai.nilai, { 'status': 'Belum Dikumpulkan' })
      return arrayNilai
    },
    NilaiSKumpul(){
      var arrayNilai = _.filter(this.detailNilai.nilai, { 'status': 'Sudah Dikumpulkan' })
      return arrayNilai
    },
    NilaiDinilai(){
      var arrayNilai = _.filter(this.detailNilai.nilai, { 'status': 'Sudah Dinilai' })
      return arrayNilai
    },
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