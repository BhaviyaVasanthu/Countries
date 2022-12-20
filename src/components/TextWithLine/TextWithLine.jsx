import './TextWithLine.css';

export default function TextWithLine(props) {
    return (
        <h4 className='textWithLine_container'>
            <span>{props.children}</span>
        </h4>
    )
}
