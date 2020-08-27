import React from 'react'
import MoneyExchangeInfo from './components/MoneyExchangeInfo'
import MoneyExchangeArea from './components/MoneyExchangeArea'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: true,
      name1: '',
      name2: '',
      ratio: '',
      value1: '',
      value2: '',
    }

    this.handleInfoOK = this.handleInfoOK.bind(this)
    this.handleInfoEdit = this.handleInfoEdit.bind(this)
    this.handleMoneyChange = this.handleMoneyChange.bind(this)
  }

  handleInfoOK(name1, name2, ratio) {
    this.setState({
      isEdit: false,
      name1,
      name2,
			ratio,
			value1: '',
			value2: ''
    })
  }

  handleInfoEdit() {
    this.setState({
      isEdit: true,
    })
  }

  handleMoneyChange(isLeft, e) {
    let anotherValue
    const value = parseFloat(e.target.value)
		const { ratio } = this.state

    if (isLeft) {
      anotherValue = Number.isNaN(value) ? '' : value / ratio
      this.setState({
        value1: Number.isNaN(value) ? e.target.value : value,
        value2: anotherValue,
      })
    } else {
      anotherValue = Number.isNaN(value) ? '' : value * ratio
      this.setState({
        value1: anotherValue,
        value2: Number.isNaN(value) ? e.target.value : value,
      })
    }
  }

  render() {
    const { isEdit, name1, name2, value1, value2, ratio } = this.state

    return (
      <div>
        <MoneyExchangeInfo
          isEdit={isEdit}
          data={{
            name1: name1,
            name2: name2,
            ratio: ratio,
          }}
          onOK={this.handleInfoOK}
          onEdit={this.handleInfoEdit}
        />
        {isEdit ? null : (
          <MoneyExchangeArea
            name1={name1}
            name2={name2}
            value1={value1}
            value2={value2}
            onMoneyChange={this.handleMoneyChange}
          />
        )}
      </div>
    )
  }
}

export default App
