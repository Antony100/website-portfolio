document.addEventListener('DOMContentLoaded', function () {

    document.addEventListener('click', function (event) {
        let about = document.getElementById('aboutSection')
        let projects = document.getElementById('carouselExample')

        if (event.target.id === 'aboutLink') {
            about.style.display = 'block';
            projects.style.display = 'none';
        };

        if (event.target.id === 'projectsLink') {
            projects.style.display = 'block';
            about.style.display = 'none';
        };
    });
})

// Add this to your JavaScript section or an external JS file
function displayFullImage(src) {
    var fullImg = document.getElementById("fullImage");
    fullImg.src = src;
    var modal = new bootstrap.Modal(document.getElementById('fullImageModal'), {
        keyboard: true
    });
    modal.show();
}
