import { useMutation } from "@apollo/client"
import gql from "graphql-tag"
import { CURRENT_USER_QUERY } from "./User"

const SIGN_OUT_MUTATION = gql`
 mutation {
     endSessions
 }
`

export default function SignOut(){
    const [signout, {loading, error, data}] = useMutation(SIGN_OUT_MUTATION, {
        refetchQueries: [{query: CURRENT_USER_QUERY}]
    })
    return <button type="button" onClick={() => {
        console.log('Signing Out');
        signout();
    }}>Sign Out</button>
}