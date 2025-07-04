import './second-menu.scss'

type SecondMenu = {
  activeSecond: () => void
  activeThird: () => void
}

export default function SecondMenu({ activeSecond, activeThird }: SecondMenu) {
  return (
    <div className="header__second-menu">
      <button type="button" onClick={activeSecond}>
        Prev
      </button>
      <h1>Каталог</h1>
      <ul>
        <li>
          <button type="button" onClick={activeThird}>
            Смартфоны и гаджеты
          </button>
        </li>
        <li>
          <button type="button">Ноутбуки и компьютеры</button>
        </li>
        <li>
          <button type="button">Телевизоры и цифровое ТВ</button>
        </li>
        <li>
          <button type="button">Аудиотехника</button>
        </li>
        <li>
          <button type="button">Акции</button>
        </li>
        <li>
          <button type="button">Новинки</button>
        </li>
      </ul>
    </div>
  )
}
