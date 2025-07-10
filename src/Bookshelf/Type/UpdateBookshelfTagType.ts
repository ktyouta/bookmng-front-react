// タグ更新リクエスト時のタグ情報の型
export type UpdateBookshelfTagType = {
    readonly tagId: string | null,
    readonly tagName: string,
}