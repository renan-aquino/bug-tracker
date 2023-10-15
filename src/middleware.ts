import { NextRequest, NextResponse } from "next/server";

export function middleware(req : NextRequest){
    // let verify = req.headers.get('Authorization')
    let verify = req.cookies.get('authapi.token')
    let url = req.url

    if(!verify && url.includes('/tickets')){
        return NextResponse.redirect('http://localhost:3000')
    }

    
    if(verify && url == 'http://localhost:3000/') {
        console.log('hi')
        return NextResponse.redirect('http://localhost:3000/tickets')
    }

    return NextResponse.next()
}