import Form from "./styles/Form";
import useForm from '../lib/useForm';
import {gql, useMutation} from '@apollo/client';
import { CURRENT_USER_QUERY } from "./User";
import Error from './ErrorMessage';

const SIGNUP_MUTATION = gql`
    mutation SIGNUP_MUTATION($name: String!, $email: String!, $password: String!) {
        createUser(data: {
            email: $email,
            name: $name,
            password: $password,
        }) {
            id 
            email
            name
        }
    }
`;

export default function SignUp(){
    
    const {inputs, handleChange, resetForm} = useForm({
        name: '',
        email: '',
        password: '',
    });

    const [signup, { data, loading, error}] = useMutation(SIGNUP_MUTATION,{

        variables: inputs,

    });

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs);
        // send the email and password to the graphql
        const res = await signup().catch(console.error);
        resetForm();
    };
     
  return (
    <Form method="POST" onSubmit={handleSubmit}>
        <h2>Sign Up For an Account</h2>
        <Error error={error} />
        <fieldset>
            {data?.createUser && (<p>Signed up with {data.createUser.email} - Please Go Ahead and Sign In!</p>)}
        <label htmlFor="name">
                Your Name
                <input
                    type="text"
                    name="name"
                    placeholder="Please enter your name"
                    autoComplete="name"
                    value={inputs.name}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="email">
                Email
                <input
                    type="email"
                    name="email"
                    placeholder="Please enter your email"
                    autoComplete="email"
                    value={inputs.email}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="password">
                Password
            <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="password"
                    value={inputs.password}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Sign Up!</button>
        </fieldset>
    </Form>
  );
}
