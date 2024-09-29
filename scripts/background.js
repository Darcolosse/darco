function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function createStar(size) {
    const point = document.createElement('div');
    point.style.width = size + 'px';
    point.style.height = size + 'px';
    point.style.backgroundColor = 'white';
    point.style.borderRadius = '50%';
    point.style.position = 'fixed';
    point.style.opacity = 1;
    point.style.zIndex = -1;
    point.style.top = Math.floor(getRandomNumber(0, window.innerHeight)) + 'px';
    point.style.left = Math.floor(getRandomNumber(0, window.innerWidth - size)) + 'px';
    point.classList.add("point");
    return point;
}

function createCross(size) {
    const cross = document.createElement('div');
    cross.style.position = 'fixed';
    cross.style.top = Math.floor(getRandomNumber(0, window.innerHeight)) + 'px';
    cross.style.left = Math.floor(getRandomNumber(0, window.innerWidth - size)) + 'px';
    cross.style.transform = 'translate(-50%, -50%)';
    cross.style.width = size + 'px';
    cross.style.height = size + 'px';
    cross.style.backgroundColor = 'transparent';
    cross.style.zIndex = -1;

    const horizontalLine = document.createElement('div');
    horizontalLine.style.position = 'absolute';
    horizontalLine.style.top = '50%';
    horizontalLine.style.left = '0';
    horizontalLine.style.width = '100%';
    horizontalLine.style.height = '2px';
    horizontalLine.style.backgroundColor = 'white';
    horizontalLine.style.borderRadius = '100%';
    horizontalLine.style.transform = 'translateY(-50%)';
    cross.appendChild(horizontalLine);

    const verticalLine = document.createElement('div');
    verticalLine.style.position = 'absolute';
    verticalLine.style.top = '0';
    verticalLine.style.left = '50%';
    verticalLine.style.width = '2px';
    verticalLine.style.height = '100%';
    verticalLine.style.backgroundColor = 'white';
    verticalLine.style.borderRadius = '100%';
    verticalLine.style.transform = 'translateX(-50%)';
    cross.appendChild(verticalLine);

    return cross;
}

function background(totalStars, animation) {
    const list = ["shooting-star-left", "shooting-star-left-up", "shooting-star-left-down",
                  "shooting-star-right", "shooting-star-right-up", "shooting-star-right-down"];

    const elements = [];

    for (let i = 0; i < totalStars; i++) {
        const size = getRandomNumber(2, 10);
        const point = createStar(size);
        const cross = createCross(size);

        if (animation) {
            const nameAnimation = list[Math.floor(getRandomNumber(0, 6))];
            const animationDuration = getRandomNumber(1, 8);
            point.style.animation = `${nameAnimation} ${animationDuration}s linear infinite`;
        }

        document.body.appendChild(point);
        document.body.appendChild(cross);
        elements.push({ point, cross });
    }

    window.addEventListener('resize', () => {
        elements.forEach(({ point, cross }) => {
            point.style.top = Math.floor(getRandomNumber(0, window.innerHeight)) + 'px';
            point.style.left = Math.floor(getRandomNumber(0, window.innerWidth - parseInt(point.style.width))) + 'px';
            cross.style.top = Math.floor(getRandomNumber(0, window.innerHeight)) + 'px';
            cross.style.left = Math.floor(getRandomNumber(0, window.innerWidth - parseInt(cross.style.width))) + 'px';
        });
    });
}

background(60);
background(15, true);
