import './style.css';

export function Notation({ level, title }) {

    const CPrefix = "Page-Home-Module-Component-Notation";

    return (
        <div className={CPrefix}>
            <div className={CPrefix + '-title'}>{title}:</div>
            <div className={CPrefix + '-div'}>
                {new Array(level).fill(0).map((v, i) => <i class="fas fa-hammer" key={"fas-fa-hammer-" + i}></i>)}
            </div>
        </div>
    )
}