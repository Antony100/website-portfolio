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

