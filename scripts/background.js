function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function createStar(animation) {
    const list = ["shooting-star-left", "shooting-star-left-up", "shooting-star-left-down",
                  "shooting-star-right", "shooting-star-right-up", "shooting-star-right-down"];

    const point = document.createElement('div');
    const size = getRandomNumber(2, 10);

    point.style.width = size + 'px';
    point.style.height = size + 'px';

    point.style.backgroundColor = 'white';
    point.style.borderRadius = '50%';
    point.style.position = 'fixed';
    point.style.opacity = 1;
    point.style.zIndex = -1;

    const documentHeight = document.documentElement.scrollHeight;
    const windowWidth = window.innerWidth;

    point.style.top = Math.floor(getRandomNumber(0, documentHeight)) + 'px';
    point.style.left = Math.floor(getRandomNumber(0, windowWidth - size)) + 'px';

    if (animation) {
        const nameAnimation = list[Math.floor(getRandomNumber(0, 6))];
        const animationDuration = getRandomNumber(1, 10);

        point.style.opacity = 0;

        point.style.animation = `${nameAnimation} ${animationDuration}s linear infinite`;
    }
    document.body.appendChild(point);
    point.classList.add("point");

    return point;
}

function background(totalStars, animation) {
    const points = [];
    for (let i = 0; i < totalStars; i++) {
        points.push(createStar(animation));
    }

    window.addEventListener('resize', () => {
        const documentHeight = document.documentElement.scrollHeight;
        const windowWidth = window.innerWidth;

        points.forEach(point => {
            const size = parseFloat(point.style.width);
            point.style.top = Math.floor(getRandomNumber(0, documentHeight)) + 'px';
            point.style.left = Math.floor(getRandomNumber(0, windowWidth - size)) + 'px';
        });
    });
}

background(100);
background(100, true);
