import { IsString, IsNotEmpty } from "class-validator";

export class CreatePostDto {
    
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    summary: string;

    @IsNotEmpty()
    @IsString()
    content: string

    @IsNotEmpty()
    @IsString()
    author: string;
}
