import { Component } from 'react';
import { Project } from './Components';
import { Button } from '../../../../components'
import './style.css';

export class Projects extends Component {

    CPrefix = "Page-Projects";

    render() {
        return (
            <div className={this.CPrefix}>
                <div className={this.CPrefix + '-header'}>
                    <Button icon="fas fa-arrow-left" onClick={this.props.NavigateHome}/>
                    <Button icon="fas fa-external-link-alt" onClick={() => window.open("https://github.com/Raiden-56", '_blank')}/>
                </div>
                <div className={this.CPrefix+ '-container'}>
                    {new Array(2).fill(0).map((v, i) => {
                        return <Project text="Empty !" icon="fas fa-folder-open" />
                    })}
                </div>
            </div>
        )
    }
}