import './second-menu.scss'

export default function SecondMenu() {
  return (
    <div className="header__second-menu">
      <h1>Каталог</h1>
      <ul>
        <li>
          <button type="button">Смартфоны и гаджеты</button>
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
