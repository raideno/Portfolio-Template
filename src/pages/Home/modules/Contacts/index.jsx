import { Button } from '../../../../components';
import { Prop } from './components';
import './style.css';

export function Contacts({ NavigateHome }) {
    
    const CPrefix = "Page-Contacts";

    return (
        <div className={CPrefix}>
            <div className={CPrefix + '-header'}>
                <Button icon="fas fa-arrow-left" onClick={NavigateHome}/>
                <Button icon="fas fa-external-link-alt" onClick={() => window.open('https://github.com/Raiden-56', '_blank')}/>
            </div>
            <div className={CPrefix + '-card'}>
                <div className={CPrefix + '-container-1'}>
                    <div className={CPrefix + '-avatar'}>
                        <img className={CPrefix + '-image'} loading="lazy" src={"https://images-ext-1.discordapp.net/external/FPe1YGVLw4Q1MifWkUfN2SiVMdXV2I2WOEBR3KTOQCY/%3Fsize%3D512/https/cdn.discordapp.com/avatars/423897604330618883/566c677bba2b46858106b01dd3ed52cb.webp"}/>
                    </div>
                    <div className={CPrefix + '-informations'}>
                        <Prop title="Name" value="diNaro" />
                        <Prop title="Family Name" value="Raiden" />
                        <Prop title="Gender" value="Horse" />
                        <Prop title="Taille" value="4m56" />
                        <Prop title="Signature" value="𝓭𝓲𝓝𝓪𝓻𝓸𝓸.𝓴" />
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Prop title="✉️ Email" value="nadirkichou@hotmail.fr" />
                    <Prop title="Phone" value="0654126843" />
                </div>
                <div className={CPrefix + '-code'}>8864217.8197815.124</div>
            </div>
        </div>
    )
}