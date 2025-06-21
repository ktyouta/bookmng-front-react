import type { ReadStatusType } from "./ReadStatusType";

export type ReadStatusResponseType = {

    readonly status: number,
    readonly message: string,
    readonly data: ReadStatusType[],
}