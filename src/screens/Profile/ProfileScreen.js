import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chart from "../../components/Chart/Chart";
import AppContext from "../../helpers/context/context";
import CustomInput from "../../components/CustomInput/CustomInput";

import colors from "../../config/colors/colors";

export default function ProfileScreen() {
  const classes = useStyles();
  let locvalue = localStorage.getItem("user");
  locvalue = JSON.parse(locvalue);
  let [text, setText] = useState({
    value: locvalue["name"],
    editMode: false,
    modif: "",
  });
  const userC = useContext(AppContext);
  let problems = [
    { difficulty: "easy", solved: 2, total: 5 },

    { difficulty: "medium", solved: 2, total: 7 },

    { difficulty: "hard", solved: 2, total: 9 },
  ];
  let difficulties = [];
  let solved = [];
  let total = [];

  problems.map((val) => {
    difficulties.push(val.difficulty);
    solved.push(val.solved);
    total.push(val.total);
  });

  let intentos = 0;
  let tryEasy = 0;
  let tryMedium = 0;
  let tryHard = 0;
  intentos = 75.4;
  tryEasy = 75.4;
  tryMedium = 75.4;
  tryHard = 75.4;

  let languages = [
    { language: "Java", count: 5 },

    { language: "Python", count: 5 },
  ];
  let language = [];
  let count = [];

  languages.map((lan) => {
    language.push(lan.language);
    count.push(lan.count);
  });

  return (
    <>
      <div style={{ marginTop: "5rem" }} className={classes.header}>
        <div className={classes.box}>
          <img
            src={locvalue["pic_url"]}
            alt="avatar"
            className={classes.image}
          />
          <CustomInput />
        </div>
        <div className={classes.divider}>
          <div className={classes.flexSpace}>
            <div className={classes.lefBox}>
              <div className={classes.charttext}>Problemas</div>
              <div className={classes.miniFlex}>
                <div className={classes.miniTitle}>
                  Facil
                  <div className={classes.doughnut_container_mini}>
                    <Chart
                      labels={["Hechos", "Faltan"]}
                      data={[solved[0], total[0] - solved[0]]}
                      colors={["#FFCD56", "#FFCD5650"]}
                      font_color="white"
                      type="Doughnut"
                      etiquetas={false}
                    />
                  </div>
                </div>
                <div className={classes.miniTitle}>
                  Medio
                  <div className={classes.doughnut_container_mini}>
                    <Chart
                      labels={["Hechos", "Faltan"]}
                      data={[solved[1], total[1] - solved[1]]}
                      colors={["#36A2EB", "#36A2EB50"]}
                      font_color="white"
                      type="Doughnut"
                      etiquetas={false}
                    />
                  </div>
                </div>
                <div className={classes.miniTitle}>
                  Dificil
                  <div className={classes.doughnut_container_mini}>
                    <Chart
                      labels={["Hechos", "Faltan"]}
                      data={[solved[2], total[2] - solved[2]]}
                      colors={["#FF6384", "#FF638450"]}
                      font_color="white"
                      type="Doughnut"
                      etiquetas={false}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.doughnut_container}>
                <Chart
                  labels={difficulties}
                  data={solved}
                  colors={["#FF9F40", "#36A2EB", "#FF6384"]}
                  font_color="white"
                  type="Doughnut"
                  etiquetas={false}
                />
              </div>
              <div className={classes.totalTitle}>Total</div>
            </div>
          </div>
          <div className={classes.flexSpace}>
            <div className={classes.lefBox}>
              <div className={classes.charttext}>Intentos</div>
              <div className={classes.miniFlex}>
                <div className={classes.miniTitle}>
                  Facil
                  <div className={classes.doughnut_container_mini}>
                    <Chart
                      labels={["%Exito", "%Fracaso"]}
                      data={[tryEasy, 100 - tryEasy]}
                      colors={["#FF9F40", "#FF9F4050"]}
                      font_color="white"
                      type="Doughnut"
                      etiquetas={false}
                    />
                  </div>
                </div>
                <div className={classes.miniTitle}>
                  Medio
                  <div className={classes.doughnut_container_mini}>
                    <Chart
                      labels={["%Exito", "%Fracaso"]}
                      data={[tryMedium, 100 - tryMedium]}
                      colors={["#36A2EB", "#36A2EB50"]}
                      font_color="white"
                      type="Doughnut"
                      etiquetas={false}
                    />
                  </div>
                </div>
                <div className={classes.miniTitle}>
                  Dificil
                  <div className={classes.doughnut_container_mini}>
                    <Chart
                      labels={["%Exito", "%Fracaso"]}
                      data={[tryHard, 100 - tryHard]}
                      colors={["#FF6384", "#FF638450"]}
                      font_color="white"
                      type="Doughnut"
                      etiquetas={false}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.doughnut_container}>
                <Chart
                  labels={["%Exito", "%Fracaso"]}
                  data={[intentos, 100 - intentos]}
                  colors={["#36A2EB", "#FF6384"]}
                  font_color="white"
                  type="Doughnut"
                  etiquetas={false}
                />
              </div>
              <div className={classes.totalTitle}>Total</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.secondRow}>
        <div className={classes.flexSpace2}>
          <div className={classes.charttext}>Lenguajes mas usados</div>
          <div className={classes.doughnut_container}>
            <Chart
              labels={language}
              data={count}
              colors={["#36A2EB", "#E75656"]}
              font_color="white"
              type="Pie"
              etiquetas={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  doughnut_container: {
    margin: 0,
    // marginTop: "10vh",
    height: 150,
    width: 200,
    "@media (max-width: 768px)": {
      maxHeight: 300,
      width: 350,
    },
    "@media (max-width: 550px)": {
      maxHeight: 100,
      width: 100,
    },
    "@media (max-width: 425px)": {
      maxHeight: 90,
      width: 70,
    },
  },
  miniTitle: {
    color: "white",
    textAlign: "center",
    marginRight: "2rem",
    marginTop: "1rem",
    paddingLeft: "1rem",
    "@media (max-width: 550px)": {
      fontSize: "0.7rem",
      marginRight: "1rem",
    },
    "@media (max-width: 425px)": {
      fontSize: "0.6rem",
      marginRight: "0.5rem",
    },
  },
  totalTitle: {
    color: "white",
    textAlign: "center",
    paddingTop: "1rem",
  },
  miniFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  leftBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  doughnut_container2: {
    margin: 0,
    // marginTop: "10vh",
    maxHeight: 400,
    width: 500,
    "@media (max-width: 768px)": {
      maxHeight: 400,
      width: 500,
    },
    "@media (max-width: 550px)": {
      maxHeight: 400,
      width: 500,
    },
    "@media (max-width: 425px)": {
      maxHeight: 400,
      width: 500,
    },
  },
  doughnut_container_mini: {
    margin: 0,
    // marginTop: "10vh",
    maxHeight: 100,
    width: 80,
    "@media (max-width: 768px)": {
      maxHeight: 80,
      width: 60,
    },
    "@media (max-width: 550px)": {
      maxHeight: 60,
      width: 40,
    },
    "@media (max-width: 425px)": {
      maxHeight: 60,
      width: 40,
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  secondRow: {
    "@media (max-width: 768px)": {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
  },
  divider: {},
  flexSpace: {
    padding: 10,
    backgroundColor: "#595959",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    maxHeight: 250,
    maxWidth: 700,
    borderRadius: 15,
    borderColor: "#B6B6B6",
    borderWidth: 10,
    marginBottom: 20,
    "@media (max-width: 550px)": {
      maxHeight: 150,
      maxWidth: 400,
    },
    "@media (max-width: 425px)": {
      maxWidth: 250,
    },
  },
  flexSpace2: {
    padding: 10,
    backgroundColor: "#595959",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    maxHeight: 250,
    maxWidth: 700,
    borderRadius: 15,
    borderColor: "#B6B6B6",
    borderWidth: 10,
    marginBottom: 20,
    marginLeft: "5rem",
    marginTop: "1rem",
    "@media (max-width: 768px)": {
      margin: 5,
      maxHeight: 150,
      maxWidth: 500,
    },
    "@media (max-width: 550px)": {
      margin: 5,
      maxHeight: 150,
      maxWidth: 400,
    },
    "@media (max-width: 425px)": {
      maxWidth: 300,
      padding: "10px",
      margin: 5,
    },
  },
  charttext: {
    fontSize: "1.5rem",
    color: colors.white,
    // marginRight: "4rem",
    paddingLeft: "2rem",
    textAlign: "center",
    "@media (max-width: 425px)": {
      fontSize: "0.75rem",
      marginRight: "2rem",
    },
  },
  image: {
    width: "13rem",
    height: "13rem",
    borderRadius: "50%",
    "@media (max-width: 425px)": {
      width: "9rem",
      height: "9rem",
    },
  },
  textname: {
    fontSize: "2rem",
    color: "white",
    fontWeight: "20px",
    "@media (max-width: 425px)": {
      fontSize: "1.5rem",
    },
  },
  textButtom: {
    display: "flex",
    justifyContent: "spaceBetween",
    alignItems: "center",
  },
  box: {
    margin: 0,
    maxWidth: "30rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  whiteTheme: {
    "& .MuiInputBase-root ": {
      color: colors.white,
      fontSize: "2rem",
      color: "white",
      fontWeight: "20px",
      "@media (max-width: 425px)": {
        fontSize: "1rem",
      },
    },
    "& .MuiInputBase-input .MuiInput-input": {
      color: colors.white,
    },

    "& .MuiInput-underline:before": {
      borderColor: colors.white,
      borderWidth: "0.2rem",
      borderBottom: "0.2rem solid white",
    },
    "& .MuiInput-underline:after": {
      borderColor: colors.white,
      borderWidth: "0.2rem",
      borderBottom: "0.2rem solid white",
    },
  },
}));
