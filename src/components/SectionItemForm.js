import React from 'react'

function SectionItemForm(props) {
    console.log(props)
    return (
        <div className="row">
            <form>
                <div className="row">
                    <label htmlFor={props.type}>{props.type}</label>
                    <input
                        required
                        type="text"
                        className="u-full-width"
                        id={props.type}
                        name={props.type}
                        placeholder={`Enter your ${props.type} name`}
                        value={props[props.type]}
                        onChange={(e) =>
                            props.handleOnChange(
                                props.id,
                                e.target.name,
                                e.target.value
                            )
                        }
                    />
                </div>
                <div className="row">
                    <div className="six columns">
                        <label htmlFor="startDate">Start date</label>
                        <input
                            required
                            type="month"
                            name="startDate"
                            id="startDate"
                            className="u-full-width"
                            value={props.startDate}
                            onChange={(e) =>
                                props.handleOnChange(
                                    props.id,
                                    e.target.name,
                                    e.target.value
                                )
                            }
                        />
                    </div>
                    <div className="six columns">
                        <label htmlFor="endDate">End date</label>
                        <input
                            required
                            type="month"
                            name="endDate"
                            id="endDate"
                            className="u-full-width"
                            value={props.endDate}
                            onChange={(e) =>
                                props.handleOnChange(
                                    props.id,
                                    e.target.name,
                                    e.target.value
                                )
                            }
                        />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input
                        required
                        type="text"
                        className="u-full-width"
                        id="title"
                        name="title"
                        placeholder="what did you study"
                        value={props.title}
                        onChange={(e) =>
                            props.handleOnChange(
                                props.id,
                                e.target.name,
                                e.target.value
                            )
                        }
                    />
                </div>
                <div>
                    <button
                        className="button-primary"
                        onClick={() => props.handleIsEditing(props.id)}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SectionItemForm
