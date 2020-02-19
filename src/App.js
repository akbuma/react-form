import React, {Component} from 'react'
import './style.css'

class App extends Component {

    constructor() {
        super() 
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destination: '',
            isVegeterian: false,
            isKosher: false,
            isLactose: false,
            otherRestrictions: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target 
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    handleSubmit(event) {
        const { 
            firstName,
            lastName,
            age,
            gender,
            destination, 
            isVegeterian, 
            isKosher, 
            isLactose, 
            otherRestrictions
        } = this.state

        const restrictions = [
            isVegeterian ? 'vegeterian' : false, 
            isKosher ? 'kosher' : false, 
            isLactose ? 'lactose' : false, 
            otherRestrictions.length > 0 ? otherRestrictions : false].filter(
            restriction => restriction !== false
        )

        console.log(restrictions)

        alert("First Name: " + firstName 
        + "\nLast Name: " + lastName 
        + "\nAge: " + age 
        + "\nGender: " + gender
        + "\nDestination: " + destination
        + "\nRestriction: " + restrictions.join(', '))
        event.preventDefault()
    }

    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>

                <h1>Travel Form</h1>

                <label>First Name <br/>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                </label>

                <br/>

                <label>Last Name <br/>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                </label>

                <br/>

                <label>Age <br/>
                    <input type="number" name="age" value={this.state.age} min="1" max="120" onChange={this.handleChange} />
                </label>

                <br/>

                <p>Gender</p>
                <label>
                    <input type="radio" name="gender" value="male" onChange={this.handleChange} />
                    Male
                </label>
                <label>
                    <input type="radio" name="gender" value="female" onChange={this.handleChange} />
                    Female
                </label>

                <br/>

                <p>Destination</p>
                <label>
                    <input type="radio" name="destination" value="HNL" onChange={this.handleChange} />
                    HNL
                </label>
                <label>
                    <input type="radio" name="destination" value="LAX" onChange={this.handleChange} />
                    LAX
                </label>
                <label>
                    <input type="radio" name="destination" value="MNL" onChange={this.handleChange} />
                    MNL
                </label>

                <br/>

                <p>Dietary Restrictions</p>
                <label>
                    <input type="checkbox" name="isVegeterian" checked={this.state.isVegeterian} onChange={this.handleChange} />
                    Vegeterian
                </label>
                <br/>
                <label>
                    <input type="checkbox" name="isKosher" checked={this.state.isKosher} onChange={this.handleChange} />
                    Kosher
                </label>
                <br/>
                <label>
                    <input type="checkbox" name="isLactose" checked={this.state.isLactose} onChange={this.handleChange} />
                    Lactose
                </label>

                <br/> 
                <br/> 

                <label>
                    Other Restrictions <br/> 
                    <textarea name="otherRestrictions" value={this.state.otherRestrictions} onChange={this.handleChange} /> 
                </label>

                <br/>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

export default App 