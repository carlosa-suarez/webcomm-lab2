
animals.addEventListener('click', (e) => {
    animalpic.src = `images/${e.target.id}.webp`;
    animalpic.alt = e.target.id;
});

/*
Button color: #d9043d
The image should be centered horizontally on the page
The image should have a small black drop shadow that starts at the top left of the image and is visible on all four sides
The image size should never be larger than 900px wide by 600px high
The buttons should be centered under the image
The image and the buttons should have corners rounded at 10px
 */