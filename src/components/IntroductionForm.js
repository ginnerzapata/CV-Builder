import React from 'react'

function IntroductionForm(props) {
    console.log(props)
    return (
        <div className="row">
            <form onSubmit={(e) => props.onSubmit(e)}>
                <div className="row">
                    <label htmlFor="name">Full Name</label>
                    <input
                        required
                        type="text"
                        className="u-full-width"
                        id="name"
                        placeholder="Enter your full name"
                        value={props.name}
                        onChange={(e) =>
                            props.handleOnChange(e.target.id, e.target.value)
                        }
                    />
                    <label htmlFor="bio">Bio</label>
                    <textarea
                        required
                        className="u-full-width"
                        id="bio"
                        placeholder="What do you do"
                        value={props.bio}
                        onChange={(e) =>
                            props.handleOnChange(e.target.id, e.target.value)
                        }
                    />
                </div>
                <div>
                    <button className="button-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default IntroductionForm
