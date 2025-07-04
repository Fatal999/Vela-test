import './third-menu.scss'

type SecondMenu = {
  activeThird: () => void
  activeFourth: () => void
}

export default function ThirdMenu({ activeThird, activeFourth }: SecondMenu) {
  return (
    <div className="header__third-menu">
      <button type="button" onClick={activeThird}>
        Prev
      </button>
      <h1>Смартфоны</h1>
      <ul>
        <li>
          <button type="button">
            Apple iPhone<span>123</span>
          </button>
        </li>
        <li>
          <button type="button" onClick={activeFourth}>
            Смартфоны<span>227</span>
          </button>
        </li>
        <li>
          <button type="button">
            iPhone 16<span>120</span>
          </button>
        </li>
        <li>
          <button type="button">
            Складные<span>30</span>
          </button>
        </li>
        <li>
          <button type="button">
            realme<span>120</span>
          </button>
        </li>
        <li>
          <button type="button">
            Huawei Mate X6<span>100</span>
          </button>
        </li>
        <li>
          <button type="button">
            Кнопочные<span>23</span>
          </button>
        </li>
        <li>
          <button type="button">
            Домашние<span>17</span>
          </button>
        </li>
        <li>
          <button type="button">
            Samsung<span>27</span>
          </button>
        </li>
      </ul>
    </div>
  )
}
