import React, {useContext} from 'react'
import {Container, TextArea, SubTitle} from '../styles/StyledComps';

//Import React Context
import EditorContext from "../editorContext";

const MarkedInput = () => {
    
    const { setMarkdownText } = useContext(EditorContext);

    const onInputChange = (e) => {
        const newValue = e.currentTarget.value;
        setMarkdownText(newValue);
    }

    return (
        <Container>
            <SubTitle>
                Markdown Text
            </SubTitle>
            <TextArea onChange={onInputChange} />
        </Container>
    )
}

export default MarkedInput
