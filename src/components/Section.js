import React, { useState } from 'react'
import SectionItem from './SectionItem'
import uniqid from 'uniqid'

function Section(props) {
    const [sectionArray, setSectionArray] = useState(props.data)

    function handleIsEditing(id) {
        setSectionArray(
            sectionArray.map((academic) => {
                if (academic.id === id) {
                    academic.isEditing = !academic.isEditing
                    console.log(academic.isEditing)
                }
                return academic
            })
        )
    }
    function handleDelete(id) {
        setSectionArray(
            sectionArray.filter((academic) => {
                if (academic.id !== id) return academic
            })
        )
    }
    function handleOnChange(id, propName, value) {
        setSectionArray(
            sectionArray.map((academic) => {
                if (academic.id === id) {
                    academic[propName] = value
                }
                return academic
            })
        )
    }

    function addNewAcademic() {
        const type = sectionArray[0].type
        setSectionArray(
            sectionArray.concat({ id: uniqid(), isEditing: true, type })
        )
    }
    return (
        <section>
            <h2 className="section-title">{props.sectionTitle}</h2>
            {sectionArray.map((academic) => (
                <SectionItem
                    key={academic.id}
                    handleIsEditing={handleIsEditing}
                    handleDelete={handleDelete}
                    handleOnChange={handleOnChange}
                    {...academic}
                />
            ))}
            <button className="button-primary" onClick={addNewAcademic}>
                Add new
            </button>
        </section>
    )
}

export default Section
