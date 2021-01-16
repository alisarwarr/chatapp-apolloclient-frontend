import React from 'react';
//COMPONENT
import Form from '../components/Form/Form';
import Chat from '../components/Chat/Chat';
//MATERIAL-UI
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    const screen480 = useMediaQuery('(min-width:480px)');

    return (
        <Router>
            <Switch>
                <div className="app">
                    <Typography variant="h2" component="p">
                        <span className="badge bg-light text-dark"> {screen480 ? `Chat Application` : `Chat App`} </span>
                    </Typography>
                    
                    <Route path='/' exact>
                        <Form
                        />
                    </Route>

                    <Route path='/app' exact>
                        <Chat
                        />
                    </Route>
                </div>
            </Switch>
        </Router>
    )
}

export default App;