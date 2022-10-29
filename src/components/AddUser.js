import React, { useState, useContext } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";

export const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const[address,setAddress]=useState("");
    const[contact,setContact]=useState("");
    const[major,setMajor]=useState("");
    const { addUser } = useContext(GlobalContext);
    const history = useHistory();
    // const onChange = (e) => {
    //     setName(e.target.value);
    // };
    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            name,
            email,
            address,
            contact,
            major
        };
        addUser(newUser);
        history.push("/");
    };

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <h2 style={{ color: "midnightblue" }}> Add Student Details</h2>
                <Label>Name</Label>
                <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                ></Input>
                <Label>Email</Label>
                
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                ></Input>
                <Label>Address</Label>
                <Input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                ></Input>
                <Label>Contacts</Label>
                <Input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Phone Number"
                ></Input>
                <Label>Major</Label>
                <Input
                    type="text"
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    placeholder="Major"
                ></Input>
                <Label/>
            </FormGroup>
            <Button type="submit" color="success">Submit</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/" className="btn btn-danger m-1">
                Cancel
            </Link>
        </Form>
    );
};
