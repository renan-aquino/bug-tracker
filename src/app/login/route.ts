import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'
 
export async function GET(req: NextRequest) {
    const token = cookies().get('authapi.token')    

    return new Response(JSON.stringify({ token }), {
      status: 200,
      headers: { 'Authorization': `Bearer ${token.value}`},
    });
}

export async function POST(req: Request) {
    const { token, user } = await req.json()
    cookies().set('authapi.token', token)
    cookies().set('name', user.name)
    console.log(token)
    console.log(user.name)

    if(token) {
      return new Response(JSON.stringify('success'), { status: 200 });
    } else {
      return new Response(JSON.stringify('failed'), { status: 403 })
    }

}

