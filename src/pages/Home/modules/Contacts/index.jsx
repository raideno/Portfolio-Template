import { Button } from '../../../../components';
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
                        <div className={CPrefix + '-prop'}>
                            <div className={CPrefix + '-prop-title'}>Name:</div>
                            <div className={CPrefix + '-prop-value'}>diNaro</div>
                        </div>
                        <div className={CPrefix + '-prop'}>
                            <div className={CPrefix + '-prop-title'}>Family Name:</div>
                            <div className={CPrefix + '-prop-value'}>Raiden</div>
                        </div>
                        <div className={CPrefix + '-prop'}>
                            <div className={CPrefix + '-prop-title'}>Gender:</div>
                            <div className={CPrefix + '-prop-value'}>Horse</div>
                        </div>
                        <div className={CPrefix + '-prop'}>
                            <div className={CPrefix + '-prop-title'}>Taille:</div>
                            <div className={CPrefix + '-prop-value'}>4m56</div>
                        </div>
                        <div className={CPrefix + '-prop'}>
                            <div className={CPrefix + '-prop-title'}>Signature:</div>
                            <div className={CPrefix + '-prop-value'}>𝓭𝓲𝓝𝓪𝓻𝓸𝓸.𝓴</div>
                        </div>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div style={{ margin: 5 }} className={CPrefix + '-prop'}>
                        <div className={CPrefix + '-prop-title'}>✉️ Email:</div>
                        <div className={CPrefix + '-prop-value'}>nadirkichou@hotmail.fr</div>
                    </div>
                    <div style={{ margin: 5 }} className={CPrefix + '-prop'}>
                        <div className={CPrefix + '-prop-title'}>📞 Phone:</div>
                        <div className={CPrefix + '-prop-value'}>0654126843</div>
                    </div>
                </div>
                <div className={CPrefix + '-code'}>8864217.8197815.124</div>
                <div className={CPrefix + '-bar'}></div>
            </div>
        </div>
    )
}