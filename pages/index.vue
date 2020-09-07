<template>
  <div class="login-wrap">
    <div class="login-sect">
      <div class="row">
        <div class="col-lg-8">
          <div class="login-hero">
            <img src="/logo.svg" class="logo" alt="">
            <img src="/illu-login.svg" alt="" class="img-hero">
            <div class="row">
              <div class="col-xl-6 col-lg-8">
                <h3>Belajar, mengajar efektif dengan simak education</h3>
                <b-link class="view-demo">
                  <div class="icon"><img src="/play.svg" alt=""></div>
                  <h6>Lihat Demo</h6>
                </b-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <form class="login-form">
            <h3>Login <span class="d-lg-inline-block d-none">Simak education</span></h3>
            <h6>silahkan login menggunakan akun yang didapat dari instansi / sekolah terkait.</h6>
            <ValidationObserver v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit(submitLogin)">
                <ValidationProvider name="Username" rules="required" v-slot="{ errors }" class="form-wrap">
                  <img src="/mail.svg" alt="" class="icon">
                  <b-form-input v-model="login.identifier" :class="[{'is-invalid': errors[0] }, errors[0] ? 'mb-1' : 'mb-4' ]" placeholder="Email"></b-form-input>
                  <span class="validator text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider name="Password" rules="required" v-slot="{ errors }" class="form-wrap">
                  <img src="/lock.svg" alt="" class="icon pw">
                  <b-form-input v-model="login.password" type="password" :class="[{'is-invalid': errors[0] }, errors[0] ? 'mb-1' : 'mb-4' ]" placeholder="Password"></b-form-input>
                  <span class="validator text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
                <div class="button-wrap">
                  <button id="submitLogin" type="submit" class="btn btn-primary" :disabled="loading">Masuk</button>
                  <div class="load" v-if="loading">
                    <b-spinner variant="primary" label="Spinning" class="mt-2"></b-spinner>
                  </div>
                </div>
                <div class="text-center">
                  <b-link href="#" class="forgot-password">Lupa Password ?</b-link>
                </div>
                <div class="powered">
                  <img src="/logo-savikindo.svg" alt="">
                </div>
              </form>
            </ValidationObserver>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      loading: false,
			login: {
				identifier: "",
				password: "",
			}
		}
	},
	methods: {
    async submitLogin(){
      this.loading = true
      try{
        // await this.$auth.loginWith('local', { data: this.login })
        this.$router.push('/dashboard');
      } catch(error){
        this.$toast.error(error.response.data.message).goAway(3000);
      }
      this.loading = false
    },
	}
}
</script>
