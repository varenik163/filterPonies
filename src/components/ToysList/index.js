import React from 'react'
import './style.css'
import ToysListItem from './ToysListItem'

function ToysList(props) {

    const {items} = props
    const listTemplate = items ? items.map(elem => <ToysListItem data={elem} key={elem.id} />) : ''
    return <div>
        {listTemplate}
    </div>
}

export default ToysList