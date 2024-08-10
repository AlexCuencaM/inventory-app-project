import { MessageInfoDTO } from "../DTOs/MessageInfoDTO";
export interface ICrudRepository<T> {
    CreateAsync(newRecord: T): Promise<MessageInfoDTO>;
    DeleteAsync(id: number): Promise<MessageInfoDTO>;
    GetAllAsync(): Promise<T[]>;
    GetByIdAsync(id:number): Promise<T>;
    GetByCriteria(criteria:string): Promise<T>;
    UpdateAsync(newRecord: T): Promise<MessageInfoDTO>;
}