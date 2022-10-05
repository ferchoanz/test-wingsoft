import { IsNumber } from 'class-validator';

export class CreateVisitDto {
    @IsNumber()
    userId: number;

    @IsNumber()
    postId: number;

}