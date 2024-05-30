import {IsEmail, IsString, Length, Matches} from "class-validator";
import {BeforeInsert} from "typeorm";

export class CreateUserDto {
    @IsEmail()
    @Length(4, 300)
    email: string;

    @Length(6, 300)
    password: string;

    // @IsString()
    // @Length(5, 300)
    // userName: string;
    //
}
