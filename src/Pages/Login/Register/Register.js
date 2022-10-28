import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import UseTitle from '../../../hooks/UseTitle';

const Register = () => {
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)

    UseTitle('Register')

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setError('')
                handleUpdateUserProfile(name, photo)
                handleEmailVerification();
                toast.success('Please verify Your Email')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

    }

    const handleUpdateUserProfile = (name, photo) => {
        const profile = {
            displayName: name, 
            photoURL: photo

        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error))
    }

    const handleEmailVerification = () => {
        verifyEmail()
        .then(() => {})
        .catch(error => console.error(error))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control name='photo' type="text" placeholder="Photo Url" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accept <Link to='/terms'> Terms and Condition</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>

            <Form.Text className="text-danger">
                {error && <p>{error}</p>}
            </Form.Text>

        </Form>
    );
};

export default Register;