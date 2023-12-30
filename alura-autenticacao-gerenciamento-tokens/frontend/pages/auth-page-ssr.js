

import { withSession } from '../src/services/auth/session';

export default function AuthPageSSR(props) {
    return (
        <div>
            <h1>
                Auth Page Server Side Render
            </h1>
            <pre>
                {JSON.stringify(props, null, 2)}
            </pre>
        </div>
    )
}






export const getServerSideProps = withSession(async (context) => {
    return {
        props: {
            session:context.req.session
        },
    }
})

/*export async function getServerSideProps(context) {
    
    try{ 
        
        console.log('imprimindo session');
        console.log(session);
        return {
            props: {
            session,
            },
        } 
    } catch (error) {
        return {
            redirect: {
                permanent: false,
                destination : '/?error=401'
            }
        }
    }
} */


