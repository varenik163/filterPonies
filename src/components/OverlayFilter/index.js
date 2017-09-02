import React, {Component} from 'react'
import {connect} from 'react-redux'
import {generateRandomKey} from "../../helpers";

class OverlayFilter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedColor:  '',
            selectedType: '',
            is_new: false,
            price: ''
        }
    }

    render() {
        const {colors, types} = this.props
        const {selectedType, selectedColor, is_new} = this.state
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
            <label>Новые</label>
            <input type="checkbox" checked={is_new} onClick={this.handleCheckBox} />
            <button>Найти</button>
        </form>
    }

    handleColor = ev => {
        this.setState({selectedColor: ev.target.value})
    }

    handleType = ev => {
        this.setState({selectedType: ev.target.value})
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const {selectedType, selectedColor, is_new} = this.state

        this.props.submitCallback([selectedType, selectedColor,is_new])
    }

    handleCheckBox = ev => {
        this.setState({is_new: !this.state.is_new})
    }
}

export default OverlayFilter