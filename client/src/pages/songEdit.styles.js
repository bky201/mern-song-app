import styled from "styled-components";

export const TitleContainer = styled.h1`
    color: #f8f9fa !important;
    padding: 3rem !important;
    background-color: #78C2AD !important;
    font-size: 200%;
    font-weight: 300;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0.5rem;
    display: block;
    font-family: "Montserrat", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
`
export const EditContainer = styled.div`
    margin-top: 0.5rem !important;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media screen and (min-width: 992px) {
        max-width: 860px;
    }

    @media screen and (min-width: 768px) {
            max-width: 690px;
    }

    @media screen and (min-width: 576px) {
            max-width: 510px;
    }
`;

export const FormContainer = styled.input`
    margin-bottom: 1rem !important;
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #5a5a5a;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.4rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
`;

export const EditButton = styled.button`
    color: #fff;
    margin-bottom: 3rem !important;
    background-color: #78C2AD;
    border-color: #78C2AD;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.4rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    
    ${({song}) => song && "disabled" }

    &:hover {
    color: #fff;
    }
`;



