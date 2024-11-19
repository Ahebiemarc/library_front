import { FC } from "react";
import "../styles/popup.css"

interface PopupProps{
    title: string;
    description: string;
    closePopup: () => void;
}


const Popup : FC<PopupProps> = ({title, description, closePopup}) =>{
    return (
        <div className="popup">
          <div className="popup-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={closePopup}>OK</button>
          </div>
        </div>
    );

}

export default Popup;