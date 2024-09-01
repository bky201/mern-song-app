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

export const DashboardContainer = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 992px) {
        max-width: 860px;
    }

    @media screen and (max-width: 768px) {
            max-width: 6550px;
    }

    @media screen and (max-width: 576px) {
            max-width: 4650px;
    }
`;

export const DashboardRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;

