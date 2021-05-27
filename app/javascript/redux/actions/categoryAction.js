const GET_CATEGORIES = "GET_CATEGORIES";

const getCategoryAction = (categories) => ({
  type: GET_CATEGORIES,
  categories
})

export {
  getCategoryAction,
  GET_CATEGORIES,
}
