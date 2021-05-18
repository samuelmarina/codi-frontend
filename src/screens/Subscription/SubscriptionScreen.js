import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import colors from "../../config/colors/colors";
import SubscriptionBox from '../../components/SubscriptionBox/SubscriptionBox';
import { yellow } from '@material-ui/core/colors';

export default function SubscriptionScreen(props) {
    const classes = useStyles(props);

    return (
        <Box className={classes.containerSubs}>
            <Box className={classes.box1}>
                <Box className={classes.boxContainer1}>
                </Box>
            </Box>
            <Box className={classes.box2}>
                <Grid container className={classes.boxContainer2}>
                    <SubscriptionBox title="<Semanal>" amount="$8/Se" time="7 DÍAS" before="Antes: $1" after="Ahorro: 0,0%" ideal="Ideal para:" prac="Practicantes Dummies" buttonText="Subscribirse" color1="#CBCBCD" color2="#E75656" color3="#FB2121"/>
                    <SubscriptionBox title="{Mensual}" amount="$25/Me" time="30 DÍAS" before="Antes: $35" after="Ahorro: 28,71%" ideal="Ideal para:" prac="Practicantes Not so Dummies" buttonText="Subscribirse" color1="#CBCBCD" color2="#6983FF" color3="#254BFF"/>
                    <SubscriptionBox title="#Anual" amount="$150/An" time="365 DÍAS" before="Antes: $420" after="Ahorro: 64,29%" ideal="Ideal para:" prac="Practicantes Increibles" buttonText="Subscribirse" color1="#CBCBCD" color2="#FBDA56" color3="#FFD220"/>
                </Grid>
            </Box>
         </Box>
    );
}

const useStyles = makeStyles(theme => ({
    containerSubs: {
        height: "100vh",
        backgroundColor: colors.background,
        justifyContent: "center"
    },
    box1: {
        backgroundColor: 'red',
        justifyContent: "center",
        display: "flex",
        padding: 30,
        paddingTop: 100,
        [theme.breakpoints.down('xs')]: {
            
        },
    },
    boxContainer1: {
        backgroundColor: 'blue',
        width: "20%",
        [theme.breakpoints.down('sm')]: {
        },
        [theme.breakpoints.down('xs')]: {
        },
    },
    box2: {
        justifyContent: "center",
        display: "flex"
    },
    boxContainer2: {
        marginTop: 50,
        marginBottom: 50,
        paddingLeft: 100,
        paddingRight: 100,
        width: "85%",
        [theme.breakpoints.down('md')]: {
            width: "100%",
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            paddingLeft: 40,
            paddingRight: 40,
        },
    },
    
}));