import React, { useState } from 'react';
//COMPONENT
import UserInbox from './UserInbox';
import UserMessage from './UserMessage';
//MATERIAL-UI
import Card from '@material-ui/core/Card';
//CONTEXT API
import { useStateValue } from '../../StateContext';
//APOLLO-GRAPHQL
import { client } from '../../config';
import { ApolloProvider } from '@apollo/client';

function Chat() {
    const [ { username }, dispatch ] = useStateValue();
    const [ state, setState ] = useState<{ user: string; content: string; }>({ user: username, content: "" });

    return (
        <ApolloProvider client={client}>   {/* wanna need GRAPHQL chat data in only 'Chat' component */}
            <Card className="card bg-dark" style={{ display: 'flex' }}>
                <UserInbox
                    username={state.user}
                />

                <UserMessage
                    state={state}
                    setState={setState}
                />
            </Card>
        </ApolloProvider>
    )
}

export default Chat;