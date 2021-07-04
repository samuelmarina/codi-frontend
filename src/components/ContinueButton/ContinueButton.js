import React from "react";
import { Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";

import colors from "../../config/colors/colors";

const ContinueButton = ({ buttonText, setButtonText, onClick }) => {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={
                <div className={classes.circle}>
                    <ArrowForwardIcon className={classes.arrow} />
                </div>
            }
            onClick={onClick}
            data-testid="continueButton"
        >
            {buttonText}
        </Button>
    );
};

const useStyles = makeStyles((theme) => ({
    button: {
        color: colors.darkText,
        backgroundColor: colors.white,
        fontWeight: "700",
        height: "30px",
        width: "170px",
        borderRadius: "30px",
        "&:hover": {
            backgroundColor: colors.background,
            color: colors.white,
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "10px",
        },
    },
    circle: {
        width: "25px",
        height: "25px",
        borderRadius: "200%",
        backgroundColor: colors.background,
    },
    arrow: {
        color: colors.white,
    },
}));

export default ContinueButton;
