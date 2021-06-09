import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "../../../styles/screens/ProblemFormScreen/ProblemTabs/ProblemTab2/ProblemTab2.scss";
import {  TextField,
          TextareaAutosize,
          MenuItem } from '@material-ui/core';
import CodeEditor from "../../CodeEditor/CodeEditor";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

export default function ProblemTab2({problemInfo,handleProblemInfo,template,setTemplate}) {
  const classes = useStyles();
  // languages: python text/x-java
  var languageCode="text/x-java"
  const languages = [
    {
      value: 'text/x-java"',
      label: 'Java',
    },
    {
      value: 'python',
      label: 'Python',
    },
  ];
  
  
  const onChange = e =>{
    if(e.target==undefined) return
    handleProblemInfo({
        ...problemInfo,
        [e.target.name]:e.target.value
    })
  }

  return (
        <div className={classes.root}>
      
          <div id="TextFieldBox__Tab2" >
            <ThemeProvider theme={theme}>
                <TextField
                  id="SelectField__Tab2"
                  select
                  label="Lenguaje"
                  className={classes.textField}
                  onChange={onChange}
                  name="language"
                  value={problemInfo.language}
                  >
                  {languages.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </ThemeProvider>
          </div>
          <div id="CodeEditorBox__Tab2">
            <InputLabel id="TemplateLabel__Tab2" style={{color:"white",marginBottom:"1rem"}} htmlFor="template">Template</InputLabel>
            <CodeEditor
              id="CodeEditor__Tab2"
              className="CodeEditorBox"
              name='solutionCode'
              value={template}
              language={languageCode}
              onChange={setTemplate}
              />
          </div>
        </div>
      
);}

const useStyles = makeStyles((theme) => ({
root: {
  width:"100%",
  color:"white"
},
textField: {
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