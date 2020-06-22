import React from 'react';
import ReactDom from 'react-dom'

const Modal = ({title, description, actions, onDismis}) => {
    console.log("actions",actions);
    
    return ReactDom.createPortal (  
        <div
         onClick = {onDismis} 
        className="ui dimmer modals visible active">
              <div 
                onClick ={ (e) => e.stopPropagation()}
              className="ui standart modal visible active">
                  <div className="header">  {title}</div>
                  <div className="content">
                      {description}
                  </div>
                  <div className="actions">
                      {actions}
                  </div>
              </div>
        </div>, 
        document.querySelector('#modal')
    );
}
 
export default Modal;