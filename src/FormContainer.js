import React, { Component } from 'react'
import FormComponent from './FormComponent'

class FormContainer extends Component {

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
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
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
            <FormComponent data={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        )
    }
}

export default FormContainer