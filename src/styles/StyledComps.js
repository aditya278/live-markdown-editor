import styled from 'styled-components';

export const AppContainer = styled.div`
  width : 100%;
  height : 100%;
  display : flex;
  flex-direction : column;
  aligh-items: center;
`;

export const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Container = styled.div`
    width : 50%;
    height: 100%;
    padding: 13px;
    border-right: 1.5px solid rgba(15, 15, 15, 0.5);
    font-family: "Lato", sans-serif;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
    font-size: 17px;
`;

export const ResultArea = styled.div`
    width: 100%;
    height: 100%;
    border: none;
    font-size: 17px;
`;

export const Title = styled.div`
    padding-top: 5px;
    font-size : 25px;
    font-weight: 700;
    font-family: "Lato", sans-serif;
    margin-bottom: 1em;
    text-align: center;
`;

export const SubTitle = styled.div`
    padding-top: 5px;
    font-size : 25px;
    font-weight: 700;
    font-family: "Lato", sans-serif;
    margin-bottom: 1em;
    border-bottom: 1px solid rgba(15, 15, 15, 0.3);
    text-align: center;
`;