export const state = () => ({
  onKelas: false,
  idKelas: null,
})

export const mutations = {
  setMenu(state, data) {
    state.onKelas = data
  },
  setIdKelas(state, data) {
    state.idKelas = data
  },
}