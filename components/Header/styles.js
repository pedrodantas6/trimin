import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: white;
    border-bottom: 1px solid #dadce0;
`;

export const Content = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
`;

export const LogotipoContainer = styled.div`
    display: block;
`;

export const Logotipo = styled.div`
    font-family: Arial;
`;

export const OptionsContainer = styled.div`
    display: flex;
    align-items: center;
`;
