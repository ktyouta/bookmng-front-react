import { BookshelfBookTransactionType } from "./BookshelfBookTransactionType";
import { YouTubeDataApiBookDetailItemType } from "./YouTubeDataApiBookDetailItemType";

// お気に入り書籍情報と外部APIの書籍情報をマージした型
export type BookshelfBookListMergedType =
    BookshelfBookTransactionType & YouTubeDataApiBookDetailItemType;