import './header.scss'
import FirstMenu from '../../blocks/first-menu/first-menu'
import SecondMenu from '../../blocks/second-menu/second-menu'
import ThirdMenu from '../../blocks/third-menu/third-menu'
import FourthMenu from '../../blocks/fourth-menu/fourth-menu'
import LanguageIcon from '../../../assets/icons/language.svg?react'
import PhoneIcon from '../../../assets/icons/phone.svg?react'
import LogoIcon from '../../../assets/icons/logo.svg?react'
import { useState } from 'react'

export default function Header() {
  const [firstActiveMenu, setFirstActiveMenu] = useState(false)
  const [secondActiveMenu, setSecondActiveMenu] = useState(false)
  const [thirdActiveMenu, setThirdActiveMenu] = useState(false)
  const [fourthActiveMenu, setFourthActiveMenu] = useState(false)

  const burgerButton = document.querySelector(
    '.header__menu-burger',
  ) as HTMLElement

  function closeMenu() {
    setFirstActiveMenu(false)
    setSecondActiveMenu(false)
    setThirdActiveMenu(false)
    setFourthActiveMenu(false)

    burgerButton.style.backgroundImage =
      'url(../../src/assets/icons/burger-close.svg)'
    burgerButton.style.backgroundColor = '#4888ff'
  }

  function openFirstMenu() {
    setFirstActiveMenu(true)

    burgerButton.style.backgroundImage =
      'url(../../src/assets/icons/burger-open.svg)'
    burgerButton.style.backgroundColor = '#e8e8e8'
  }

  function toggleMenu() {
    if (
      firstActiveMenu ||
      secondActiveMenu ||
      thirdActiveMenu ||
      fourthActiveMenu
    ) {
      closeMenu()
    } else {
      openFirstMenu()
    }
  }

  function toggleSecondMenu() {
    if (!secondActiveMenu) {
      setFirstActiveMenu(false)
      setSecondActiveMenu(true)
    } else {
      setFirstActiveMenu(true)
      setSecondActiveMenu(false)
    }
  }

  function toggleThirdMenu() {
    if (!thirdActiveMenu) {
      setThirdActiveMenu(true)
      setSecondActiveMenu(false)
    } else {
      setThirdActiveMenu(false)
      setSecondActiveMenu(true)
    }
  }

  function toggleFourthMenu() {
    if (!fourthActiveMenu) {
      setFourthActiveMenu(true)
      setThirdActiveMenu(false)
    } else {
      setFourthActiveMenu(false)
      setThirdActiveMenu(true)
    }
  }

  return (
    <header className="header">
      <div className="header__info">
        <div className="header__language">
          <LanguageIcon className="header__language-icon"></LanguageIcon>
          <button className="header__language-ru" type="button">
            Ru
          </button>
          <button className="header__language-en" type="button">
            En
          </button>
        </div>
        <div>
          <PhoneIcon></PhoneIcon>
          <a href="tel:85555553750">+7 555 555-37-50</a>
        </div>
      </div>
      <div className="header__nav">
        <div className="header__menu">
          <button
            className="header__menu-burger"
            onClick={toggleMenu}
            type="button"
          ></button>
          <button className="header__menu-hunter" type="button"></button>
        </div>
        <div className="header__wrapper">
          <LogoIcon className="header__wrapper-icon"></LogoIcon>
        </div>
        <div className="header__user">
          <button className="header__favorite" type="button"></button>
          <button className="header__user-chest" type="button"></button>
          <span className="header__user-count">20</span>
        </div>
        <div className="header__search">
          <input
            className="header__search-input"
            type="text"
            placeholder="Поиск товаров..."
          ></input>
          <button className="header__search-button" type="button"></button>
        </div>
      </div>
      {firstActiveMenu && (
        <FirstMenu activeSecond={toggleSecondMenu}></FirstMenu>
      )}
      {secondActiveMenu && (
        <SecondMenu
          activeSecond={toggleSecondMenu}
          activeThird={toggleThirdMenu}
        ></SecondMenu>
      )}
      {thirdActiveMenu && (
        <ThirdMenu
          activeThird={toggleThirdMenu}
          activeFourth={toggleFourthMenu}
        ></ThirdMenu>
      )}
      {fourthActiveMenu && (
        <FourthMenu activeFourth={toggleFourthMenu}></FourthMenu>
      )}
    </header>
  )
}
