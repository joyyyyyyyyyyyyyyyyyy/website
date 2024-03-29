//SECTION 1 ANIMATIONS

//SECTION 2 ANIMATIONS

//SECTION 3 ANIMATIONS
var totalBooks = anime({
    targets: '#totalBooks',
    innerHTML: [0, 169], //start and end values
    easing: 'easeInOutCirc',
    round: 1, //rounds off to zero decimal places
    duration: 2000
});

var categories = anime({
    targets: '#categories',
    innerHTML: [0, 11], //start and end values
    easing: 'easeInOutCirc',
    round: 1, //rounds off to zero decimal places
    duration: 2000
});

var available = anime({
    targets: '#available',
    innerHTML: [0, 103], //start and end values
    easing: 'easeInOutCirc',
    round: 1, //rounds off to zero decimal places
    duration: 2000
});

var reserved = anime({
    targets: '#reserved',
    innerHTML: [0, 66], //start and end values
    easing: 'easeInOutCirc',
    round: 1, //rounds off to zero decimal places
    duration: 2000
});

var header = anime({
    targets: '#header',
    translateY: {
        value: [-100, 0],
        duration: 1000,
        easing: 'easeInOutQuart'
    },
});

var section2Text = anime({
    targets: '#section2Text',
    translateX: {
        value: [-1000, 0],
    },
    duration: 10,
    easing: 'easeInOutQuart',
});

var totalBooksUndo = anime({
    targets: '#totalBooks',
    innerHTML: [169, 0], //start and end values
    easing: 'easeInOutCirc',
    round: 1, //rounds off to zero decimal places
    duration: 30
});

var categoriesUndo = anime({
    targets: '#categories',
    innerHTML: [11, 0], //start and end values
    easing: 'easeInOutCirc',
    round: 1, //rounds off to zero decimal places
    duration: 30
});

var availableUndo = anime({
    targets: '#available',
    innerHTML: [103, 0], //start and end values
    easing: 'easeInOutCirc',
    round: 1, //rounds off to zero decimal places
    duration: 30
});

var reservedUndo = anime({
    targets: '#reserved',
    innerHTML: [66, 0], //start and end values
    easing: 'easeInOutCirc',
    round: 1, //rounds off to zero decimal places
    duration: 30
});

var header = anime({
    targets: '#header',
    translateY: {
        value: [0, 100],
        duration: 10,
        easing: 'easeInOutQuart'
    },
});

var section2TextUndo = anime({
    targets: '#section2Text',
    translateX: {
        value: [-1000, 0],
    },
    duration: 1000,
    easing: 'easeInOutQuart',
});

var booksDistribution = anime({
    targets: '#booksDistribution',
    translateX: {
        value: [1000, 0],
    },

    duration: 1000,
    easing: 'easeInOutQuart',
});

var vacCount = anime({
    targets: '#vacCount',
    innerHTML: [0, 9], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places
    duration: 1000
});

var booksDistributionUndo = anime({
    targets: '#booksDistribution',
    translateX: {
        value: [1000],
    },

    duration: 10,
    easing: 'easeInOutQuart',
});

var vacCountUndo = anime({
    targets: '#vacCount',
    innerHTML: [9, 0], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places
    duration: 10
});

var section3Text = anime({
    targets: '#section3Text',
    translateX: {
        value: [-1000, 0],
    },

    duration: 1000,
    easing: 'easeInOutQuart',
});

var section3Table = anime({
    targets: '#inventoryTable',
    translateX: {
        value: [1000, 0],
    },

    duration: 1000,
    delay: 500,
    easing: 'easeInOutQuart',
});

var section3TextUndo = anime({
    targets: '#section3Text',
    translateX: {
        value: [-1000],
    },

    duration: 10,
    easing: 'easeInOutQuart',
});

var section3TableUndo = anime({
    targets: '#inventoryTable',
    translateX: {
        value: [1000],
    },

    duration: 10,
    easing: 'easeInOutQuart',
});

$(document).ready(function () {
    $('#fullpage').fullpage({ //initialize
        //set options
        sectionsColor: ['#212122', '#212122', '#212122'],
        navigation: true,
        navigationPosition: 'right',

        anchors: ['section1', 'section2', 'section3'], //name the anchors for each section

        afterLoad: function (origin, destination, direction) {
            if (destination.index == 0) {
                // totalBooks.play();
                // categories.play();
                // available.play();
                // reserved.play();
                // section1Text.play();
            } else if (destination.index == 1) {
                totalBooks.play();
                categories.play();
                available.play();
                reserved.play();
                section2Text.play();
                booksDistribution.play(); // anime.js play method
                } else {
                section3Text.play();
                section3Table.play(); // anime.js play method
            }
        },

        onLeave: function (origin, destination, direction) {
            if (destination.index == 0) {
                // totalBooksUndo.play();
                // categoriesUndo.play();
                // availableUndo.play();
                // reservedUndo.play();
                // section1TextUndo.play();
            } else if (destination.index == 1) {
                totalBooksUndo.play();
                categoriesUndo.play();
                availableUndo.play();
                reservedUndo.play();
                section2TextUndo.play();
                booksDistributionUndo.play(); // anime.js play method
                } else {
                section3TextUndo.play();
                section3TableUndo.play(); // anime.js play method
            }
        },


    });



    // Define chart labels
    const labels = [
        'Biography',
        'History',
        'Politics',
        'Memoir',
        'Mystery',
        'True Crime',
        'Poetry',
        'Travel',
        'Social Sciences',
        'Cooking',
        'Self-Help'
    ];

    // Set labels, colours and data
    const data = {
        labels: labels,
        datasets: [{
            label: 'total books in library',
            backgroundColor: '#afeeee',
            borderColor: '#afeeee',
            data: [22, 30, 26, 17, 10, 12, 8, 20, 9, 8, 7],
        }]
    };


    // Configure chart
    const config = {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: "white",
                        font: {
                            size: 18
                        }
                    }
                }
            },
            scales: { x: { title: { display: false, text: 'Genre' }, ticks: { color: 'white' } }, y: { title: { display: false, text: 'Quantity' }, ticks: { color: 'white' } } }
        }
    };

    // Render chart in <canvas>
    const myChart = new Chart(
        document.getElementById('booksDistribution'),
        config
    );
});

$(document).ready(function () {
    // Initialize DataTable for the inventory table
    $('#inventoryTable').DataTable({
        searching: true,
        paging: true,
        pageLength: 5,
        lengthChange: false,
    });
});



// Autocomplete
// var searchTags = [
//     "HTML",
//     "CSS",
//     "PHP",
//     "JavaScript",
//     "Python",
//     "Java",
//     "iOS",
//     "Swift",
//     "React",
//     "Web Design",
//     "Web Development"
// ];

// $("#searchForm").autocomplete({
//     source: searchTags
// });