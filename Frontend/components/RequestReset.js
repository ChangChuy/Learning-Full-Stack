import Form from "./styles/Form";
import useForm from '../lib/useForm';
import {gql, useMutation} from '@apollo/client';
import { CURRENT_USER_QUERY } from "./User";
import Error from './ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
    mutation REQUEST_RESET_MUTATION ($email: String!) {
        sendUserPasswordResetLink(email: $email){
            message
            code
        }
    }
`;

export default function RequestReset(){
    
    const {inputs, handleChange, resetForm} = useForm({
        email: '',
    });

    const [signup, { data, loading, error}] = useMutation(REQUEST_RESET_MUTATION
    ,{
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
        <h2>Request a Password Reset</h2>
        <Error error={error} />
        <fieldset>
            {data?.sendUserPasswordResetLink === null && (<p>Success! Check your email for a link</p>)}
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
            <button type="submit">Reset Password</button>
        </fieldset>
    </Form>
  );
}
