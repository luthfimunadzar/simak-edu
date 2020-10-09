<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col lg="12">
          <div class="input-tugas">
            <ValidationObserver v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit(submitTugas)">
                <div class="row">
                  <b-col md="9">
                    <div class="back-wrap">
                      <b-link class="back-link">
                        <img src="/back.svg" alt="">
                        Tugas
                      </b-link>
                    </div>
                    <div class="input-wrap">
                      <ValidationProvider name="Judul Tugas" rules="required" v-slot="{ errors }" class="form-wrap">
                        <b-form-input v-model="form.judul" :class="[{'is-invalid': errors[0] }, errors[0] ? 'mb-1' : 'mb-4' ]" placeholder="Judul Tugas.."></b-form-input>
                        <span class="validator text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                      
                      <ValidationProvider name="Deskripsi" rules="required" v-slot="{ errors }" class="form-wrap">
                        <b-form-textarea v-model="form.deskripsi" :class="[{'is-invalid': errors[0] }, errors[0] ? 'mb-1' : 'mb-4' ]" placeholder="Deskripsi"></b-form-textarea>
                        <span class="validator text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>

                      <label for="" class="input-label">Sisipkan / Tambahkan File</label>
                      <dropzone 
                        id="foo" 
                        ref="sisipFile" 
                        :options="optDropzone" 
                        :destroyDropzone="true"
                        v-on:vdropzone-sending="sendingEvent"
                      ></dropzone>
                      
                      <!-- <button v-on:click="triggerSend()">Send images</button> -->
                    </div>
                  </b-col>
                  <b-col md="3">
                    <div class="filter-wrap">
                      <label for="" class="input-label">Untuk Kelas</label>
                      <ValidationProvider name="Kelas" rules="required" v-slot="{ errors }" class="form-wrap">
                        <v-select v-model="form.kelas" placeholder="Pilih Kelas" :class="[{'is-invalid': errors[0] }, errors[0] ? 'mb-1' : 'mb-4' ]" :options="['Kelas XI IPA 2', 'Kelas XI IPA 1', 'Kelas XI IPS 2']"></v-select>
                        <span class="validator text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>

                      <label for="" class="input-label">Waktu/Tenggat</label>
                      <ValidationProvider name="Waktu/Tenggat" rules="required" v-slot="{ errors }" class="form-wrap">
                        <client-only>
                          <date-picker
                            id="published_at"
                            v-model="form.date"
                            type="datetime"
                            format="DD/MM/YYYY HH:mm"
                            value-type="DD/MM/YYYY HH:mm"
                            placeholder="DD/MM/YYYY HH:mm"
                            :disabled-date="notBeforeToday"
                            inline
                          ></date-picker>
                        </client-only> 
                        <span class="validator text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                      
                      <label for="" class="input-label float-left">Topik</label>
                      <b-link class="float-right add-modal" @click="modalShow=true">+ Buat Topik Baru</b-link>
                      <div class="clearfix"></div>
                      <ValidationProvider name="Topik" rules="required" v-slot="{ errors }" class="form-wrap">
                        <v-select v-model="form.topik" placeholder="Pilih Topik" :class="[{'is-invalid': errors[0]}, 'float-left', 'w-100', errors[0] ? 'mb-1' : 'mb-4' ]" :options="['Bangun Ruang - K.D 3.1 & 4.1', 'Bilangan Bulat - K.D 3.1 & 4.1', 'Hubungan dua lingkaran - K.D 3.1 & 4.1']"></v-select>
                        <span class="validator text-danger">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </b-col>
                  <b-col md="12">
                    <div class="foot-wrap">
                      <b-button
                        variant="secondary"
                        size="sm"
                        class="mr-2"
                        type="submit"
                      >
                        Tugaskan
                      </b-button>
                      <b-button
                        variant="warning"
                        size="sm"
                        class="mr-2"
                      >
                        Simpan Draft
                      </b-button>
                      <b-link
                        class="btn btn-danger btn-sm"
                        :to="localePath({ name: 'dashboard-kelas-id-pembelajaran', params: { id: $route.params.id } })"
                      >
                        Batalkan
                      </b-link>
                    </div>
                  </b-col>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-modal v-model="modalShow" hide-header hide-footer>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(submitTopik)">
            <div class="modal-inside">
              <label for="" class="input-label">Nama Topik</label>
              <ValidationProvider name="Nama Topik" rules="required" v-slot="{ errors }" class="form-wrap">
                <b-form-input v-model="formTopik.name" :class="[{'is-invalid': errors[0] }, errors[0] ? 'mb-1' : 'mb-4' ]" placeholder="Judul Tugas.."></b-form-input>
                <span class="validator text-danger">{{ errors[0] }}</span>
              </ValidationProvider>

              <label for="" class="input-label">Kompetensi Dasar</label>
              <ValidationProvider name="Kompetensi Dasar" rules="required" v-slot="{ errors }" class="form-wrap">
                <v-select v-model="formTopik.kd" placeholder="Pilih Topik" :class="[{'is-invalid': errors[0]}, errors[0] ? 'mb-1' : 'mb-4' ]" :options="['K.D 3.1 & 4.1', 'K.D 3.2 & 4.2', 'K.D 3.3 & 4.3']"></v-select>
                <span class="validator text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="btn-wrap-modal">
              <b-button
                variant="secondary"
                size="sm"
                class="mr-2"
                type="submit"
              >
                Buat Topik
              </b-button>
              <b-button
                variant="danger"
                size="sm"
                @click="modalShow=false"
              >
                Batalkan
              </b-button>
            </div>
          </form>
        </ValidationObserver>
  </b-modal>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data(){
    return{
      modalShow: false,
      loading: false,
      form: {
        judul: "",
        deskripsi: "",
        file: [],
        kelas: "",
        date: null,
        topik: "",
      },
      optDropzone: {
        url: "http://httpbin.org/anything",
        autoProcessQueue: false,
        thumbnailWidth: 130,
        maxFilesize: 1024,
        uploadMultiple: true,
        addRemoveLinks: true,
        acceptedFiles: ".jpg, .jpeg, .png, .JPG, .JPEG, pdf",
        dictDefaultMessage: "<img src='/image.svg' class='mr-1'> Sisipkan / Tambahkan File"
      },
      formTopik: {
        name: "",
        kd: "",
      },
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
    },
    notBeforeToday(date) {
      return date < new Date(new Date().setHours(0, 0, 0, 0));
    },
    async submitTugas(){
      this.loading = true
      try{
        this.$toast.error('Input Berhasil').goAway(3000);
      } catch(error){
        this.$toast.error(error.response.data.message).goAway(3000);
      }
      this.loading = false
    },
    async submitTopik(){
      this.loading = true
      try{
        this.$toast.error('Input Berhasil').goAway(3000);
      } catch(error){
        this.$toast.error(error.response.data.message).goAway(3000);
      }
      this.loading = false
    },
    triggerSend() {
      this.$refs.sisipFile.processQueue();
    },
    sendingEvent(file, xhr, formData) {
      console.log(formData);

      // var fd = new FormData();
      // for (var key in myFormData) {
      //     console.log(key, myFormData[key]);
      //     fd.append(key, myFormData[key]);
      // }
      // formData.append("description", this.description);
      // formData.append("clientId", this.$store.state.clientId);
    },
	}
}
</script>