import './style.css';

export function Project({ text, icon, onClick }) {

    const CPrefix = "Page-Projects-Component-Project"

    return (
        <div class={CPrefix} onClick={onClick}>
            <a><i class={icon}/> {text}</a>
        </div>
    )
}