import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedCounter = ({ initialValue, finalValue, delay = 100, config = { mass: 1, tension: 20, friction: 10 }, ...otherProps }) => {
    const { number } = useSpring({
        from: { number: initialValue },
        number: finalValue,
        delay: delay,
        config: config,
    });

    return (
        <animated.div {...otherProps}>
            {number.to((n) => n.toFixed(0))}
        </animated.div>
    );
};

export default AnimatedCounter;
