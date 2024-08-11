import { MessageInfoDTO } from "../DTOs/MessageInfoDTO";
export interface ICrudRepository<T> extends IGetRepository<T> {
    CreateAsync(newRecord: T): Promise<MessageInfoDTO>;
    DeleteAsync(id: number): Promise<MessageInfoDTO>;
    GetByCriteria(criteria:string): Promise<T>;
    UpdateAsync(newRecord: T): Promise<MessageInfoDTO>;
}

export interface IGetRepository<T> {
    GetAllAsync(): Promise<T[]>;
    GetByIdAsync(id:number): Promise<T>;
}