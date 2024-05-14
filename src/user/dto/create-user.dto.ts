import {IsString, Length, Matches} from "class-validator";

export class CreateUserDto {
    @IsString()
    @Length(0, 300)
    @Matches(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)
    email: string;

    @IsString()
    @Length(0, 300)
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%_*#?&])[A-Za-z\d@$_!%*#?&]{8,}$/)
    password: string;
}
