import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

export async function GET() {
 
    const timestamp = (Math.round((new Date()).getTime() / 1000))
     const apiSecret = process.env.CLOUDINRY_API_SECRETKEY!;

    try {
        const signature = cloudinary.utils.api_sign_request(
            // @ts-ignore
            timestamp,
            apiSecret,
        );
        return NextResponse.json({ signature, timestamp });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });
    }
}
