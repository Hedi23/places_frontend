import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui active dimmer">
      <div onClick={(e) => e.stopPropagation()} className="ui active modal">
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;

// const modalRoot = document.getElementById("modal");

// class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//     // We create an element div for this modal
//     this.element = document.createElement(
//       <div onClick={props.onDismiss} className="ui active dimmer">
//         <div onClick={(e) => e.stopPropagation()} className="ui active modal">
//           <div className="header">{props.title}</div>
//           <div className="content">{props.content}</div>
//           <div className="actions">{props.actions}</div>
//         </div>
//       </div>
//     );
//   }
//   // We append the created div to the div#modal
//   componentDidMount() {
//     modalRoot.appendChild(this.element);
//   }
//   /**
//    * We remove the created div when this Modal Component is unmounted
//    * Used to clean up the memory to avoid memory leak
//    */
//   componentWillUnmount() {
//     modalRoot.removeChild(this.element);
//   }
//   render() {
//     return createPortal(this.props.children, this.element);
//   }
// }
