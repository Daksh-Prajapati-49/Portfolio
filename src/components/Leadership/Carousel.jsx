import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Carousel.css';

// ... (your image URLs and styles)

const IMG_1 = `https://unsplash.it/342/249`;
const IMG_2 = `https://unsplash.it/342/250`;
const IMG_3 = `https://unsplash.it/342/251`;
const IMG_4 = `https://unsplash.it/342/252`;
const IMG_5 = `https://unsplash.it/342/253`;
const IMAGES = [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5];
const IMG_WIDTH = "500px";
const IMG_HEIGHT = "400px";

const RIGHT = '-1';
const LEFT = '+1';

const buttonStyles = {
    height: IMG_HEIGHT,
    backgroundColor: "#3c3c3c44",
    color: "#000000",
    fontSize: "2em",
};

const SimpleCarousel = () => {
    const [imageIdx, setImageIdx] = useState(0);

    const handlers = useSwipeable({
        onSwipedLeft: () => onSwiped(LEFT),
        onSwipedRight: () => onSwiped(RIGHT),
        preventDefaultTouchmoveEvent: true,
    });

    const onSwiped = (direction) => {
        const change = direction === RIGHT ? RIGHT : LEFT;
        const adjustedIdx = imageIdx + Number(change);
        let newIdx;
        if (adjustedIdx >= IMAGES.length) {
            newIdx = 0;
        } else if (adjustedIdx < 0) {
            newIdx = IMAGES.length - 1;
        } else {
            newIdx = adjustedIdx;
        }
        setImageIdx(newIdx);
    };

    const imageStyles = {
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        backgroundImage: `url(${IMAGES[imageIdx]})`
    };

    return (
        <div className="swipeContainer">
            <div {...handlers} className="swipe" style={{ touchAction: 'none' }}>
                <div style={imageStyles}>
                    <button
                        onClick={() => onSwiped(RIGHT)}
                        className="hollow float-left"
                        style={buttonStyles}
                    >
                        ⇦
                    </button>
                    <button
                        onClick={() => onSwiped(LEFT)}
                        className="hollow float-right"
                        style={buttonStyles}
                    >
                        ⇨
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SimpleCarousel;
