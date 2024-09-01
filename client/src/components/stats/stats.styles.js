import styled from "styled-components";

export const StatContainer = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    background-color: rgb(49, 55, 145);
    color: antiquewhite;

    @media screen and (max-width: 992px){
        max-width: 960px;
    }

    @media screen and (min-width: 768px){
        max-width: 720px;
    }
    
    @media screen and (min-width: 5676px){
        max-width: 540px;
    }
`;

export const StatText = styled.h3`
    margin-top: 1.5rem !important;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    color: aquamarine;

    @media screen and (max-width: 992px){
        margin-left: 5%;
        flex: 0 0 66.6666666667%;
    }
`;