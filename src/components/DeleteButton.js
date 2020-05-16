import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles,createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';


const btabutton = (props) => {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main:'#17a2b8'
            },
            secondary:{
                main:'#f542e9'
            },
        },
    });
    const styles = makeStyles((theme) => ({
        submit: {
            margin: theme.spacing(2,2,2,0),
        },
    }));
    const classes = styles();
    
    return (
        <MuiThemeProvider theme={theme}>
            <Button type="submit" onClick={props.click} variant="contained" color={props.type} className={classes.submit} >
                {props.children}
            </Button>
        </MuiThemeProvider>
    )
}

export default btabutton;
