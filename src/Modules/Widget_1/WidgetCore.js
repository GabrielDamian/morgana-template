import React from 'react';
import './style.css';
import DefaultLogo from './res/defaultLogo.png';
import {Theme, defaultTheme} from '../../MorganaCore/theme'

export default function Widget_1 ({
    logoImgParam,
    linksParam,
    themeParam,
    titleParam,
    button,
})
{
    let logoImg = logoImgParam ? logoImgParam : DefaultLogo //daca logoParam exista, foloseste-l pe el, altfel foloseste o imagine default din /rest pentru acest widget
    let links = linksParam  ? linksParam :[
        {
            title: 'Default 1',
            href: '#acasa'
        },
        {
            title: 'default 2',
            href: '#despre'
        },
    ] 
    // let ButtonEl = buttonParam ? buttonParam.item :DefaultButton
    let theme = themeParam  ? themeParam : defaultTheme
    let title = titleParam ? titleParam : 'Default Title'
    return(

        //pentru a construi animatii cu usurinta, poti folosi "framer-motion"
        //motion.div se compota exact ca un div normal, doar ca poti aplica animatii din librarie peste el ca sa 
        //execute animatii de reaveal, de exemplu cand stai scroll peste el. vezi: https://blog.logrocket.com/react-scroll-animations-framer-motion/
        // <motion.div
            //     className="test_x_box"
            //     initial={{ opacity: 0, scale: 0.5 }}
            //     animate={{ opacity: 1, scale: 1 }}
            //     transition={{
            //         default: {
            //         duration: 0.3,
            //         ease: [0, 0.71, 0.2, 1.01]
            //         },
            //         scale: {
            //         type: "spring",
            //         damping: 5,
            //         stiffness: 100,
            //         restDelta: 0.001
            //         }
            //     }}
            // ></motion.div>
        <div 
            className='' //clase facute de tine in style.css
            style={{
                backgroundColor: theme.colors.color_60,
            }}
            >
            <img src={logoImg}/>
            {
                links.map((el)=>{
                    return <a href={el.href}>{el.title}</a>
                })
            }
            <h3
                style={{
                    fontFamily: theme.fonts.title
                }}
            >
                {title}
            </h3>
            {
                button ? 
                <button.item {...button.props}/>
                :
                <DefaultButton/>
            }
            
        </div>
    )
}

// poti definite oricate sub componente in interiorul fisierului cu Widget_x, daca te ajuta sa formezi mai usor logica din interiorul componentei
const DefaultButton = ()=>{
    return <button>Default</button>
}