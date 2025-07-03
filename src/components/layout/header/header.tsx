import './header.scss'
import LanguageIcon from '../../../assets/icons/language.svg?react'
import PhoneIcon from '../../../assets/icons/phone.svg?react'
import LogoIcon from '../../../assets/icons/logo.svg?react'

export default function Header() {
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
          <button className="header__menu-burger" type="button"></button>
          <button className="header__menu-hunter" type="button">
            FF
          </button>
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
    </header>
  )
}
