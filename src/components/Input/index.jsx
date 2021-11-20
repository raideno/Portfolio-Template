import './style.css';

export function Input({ placeholder, setValue }) {

    const CPrefix = "Component-Input";

    return (
        <div className={CPrefix}>
            <input className={CPrefix + '-input'} onChange={({ target }) => setValue(target.value)} placeholder={placeholder} type="text"/>
        </div>
    )
}