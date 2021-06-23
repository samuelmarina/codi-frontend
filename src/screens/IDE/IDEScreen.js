import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CachedIcon from "@material-ui/icons/Cached";
import CodeConsole from "../../components/CodeConsole/CodeConsole";
import FormControl from "@material-ui/core/FormControl";
import HighlightIcon from "@material-ui/icons/Highlight";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import Select from "@material-ui/core/Select";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import CodeEditor from "../../components/CodeEditor/CodeEditor";
import Context from "../../helpers/context/context";
import codeHelper from "../../helpers/code/code";
import CubeLoader from "../../components/CubeLoader/CubeLoader";
import ideAPI from "../../api/ide/ide";
import k from "../../helpers/constants/constants";
import Todito from "../../components/Tabs/Tabs";
import useQuery from "../../hooks/useQuery/useQuery";

export default function IDEScreen({ x, ...props }) {
  const query = useQuery();
  const problemId = query.get("problemId");
  const classes = useStyles(props);
  const [value, setValue] = useState(0);
  const [lenguaje, setLenguaje] = useState("");
  const [codeLanguage, setCodeLanguage] = useState("");
  const [code, setCode] = useState("");
  const [color, setColor] = useState("white");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [consoleLoading, setConsoleLoading] = useState(false);
  const [sendLoading, setSendLoading] = useState(false);
  const [expected, setExpected] = useState("");
  const [readOnly, setReadOnly] = useState(true);
  const [disabledSolution, setDisabledSolution] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState(true);

  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [solutionText, setSolutionText] = useState("");
  const [solutionCode, setSolutionCode] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [templates, setTemplates] = useState([]);

  const { isLoading, setIsLoading } = useContext(Context);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleTabs = (e, val) => {
    setValue(val);
  };

  const select = (e) => {
    const lang = e.target.value;
    setLenguaje(lang);
    setCodeLanguage(k.codeLanguages[lang]);
    if (lang == "Java" || lang == "Python") {
      setReadOnly(false);
      setDisabledButtons(false);
    } else {
      setReadOnly(true);
      setDisabledButtons(true);
    }
  };

  const reload = () => {
    lenguaje === ""
      ? setCode(
          "Por favor, seleccione un lenguaje para empezar a programar con Codi."
        )
      : codeHelper.changeTemplate(lenguaje, templates, setCode);
  };

  const run = () => {
    setConsoleLoading(true);
    setInput("[1, 2, 3, 4, 5]");
    setOutput("true");
    setExpected("true");
    setConsoleLoading(false);
  };

  const sendCode = async () => {
    setValue(2);
    const codeInfo = {
      code: code,
      lang: lenguaje,
      problemId: problemId,
    };
    const userInfo = {
      userId: user.google_id,
    };

    setSendLoading(true);
    const results = await ideAPI.sendCode(codeInfo, userInfo);
    setSendLoading(false);

    if (results.status === 201) {
      const submission = results.data;
      setSubmissions([submission, ...submissions]);
    } else {
      //Modal con mensaje de error
    }
  };

  useEffect(() => {
    const getProblemInfo = async (problemId, userId) => {
      setIsLoading(true);
      const response = await ideAPI.getProblemWithSubmissions(
        problemId,
        userId
      );
      setIsLoading(false);
      if (response.status === 200) {
        initializeValues(response.data);
      } else {
        //Modal de error
      }
    };
    getProblemInfo(problemId, user.google_id);
  }, []);

  useEffect(() => {
    lenguaje === ""
      ? setCode(
          "Por favor, seleccione un lenguaje para empezar a programar con Codi."
        )
      : codeHelper.changeTemplate(lenguaje, templates, setCode);
  }, [lenguaje]);

  const initializeValues = (problemInfo) => {
    setDescription(problemInfo.description);
    setTitle(problemInfo.name);
    setDifficulty(getDifficulty(problemInfo.difficulty));
    setSolutionText(problemInfo.solution);
    setSolutionCode(problemInfo.solutionCode);
    setSubmissions(problemInfo.submissions);
    setTemplates(problemInfo.templates);
  };

  const getDifficulty = (difficulty) => {
    const dificultad = k.spanishDifficulty[difficulty];
    if (dificultad === "Fácil") {
      setColor("white");
    } else if (dificultad === "Intermedio") {
      setColor("#32EDE9");
    } else {
      setColor("#F31483");
    }
    return dificultad;
  };

  return (
    <Grid container className={classes.container}>
      {isLoading ? (
        <CubeLoader />
      ) : (
        <>
          <Box className={classes.box}>
            <AppBar position="static" className={classes.container2}>
              <Tabs
                value={value}
                onChange={handleTabs}
                aria-label=""
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="Descripción" icon={<LineStyleIcon />} />
                <Tab
                  label="Solución"
                  icon={<HighlightIcon />}
                  disabled={disabledSolution}
                />
                <Tab label="Intentos" icon={<AccessTimeIcon />} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <Todito
                type="description"
                id={problemId}
                title={title}
                difficulty={difficulty}
                colorDifficulty={color}
                description={description}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              {!disabledSolution && (
                <Todito
                  type="solution"
                  id={problemId}
                  title={title}
                  solution={solutionCode}
                  description={solutionText}
                />
              )}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {sendLoading ? (
                <Box className={classes.containerCube}>
                  <CubeLoader className={classes.cube} />
                </Box>
              ) : (
                <Todito
                  type="submissions"
                  id={problemId}
                  title={title}
                  data={submissions}
                />
              )}
            </TabPanel>
          </Box>
          <Box className={classes.box}>
            <Box className={classes.box4}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-lenguaje-simple">
                  Lenguaje
                </InputLabel>
                <Select
                  native
                  value={lenguaje}
                  onChange={(e) => select(e)}
                  label="Lenguaje"
                  inputProps={{
                    name: "Lenguaje",
                    id: "outlined-lenguaje-simple",
                  }}
                >
                  <option aria-label="None" value={""} />
                  <option value={"Java"}>Java</option>
                  <option value={"Python"}>Python</option>
                </Select>
              </FormControl>
              <IconButton
                aria-label="reload"
                className={classes.reload}
                onClick={reload}
              >
                <CachedIcon fontSize="large" />
              </IconButton>
            </Box>
            <Box className={classes.codeEditor}>
              <CodeEditor
                readOnly={readOnly}
                language={codeLanguage}
                value={code}
                onChange={setCode}
                className={classes.codeEditor2}
              />
            </Box>
            <div className={classes.setEnd}>
              <Box>
                <CodeConsole
                  input={input}
                  output={output}
                  isLoading={consoleLoading}
                  expected={expected}
                />
              </Box>
              <Box className={classes.buttons}>
                <Button
                  size="small"
                  className={classes.run}
                  onClick={run}
                  startIcon={<PlayCircleFilledIcon />}
                  variant="outlined"
                  disabled={disabledButtons}
                >
                  Ejecutar
                </Button>
                <Button
                  size="small"
                  className={classes.send}
                  onClick={sendCode}
                  variant="outlined"
                  disabled={disabledButtons}
                >
                  Enviar
                </Button>
              </Box>
            </div>
          </Box>
        </>
      )}
    </Grid>
  );
}

function TabPanel(props) {
  const classes = useStyles(props);
  const { children, value, index } = props;
  if (value === index) {
    return <Box className={classes.box2}>{children}</Box>;
  } else {
    return <Box className={classes.box3}></Box>;
  }
}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#282A36",
    width: "99.9vw",
    height: "90vh",
    marginTop: "54px",
    justifyContent: "center",
    display: "flex",
  },
  box: {
    backgroundColor: "#282A36",
    width: "50%",
    height: "90vh",
    [theme.breakpoints.down("sm")]: {
      width: "99.8%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "99.8%",
    },
  },
  container2: {
    backgroundColor: "#1B1D2B",
  },
  box2: {
    marginTop: "10px",
    height: "89%",
    width: "100%",
    overflowY: "auto",
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      width: 8,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.2)",
      outline: "1px solid slategrey",
      borderRadius: 7,
    },

    "& .makeStyles-container-74": {
      width: "100%",
    },
  },
  box3: {
    display: "none",
  },
  box4: {
    height: "72px",
    width: "calc(100% -10px)",
    backgroundColor: "#1B1D2B",
    boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.28)",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
    justifyContent: "space-between",
    paddingRight: "20px",
  },
  formControl: {
    width: "110px",
    "& ..MuiFormControl-root": {
      width: "110px",
    },
    "& .MuiInputLabel-animated": {
      color: "white",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
      borderWidth: "1px",
    },
    "& .MuiSelect-icon": {
      color: "white",
    },
    "& .MuiSelect-outlined.MuiSelect-outlined": {
      color: "white",
    },
    "& .MuiSelect-select:not([multiple]) option, .MuiSelect-select:not([multiple]) optgroup":
      {
        color: "white",
        backgroundColor: "#282A36",
      },
  },
  langSelect: {
    "&.MuiSelect-select": {
      color: "white",
    },
  },
  codeEditor: {
    marginTop: "10px",
    width: "100%",
  },
  codeEditor2: {},
  reload: {
    color: "white",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "20px",
    paddingTop: "10px",
  },
  run: {
    color: "white",
    borderColor: "white",
    marginRight: "15px",
    "&:hover": {
      transition: "background 1.5s",
      transition: "color 1.5s",
      background: "#FFFFFF",
      color: "#474747",
      cursor: "pointer",
    },
  },
  setEnd: {
    position: "absolute",
    marginBottom: 0,
    marginRight: 0,
    width: "inherit",
  },
  send: {
    color: "white",
    borderColor: "white",
    "&:hover": {
      transition: "background 1.5s",
      transition: "color 1.5s",
      background: "#FFFFFF",
      color: "#474747",
      cursor: "pointer",
    },
  },
  containerCube: {
    display: "flex",
    justifyContent: "center",
  },
}));
