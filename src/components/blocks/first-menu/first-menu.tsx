import './first-menu.scss'

type SecondMenu = {
  activeSecond: () => void
}

export default function FirstMenu({ activeSecond }: SecondMenu) {
  return (
    <div className="header__first-menu">
      <div>
        <span>г.Москва</span>
        <span>Ежедневно 9:00 — 21:00</span>
      </div>
      <div className="header__first-menu-social">
        <button className="header__first-menu-telegram" type="button"></button>
        <button className="header__first-menu-whatsapp" type="button"></button>
      </div>
      <ul>
        <li>
          <button type="button" onClick={activeSecond}>
            Каталог
          </button>
        </li>
        <li>
          <button type="button">Акции</button>
        </li>
        <li>
          <button type="button">Горячее предложение</button>
        </li>
        <li>
          <button type="button">Подарочные наборы</button>
        </li>
        <li>
          <button type="button">События</button>
        </li>
        <li>
          <button type="button">Наши бренды</button>
        </li>
      </ul>
      <button type="button">Собрать компьютер</button>
      <ul>
        <li>
          <button type="button">Доставка</button>
        </li>
        <li>
          <button type="button">Оплата</button>
        </li>
        <li>
          <button type="button">Контакты</button>
        </li>
      </ul>
    </div>
  )
}
