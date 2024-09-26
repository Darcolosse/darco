function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function background(totalStars, animation){
    list = ["shooting-star-left", "shooting-star-left-up", "shooting-star-left-down",
            "shooting-star-right", "shooting-star-right-up", "shooting-star-right-down"]

    for (let i = 0; i < totalStars; i++) {
        const point = document.createElement('div'); 
        const size = getRandomNumber(2, 10);

        point.style.width = size + 'px';
        point.style.height = size + 'px';

        point.style.backgroundColor = 'white';
        point.style.borderRadius = '50%';
        point.style.position = 'fixed';
        point.style.opacity = 1;
        point.style.zIndex = -1;

        point.style.top = Math.floor(getRandomNumber(0, document.body.scrollHeight)) + 'px';
        point.style.left = Math.floor(getRandomNumber(0, window.innerWidth - size)) + 'px';

        if(animation){
            const nameAnimation = list[Math.floor(getRandomNumber(0, 6))]
            const animationDuration = getRandomNumber(1, 10);

            point.style.opacity = 0;

            if (animationDuration < 5.5){
                point.style.animation = `${nameAnimation} ${animationDuration}s linear infinite`;
            }else{
                point.style.animation = `${nameAnimation} ${animationDuration}s linear infinite`;
            }
        }
        document.body.appendChild(point);
        point.classList.add("point");
    }
}

background(100);
background(100, true);

