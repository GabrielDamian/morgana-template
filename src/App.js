import { BrowserRouter,Routes, Route } from 'react-router-dom';


import Widget_1 from './Modules/Widget_1/WidgetCore';
import {Theme} from './MorganaCore/theme';
import Button_1 from './MorganaCore/Atoms/Button_1';

//am populat eu tema cu culorile necesare in site-ul curent, doar folosesti ex. customTheme.colors.color_60 prin componente
//pentru usurinta in a alege care dintre culori, vezi imaginea './PaletaTema.png' 
const customTheme = new Theme() 
customTheme.initFonts(`'DM Serif Display', serif`,`'Ubuntu', sans-serif`) //fonturile au fost importate global in index.css
customTheme.initColors('#8abcd7','#ecf8ff','#ffffff')

const reuseItems = { //aici defineste doar componente pe care le folosesti intre widgets (de ex. un buton)
  'button_1': Button_1 //pentru site-ul in cauza, nu o sa mai ai nevoie de alte elemente definite aici, doar modifica Button_1 sa poata indeplini conditiile de customizare din site 
}

//in acest fisier poti defini refenite catre imagini pe care le dai mai departe ca parametrii widgeturilor
let images = []
//imaginile trebuie sa fie in folderul public. see: https://stackoverflow.com/questions/47196800/reactjs-and-images-in-public-folder


const Acasa = ()=>{
  return (
    <>
    <Widget_1 //navBar-ul de exemplu
        //poti comenta oricare din proprietatile de mai jos, iar componenta inca sa functioneze 
        themeParam={customTheme} //comenteaza si decomenteaza acesta linie pentru a vedea cum widget_1 consuma sau nu customTheme
        
        //parameterii de mai jos sunt populati specific pentru site-ul in cauza
        //in fisierul App.js importi toate toare resursele si le pasezi ca parametrii mai jos
        logoImgParam="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=911&q=80"
        linksParam={[
          { 
            title: 'Acasa ',
            href: '#acasa'
          },
          { 
            title: 'Despre',
            href: '#despre'
          },

        ]}
        button={{ //doar asa poti pasa un buton reutilizabil intre componente, vezi cum se foloseste in interiorul lui Widget_1
            item: reuseItems.button_1,
            props: {
              textParam:  'Contacteaza-ma',
              bgColorParam: 'blue',
              paddingParam: '10px 10px',
              fontSizeParam: '1rem'

            }
        }}
      />
  </>
  )
}
  
const Contact = ()=>{
  return(
<>
    <Widget_1 themeParam={customTheme}/>
    <Widget_1 />
    <Widget_1 />
    <Widget_1 />
  </>
  )
}


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Acasa/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
