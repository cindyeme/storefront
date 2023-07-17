import Dog from '../api/Dog'
// I could use vue-query

// Initialize the cache variable outside the action function
let dogCache = [];
console.log({dogCache})
export const getDogs = async ({ commit }) => {
  commit('LOADING_STATUS', true)

  // Check if the cache is already populated
  if (dogCache.length > 0) {
    commit('SET_DOGS', dogCache)
    commit('LOADING_STATUS', false)
    return
  }

  try {
    const response = await Dog.all()
    dogCache = response.data.message // Store the fetched dog images in the cache
    commit('SET_DOGS', dogCache)
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

export const filterDogImages = ({ commit, state }, breed) => {
  const filteredImages = state.dogs.filter(image => {
    const imageBreed = image.split('/')[4];
    return imageBreed.includes(breed.toLowerCase());
  });
  commit('SET_FILTERED_IMAGES', filteredImages)

};
