const links = [
    "scenic_spot.html",
    "gallery.html",
    "food.html"
];

function random_page() {
    // it seems first call always yields a fixed number 
    (Math.floor(Math.random() * 3));
    window.location.href = links[Math.floor(Math.random() * 3)];
}