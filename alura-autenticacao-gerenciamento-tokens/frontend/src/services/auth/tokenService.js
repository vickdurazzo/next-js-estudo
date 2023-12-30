import nookies from 'nookies';
const ACESS_TOKEN_KEY = 'ACESS_TOKEN_KEY';

const ONE_SECOND = 1;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_YEAR = ONE_DAY * 365;

export const tokenService = {
    save(acessToken,context=null) {
        
        globalThis?.localStorage.setItem(ACESS_TOKEN_KEY, acessToken);
        globalThis?.sessionStorage.setItem(ACESS_TOKEN_KEY, acessToken);
        nookies.set(context, ACESS_TOKEN_KEY, acessToken, { 
            maxAge: ONE_YEAR, 
            path: '/' });

    },
    get(context=null) {
        const cookies = nookies.get(context);
        return cookies[ACESS_TOKEN_KEY] || '';
        //return globalThis?.localStorage?.getItem(ACESS_TOKEN_KEY);
    },
    delete(context = null) {
        globalThis?.localStorage.removeItem(ACESS_TOKEN_KEY);
        globalThis?.sessionStorage.removeItem(ACESS_TOKEN_KEY);
        nookies.destroy(context, ACESS_TOKEN_KEY);
    }
}