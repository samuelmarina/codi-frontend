import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core';
import colors from "../../config/colors/colors";
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function Todito({ type, id, title, difficulty, description, solution, ...props }) {

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
                    <Box className={classes.containerTodito}>
                        <Box className={classes.containerTitle}>
                            <h1 className={classes.title}>Solution</h1>
                        </Box>
                        <Box className={classes.containerDescription}>
                            <h2 className={classes.subtitle}>{id}. {title}</h2>
                            <p className={classes.description}>{description}</p>
                            <Box className={classes.containerButton}>
                                <CopyToClipboard text={solution}>
                                    <button className={classes.buttonTodito}>
                                        Copy
                                    </button>
                                </CopyToClipboard>
                            </Box>
                            <CodeEditor readOnly={true} language="text/x-java" value={solution}/>
                        </Box>
                    </Box>
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
        paddingTop: '1%',
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
    subtitle: {
        color: 'white',
        fontFamily: 'Roboto',
        fontStyle: 'bold',
        fontWeight: 'normal',
        fontSize: '130%',
        textAlign: 'left',
    },
    buttonTodito: {
        background: 'rgba(255, 255, 255, 0)',
        color: 'white',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: "115%",
        textAlign: 'center',
        marginRight: '1%',
        marginBottom: '1%',
        
        width: "10%",
        height: "10%",

        border: '1px solid rgba(255, 255, 255, 0.5)',
        boxSizing: 'border-box',
        boxShadow: '5px 4px 4px rgba(0, 0, 0, 0.28)',
        borderRadius: '5px',
        transition: 'background 1.5s',
        transition: 'color 1.5s',
        "&:hover": {
            transition: 'background 1.5s',
            transition: 'color 1.5s',
            background: '#FFFFFF',
            color: '#474747',
            cursor: "pointer",
        }
    },
    containerButton: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },


}));