import {Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport";
import {ExtractJwt} from "passport-jwt";
import  { ConfigService } from "@nestjs/config";
import {IUser} from "../../tupes/types";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private readonly  configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET'),
        });
    }

    async validate(user: IUser) {
        return { id: user.id, email: user.email };
    }
}
