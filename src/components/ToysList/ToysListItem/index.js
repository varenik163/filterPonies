import React from 'react'

function ToysListItem(props) {

    const {data} = props

    return <div className="toys-list-item">
        <strong>{data.name}</strong>
        <br/>
        <div className="toys-list-item toys-list-item-desc">
            <small>{data.price}$</small>
            <small>{data.color}</small>
            <small>{data.kind}</small>
            <small>{data.is_new ? 'Новый' : ''}</small>
        </div>
    </div>
}

export default ToysListItem