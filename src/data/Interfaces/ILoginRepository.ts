import { MessageInfoDTO } from "../DTOs/MessageInfoDTO";
import { User, UserLogin } from "../Entities/UserLogin";

export interface ILoginRepository {
    validateTokenAsync(token: string): Promise<MessageInfoDTO>;
    loginAsync(user:UserLogin): Promise<User>;
    refreshTokenAsync(token: string): Promise<User>;
}