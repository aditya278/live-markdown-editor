import React, { useState } from "react";
import "./styles.css";
import { AppContainer, EditorContainer, Title } from "./styles/StyledComps";

//Import the two sections
import MarkedInput from "./components/MarkedInput";
import Result from "./components/Result";

//Import React Context
import EditorContext from "./editorContext";

function App() {
  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText,
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <AppContainer>
        <Title>Awesome Markdown Editor</Title>
        <EditorContainer>
          <MarkedInput />
          <Result />
        </EditorContainer>
      </AppContainer>
    </EditorContext.Provider>
  );
}

export default App;
