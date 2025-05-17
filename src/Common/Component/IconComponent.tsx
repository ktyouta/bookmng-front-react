import { IconType } from 'react-icons';
import { CSSProperties } from 'styled-components';

//引数の型
type propsType = {
    icon: IconType,
    onclick?: () => void,
    bgColor?: string,
    size?: string,
    style?: CSSProperties,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
}

export function IconComponent(props: propsType) {

    console.log("IconComponent render");

    const Icon = props.icon;

    return (
        <Icon
            onClick={props.onclick}
            style={{ cursor: !!props.onclick ? 'pointer' : '', color: props.bgColor ?? '', ...props.style }}
            size={props.size}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
        />
    );
}