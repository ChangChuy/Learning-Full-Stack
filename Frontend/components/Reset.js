import Form from "./styles/Form";
import useForm from '../lib/useForm';
import {gql, useMutation} from '@apollo/client';
import { CURRENT_USER_QUERY } from "./User";
import Error from './ErrorMessage';

const RESET_MUTATION = gql`
    mutation RESET_MUTATION ($password: String!, $token: String!,$email: String!) {
        redeemUserPasswordResetToken(email: $email, token: $token, password: $password){
            message
            code
        }
    }
`;

export default function Reset({token}){
    
    const {inputs, handleChange, resetForm} = useForm({
        email: '',
        password: '',
        token,
    });

    const [reset, { data, loading, error}] = useMutation(RESET_MUTATION
    ,{
        variables: inputs,
    });

    const sucessfulError = data?.redeemUserPasswordResetToken?.code ? data?.redeemUserPasswordResetToken : undefined;
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs);
        // send the email and password to the graphql
        const res = await reset().catch(console.error);
        console.log({data, loading, error});
        resetForm();
    };
     
  return (
    <Form method="POST" onSubmit={handleSubmit}>
        <h2>Reset Your Password</h2>
        <Error error={ error || sucessfulError} />
        <fieldset>
            {data?.redeemUserPasswordResetToken === null && (<p>Success! you can now sign in !</p>)}
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
            <button type="submit">Reset Password</button>
        </fieldset>
    </Form>
  );
}
