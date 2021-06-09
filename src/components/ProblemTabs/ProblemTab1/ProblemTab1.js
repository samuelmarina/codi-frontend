import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "../../../styles/screens/ProblemFormScreen/ProblemTabs/ProblemTab1/ProblemTab1.scss";
import {  TextField,
          TextareaAutosize,
          MenuItem } from '@material-ui/core';
import CodeEditor from "../../CodeEditor/CodeEditor";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

export default function ProblemTab1({problemInfo,handleProblemInfo,code,setCode}) {
  const classes = useStyles();
  // languages: python text/x-java
  var languageCode="text/x-java"
  const difficulties = [
    {
      value: 'easy',
      label: 'Facil',
    },
    {
      value: 'medium',
      label: 'Intermedio',
    },
    {
      value: 'hard',
      label: 'Dificil',
    }
  ];
  const [open, setOpen] = useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  
  const onChange = e => {
    if(e.target==undefined) return
    handleProblemInfo({
        ...problemInfo,
        [e.target.name]:e.target.value
    })
  }

  return (
        <div className={classes.root}>
          <div>
            <div id="TextFieldBox" >
              <ThemeProvider theme={theme}>
                  <TextField
                    color="white"
                    label="Titulo"
                    id="TitleField"
                    className={classes.textField}
                    name="name"
                    onChange={onChange}
                    value={problemInfo.name}
                    />
                  <TextField
                    id="SelectField"
                    select
                    label="Dificultad"
                    className={classes.textField}
                    onChange={onChange}
                    name="difficulty"
                    value={problemInfo.difficulty}
                    >
                    {difficulties.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </ThemeProvider>
                
            </div>

            <div id="TextAreaLgBox">
              <div id="InputLabelDescriptionBox" >
                <InputLabel id="InputLabelDescription" style={{color:"white",marginBottom:"1rem",textAlign:"start"}} htmlFor="description">Descripcion</InputLabel>
              </div>
              <TextareaAutosize
                style={{width:"85%"}}
                id="TextAreaLg"
                className={classes.TextareaAutosizeLg}
                aria-label="Problem Description" 
                rowsMin={8} 
                placeholder="Descripcion del Problema" 
                name="description"
                onChange={onChange}
                value={problemInfo.description}
                />
            </div>

            <div style={{marginLeft: "auto",marginRight: "auto",width:"82%"}} id="TextAreaBox">
              <div id="InputLabelSolutionBox" style={{width:"200px"}}>
                <InputLabel id="InputLabelSolution" style={{color:"white",textAlign:"start"}} htmlFor="solution">Solucion</InputLabel>
              </div>
              <TextareaAutosize
              className="TextArea"
              aria-label="Problem Solution" 
              rowsMin={8} 
              placeholder="Solucion del Problema" 
              helperText="Solucion"
              name="solution"
              onChange={onChange}
              value={problemInfo.solution}
              autoComplete="false"
              />
              <div id="CodeEditorBox">
                <InputLabel id="InputLabelSolutionCode" style={{color:"white",marginBottom:"1rem",textAlign:"start"}} htmlFor="solutionCode">Codigo Solucion</InputLabel>
                <CodeEditor
                  id="CodeEditor"
                  className="CodeEditorBox"
                  name='solutionCode'
                  value={code}
                  language={languageCode}
                  onChange={setCode}
                />
              </div>
            </div>
          </div>
      </div>
    
);}

const useStyles = makeStyles((theme) => ({
root: {
  width:"100%",
  color:"white"
},
textField: {
  marginRight: theme.spacing(5),
  color:"white",
},
}));
const theme = createMuiTheme({
  palette: {
    primary: {
       main: '#ffffff'
    },
  },
});