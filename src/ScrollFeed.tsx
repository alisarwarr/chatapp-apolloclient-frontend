import React, { useEffect, useRef } from 'react';

interface ScrollFeedProps {
    children : JSX.Element | JSX.Element[];
            //type of 'children' in React TYPESCRIPT
    arrayToConsider: any[];
}

const ScrollFeed = ({ children, arrayToConsider }: ScrollFeedProps) => {
    const endRef = useRef<any>(null);
  
    const scrollToBottom = () => {
        endRef.current.scrollIntoView({ behavior: "smooth" })
    }
  
    useEffect(scrollToBottom, [arrayToConsider]);

    return (
        <>
            <>
                {children}
            </>
            <div ref={endRef}/>
        </>
    )
}

export default ScrollFeed;