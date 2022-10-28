import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const Login = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { signIn, setLoading } = useContext(AuthContext);

    const location = useLocation();
    const from = location.state?.from?.pathname || "";

    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setError('')
                if(user.emailVerified){
                    navigate(from, {replace: true})
                }
                else{
                    toast.error('your Email is in verified. Please Verify Your Email.')
                }
               
            })
            .catch(e => {
                setError(e.message)
            })
            .finally(() => {
                setLoading(false)
            })

    }

    return (
        <Form onSubmit={handleSignIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Form.Text className="text-danger">
                {error && <p>{error}</p>}
            </Form.Text>
        </Form>
    );
};

export default Login;