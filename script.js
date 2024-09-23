const ratingContainer = document.getElementById('rating-container');
const thankYouContainer = document.getElementById('thank-you-container');
const submitBtn = document.getElementById('submit-btn');
const ratingItems = document.querySelectorAll('.rating-item');
const selectedRatingSpan = document.getElementById('selected-rating');

let selectedRating = null;

ratingItems.forEach((item) => {
    item.addEventListener('click', function () {
        ratingItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        selectedRating = this.textContent;
    })
})

submitBtn.addEventListener('click', function() {
    if (selectedRating) {
        ratingContainer.style.display = 'none';
        thankYouContainer.style.display = 'flex';
        selectedRatingSpan.textContent = selectedRating;
    }
})
