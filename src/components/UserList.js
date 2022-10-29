import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const UserList = () => {
    const { users, removeUser } = useContext(GlobalContext);

    return (
        <ListGroup className="mt-4">
            {users.length > 0 ? (
                <>
                    {users.map((user) => (
                        
                        <ListGroupItem className="d-flex" key={user.id}>
                            <strong>{user.name}</strong>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <strong>{user.major}</strong>
                            <div className="ms-auto">
                                <Link
                                    to={`/edit/${user.id}`}
                                    color="success"
                                    className="btn btn-success m-1"
                                >
                                    Update
                                </Link>
                                <Button
                                    onClick={() => removeUser(user.id)}
                                    color="danger"
                                >
                                    Delete
                                </Button>
                            </div>
                        </ListGroupItem>
                    ))}
                </>
            ) : (
                <h4 className="text-center">No Student Infromation</h4>
            )}
        </ListGroup>
    );
};
