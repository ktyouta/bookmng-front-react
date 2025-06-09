// bookmng-apiに登録されたお気に入り書籍情報
export type BookshelfBookTransactionType = {
    readonly userId: number,
    readonly bookId: string,
}