import Logo from '../images/logo.PNG';
import { Link } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

    button: {
        color: 'white',
        fontFamily: "Roboto",
        fontSize: 16,
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: '#1b1b1b' }}>
                <Toolbar>

                    <Link to="/buildE/" className={classes.title}>
                        <img src={Logo}

                            width="110px"
                            height="100%"
                            className="d-inline-block align-top"
                            alt="" />
                    </Link>


                    <Link to="/buildE/Videoplayer">
                        <Button className={classes.button} color="inherit">Webinars</Button>
                    </Link>
                    <Link to="/buildE/Contact">
                        <Button className={classes.button} color="inherit">Contact</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
