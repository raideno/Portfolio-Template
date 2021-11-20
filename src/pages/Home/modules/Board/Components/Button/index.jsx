import './style.css';

export function Button({ text, icon, onClick }) {

    return (
        <div class="button" onClick={onClick}>
            <a><i class={icon}/> {text}</a>
        </div>
    )
}