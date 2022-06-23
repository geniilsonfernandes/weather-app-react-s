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
      if (!modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", outSideClick);
    return () => {
      window.removeEventListener("click", outSideClick);
    };
  }, []);

  return (
    <S.Wrapper ref={modalRef}>
      <S.Menu aria-label="menu">
        <S.Link onClick={() => handleClick()}>
          <S.Place>La Plata, Argentina</S.Place> <FiChevronDown />
        </S.Link>
      </S.Menu>
      <S.Modal aria-label="menu expanded" isOpen={isOpen}>
        <S.Tag>Recents {isOpen ? "true" : "false"}</S.Tag>
      </S.Modal>
    </S.Wrapper>
  );
};
