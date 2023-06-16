
export const doEffect = (_container, _content) => {
    // const track = document.querySelector(".fav-content");
    // const trackContainer = document.querySelector(".fav-container");
    const track = _container;
    const trackContainer = _content;

    console.log(_container)

    //MOUSE MOVE
    ///Get Posititon of cursor on Image Gallery div
    trackContainer.addEventListener("mousemove", (e) => {
        if (track.dataset.mouseDownAt === "0") {
            return;
        }

        let mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = trackContainer.clientWidth / 1.35;

        let percentage = (mouseDelta / maxDelta) * -100,
            nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

        //check if user is sliding left
        if (nextPercentage > 0) {
            nextPercentage = 0;
        }
        //check if user is sliding to the right
        if (nextPercentage < -100) {
            nextPercentage = -100;
        }
        track.dataset.percentage = nextPercentage;

        // console.log(Math.floor(nextPercentage));
        track.animate(
            {
                transform: `translateX(${nextPercentage}%)`,
                //transform: `translateX(${nextPercentage > 0 ? 0 : nextPercentage}%)`,
            },
            {
                duration: 2000,
                fill: "forwards",
                easing: "cubic-bezier(.4, .3, .1, 1)",
            }
        );

        for (const imgg of track.getElementsByClassName("track-img")) {
            imgg.animate(
                {
                    objectPosition: `${100 + nextPercentage}%`,
                },
                {
                    duration: 6000,
                    fill: "forwards",
                    easing: "cubic-bezier(.4, .3, .1, 1)",
                }
            );

            // imgg.style.objectPosition = `${100 + nextPercentage}%`;
        }
    });

    //MOUSE UP
    trackContainer.addEventListener("mouseup", (e) => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage | "0";
        //
    });

    //MOUSE DOWN
    trackContainer.addEventListener("mousedown", (e) => {
        track.dataset.mouseDownAt = e.clientX;
    });

    trackContainer.addEventListener("mouseleave", (e) => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
    });

}
