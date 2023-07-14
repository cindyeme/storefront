import Dog from '../api/Dog'

export const getDogs = async ({ commit }) => {
  commit('LOADING_STATUS', true)
  try {
    const response = await Dog.all();
    commit('SET_DOGS', response.data.message)
    commit('LOADING_STATUS', false);
  } catch (error) {
    console.log(error)
  }
}

export const getDog = ({ commit }, dogId) => {
  Dog.show(dogId).then((response) => {
    commit('SET_DOG', response.data)
  })
}
