import { Component } from 'react';
import { Board, About, Settings, Contacts, Projects } from './modules';
import { FlushButton, CopyRight, Welcome, Button, Cloud, Moon, Sun } from './components';
import './style.css';

export class Home extends Component {

    CPrefix = "Page-Home";

    state = {
        page: null,
        state: false,
        pages: [{ name: 'about', Component: <About NavigateHome={() => this.Navigate(null)}/> }, { name: 'settings', Component: <Settings NavigateHome={() => this.Navigate(null)}/> }, { name: 'projects', Component: <Projects NavigateHome={() => this.Navigate(null)} /> }, { name: 'board', Component: <Board NavigateHome={() => this.Navigate(null)} /> }]
    }

    toggleState = () => {
        this.setState({state: !this.state.state });
    }

    Navigate = (target) => {
        if (target) {
            this.setState({ page: target })
            setTimeout(() => {
                window.scrollTo(0, document.body.scrollHeight);
            }, 125);
        } else {
            setTimeout(() => {
                this.setState({ page: target });
            }, 500);
            window.scrollTo(0, 0);
        }
    }
    
    render() {
        return (
            <>
                {this.state.page === 'contacts' ? <Contacts NavigateHome={() => this.Navigate(null)}/> : null}
                <Welcome/>
                <div className={this.CPrefix} style={{ backgroundColor: this.state.state ? 'var(--color-night)' :  'var(--color-day)' }}>
                    <div className={this.CPrefix + '-buttons'}>
                        <Button icon="fas fa-id-badge" text="Contacts"  onClick={() => this.Navigate("contacts")}/>
                        <Button icon="fas fa-info-circle" text="About Me" onClick={() => this.Navigate("about")}/>
                        <Button icon="fas fa-folder" text="My Projects" onClick={() => this.Navigate("projects")}/>
                        <Button icon="fas fa-pencil-alt" text="Leave a print" onClick={() => this.Navigate("board")}/>
                        <Button icon="fas fa-cog" text="Settings" onClick={() => this.Navigate("settings")}/>
                    </div>
                    <FlushButton {...{ state: this.state.state, toggleState: this.toggleState }}/>
                    {this.state.state ? <Moon/> : <Sun/>}
                    {new Array(6).fill(0).map((v, i) => <Cloud key={"cloud" + i} /> )}
                    <CopyRight/>
                </div>
                {this.state.pages.filter(({ name }) => this.state.page === name)[0] ? this.state.pages.filter(({ name }) => this.state.page === name)[0].Component : null}
            </>
        )
    }

}