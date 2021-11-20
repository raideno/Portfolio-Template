import { Component } from 'react';
import { Notation } from './components';
import { Button } from '../../../../components';
import './style.css';

export class About extends Component {

    CPrefix = "Page-About";

    render() {
        return (
            <div className={this.CPrefix}>
                <div className={this.CPrefix + '-header'}>
                    <Button icon="fas fa-arrow-left" onClick={this.props.NavigateHome}/>
                    <Button icon="fas fa-external-link-alt" onClick={() => window.open('https://github.com/Raiden-56', '_blank')}/>
                </div>
                <div className={this.CPrefix + '-text'}>My username is <span className="markdown-orange">diNaro.k</span> am from <span className="markdown-orange">Mars</span> and am 17 years old.I am a <span className="markdown-orange">Junior Web Developper</span>, I already worked and actualy working with <span className="markdown-orange">react/react-native</span>, <span className="markdown-orange">html/css</span>, <span className="markdown-orange">sql/mongoDb</span> and <span className="markdown-orange">express</span></div>
                <div className={this.CPrefix + '-text'}>I am open for any type of proposition, you can find my <span className="markdown-orange">email</span> in the contacts section !</div>
                <div className={this.CPrefix + '-text'}>Have a nice day :)</div>
                <div className={this.CPrefix + '-level'}>
                    <Notation title="Html/Css" level={4}/>
                    <Notation title="Javascript" level={6}/>
                    <Notation title="React/React-Native" level={5}/>
                    <Notation title="Express" level={4}/>
                    <Notation title="Sql/MongoDB" level={3}/>
                </div>
            </div>
        )
    }
}