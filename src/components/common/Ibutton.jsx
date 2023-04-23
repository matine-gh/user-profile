export default function Ibutton(props) {

    const {type, text, isButtonDisable} = props;

    let buttonStyle = "bg-gradient-to-r from-primary-green to-primary-blue rounded-full h-16 font-bold " +
        "enabled:hover:shadow-primary " +
        "disabled:opacity-25 disabled:cursor-not-allowed";


    return (
        <button type={type} className={buttonStyle} disabled={isButtonDisable}>{text}</button>
    )
}