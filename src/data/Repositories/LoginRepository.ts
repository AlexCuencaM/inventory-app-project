import { jwtDecode } from "jwt-decode";
import { JWTRequest } from "../DTOs/JWTRequest";
import { MessageInfoDTO } from "../DTOs/MessageInfoDTO";
import { UserLoginRequest } from "../DTOs/UserLoginRequest";
import { User, UserLogin } from "../Entities/UserLogin";
import { Post } from "../HttpClient/ClientMethods";
import { ILoginRepository } from "../Interfaces/ILoginRepository";
import { JWTResponse } from "../DTOs/JWTResponse";

export const LoginRepository: ILoginRepository = {
    validateTokenAsync: function (token: string): Promise<MessageInfoDTO> {
        throw new Error("Function not implemented.");
    },
    loginAsync: async function (user: UserLogin): Promise<User> {
        try{
            const res = await Post<JWTRequest>("Login/login", user as UserLoginRequest);
            const tokenDecoded = jwtDecode<JWTResponse>(res.Token);
            const userLogged: User = {
                Name: tokenDecoded.username,
                Role: tokenDecoded.rol
            };
            return userLogged;
        }
        catch(e){
            throw e;
        }
    },
    refreshTokenAsync: function (token: string): Promise<User> {
        throw new Error("Function not implemented.");
    }
}