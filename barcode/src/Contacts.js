import React from "react";
import ReactDOM from "react-dom";
import './App.css';

function Contacts (){
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.263178093375!2d37.620795!3d55.75393030000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5a738fa419%3A0x7c347d506b52311f!2z0JrRgNCw0YHQvdCw0Y8g0J_Qu9C-0YnQsNC00Yw!5e0!3m2!1sru!2sru!4v1661117136227!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    function Iframe(props) {
        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
      }
    return (
    <>
    
        
            <address className='contacts'>
            <p> 115184, г.Москва, ул. Красная площадь,1!</p>
           
            <p>stsalykin@mail.ru</p>
            <p>88005555555</p>
        
           

        

            </address>

            <div className='mapBox'>
            <Iframe iframe={iframe} />
            </div>
           
            
            
            
            </>
    )
    }
    
    export default Contacts;