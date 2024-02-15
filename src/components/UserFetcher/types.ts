import { User } from "../../pages/types";

type UserInfo = {
    seed: string;
    results: number;
    page: number;
    version: string;
}

export type ResponseType = {
    results: User[];
    info: UserInfo;
}