import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/themeContext';

function Button({ name, icon, onClick }) {
  const theme = useTheme();

  return (
    <ButtonStyled theme={theme} onClick={onClick}>
      <span>
        {icon}
        {name}
      </span>
      <span></span>
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  /* Common styles for both mobile and desktop */
  background-color: transparent;
  color: ${(props) => props.theme.colorWhite};
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: all 0.3s ease-in-out;

  /* Mobile styles */
  @media (max-width: 768px) {
    span:first-child {
      padding: 0.7rem 1.5rem; /* Adjust the padding for mobile */
      border-radius: 0.8rem; /* Adjust the border-radius for mobile */
    }

    span:last-child {
      left: -0.2rem; /* Adjust the position for mobile */
      width: calc(100% + 0.4rem); /* Adjust the width for mobile */
      height: calc(100% + 0.4rem); /* Adjust the height for mobile */
      border-radius: 0.8rem; /* Adjust the border-radius for mobile */
    }
  }

  /* Desktop styles */
  span:first-child {
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem 2rem;
    border-radius: 1rem;
    gap: 1rem;
    background: ${(props) => props.theme.colorBg1};
  }

  span:last-child {
    position: absolute;
    top: 50%;
    left: -0.3rem;
    transform: translateY(-50%);
    width: calc(100% + 0.6rem);
    height: calc(100% + 0.6rem);
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colorPurple},
      ${(props) => props.theme.colorGreen}
    );
    background-size: 400% 200%;
    border-radius: 1rem;
    z-index: 1;
    animation: gradient 5s ease-in-out infinite;
  }

  &:hover span:first-child {
    transition: all 0.3s ease-in-out;
    color: ${(props) => props.theme.colorGreen};
  }

  &:hover span:last-child {
    animation-play-state: paused;
  }
`;

export default Button;
