import styled from "styled-components";

const Foot = styled.footer`
  background:#111;
  color:white;
  text-align:center;
  padding:40px 20px;
  
  h3 {
    font-size:24px;
    margin-bottom:10px;
    color:white;
    
    span {
      color: #ff7a00;
    }
  }
  
  p {
    color:#aaa;
    font-size:15px;
  }
`;

const Footer = () => {
  return (
    <Foot>
      <h3>TATTVAM<span>PAY</span></h3>
      <p>Simple payment solutions for modern businesses.</p>
    </Foot>
  );
};

export default Footer;