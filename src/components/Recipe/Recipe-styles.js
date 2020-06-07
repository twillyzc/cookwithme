import styled from "styled-components";

export const Paragraph = styled.p`
  color: rgba(31, 32, 65, 1);
  padding: 0 30px;
`;

export const Image = styled.div`
  background-size: cover;
  margin: 0 auto;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.src}) no-repeat center;
  background-size: cover;
  width: 90%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #fff;
  max-width: 90%;
  text-align: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    background-color: #fff;
    width: 40%;
    height: 2px;
    bottom: -10px;
  }
`;

export const Heading = styled.h3`
  padding: 20px 0;
  text-align: center;
`;
