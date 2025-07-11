function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function createStar(size) {
    const point = document.createElement('div');
    point.style.width = size + 'px';
    point.style.height = size + 'px';
    point.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    point.style.borderRadius = '50%';
    point.style.position = 'fixed';
    point.style.zIndex = -1;
    point.style.top = Math.floor(getRandomNumber(0, window.innerHeight - size)) + 'px';
    point.style.left = Math.floor(getRandomNumber(0, window.innerWidth - size)) + 'px';
    point.style.boxShadow = `0 0 10px 3px rgba(255, 255, 255, 0.5)`;
    return point;
}

function createCross(size) {
    const cross = document.createElement('div');
    Object.assign(cross.style, {
        position: 'fixed',
        top: `${Math.floor(getRandomNumber(0, window.innerHeight))}px`,
        left: `${Math.floor(getRandomNumber(0, window.innerWidth - size))}px`,
        width: `${size}px`,
        height: `${size}px`,
        zIndex: -1
    });

    const blurRadius =  15 * size/10;
    const spreadRadius = 3 * size/10;
    const thickness = 0.2 * size;

    const horizontal = document.createElement('div');
    Object.assign(horizontal.style, {
        position: 'absolute',
        width: '100%',
        top: `${(size/2)}px`,
        height: `${thickness}px`,
        background: 'white',
        borderRadius: '100%',
        boxShadow: `0 0 ${blurRadius}px ${spreadRadius}px rgba(255,255,255,0.6)`,
        transform: 'translate(-50%, -50%)'
    });

    const vertical = document.createElement('div');
    Object.assign(vertical.style, {
        position: 'absolute',
        width: `${thickness}px`,
        left: `${-thickness/2}px`,
        height: '100%',
        background: 'white',
        borderRadius: '100%',
        boxShadow: `0 0 ${blurRadius}px ${spreadRadius}px rgba(255,255,255,0.6)`,
    });

    cross.append(horizontal, vertical);
    return cross;
}

function background(totalStars, animation) {
    const animationList = [
        "shooting-star-left",
        "shooting-star-left-up",
        "shooting-star-left-down",
        "shooting-star-right",
        "shooting-star-right-up",
        "shooting-star-right-down"
    ];

    for (let i = 0; i < totalStars; i++) {
        const size = Math.floor(getRandomNumber(2, 10));
        const point = createStar(size);
        const cross = createCross(size);

        if (animation) {
            const randomAnimation = animationList[Math.floor(getRandomNumber(0, animationList.length))];
            const animationDuration = getRandomNumber(1, 6);
            point.style.animation = `${randomAnimation} ${animationDuration}s linear infinite`;
        }

        document.body.appendChild(point);
        document.body.appendChild(cross);
    }
}

// Exemple d'appel
background(20);
background(15, true);
