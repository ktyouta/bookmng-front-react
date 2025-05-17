// ユーザーパスワード更新リクエスト
export type UpdateUserPasswordRequestType = {
    currentPassword: string,
    newPassword: string,
    confirmPassword: string,
}