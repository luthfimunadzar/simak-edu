<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col lg="10" offset-lg="1">
          <div class="head-kelas-panel">
            <h3 class="subject">Matematika</h3>
            <h5 class="kelas">XI IPA 1</h5>

            <div class="profile-image">
              <div class="image" :style="{ backgroundImage: 'url(' + '/profile.svg' + ')' }"></div>
              <h5 class="name">Indra Waluyo S.Pd</h5>
              <span class="title">Guru Pengajar</span>
            </div>

            <img src="/math.svg" alt="" class="illu">
          </div>
          
          <b-row>
            <b-col lg="3">
              <div class="soon-tugas">
                <h5>Tugas Akan Datang</h5>
                <div class="schedule-item" v-for="sche in schedule" :key="sche.id">
                  <span class="schedule-head">{{ sche.date }}</span>
                  <ul>
                    <li v-for="ass in sche.assign" :key="ass.id">
                      {{ ass.hour }} - {{ ass.subject }}
                    </li>
                  </ul>
                </div>
                <b-link to="">Lihat semua ></b-link>
              </div>
            </b-col>
            <b-col lg="9">
              <div class="me-comment">
                <div class="image" :style="{ backgroundImage: 'url(' + '/profile.svg' + ')' }"></div>
                <input type="text" class="form-control" placeholder="Bagikan kepada kelas Matematika  XII IPA 1">
              </div>
              <div class="comment-list">
                <div class="comment-item" v-for="(com, index) in comments" :key="com.id">
                  <div class="image" :style="{ backgroundImage: 'url(' + com.img + ')' }"></div>
                  <h5 class="name">{{ com.name }}</h5>
                  <h6 class="title">{{ com.title }}</h6>
                  <div :class="[{ 'showed' : contentComment[index] === true }, 'content']">
                    <p>
                      {{ com.comment }}
                    </p>
                  </div>
                  <b-link :class="[{ 'showed' : contentComment[index] === true }, 'more']" @click.native="showContent(index)">
                    <img src="/poly.svg" alt=""> 
                    <span v-if="contentComment[index] === true">Lihat sedikit</span> 
                    <span v-else>Lihat lebih</span> 
                  </b-link>
                </div>
                <div class="me-comment">
                  <div class="image" :style="{ backgroundImage: 'url(' + '/profile.svg' + ')' }"></div>
                  <b-input-group>
                    <b-form-input type="text" class="form-control" placeholder="Bagikan kepada kelas Matematika  XII IPA 1"></b-form-input>
                    <b-input-group-append>
                      <b-button variant="info"><img src="/send.svg" alt=""></b-button>
                    </b-input-group-append>
                  </b-input-group>
                </div>
              </div>
            </b-col>
          </b-row>
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
      contentComment: [],
      comments: [
        {
          id: 1,
          img: '/profile2.svg',
          name: 'Deden Nugraha',
          title: 'Siswa XI IPA 2',
          comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        },
        {
          id: 2,
          img: '/profile2.svg',
          name: 'Deden Nugraha',
          title: 'Siswa XI IPA 2',
          comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        },
      ],
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
  },
  mounted(){
    this.$store.commit("kelas/setMenu", true);
    this.$store.commit("kelas/setIdKelas", this.$route.params.id);
  },
  created(){
    this.closeSidebarMenu()
  },
  methods: {
    showContent(index){
      console.log(index)
      if(this.contentComment[index]){
        this.$set(this.contentComment, index, false)
      } else {
        this.$set(this.contentComment, index, true)
      }
    },
    closeSidebarMenu(){
      var menu = document.querySelector('.menu-rombongan')
      var sidebar = document.querySelector('.sidebar')

      menu.classList.remove('slideBot')
      sidebar.classList.remove('slideIn')
    }
  }
}
</script>