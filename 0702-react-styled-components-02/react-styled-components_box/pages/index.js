import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import { StyledBox } from "@/components/BoxWithStyledComponents.js";

const Wrapper = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <Wrapper>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox />
      <StyledBox $isBlack />
    </Wrapper>
  );
}
