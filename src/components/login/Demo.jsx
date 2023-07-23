import React, { useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import './dummy.css';

const AnimatedScreen = () => {
    const [data, setData] = useState([
        ['🐒', '🦍', '🦧'],
        // ['🐒', '🦍', '🦧'],
    ]);
    const [result, setResult] = useState(data);

    const transitions = useTransition(result.flat(), {
        from: { opacity: 0, transform: 'translateY(-20px)', position: 'absolute' },
        enter: { opacity: 1, transform: 'translateY(0)', position: 'static' },
        leave: { opacity: 0, transform: 'translateY(-20px)', position: 'absolute' },
        config: { tension: 180, friction: 12 },
        trail: 150,
    });

    const handleMapClick = () => {
        const updatedData = data.map((row) => row.map((item) => item + '🍌'));
        setResult(updatedData);
    };

    useEffect(() => {
        setResult(data);
    }, [data]);

    return (
        <>
            <p> ["🐒","🦍","🦧"].map((n) = n + "🍌")</p>
            <div className="animated-screen">
                {transitions((style, item, t, i) => (
                    <animated.div key={i} style={style} className="emoji">
                        {item}
                    </animated.div>
                ))}
                <button onClick={handleMapClick}>Apply Map</button>
            </div>
        </>

    );
};

export default AnimatedScreen;


// const AnimatedScreen = () => {
//     const [data, setData] = useState(
//         ['🐒', '🦍', '🦧']
//     );

//     const transitions = useTransition(data.flat(), {
//         from: { opacity: 0, transform: 'scale(0.5)' },
//         enter: { opacity: 1, transform: 'scale(1)' },
//         leave: { opacity: 0, transform: 'scale(0.5)' },
//         config: { tension: 180, friction: 12 },
//     });

//     const handleMapClick = () => {
//         setData((prevData) => prevData.map((item) => item + '🍌'));
//     };

//     return (
//         <>
//             <p> ["🐒","🦍","🦧"].map((n) = n + "🍌")</p>
//             <div className="animated-screen">


//                 <>
//                     {transitions((style, item, t, i) => (
//                         <animated.div key={i} style={style} className="emoji">
//                             {item}
//                         </animated.div>
//                     ))}
//                 </>
//                 <button onClick={handleMapClick}>Apply Map</button>
//             </div>
//         </>

//     );
// };
