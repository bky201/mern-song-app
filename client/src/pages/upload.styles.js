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
`;

export const UploadContainer = styled.div`
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
