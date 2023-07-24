import { connect } from "@/db/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import ImageModel from "@/models/imageModel";
import { NextRequest, NextResponse } from "next/server";


interface imageString  {
    created_at: string,  
    format: string, 
    height: string, 
    width: string, 
    original_filename: string, 
    public_id: string, 
    tags: string
}


connect()
export async function POST(req: NextRequest) {
    console.log(getDataFromToken(req))

    try {

        const { created_at, format, height, width, original_filename, public_id, tags }:imageString = await req.json()
        const regexPattern = /\s+/g;
        const ans = tags.replace(regexPattern, " ");
        const tagsArr = ans.split(' ')
        const newImage = new ImageModel({ 
            user_id :getDataFromToken(req), 
            created_at, 
            format, 
            height, 
            width, 
            original_filename, 
            public_id, 
            tags:JSON.stringify(tagsArr) })
        newImage.save()
        return NextResponse.json({message:"image added to the database",data:newImage},{status:201})
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 400 })
    }
}