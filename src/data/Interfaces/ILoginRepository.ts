import { MessageInfoDTO } from "../DTOs/MessageInfoDTO";
import { UserState, UserLogin } from "../Entities/UserLogin";

export interface ILoginRepository {
    validateTokenAsync(token: string): Promise<MessageInfoDTO>;
    loginAsync(user:UserLogin): Promise<UserState>;
    refreshTokenAsync(token: string): Promise<UserState>;
}