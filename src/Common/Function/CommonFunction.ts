/**
 * オブジェクトのディープコピー
 * @param arg 
 * @returns 
 */
export function objectDeepCopy<T>(arg: T): T {
    return JSON.parse(JSON.stringify(arg));
}