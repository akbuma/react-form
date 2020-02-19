import React from 'react'
import './style.css'

function FormComponent(props) {
    return (
        <form onSubmit={props.handleSubmit}>

            <h1>Travel Form</h1>

            <label>First Name <br />
                <input type="text" name="firstName" value={props.data.firstName} onChange={props.handleChange} />
            </label><br />

            <label>Last Name <br />
                <input type="text" name="lastName" value={props.data.lastName} onChange={props.handleChange} />
            </label><br />

            <label>Age <br />
                <input type="number" name="age" value={props.data.age} min="1" max="120" onChange={props.handleChange} />
            </label><br />

            <p>Gender</p>
            <label>
                <input type="radio" name="gender" value="male" onChange={props.handleChange} />
                Male
                </label>
            <label>
                <input type="radio" name="gender" value="female" onChange={props.handleChange} />
                Female
                </label><br />

            <p>Destination</p>
            <label>
                <input type="radio" name="destination" value="HNL" onChange={props.handleChange} />
                HNL
                </label>
            <label>
                <input type="radio" name="destination" value="LAX" onChange={props.handleChange} />
                LAX
                </label>
            <label>
                <input type="radio" name="destination" value="MNL" onChange={props.handleChange} />
                MNL
                </label><br />

            <p>Dietary Restrictions</p>
            <label>
                <input type="checkbox" name="isVegeterian" checked={props.data.isVegeterian} onChange={props.handleChange} />
                Vegeterian
                </label><br />

            <label>
                <input type="checkbox" name="isKosher" checked={props.data.isKosher} onChange={props.handleChange} />
                Kosher
                </label><br />

            <label>
                <input type="checkbox" name="isLactose" checked={props.data.isLactose} onChange={props.handleChange} />
                Lactose
                </label><br /><br />

            <label>
                Other Restrictions <br />
                <textarea name="otherRestrictions" value={props.data.otherRestrictions} onChange={props.handleChange} />
                </label><br />
            
            <input type="submit" value="submit" />
        </form>
    )
}

export default FormComponent