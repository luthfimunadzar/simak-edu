export const state = () => ({
  onKelas: false,
  idKelas: null,
  whiteBg: false,
})

export const mutations = {
  setMenu(state, data) {
    state.onKelas = data
  },
  setIdKelas(state, data) {
    state.idKelas = data
  },
  setWhiteBg(state, data) {
    state.whiteBg = data
  },
}