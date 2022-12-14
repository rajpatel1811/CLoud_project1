import React, { useState, useContext, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const EditUser = (props) => {
    const [selectedUser, setSelectedUser] = useState({
        id: "",
        name: "",
    });
    const { users, editUser } = useContext(GlobalContext);
    const history = useHistory();
    const currentUserId = props.match.params.id;

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find((user) => user.id === userId);
        setSelectedUser(selectedUser);
    }, [currentUserId, users]);

    const onChange = (e) => {
        setSelectedUser({
            ...selectedUser,
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.address]: e.target.value,
            [e.target.contact]: e.target.value,
            [e.target.major]: e.target.value,
        });
    };

    const onSubmit = () => {
        editUser(selectedUser);
        history.push("/");
    };

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input
                    type="text"
                    name="name"
                    onChange={onChange}
                    value={selectedUser.name}
                ></Input>
                <Label>Email</Label>
                <Input
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={selectedUser.email}
                ></Input>
                <Label>Address</Label>
                <Input
                    type="text"
                    name="address"
                    onChange={onChange}
                    value={selectedUser.address}
                ></Input>
                <Label>Contact</Label>
                <Input
                    type="text"
                    name="contact"
                    onChange={onChange}
                    value={selectedUser.contact}
                ></Input>
                <Label>Major</Label>
                <Input
                    type="text"
                    name="major"
                    onChange={onChange}
                    value={selectedUser.major}
                ></Input>
            </FormGroup>
            <Button type="submit">Update</Button>
            <Link to="/" className="btn btn-danger m-1">
                Cancel
            </Link>
        </Form>
    );
};
