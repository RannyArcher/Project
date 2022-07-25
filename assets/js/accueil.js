let comments = document.querySelector("[data-comments]"),
    reviews = document.querySelector("[data-reviews]")

const COMMENTS_ACTIVE_CLASS = "comments--active"
const REVIEWS_ACTIVE_CLASS = "reviews--active"

function showComments() {
  reviews.classList.remove(REVIEWS_ACTIVE_CLASS) // set reviews to inactive
  comments.classList.add(COMMENTS_ACTIVE_CLASS) // set comments to active
}

function showReviews() {
  comments.classList.remove(COMMENTS_ACTIVE_CLASS) // set comments to inactive
  reviews.classList.add(REVIEWS_ACTIVE_CLASS) // set reviews to active
}