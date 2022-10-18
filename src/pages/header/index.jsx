import React, {useEffect} from 'react';
import layerBase from '../../assets/img/layer-base.png'
import layerMiddle from '../../assets/img/layer-middle.png'
import layerFront from '../../assets/img/layer-front.png'
import './style.scss'

const Header = () => {
    useEffect(() => {
        window.addEventListener('scroll', e => {
            document.body.style.cssText += `--scrollTop:${window.scrollY}px`
        })
    }, [])

    return (
        <div className='L-header-component'>
            <div className="L-header-wrapper">
                <div className="L-layer__header">
                    <div className="L-layer__caption"><p>Welcome to Parallax</p></div>
                    <div className="L-layer__title"><p>Magic Forest</p></div>
                </div>
                <div className='L-layer L-layer__base' style={{backgroundImage: `url("${layerBase}")`}}/>
                <div className='L-layer L-layer__title' style={{backgroundImage: `url("${layerMiddle}")`}}/>
                <div className='L-layer L-layer__front' style={{backgroundImage: `url("${layerFront}")`}}/>
            </div>
        </div>
    );
};

export default Header;
