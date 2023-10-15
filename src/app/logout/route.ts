import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    cookies().delete('authapi.token')
    cookies().delete('name')

    return NextResponse

}