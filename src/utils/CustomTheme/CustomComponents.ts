import { colorresCSS } from "./variables";
import { styled } from "styled-components";

export const Wrapper = styled.div<{ $urlImgRef?: string }>`
  height: 40vh;
  background-image: ${(props) => `url(${props.$urlImgRef})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  row-gap: 1rem;
  padding: 1rem;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 20;
  }
  & > h2 {
    position: relative;
    z-index: 1000;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 1.8rem;
    color: ${colorresCSS.gray.gray_three};
  }
  & > Button {
    position: relative;
    z-index: 1000;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
  }
`;

export const NavBar = styled.nav`
  background-color: ${colorresCSS.black.black_one};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 2px solid ${colorresCSS.primary};
`;

export const Logo = styled.img`
  width: 100px;
`;

interface BotonProps {
  $colorRef: string;
  $paddingRef: string;
}

export const Boton = styled.button<BotonProps>`
  border: 1px solid transparent;
  background-color: ${(props) => props.$colorRef};
  color: white;
  font-weight: 700;
  padding: ${(props: BotonProps) => props.$paddingRef};
  border-radius: 4px;
  cursor: pointer;
`;

export const BotonNav = styled.button`
  font-size: 14px;
  color: white;
  background-color: ${colorresCSS.black.black_one};
  border: 1px solid white;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
`;
