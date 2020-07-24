const stateItems = [true,false,false]

const handleClick = () => {
  alert('teste')
}

const createStyle = (css) => {
  const head = document.querySelector('head')
  const style = `
    <style>
      ${css}
    </style>
  `
  head.insertAdjacentHTML('beforeend', style)
}

const Action = (css, content = '') => {
  createStyle(css)
  return (
    `<li class="action">${content}</li>`
  )
}

const Item = (css, content = '') => (
    `<li style="${css}" onClick="handleClick()">${content}</li>`
)

const Slide = (css, content) => (
  `<ul style="${css}">${content}</ul>`
)

const action = Action`
  .action {
    position: absolute;
    list-style: none;
    cursor: move;
    left: 5px;
    width: calc(var(--line-height) * 4);
    height: calc(var(--line-height) * 4);
    background-color: var(--action-color);
  }
`

const item = Item`
  list-style: none;
  width: calc(var(--line-height) * 3);
  height: calc(var(--line-height) * 3);
  background-color: var(--happy-color);
`

const itemActive = Item`
  list-style: none;
  width: calc(var(--line-height) * 5);
  height: calc(var(--line-height) * 5);
  background-color: var(--happy-color);
`

const showItems = () => {
  return stateItems.map(state => {
    return state ? itemActive : item
  }).join(' ')
}

const slide = Slide`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: var(--line-height);
  background-color: var(--happy-color);
  margin-top: auto;
  ${action + showItems()}
`