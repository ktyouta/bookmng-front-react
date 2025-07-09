// タグ更新リクエスト時のタグ情報の型
export type UpdateBookshelfTagType = {
    readonly tagId?: number,
    readonly tagName: string,
}