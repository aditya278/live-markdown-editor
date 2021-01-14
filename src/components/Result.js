import React, {useContext} from 'react'
import {Container, ResultArea, SubTitle} from '../styles/StyledComps';
import ReactMarkdown from 'react-markdown';

import EditorContext from "../editorContext";

const Result = () => {

    const { markdownText } = useContext(EditorContext);
    
    return (
        <Container>
            <SubTitle>
                Converted Text
            </SubTitle>
            <ResultArea>
                <ReactMarkdown source={markdownText} />
            </ResultArea>
        </Container>
    )
}


export default Result
