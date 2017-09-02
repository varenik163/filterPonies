import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadProductsColors, loadProductsTypes, applyPoniesPageFilter} from "../../../AC/index"
import PoniesFilter from '../../PoniesFilter/index'

class PoniesPageOverlayFilter extends Component{

    componentWillMount() {
        this.props.loadProductsTypes()
        this.props.loadProductsColors()
    }

    render() {
        const {colors, types, show, poniesFilter} = this.props
        const body = show ? <div className="ponies_page ponies_page-overlay-filter">
            <div className="ponies_page ponies_page-overlay-filter-body">
                <div className="ponies_page ponies_page-overlay-filter-close">
                    <a onClick={this.props.catchClose}>Закрыть</a>
                </div>
                {colors && types ? <PoniesFilter
                    colors={colors}
                    types={types}
                    submitCallback={this.applyFilter}
                    defaultState={poniesFilter}
                /> : ''}
            </div>
        </div> : ''

        return <div>
            {body}
        </div>
    }

    applyFilter = (args) => {
        this.props.applyPoniesPageFilter(...args)
        this.props.catchClose()
    }
}

const mapStateToProps = state => {
    return {
        colors: state.productsColors,
        types: state. productsTypes,
        poniesFilter: state.poniesFilter
    }
}


export default  connect(mapStateToProps, {
    loadProductsColors,
    loadProductsTypes,
    applyPoniesPageFilter
})(PoniesPageOverlayFilter)