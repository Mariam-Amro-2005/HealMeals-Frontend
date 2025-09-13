import "../css/forms.css"

function InputField(props) {
    const { label, type, value, onChange } = props;
    return <>
    <div className="input-field-container">
        <label>{label ? label : "Default Label"}</label>
        <input type={type ? type : "text"} value={value ? value : ""} onChange={onChange} />
    </div>
    </>
}

export default InputField;