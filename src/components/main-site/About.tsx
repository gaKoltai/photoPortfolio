import React from "react";
import styled from "styled-components";

const StyledAboutText = styled.p`
    font-size: 1.5rem;
    margin: 5rem 5rem 10rem 5rem;
    line-height: 3rem;
`;

interface Props {}

const About = (props: Props) => {
    return (
        <StyledAboutText>
            Lorem ipsum dolor sit amet, cum malis insolens reprimique no. At vis invidunt reformidans, eu repudiare
            efficiantur cum, alii nobis fastidii qui no. Duis recteque vim ad, vel at virtute suavitate expetendis.
            Integre ponderum cu sea, per ea melius molestie. Cu ius lorem concludaturque. Per justo eleifend ex. Usu
            possim percipitur ad, adhuc movet mel et, mei dico recusabo indoctum in. His impetus meliore honestatis ei,
            vel virtute imperdiet repudiare an. Duo ne cibo clita oratio, sea abhorreant inciderint liberavisse cu. Mel
            ad audiam appareat adipiscing, liber iudico periculis id vix. Te mel albucius vulputate, eos id consul
            voluptatibus. Reque iriure in ius.
        </StyledAboutText>
    );
};

export default About;
