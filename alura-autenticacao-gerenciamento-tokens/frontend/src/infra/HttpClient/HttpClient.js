export async function HttpClient(fetchurl, fetchOptions) {

    return fetch(fetchurl,{
        ...fetchOptions,
        headers: {
            'Content-Type': 'application/json',
            ...fetchOptions.headers,
        },
        body: fetchOptions.body? JSON.stringify(fetchOptions.body) : null,
    })
    .then(async (res) => 
    {
        return {
            ok : res.ok,
            body: await res.json(),
        }
        
    });
}