import React from 'react';
import "./styles.css";
import {AppContainer, EditorContainer, Title} from './styles/StyledComps';

import MarkedInput from './components/MarkedInput';
import Result from './components/Result';

function App() {
  return (
    <AppContainer>
      <Title>
        Awesome Markdown Editor
      </Title>
      <EditorContainer>
        <MarkedInput />
        <Result />
      </EditorContainer>
    </AppContainer>
  );
}

export default App;