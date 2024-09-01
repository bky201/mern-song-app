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

export const CardContainer = styled.div`
    padding: 1.5rem !important;
    position: relative;
    width: 100%;

    @media screen and (min-width: 992px) {
        flex: 0 0 33.33%;
        max-width: 33.33%;
        -webkit-box-flex: 0;
}
`;

export const CardContent = styled.div`
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    position: relative;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.4rem;
    background-color: burlywood;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0.4rem 0.4rem 1rem rgba(0, 0, 0, 0.25) !important;
    }
`;

export const CardElement = styled.div`
    color: black;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
    -webkit-box-flex: 1;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Button = styled.button`
    margin-bottom: 0;
    color: #fff;
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
`;

