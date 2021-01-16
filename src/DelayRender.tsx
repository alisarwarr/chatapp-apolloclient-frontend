import Delayed from 'react-delayed';

interface DelayRenderProps {
    children : JSX.Element | JSX.Element[];
            //type of 'children' in React TYPESCRIPT
}

function DelayRender({ children }: DelayRenderProps) {
    return (
        <Delayed mounted={true} mountAfter={275} unmountAfter={275}>
            {children}
        </Delayed>
    )
}

export default DelayRender;