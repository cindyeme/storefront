export const SET_DOGS = (state, dogs) => {
  state.dogs = dogs
}

export const SET_DOG = (state, dog) => {
  state.dog = dog
}

export const LOADING_STATUS = (state, loadingState) => {
  state.isLoading = loadingState
}

export const FILTER_TRANSFORM = (state, filterState) => {
  state.effect = filterState
}

export const SET_FILTERED_IMAGES = (state, images) => {
  state.filteredDogImages = images
}
