import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/python/python';
import { Controlled as ControlledEditor } from 'react-codemirror2';

export default function CodeEditor({
    onChange,
    value,
    language,
    readOnly = false
}) {
    
    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    return (
        <ControlledEditor 
            onBeforeChange={handleChange}
            value={value}
            options={{
                lineWrapping: true,
                lint: true,
                mode: language,
                lineNumbers: true,
                theme: 'material',
                readOnly: readOnly
            }}
        />
    )
}
