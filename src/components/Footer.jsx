import styled from "styled-components";

const Foot = styled.footer`
  background:#111;
  color:white;
  text-align:center;
  padding:60px 40px;
  
  h3 {
    font-size:24px;
    font-weight:700;
    margin-bottom:12px;
  }
  
  p {
    color:#aaa;
    font-size:15px;
  }
`;

const Footer = () => {
  return (
    <Foot>
      <h3>TATTVAMPAY</h3>
      <p>Simple payment solutions for modern businesses.</p>
    </Foot>
  );
};

export default Footer;