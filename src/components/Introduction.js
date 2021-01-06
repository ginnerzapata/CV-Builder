import React, { useState } from 'react'
import IntroductionForm from './IntroductionForm'

function Introduction() {
    const [state, setState] = useState({
        name: 'Ginner Zapata',
        bio: "i'm a Frontend Developer and Graphic Designer",
        isEditing: false,
    })

    function handleIsEditing() {
        setState({ ...state, isEditing: !state.isEditing })
    }

    function handleOnChange(propName, value) {
        setState({ ...state, [propName]: value })
        console.log(state[propName])
    }

    function handleSubmit(e) {
        e.preventDefault()
        setState({ ...state, isEditing: false })
    }

    const { name, bio } = state
    return (
        <section>
            <h2 className="section-title">Introduction</h2>
            {!state.isEditing ? (
                <div className="row">
                    <div className="twelve column">
                        <h1>Hello, I'm {name}</h1>
                        <p className="description">{bio}</p>
                        <button
                            className="button-primary"
                            onClick={handleIsEditing}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            ) : (
                <IntroductionForm
                    {...state}
                    onSubmit={handleSubmit}
                    handleIsEditing={handleIsEditing}
                    handleOnChange={handleOnChange}
                />
            )}
        </section>
    )
}
export default Introduction
