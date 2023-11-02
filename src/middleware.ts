import { NextRequest, NextResponse } from "next/server";

export function middleware(req : NextRequest, res: NextResponse){
    let verify = req.cookies.get('authapi.token')
    let url = req.url

    if(!verify && url.includes('/tickets')){
        return NextResponse.redirect(process.env.NEXT_PUBLIC_BASE_URL)
    }
    
    if(verify && url == `${process.env.NEXT_PUBLIC_BASE_URL}/`) {
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/tickets`)
    }
    
    return NextResponse.next()
}