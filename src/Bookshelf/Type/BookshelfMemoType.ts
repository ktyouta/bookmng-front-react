// 本棚メモの型
export type BookshelfMemoType = {
    readonly userId: number,
    readonly bookId: string,
    readonly seq: number,
    memo: string,
    readonly createDate: string,
    updateDate: string,
}