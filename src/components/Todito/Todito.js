import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core';
import colors from "../../config/colors/colors";

export default function Todito({ type, id, title, difficulty, description, ...props }) {

    const classes = useStyles(props);

    const getTodito = () => {
        switch (type.toLowerCase()) {
            case "description":
                return (
                    <Box className={classes.containerTodito}>
                        <Box className={classes.containerTitle}>
                            <h1 className={classes.title}>{id}. {title}</h1>
                            <h2 className={classes.difficulty}>{difficulty}</h2>
                        </Box>
                        <Box className={classes.containerDescription}>
                            <p className={classes.description}>{description}</p>
                        </Box>
                    </Box>
                )
            case "solution":
                return (
                    <p/>
                )
            case "submissions":
                return (
                    <p/>
                )
            default:
                break;
        }
    }

    return (
        getTodito() 
    )

}

const useStyles = makeStyles((theme) => ({
    containerTodito: {
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '1%'
    },
    containerTitle: {
        borderBottom: '2px solid #40414B',
    },
    title: {
        color: 'white',
        fontFamily: 'Roboto',
        fontStyle: 'bold',
        fontWeight: 'normal',
        fontSize: '150%',
        textAlign: 'left',
        margin: 0,
        marginBottom: '2vh',
    },
    difficulty: {
        color: (props) => props.colorDifficulty,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '130%',
        textAlign: 'left',
        margin: 0,
        paddingBottom: '2vh',
    },
    description: {
        color: 'white',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '115%',
        textAlign: 'left',
        lineHeight: '29px',
    },


}));