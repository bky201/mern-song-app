import { FooterContainer, FooterText, FooterYear } from "./footer.styles";

export default function Footer() {
    return (
        <FooterContainer>
            <FooterText>Song Collection App</FooterText>
            <FooterYear>
                &copy; {new Date().getFullYear()} All Rights Reserved
            </FooterYear>
        </FooterContainer>
    );
}