import React from "react";
import {GoPrimitiveDot} from "react-icons/go";
import {BiWorld} from "react-icons/bi";
export default function Contact () {
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comment: "",
            subscribed: false,
        }
    )
    console.log(formData)
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function submitForm (event) {
        event.preventDefault()
        console.log(formData)

        if (formData.subscribed) {
            console.log("Thank you for subscribing to my Newsletter!.")
        }

    }
    return (
        <div className="contact-pg">

            {/* <Link to="/"><TbArrowBackUp className="back-btn"  /></Link> */}
            <form onSubmit={submitForm}>
            <h2 className="contact-head">Contact Me</h2>
            <legend className="contact-el">Hi there,Reach out to me by filling this form, thank you.</legend>
                <label htmlFor="first_name">First Name </label>
                    <input 
                    id="first_name"
                    type="text"
                    placeholder="Enter Your First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                    className="inputs"
                    />
                <label htmlFor="last_name">Last Name</label>
                    <input
                    className="inputs" 
                    id="last_name"
                    type="text"
                    placeholder="Enter Your Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                    />
                <label htmlFor="email">Email</label>
                    <input
                    id="email"
                    type="email"
                    placeholder="youremail@mail.com"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    className="inputs"
                    />
                <label htmlFor="message">Message</label>
                    <textarea 
                    value={formData.comment} 
                    id="message"
                    onChange={handleChange}
                    name="comment"
                    placeholder="Leave me a message"
                    className="comment"
                    /> 
                    <input
                    type="checkbox"
                    id="subscribed"
                    name="subscribed"
                    checked={formData.subscribed}
                    onChange={handleChange}
                    className=""
                    />
                <label htmlFor="subscribed">Do you want to Subscribe to my Weekly newsletter?</label>
                    <button id="btn__submit" className="submit-btn">Submit</button>
            </form>
            <hr />
            <footer className="footer">
                <div>
                    <h4>Zuri <GoPrimitiveDot /> Internship</h4>
                </div>
                <div>
                    <p>HNG Internship 9 Front-End Task</p>
                </div>
                <div className="ingressive-sect"> 
                    <p className="world-icn"><BiWorld /></p>
                    <h4 className="world">Ingressive <br/> For Good</h4>
                </div>
            </footer>
   
        </div>
    )
}