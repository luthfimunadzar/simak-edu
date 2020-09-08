<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col xl="3" lg="4" v-for="romb in rombongan" :key="romb.id" class="romb-class">
          <div class="romb-wrap">
            <b-dropdown id="dropdown-right" right text="Right align" class="opt">
              <template v-slot:button-content>
                <img src="/dots.svg" alt="">
              </template>
              <b-dropdown-item href="#">Action</b-dropdown-item>
              <b-dropdown-item href="#">Another action</b-dropdown-item>
            </b-dropdown>
            <b-link :to="'/dashboard/kelas/' + romb.id" class="romb-item">
              <div class="romb-head">
                <h4 class="romb-subject">{{ romb.subject }}</h4>
                <span class="romb-class">{{ romb.class }}</span>
                <div class="teacher">
                  <div class="te-image" :style="{ backgroundImage: 'url(' + romb.teacher_image + ')' }"></div>
                  <h6 class="te-name">{{ romb.teacher_name }}</h6>
                  <span class="te-title">{{ romb.teacher_title }}</span>
                </div>
              </div>
              <div class="romb-body">
                <div class="schedule-item" v-for="sche in romb.schedule" :key="sche.id">
                  <span class="schedule-head">{{ sche.date }}</span>
                  <ul>
                    <li v-for="ass in sche.assign" :key="ass.id">
                      {{ ass.hour }} - {{ ass.subject }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="romb-link d-lg-none d-block">
                Lihat Detail
              </div>
            </b-link>
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
      rombongan: [
        { 
          id: 1, 
          subject: 'Matematika',
          class: 'X IPA 1',  
          teacher_image: '\profile2.svg',  
          teacher_name: 'Indra Waluyo S.Pd',
          teacher_title: 'Guru Pengajar',
          schedule: [
            {
              id: 1,
              date: 'Rabu, 12 Agustus',
              assign: [
                { 
                  id: 1,
                  hour: '14:00',
                  subject: 'Tugas Sifat Sudut Segitiga'
                },
                { 
                  id: 2,
                  hour: '15:00',
                  subject: 'Tugas Al Jabar'
                },
              ]
            },
            {
              id: 2,
              date: 'Kamis, 13 Agustus',
              assign: [
                { 
                  id: 1,
                  hour: '14:00',
                  subject: 'Tugas Sifat Sudut Segitiga'
                },
              ]
            }
          ]
        },
        { 
          id: 2, 
          subject: 'Matematika',
          class: 'X IPA 1',  
          teacher_image: '\profile2.svg',  
          teacher_name: 'Indra Waluyo S.Pd',
          teacher_title: 'Guru Pengajar',
          schedule: [
            {
              id: 1,
              date: 'Rabu, 12 Agustus',
              assign: [
                { 
                  id: 1,
                  hour: '14:00',
                  subject: 'Tugas Sifat Sudut Segitiga'
                },
                { 
                  id: 2,
                  hour: '15:00',
                  subject: 'Tugas Al Jabar'
                },
              ]
            },
            {
              id: 2,
              date: 'Kamis, 13 Agustus',
              assign: [
                { 
                  id: 1,
                  hour: '14:00',
                  subject: 'Tugas Sifat Sudut Segitiga'
                },
              ]
            }
          ]
        },
        { 
          id: 3, 
          subject: 'Matematika',
          class: 'X IPA 1',  
          teacher_image: '\profile2.svg',  
          teacher_name: 'Indra Waluyo S.Pd',
          teacher_title: 'Guru Pengajar',
          schedule: [
            {
              id: 1,
              date: 'Rabu, 12 Agustus',
              assign: [
                { 
                  id: 1,
                  hour: '14:00',
                  subject: 'Tugas Sifat Sudut Segitiga'
                },
                { 
                  id: 2,
                  hour: '15:00',
                  subject: 'Tugas Al Jabar'
                },
              ]
            },
            {
              id: 2,
              date: 'Kamis, 13 Agustus',
              assign: [
                { 
                  id: 1,
                  hour: '14:00',
                  subject: 'Tugas Sifat Sudut Segitiga'
                },
              ]
            }
          ]
        },
        { 
          id: 4, 
          subject: 'Matematika',
          class: 'X IPA 1',  
          teacher_image: '\profile2.svg',  
          teacher_name: 'Indra Waluyo S.Pd',
          teacher_title: 'Guru Pengajar',
          schedule: [
            {
              id: 1,
              date: 'Rabu, 12 Agustus',
              assign: [
                { 
                  id: 1,
                  hour: '14:00',
                  subject: 'Tugas Sifat Sudut Segitiga'
                },
                { 
                  id: 2,
                  hour: '15:00',
                  subject: 'Tugas Al Jabar'
                },
              ]
            },
            {
              id: 2,
              date: 'Kamis, 13 Agustus',
              assign: [
                { 
                  id: 1,
                  hour: '14:00',
                  subject: 'Tugas Sifat Sudut Segitiga'
                },
              ]
            }
          ]
        },
        { 
          id: 5, 
          subject: 'Matematika',
          class: 'X IPA 1',  
          teacher_image: '\profile2.svg',  
          teacher_name: 'Indra Waluyo S.Pd',
          teacher_title: 'Guru Pengajar',
          schedule: [
            {
              id: 1,
              date: 'Rabu, 12 Agustus',
              assign: [
                { 
                  id: 1,
                  hour: '14:00',
                  subject: 'Tugas Sifat Sudut Segitiga'
                },
                { 
                  id: 2,
                  hour: '15:00',
                  subject: 'Tugas Al Jabar'
                },
              ]
            },
            {
              id: 2,
              date: 'Kamis, 13 Agustus',
              assign: [
                { 
                  id: 1,
                  hour: '14:00',
                  subject: 'Tugas Sifat Sudut Segitiga'
                },
              ]
            }
          ]
        },
        { 
          id: 6, 
          subject: 'Matematika',
          class: 'X IPA 1',  
          teacher_image: '\profile2.svg',  
          teacher_name: 'Indra Waluyo S.Pd',
          teacher_title: 'Guru Pengajar',
          schedule: [
            {
              id: 1,
              date: 'Rabu, 12 Agustus',
              assign: [
                { 
                  id: 1,
                  hour: '14:00',
                  subject: 'Tugas Sifat Sudut Segitiga'
                },
                { 
                  id: 2,
                  hour: '15:00',
                  subject: 'Tugas Al Jabar'
                },
              ]
            },
            {
              id: 2,
              date: 'Kamis, 13 Agustus',
              assign: [
                { 
                  id: 1,
                  hour: '14:00',
                  subject: 'Tugas Sifat Sudut Segitiga'
                },
              ]
            }
          ]
        },
        { 
          id: 7, 
          subject: 'Matematika',
          class: 'X IPA 1',  
          teacher_image: '\profile2.svg',  
          teacher_name: 'Indra Waluyo S.Pd',
          teacher_title: 'Guru Pengajar',
          schedule: [
            {
              id: 1,
              date: 'Rabu, 12 Agustus',
              assign: [
                { 
                  id: 1,
                  hour: '14:00',
                  subject: 'Tugas Sifat Sudut Segitiga'
                },
                { 
                  id: 2,
                  hour: '15:00',
                  subject: 'Tugas Al Jabar'
                },
              ]
            },
            {
              id: 2,
              date: 'Kamis, 13 Agustus',
              assign: [
                { 
                  id: 1,
                  hour: '14:00',
                  subject: 'Tugas Sifat Sudut Segitiga'
                },
              ]
            }
          ]
        },
        { 
          id: 8, 
          subject: 'Matematika',
          class: 'X IPA 1',  
          teacher_image: '\profile2.svg',  
          teacher_name: 'Indra Waluyo S.Pd',
          teacher_title: 'Guru Pengajar',
          schedule: [
            {
              id: 1,
              date: 'Rabu, 12 Agustus',
              assign: [
                { 
                  id: 1,
                  hour: '14:00',
                  subject: 'Tugas Sifat Sudut Segitiga'
                },
                { 
                  id: 2,
                  hour: '15:00',
                  subject: 'Tugas Al Jabar'
                },
              ]
            },
            {
              id: 2,
              date: 'Kamis, 13 Agustus',
              assign: [
                { 
                  id: 1,
                  hour: '14:00',
                  subject: 'Tugas Sifat Sudut Segitiga'
                },
              ]
            }
          ]
        }
      ]
		}
	},
  mounted(){
    this.$store.commit("kelas/setMenu", false);
  },
  created(){
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
