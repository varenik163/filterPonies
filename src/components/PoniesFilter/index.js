import React, {Component} from 'react'
import {connect} from 'react-redux'
import {generateRandomKey} from "../../helpers";

class PoniesFilter extends Component {

    constructor(props) {
        super(props)

        const {defaultState} = props
        const {color, kind, is_new, priceFrom, priceTo} = defaultState

        this.state = {
            selectedColor: color ? color : ''  ,
            selectedType: kind ? kind : '',
            is_new: is_new ? is_new : false,
            priceFrom: priceFrom ? priceFrom : '',
            priceTo: priceTo ? priceTo : ''
        }
    }

    render() {
        const {colors, types} = this.props
        const {selectedType, selectedColor, is_new, priceFrom, priceTo} = this.state
        console.log(this.state)
        const colorsTemplate = colors ? colors.map(elem => <option value={elem} key={generateRandomKey()}>
            {elem}
        </option>) : ''
        const typesTemplate = types ? types.map(elem => <option value={elem} key={generateRandomKey()}>
            {elem}
        </option>) : ''

        return <form onSubmit={this.handleSubmit}>
            <label>Цвет</label>
            <select onChange={this.handleColor} value={selectedColor}>
                <option value="">Любой</option>
                {colorsTemplate}
            </select>
            <br/>
            <label>Вид</label>
            <select onChange={this.handleType} value={selectedType}>
                <option value="">Любой</option>
                {typesTemplate}
            </select>
            <br/>
            <label>Цена от</label>
            <input type="text" onChange={this.handlePriceFrom} value={priceFrom} />
            <br/>
            <label>Цена до</label>
            <input type="text" onChange={this.handlePriceTo} value={priceTo} />
            <br/>
            <label>Новые</label>
            <input type="checkbox" checked={is_new} onChange={this.handleCheckBox} />
            <button>Найти</button>
        </form>
    }

    handlePriceFrom = ev => {
        const value = ev.target.value

        this.setState({priceFrom: value && !isNaN(value) ? parseFloat(value) : ''})
    }

    handlePriceTo = ev => {
        const value = ev.target.value

        this.setState({priceTo: value && !isNaN(value) ? parseFloat(value) : ''})
    }

    handleColor = ev => {
        this.setState({selectedColor: ev.target.value})
    }

    handleType = ev => {
        this.setState({selectedType: ev.target.value})
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const {selectedType, selectedColor, is_new, priceFrom, priceTo} = this.state

        this.props.submitCallback([selectedType, selectedColor, is_new, priceFrom, priceTo])
    }

    handleCheckBox = ev => {
        this.setState({is_new: !this.state.is_new})
    }
}

export default PoniesFilter