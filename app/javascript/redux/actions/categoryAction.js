const GET_CATEGORY = "GET_CATEGORY";

const getCategoryAction = (categories) => ({
  type: GET_CATEGORY,
  categories
})

export default getCategoryAction;
