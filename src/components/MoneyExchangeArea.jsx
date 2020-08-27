import React from 'react'
import { partial } from 'lodash'

const MoneyExchangeArea = ({ name1, name2, value1, value2, onMoneyChange }) => {
  return (
    <div>
      <div>
        {name1} <input value={value1} onChange={partial(onMoneyChange, true)} />
      </div>
      <div>
        {name2}{' '}
        <input value={value2} onChange={partial(onMoneyChange, false)} />
      </div>
    </div>
  )
}

export default MoneyExchangeArea
