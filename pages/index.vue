<template>
  <div class="login-wrap">
    <div class="login-form">
      <form>
        <img src="/logo.svg" class="mb-3" alt="">
        <h3>Login untuk memulai</h3>
        <h6>Masukkan nama pengguna dan password Anda</h6>
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(submitLogin)">
              <ValidationProvider name="Username" rules="required" v-slot="{ errors }">
                <b-form-input v-model="login.identifier" :class="[{'is-invalid': errors[0] }, errors[0] ? 'mb-1' : 'mb-3' ]" placeholder="Username"></b-form-input>
                <span class="validator text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider name="Password" rules="required" v-slot="{ errors }">
                <b-form-input v-model="login.password" type="password" :class="[{'is-invalid': errors[0] }, errors[0] ? 'mb-1' : 'mb-3' ]" placeholder="Password"></b-form-input>
                <span class="validator text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
              <div class="button-wrap">
                <button id="submitLogin" type="submit" class="btn btn-primary mt-2" :disabled="loading">Submit</button>
                <b-link to="#" class="link-lp">Lupa Password?</b-link>
                <div class="load" v-if="loading">
                  <b-spinner variant="primary" label="Spinning" class="mt-2"></b-spinner>
                </div>
              </div>
            </form>
          </ValidationObserver>
				</form>
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
