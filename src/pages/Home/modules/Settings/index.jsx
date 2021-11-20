import { Component } from 'react';
import { Button } from '../../../../components';
import './style.css';

export class Settings extends Component {

    CPrefix = "Page-Settings";

    render() {
        return (
            <div className={this.CPrefix}>
                <div className={this.CPrefix + '-header'}>
                    <Button icon="fas fa-arrow-left" onClick={this.props.NavigateHome}/>
                </div>
                <div className={this.CPrefix + '-text'}>Soon... (☞ ͡° ͜ʖ ͡°)☞</div>
            </div>
        )
    }
}