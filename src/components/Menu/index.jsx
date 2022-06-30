import React, { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { ButtonMenu } from "./ButtonMenu";
import P from "prop-types";
import * as S from "./styles";
import { useDataContext } from "../../context/dataContext";

export const Menu = ({ currentPlace }) => {
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
  //==================//
  const { getForecastByPlace } = useDataContext();

  const [history, setHistory] = useState(() => {
    const historyPlaceLocalStringify = localStorage.getItem("history");
    const historyPlaceLocal = JSON.parse(historyPlaceLocalStringify) || [];
    return historyPlaceLocal;
  });

  const removePlaceInStorage = (value) => {
    const newListFilterd = history.filter((item) => item.name !== value);
    localStorage.setItem("history", JSON.stringify(newListFilterd));
    setHistory(newListFilterd);
  };

  const hasPlaceInStorage = (value) => {
    return history.some((item) => item.name === value);
  };

  const handleSetCurrentPlace = (value) => {
    getForecastByPlace(value);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!hasPlaceInStorage(currentPlace.name)) {
      localStorage.setItem(
        "history",
        JSON.stringify([...history, currentPlace])
      );
      setHistory([...history, currentPlace]);
    }
  }, [currentPlace]);

  return (
    <S.Wrapper ref={modalRef}>
      <S.Menu aria-label="menu" aria-expanded={isOpen}>
        <S.Button onClick={() => handleClick()} isOpen={isOpen}>
          {currentPlace.name}
          <FiChevronDown />
        </S.Button>
      </S.Menu>
      <S.Modal aria-label="menu expanded" isOpen={isOpen} aria-hidden={!isOpen}>
        <S.Tag>Recents:</S.Tag>
        <S.ModalContent>
          {history &&
            history.map((item, id) =>
              item.name !== currentPlace.name ? (
                <ButtonMenu
                  title={item.name}
                  key={id}
                  onClick={handleSetCurrentPlace}
                  toolTipOnClick={removePlaceInStorage}
                />
              ) : null
            )}
          {history.length <= 1 && <S.Span>All clear</S.Span>}
        </S.ModalContent>
      </S.Modal>
    </S.Wrapper>
  );
};

Menu.propTypes = {
  currentPlace: P.object,
};
