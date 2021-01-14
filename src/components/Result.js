import React from 'react'
import {Container, ResultArea, SubTitle} from '../styles/StyledComps';
import ReactMarkdown from 'react-markdown';

const Result = () => {
    return (
        <Container>
            <SubTitle>
                Converted Text
            </SubTitle>
            <ResultArea>
                <ReactMarkdown source="# Hello" />
            </ResultArea>
        </Container>
    )
}


export default Result
