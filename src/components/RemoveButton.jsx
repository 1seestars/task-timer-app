import React from 'react'
import { connect } from 'react-redux'
import { removeItem } from '../store/actions'

const RemoveButton = ({ id, removeItem }) => {
    return(
        <button className="removeButton" onClick={() => removeItem(id)}>&times;</button>
    )
}

const mapDispatchToProps = { 
    removeItem
}

export default connect(null, mapDispatchToProps)(RemoveButton)