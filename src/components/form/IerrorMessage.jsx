export default function IerrorMessage(props) {

    const {id, errormessage} = props;

    const errorStyles = "text-error my-2.5";

    return (
        <p className={errorStyles}>{errormessage[id]}</p> || null
    )
}