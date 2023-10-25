import axios from "axios"

const API_URL = 'http://localhost:8080/ticket/'

export const fetchBlogPost = async () => {
    // const token =  await fetch('/login', { method: 'GET'})
    // const header = token.headers.get('Authorization')
    // const response = await axios.get(API_URL + id, { headers: { Authorization: header}})

    // return response

    let res = (await fetch('/routeTicket')).json
    // return res.json

    return new Response(JSON.stringify({ res }), {
        status: 200
        },
      );

}