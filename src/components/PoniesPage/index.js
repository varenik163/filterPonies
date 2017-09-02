import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadProducts} from '../../AC'
import ToysList from '../ToysList/index'
import PoniesPageOverlayFilter from "./PoniesPageOverlayFilter/index"
import {selectPonies} from "../../selector/poniesSelector"
import "./style.css"

class PoniesPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showFilter: false
        }
    }

    componentWillMount() {
        this.props.loadProducts()
    }

    render() {
        const {productsData} = this.props
        const {showFilter} = this.state
        const productsTemplate = productsData && productsData.length ?
            <ToysList items={productsData} />
            : 'Нет подходящих пони...'

        return <div className="ponies_page">
            {productsData ? 'Показано пони: ' + productsData.length : '...'}<br/>
            <a onClick={this.handleFilterClick} >Фильтр</a>
            <PoniesPageOverlayFilter show={showFilter} catchClose={this.handleFilterClick} />
            {productsTemplate}
        </div>
    }

    handleFilterClick = ev => {
        if(ev) ev.preventDefault()
        const {showFilter} = this.state
        this.setState({showFilter: !showFilter})
    }
}

const mapStateToProps = state => {
    const productsData = state.products.data
    const products = productsData ? selectPonies(productsData, state.poniesFilter) : productsData
    return {
        productsData: products,
        poniesFilter: state.poniesFilter
    }
}

export default connect(mapStateToProps, { loadProducts })(PoniesPage)