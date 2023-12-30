import { authService } from "./authService";

export function withSession(funcao){
    
    return async (context) => {
        try {
            const session = await authService.getSession(context);
            const modifiedContext = {
                ...context,
                req:{
                    ...context.req,
                    session : {
                        session
                    }
                }
            };
            return funcao(modifiedContext);
        }catch (error) {
            return {
                redirect: {
                    permanent: false,
                    destination : '/?error=401'
                }
            }
        }
        
        
       
            
        
    }
}
    