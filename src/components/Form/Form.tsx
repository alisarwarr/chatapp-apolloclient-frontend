import React from 'react';
//MATERIAL-UI
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import useMediaQuery from '@material-ui/core/useMediaQuery';
//FORMIK & YUP
import { Formik, Form as FormikForm, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { object, string } from 'yup';
//ROUTER-DOM
import { useHistory } from 'react-router-dom';
//CONTEXT-API
import { settingUsername } from '../../contextapi';
import { useStateValue } from '../../StateContext';

const process = (time: number) => new Promise(acc => setTimeout(acc, time));

function Form() {
    const history = useHistory();
    const [ state, dispatch ] = useStateValue();

    const screen480 = useMediaQuery('(max-width:480px)');
    
    return (
        <Formik
            initialValues={{ username: '' }}
            validationSchema={
                object({
                    username: string()
                    .max(30, 'atmost 30 character')
                    .min(3, 'atleast 3 characters')
                    .required('Must fill username'),
                })
            }
            onSubmit={async ({ username }) => {    
                await process(2500);
                //dispath 'username' to context-api
                dispatch(settingUsername(username));
                history.push('/app');
            }}
        >
            {({ isSubmitting }) => (
                <FormikForm className="formikform" autoComplete="off">
                    <Box paddingBottom={1} className="box">
                        <Field fullWidth name='username' color="secondary" component={TextField} label="Username" autoFocus id="input0"
                        />
                    </Box>
    
                    <Button type="submit" size={screen480 ? 'small' : 'medium'} disabled={isSubmitting} startIcon={isSubmitting ? <CircularProgress size="1rem" color="secondary"/> : null} fullWidth variant="contained" color="secondary">
                        REGISTER
                    </Button>
                </FormikForm>
            )}
        </Formik>
    )
}

export default Form;