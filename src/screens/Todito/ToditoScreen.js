import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core';
import Todito from '../../components/Todito/Todito'
import colors from "../../config/colors/colors";

export default function Toditocreen({ x, ...props }) {
    const classes = useStyles(props);

    return (
        <Box className={classes.container}>
            <Todito 
                type="solution" 
                id={51} 
                title="N-Reinas" 
                difficulty="Difícil" 
                colorDifficulty="#E75656"
                solution="print('hello')"
                description="El rompecabezas de las n-reinas es un problema de colocar n reinas en un tablero de ajedrez de tamaño nxn, de tal manera de que no existan dos reinas que se puedan atacar una a otra. Dado un entero n, retorne todas las posibles soluciones al problema de las n-reinas."
            />
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#282A36',
        width: '50%',
        height: '92vh',
        marginTop: '4%',
    },

}));