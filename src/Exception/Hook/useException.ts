import { useNavigate } from "react-router-dom";
import { useErrorBoundary } from "react-error-boundary";
import { ROUTER_PATH } from "../../Common/Const/RouterPath";

export function useException() {

    // ルーティング用
    const navigate = useNavigate();
    // ErrorBoundaryリセット用
    const { resetBoundary } = useErrorBoundary();

    /**
     * ホームに戻る
     */
    function backHome() {
        resetBoundary();
        navigate(`${ROUTER_PATH.HOME}`);
    }

    return {
        backHome
    };
}