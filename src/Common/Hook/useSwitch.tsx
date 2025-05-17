import React, { useEffect, useState } from 'react';

function useSwitch() {

    //フラグ
    const [flag, setFlag] = useState(false);

    //フラグオン
    function on() {
        setFlag(true);
    }

    //フラグオフ
    function off() {
        setFlag(false);
    }

    return { flag, on, off }
}

export default useSwitch;