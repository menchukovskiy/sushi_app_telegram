import Icons from '../icon.svg'

const SVGicon = ( props ) => {
    return (
        <svg  fill={props.color} width={props.size} height={props.size}>
            <use xlinkHref={`${Icons}#${props.name}`} />
        </svg>

    );
};

export default SVGicon;