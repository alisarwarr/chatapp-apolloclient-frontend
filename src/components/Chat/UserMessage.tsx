import React from 'react';
import DelayRender from '../../DelayRender';
//MATERIAL-UI
import SendIcon from '@material-ui/icons/Send';
import Container from '@material-ui/core/Container';
//APOLLO-GRAPHQL
import { useMutation, gql } from '@apollo/client';

const POST_MESSAGE = gql`
    mutation($user: String!, $content: String!) {
        postMessage(user: $user, content: $content)
    }
`

interface UserMessageProp {
    state: { user: string; content: string; };
    setState: Function;
}

function UserMessage({ state, setState }: UserMessageProp) {
    const [ posting ] = useMutation(POST_MESSAGE);

    const handleSend = () => {
        posting(
            {
                variables: state
            // passing whole object in place of manually passing
            // OR
            //  variables: {
            //      user: state.user,
            //      content: state.content
            //  }
            }
        )
    }

    return (
        <DelayRender>
            <Container component="form" className="messageform">
                <input
                    type="text"
                    className="form-control"
                    value={state.user}
                    onChange={(e) => setState({ ...state, user: e.target.value })}
                    id="input1"
                    disabled
                />
        
                <input
                    type="text"
                    className="form-control"
                    value={state.content}
                    onChange={(e) => setState({ ...state, content: e.target.value })}
                    id="input2"
                    autoFocus
                />
    
                <button
                    type="submit"
                    className="btn btn-danger shadow-none"
                    onClick={(e) => { handleSend(); e.preventDefault(); setState({ ...state, content: '' }); }}
                    disabled={state.content.length === 0}
                >
                    <span> SEND </span> <SendIcon fontSize="small"/>
                </button>
            </Container>
        </DelayRender>
    )
}

export default UserMessage;