import {IsNotEmpty, IsNumber, IsOptional, MIN, MinLength} from "class-validator";
import {CategoryEntity} from "../../category/entities/category.entity";
import {User} from "../../user/entities/user.entity";

export class CreateTransactionDto {
    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    @IsNumber()
    amount: number


    @IsNotEmpty()
    @MinLength(6)
    type: 'expect' | 'income'

    @IsNotEmpty()
    category: CategoryEntity
    @IsNotEmpty()
    user: User
}
