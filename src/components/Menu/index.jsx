import React, { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import * as S from "./styles";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const outSideClick = (e) => {
      !modalRef.current.contains(e.target) && setIsOpen(false);
    };
    window.addEventListener("click", outSideClick);
    return () => {
      window.removeEventListener("click", outSideClick);
    };
  }, []);

  return (
    <S.Wrapper ref={modalRef}>
      <S.Menu aria-label="menu" aria-expanded={isOpen}>
        <S.Button onClick={() => handleClick()} isOpen={isOpen}>
          <S.Label>La Plata, Argentina</S.Label> <FiChevronDown />
        </S.Button>
      </S.Menu>
      <S.Modal aria-label="menu expanded" isOpen={isOpen} aria-hidden={!isOpen}>
        <S.Tag>Recents</S.Tag>
      </S.Modal>
    </S.Wrapper>
  );
};
