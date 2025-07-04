import './fourth-menu.scss'

type SecondMenu = {
  activeFourth: () => void
}

export default function FourthMenu({ activeFourth }: SecondMenu) {
  return (
    <div className="header__fourth-menu">
      <button type="button" onClick={activeFourth}>
        Prev
      </button>
      <h1>Гаджеты</h1>
      <ul>
        <li>
          <button type="button">
            Смарт-часы<span>15</span>
          </button>
        </li>
        <li>
          <button type="button">
            Смарт-кольца<span>34</span>
          </button>
        </li>
        <li>
          <button type="button">
            Наушники<span>21</span>
          </button>
        </li>
        <li>
          <button type="button">
            Гарнитуры<span>12</span>
          </button>
        </li>
        <li>
          <button type="button">
            Портативное аудио<span>42</span>
          </button>
        </li>
        <li>
          <button type="button">
            Умные гаджеты<span>46</span>
          </button>
        </li>
        <li>
          <button type="button">
            Очки VR<span>49</span>
          </button>
        </li>
        <li>
          <button type="button">
            Для блогеров<span>32</span>
          </button>
        </li>
      </ul>
    </div>
  )
}
