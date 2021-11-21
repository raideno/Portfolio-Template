import './style.css';

export function Prop({ title, value, icon }) {

    const CPrefix = "Page-Contacts-Component-Prop";

    return (
        <div className={CPrefix}>
            <div className={CPrefix + '-icon'}><i className={icon}/></div>
            <div className={CPrefix + '-title'}>{title}:</div>
            <div className={CPrefix + '-value'}>{value}</div>
        </div>
    )
}