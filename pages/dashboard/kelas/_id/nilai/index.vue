<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col lg="12">
          <div class="wrap-nilai">
            <div class="periode">
              <label for="" class="input-label">PERIODE AJAR</label>
              <client-only>
                <date-picker
                  id="published_at"
                  v-model="date"
                  type="month"
                  format="MMM YYYY"
                  value-type="MMM YYYY"
                  placeholder="Jun 2020 ~ Jul 2020"
                  range
                ></date-picker>
              </client-only>
            </div>

            <v-data-table
              height="78vh"
              :items="itemsBackup"
              fixed-header
              :hide-default-footer="true"
              class="table-nilai"
            >
              <template v-slot:header>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th v-for="aktif in itemsBackup[0].nilaiall" :key="aktif.id">
                      <h6>{{ aktif.nama_aktifitas }}</h6>
                      <span>{{ aktif.date }}</span>
                    </th>
                  </tr>
                </thead>
              </template>
              <template v-slot:item="{ item }">
                <tr>
                  <td><span :class="[{ 'rate': item.name === 'Rata-Rata Kelas' },'image-siswa']" :style="{ backgroundImage: 'url(' + item.img + ')' }"></span></td>
                  <td><b-link :to="localePath({ name: 'dashboard-kelas-id-nilai-idn', params: { id: $route.params.id, idn: item.id } })" class="nilai-detail-link">{{ item.name }}</b-link></td>
                  <td v-for="nilai in item.nilaiall" :key="nilai.id">{{ nilai.nilai }}</td>
                </tr>
              </template>
            </v-data-table>
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
      date: "",
      items: [
        {
          id: 1,
          name: 'Rata-Rata Kelas',
          img: '/rate.svg',
          nilai1: 80,
          nilai2: 80,
          nilai3: 80,
          nilai4: 80,
          nilai5: 80,
          nilai6: 80,
          nilai7: 80,
          nilai8: 80,
          nilai9: 80,
          nilai10: 80,
          nilai11: 80,
          nilai12: 80,
        }
      ],
      itemsBackup: [
        { 
          id: 1, 
          name: 'Rata-Rata Kelas',
          img: '/rate.svg', 
          nilaiall: [
            {
              id: 1,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 2,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 3,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 4,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 5,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 6,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 7,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 8,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 9,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 10,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 11,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
          ]
        },
        { 
          id: 2, 
          name: 'Achmad Anshori',
          img: '/profile.svg', 
          nilaiall: [
            {
              id: 1,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 2,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 3,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 4,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 5,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 6,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 7,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 8,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 9,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 10,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 11,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
          ]
        },
        { 
          id: 3, 
          name: 'Achmad Anshori',
          img: '/profile2.svg', 
          nilaiall: [
            {
              id: 1,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 2,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 3,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 4,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 5,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 6,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 7,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 8,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 9,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 10,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 11,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
          ]
        },
        { 
          id: 4, 
          name: 'Achmad Anshori',
          img: '/profile.svg', 
          nilaiall: [
            {
              id: 1,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 2,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 3,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 4,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 5,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 6,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 7,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 8,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 9,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 10,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 11,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
          ]
        },
        { 
          id: 5, 
          name: 'Achmad Anshori',
          img: '/profile2.svg', 
          nilaiall: [
            {
              id: 1,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 2,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 3,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 4,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 5,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 6,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 7,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 8,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 9,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 10,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 11,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
          ]
        },
        { 
          id: 6, 
          name: 'Achmad Anshori',
          img: '/profile.svg', 
          nilaiall: [
            {
              id: 1,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 2,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 3,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 4,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 5,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 6,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 7,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 8,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 9,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 10,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 11,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
          ]
        },
        { 
          id: 7, 
          name: 'Achmad Anshori',
          img: '/profile2.svg', 
          nilaiall: [
            {
              id: 1,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 2,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 3,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 4,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 5,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 6,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 7,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 8,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 9,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 10,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 11,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
          ]
        },
        { 
          id: 8, 
          name: 'Achmad Anshori',
          img: '/profile.svg', 
          nilaiall: [
            {
              id: 1,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 2,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 3,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 4,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 5,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 6,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 7,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 8,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 9,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 10,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 11,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
          ]
        },
        { 
          id: 9, 
          name: 'Achmad Anshori',
          img: '/profile2.svg', 
          nilaiall: [
            {
              id: 1,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 2,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 3,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 4,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 5,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 6,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 7,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 8,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 9,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 10,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 11,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
          ]
        },
        { 
          id: 10, 
          name: 'Achmad Anshori',
          img: '/profile.svg', 
          nilaiall: [
            {
              id: 1,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 2,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 3,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 4,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 5,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 6,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 7,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 8,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 9,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 10,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 11,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
          ]
        },
        { 
          id: 11, 
          name: 'Achmad Anshori',
          img: '/profile2.svg', 
          nilaiall: [
            {
              id: 1,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 2,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 3,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 4,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 5,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 6,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 7,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 8,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 9,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 10,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 11,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
          ]
        },
        { 
          id: 12, 
          name: 'Achmad Anshori',
          img: '/profile.svg', 
          nilaiall: [
            {
              id: 1,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 2,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 3,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 4,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 5,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 6,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 7,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 8,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 9,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 10,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 11,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
          ]
        },
        { 
          id: 13, 
          name: 'Achmad Anshori',
          img: '/profile2.svg', 
          nilaiall: [
            {
              id: 1,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 2,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 3,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 4,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 5,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 6,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 7,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 8,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 9,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 10,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
            {
              id: 11,
              nama_aktifitas: 'Tugas Aljabar dan Matematika',
              date: '12 Agustus 2020',
              nilai: 80,
            },
          ]
        },
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