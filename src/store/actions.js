import Dog from '../api/Dog'

export const getDogs = async ({ commit }) => {
  commit('LOADING_STATUS', true)
  try {
    const response = await Dog.all()
    commit('SET_DOGS', response.data.message)
    commit('LOADING_STATUS', false)
  } catch (error) {
    console.log(error)
  }
}

export const getDog = async ({ commit }, dogId) => {
  try {
    const response = Dog.show(dogId)
    commit('SET_DOG', response.data)
  } catch (error) {
    console.log(error)
  }
}

export const applyFilterToDog = ({ commit }, effect) => {
  commit('FILTER_TRANSFORM', effect)
}
