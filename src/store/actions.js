import Dog from '../api/Dog'
// import vue-query

export const getDogs = async ({ commit }) => {
  commit('LOADING_STATUS', true)
  try {
    const response = await Dog.all(100)
    commit('SET_DOGS', response.data.message)
    commit('LOADING_STATUS', false)

    // const handleScroll = async () => {
    //   const bottomMarker = this.$refs.bottomMarker
    //   const rect = bottomMarker.getBoundingClientRect()
    //   if (rect.top <= window.innerHeight) {
    //     window.removeEventListener('scroll', handleScroll)
    //     const nextResponse = await Dog.all(50)
    //     commit('ADD_DOGS', nextResponse.data.message)
    //     if (nextResponse.data.message.length > 0) {
    //       window.addEventListener('scroll', handleScroll)
    //     }
    //   }
    // }

    // window.addEventListener('scroll', handleScroll)
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
  const filteredImages = state.dogs.filter((image) => {
    const imageBreed = image.split('/')[4]
    console.log({imageBreed, breed})
    return imageBreed.includes(breed.toLowerCase())
  })
  commit('SET_FILTERED_IMAGES', filteredImages)
}
