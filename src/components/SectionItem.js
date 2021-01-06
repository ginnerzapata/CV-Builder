import React from 'react'
import SectionItemForm from './SectionItemForm'

function SectionItem(props) {
    return !props.isEditing ? (
        <article id={props.id}>
            <h3>
                {props[props.type]} ({props.startDate} to {props.endDate})
            </h3>
            <p>{props.title}</p>
            <button
                className="button-primary"
                onClick={() => props.handleIsEditing(props.id)}
            >
                Edit
            </button>
            <button
                className="button"
                onClick={() => props.handleDelete(props.id)}
            >
                Delete
            </button>
        </article>
    ) : (
        <SectionItemForm {...props} />
    )
}

export default SectionItem
