export type User = {
    Name: string;
    Role: string;
    Token: string;
    IsLogged: boolean;
};
export type UserLogin = {
    Username: string;
    Password: string;
}