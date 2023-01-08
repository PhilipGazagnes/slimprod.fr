export const state = () => ({
  bannerActiveImage: 4,
});

export const mutations = {
  NEXT_BANNER_IMAGE(state) {
    state.bannerActiveImage =
      state.bannerActiveImage === 4 ? 1 : state.bannerActiveImage + 1;
  },
};
