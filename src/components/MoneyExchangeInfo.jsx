import React from 'react'

const MoneyExchangeInfo = ({ isEdit, data, onOK, onEdit }) => {
  return isEdit ? (
    <Edit {...data} onOK={onOK} />
  ) : (
    <Display {...data} onEdit={onEdit} />
  )
}

class Edit extends React.Component {
  constructor(props) {
    super(props)

    this.name1 = React.createRef() // reference
    this.name2 = React.createRef() // reference
    this.ratio = React.createRef() // reference

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const {onOK} = this.props
    const name1 = this.name1.current.value
    const name2 = this.name2.current.value
    const ratio = parseFloat(this.ratio.current.value)

    if(name1 && name2 && !Number.isNaN(ratio)) {
      onOK(name1, name2, ratio)
    }
  }

  render() {
    const { name1, name2, ratio, onOK } = this.props
    return (
      <div>
        <div>
          币种1 <input type="text" defaultValue={name1} ref={this.name1} />
        </div>
        <div>
          币种2 <input type="text" defaultValue={name2} ref={this.name2} />
        </div>
        <div>
          兑换比例 <input type="text" defaultValue={ratio} ref={this.ratio} />
        </div>
        <button onClick={this.handleClick}>确认</button>
      </div>
    )
  }
}

const Display = ({ name1, name2, ratio, onEdit }) => {
  return (
    <div>
      <h1>
        {name1}:{name2}={ratio} <button onClick={onEdit}>修改</button>
      </h1>
    </div>
  )
}

export default MoneyExchangeInfo
