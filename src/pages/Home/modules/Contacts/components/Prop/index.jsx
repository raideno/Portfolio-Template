import './style.css';

export function Prop({ title, value }) {

    const CPrefix = "Page-Contacts-Component-Prop";

    return (
        <div className={CPrefix}>
            <div className={CPrefix + '-title'}>{title}:</div>
            <div className={CPrefix + '-value'}>{value}</div>
        </div>
    )
}