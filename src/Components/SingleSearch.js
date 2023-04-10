import React, { useState, useContext } from "react";
import { Card, CardBody } from "reactstrap";
import DollaryApi from "../api";

const SingleSearch = ({ setSingleCard }) => {
    const [formData, setFormData] = useState()
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault()
        setSingleCard(await DollaryApi.singleGet(formData.cardName))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className="input" htmlFor="cardName">Card Name: </label>
            <input
                type='text'
                id="cardName"
                name="cardName"
                onChange={handleChange}
                placeholder="Card Name"
            />
            <input type="submit" value="Search" />
        </form>
    )
}
export default SingleSearch