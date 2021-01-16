import React from 'react';
import logo from '../../images/logo.png';
import ScrollFeed from '../../ScrollFeed';
//MATERIAL-UI
import Typography from '@material-ui/core/Typography';
//APOLLO-GRAPHQL
import { useQuery, gql } from '@apollo/client';

const GET_MESSAGES = gql`
    query {
        messages {
            id
            content
            user
        }
    }
`

interface UserInboxProp {
    username: string;
}

function UserInbox({ username } : UserInboxProp) {
    const { data } = useQuery(GET_MESSAGES, {
        pollInterval: 500
     // reftech Query in every 5 miliseconds
    })

    if(!data) {
        return <RenderText/>;
    }

    return (
        <div className="body" style={{ flex: 0.975 }}>
            {
                data.messages.length > 0 ? (
                    <ScrollFeed arrayToConsider={data.messages}>
                        {
                            data.messages.map(({ id, user, content }) => (
                                <div
                                    key={id}
                                    style={{
                                        display: "flex",
                                        alignItems: 'center',
                                        justifyContent: (username === user) ? 'flex-end' : 'flex-start',
                                        paddingBottom: '1rem'
                                    }}
                                >
                                    <Typography
                                        style={{
                                            height: '2.65rem',
                                            width: '2.65rem',
                                            marginRight: '0.5em',
                                            borderRadius: 25,
                                            paddingTop: 5,
                                            display: "flex",
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 'bold',
                                            color: (username === user) ? 'black' : 'white',
                                            backgroundColor: (username === user) ? '#e5e6ea' : '#58bf56',
                                            border: `1px solid ${(username === user) ? '#58bf56' : '#e5e6ea'}`,
                                            marginLeft: (username === user) ? 0 : '1.05rem'
                                        }}
                                    >
                                        <span className="circle"> {user.slice(0, 2).toUpperCase()} </span>
                                    </Typography>
            
                                    <Typography
                                        style={{
                                            padding: '0.605rem',
                                            borderRadius: '1rem',
                                            fontWeight: 'normal',
                                            wordSpacing: '0.175rem',
                                            letterSpacing: '0.0625rem',
                                            maxWidth: '60%',
                                            borderTopLeftRadius: (username === user) ? '1rem' : 0,
                                            borderTopRightRadius: (username === user) ? 0 : '1rem',
                                            color: (username === user) ? 'white' : 'black',
                                            backgroundColor: (username === user) ? '#58bf56' : '#e5e6ea',
                                            border: `1px solid ${(username === user) ? '#e5e6ea' : '#58bf56'}`,
                                            marginRight: (username === user) ? '1.05rem' : 0
                                        }}
                                    >
                                        {content}
                                    </Typography>
                                </div>
                            ))
                        }
                    </ScrollFeed>
                ) : (
                    <RenderText/>
                )
            }
        </div>
    )
}

export default UserInbox;

function RenderText() {
    return (
        <div className="box">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <img src={logo} alt=""/>
                    <h1>
                        <span> Messanger </span>
                    </h1>
                </div>
            </div>
        </div>
    )
}