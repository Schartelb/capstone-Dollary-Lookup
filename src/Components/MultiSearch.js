import React, { useState } from "react";
// import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import DollaryApi from "../api";

const MultiSearch = () => {
    const [formData, setFormData] = useState()
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        console.log('submitted')
        DollaryApi.multiCall(formData.cardList)
        // history.push('/checked')
    }
    return (
                    <form onSubmit={handleSubmit}>
                        <label className="input" htmlFor="cardList">Card Names: </label>
                        <textarea
                            type='text'
                            id="cardList"
                            name="cardList"
                            onChange={handleChange}
                            placeholder="One Card per Line"
                        />
                        <input type="submit" value="Search"/>
                    </form>
    )
}
export default MultiSearch