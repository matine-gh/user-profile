import Iinput from "@/components/form/Iinput";
import IerrorMessage from "@/components/form/IerrorMessage";

export default function InputContainer(props) {

    const {formik, id} = props;
    return (
        <div className="my-12">
            <Iinput id={id} formik={formik}/>
            <IerrorMessage id={id} errormessage={formik.errors}/>
        </div>
    );
}