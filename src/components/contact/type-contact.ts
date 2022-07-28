import { BaseEntity } from "../../utils/types";

export interface ContactI extends BaseEntity{
    name: string;
    lastName:string;
    phone: string;
}

export interface ContactItemPropsI {
    contact: ContactI;
    cb:(id: string, type: ContactActionTypeI) => void;
}

export type ContactActionTypeI = "delete"