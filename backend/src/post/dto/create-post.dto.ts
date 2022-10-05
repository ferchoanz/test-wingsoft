import { IsString } from "class-validator";

export class CreatePostDto {

    @IsString()
    title: string;

    @IsString()
    summary: string;

    @IsString()
    content: string

    @IsString()
    author: string;
}
