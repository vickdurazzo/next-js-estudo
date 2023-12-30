import nookies from 'nookies';
import { tokenService } from '../src/services/auth/tokenService';

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

export async function getServerSideProps(context) {
    
    const cookies = nookies.get(context)
    console.log('cookies',cookies);
    return {
        props: {
            token:tokenService.get(context),
        },
    }
}
