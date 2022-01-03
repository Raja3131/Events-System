import React from "react";
import { Grid, Paper, IconButton, Typography, Toolbar } from '@material-ui/core'
import useStyles from "./Style"; 
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {

    const classes = useStyles();

    return (
        <div>
            <Toolbar className={classes.paper} >
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className={classes.ml}
                >
                    <MenuIcon sx={{ fontSize: 30 }} />
                </IconButton>
                <Typography className={classes.ml} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Event Master
                </Typography>
            </Toolbar>
        </div>
    )
}