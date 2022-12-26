import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { UserContext } from "../context/UserContext";
import { API } from "../config/API";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
    const { id } = useParams();
    let navigate = useNavigate();

    const [state, dispatch] = useContext(UserContext);
    let { data: profile, refetch } = useQuery(["profileCache", state.user._id], async () => {
        const response = await API.get('/users');
        const responseUser = Array.isArray(response.data.data)
            ? response.data.data.filter((p) => p.user._id === state.user._id)
            : [];
        return responseUser;
    });
    console.log(profile);

    useEffect(() => {
        refetch(["profileCache", state.user._id]);
    }, [state.user._id]);

    const logout = () => {
        dispatch({
            type: "LOGOUT",
            isLogin: false
        });
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };


    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">TO DO LIST</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <p>=={state?.user?.name}</p>
                        <NavDropdown title={state?.user?.userName} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" onClick={() => logout()}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;