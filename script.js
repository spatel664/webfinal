// Sample JavaScript code to dynamically generate review cards
document.addEventListener("DOMContentLoaded", function () {
    const reviewsContainer = document.getElementById("reviews-container");

    const reviews = [
        { name: "User1", review: "Great game, really enjoyed playing it!" },
        { name: "User2", review: "Simple and addictive. Highly recommended." },
        // Add more reviews
    ];

    reviews.forEach(review => {
        const card = document.createElement("div");
        card.classList.add("review-card");
        card.innerHTML = `<p>${review.review}</p><p>- ${review.name}</p>`;
        reviewsContainer.appendChild(card);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const reviewsSection = document.getElementById("reviews");
    const reviewForm = document.getElementById("reviewForm");

    function generateStars(rating) {
        const maxRating = 5;
        let stars = "";
        for (let i = 1; i <= maxRating; i++) {
            if (i <= rating) {
                stars += "★ ";
            } else {
                stars += "☆ ";
            }
        }
        return stars;
    }

    function generateReviewCard(review) {
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");

        const stars = generateStars(review.rating);

        reviewCard.innerHTML = `
            <h3>${review.name}</h3>
            <p>Date: ${review.date}</p>
            <p>Rating: ${stars}</p>
            <p>${review.review}</p>
        `;

        reviewsSection.appendChild(reviewCard);
    }

    function renderReviews() {
        reviewsSection.innerHTML = "";
        window.reviewData.forEach(review => {
            generateReviewCard(review);
        });
    }

    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const rating = parseInt(document.getElementById("rating").value);
        const review = document.getElementById("review").value;

        const newReview = {
            name: name,
            date: date,
            rating: rating,
            review: review
        };

        window.reviewData.push(newReview);
        renderReviews();

        reviewForm.reset();
    });

    renderReviews();
});
