import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import  {Transition, CSSTransition} from "react-transition-group";
import './App.css';

const Modal = ({onClose, show, setShowTrigger}) => {

    const duration = 300;

    const defaultStyle = {
        transition: `all ${duration}ms ease-in-out`,
        opacity: 0,
        visibility: 'hidden',
    }

    const transitionStyles = {
        entering: { opacity: 1, visibility: 'visible' },
        entered:  { opacity: 1, visibility: 'visible' },
        exiting:  { opacity: 0, visibility: 'hidden' },
        exited:  { opacity: 0, visibility: 'hidden' },
    };

    return (
        /*проп in - это наш стейт, на основе чего показывать,
        проп timeout - это задержка с какой показывать
        unmountOnExit - после того как элемент закрыт, он будет удален из дом-дерева
        onEnter и onExited скрываем тот элемент, который вызвал наше окно, а когда окно закрылась показывать обратно
        */
        <Transition in={show} timeout={duration} unmountOnExit onEnter={() => setShowTrigger(false)} onExited={() => setShowTrigger(true)}>
            {state => (
                <div className="modal mt-5 d-block" style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Typical modal window</h5>
                                <button onClick={() => onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body content</p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => onClose(false)} type="button" className="btn btn-secondary">Close</button>
                                <button onClick={() => onClose(false)} type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    )
}

const ModalCssTransition = ({onClose, show, setShowTrigger}) => {

    const duration = 300;

    return (
        /*проп in - это наш стейт, на основе чего показывать,
        проп timeout - это задержка с какой показывать
        unmountOnExit - после того как элемент закрыт, он будет удален из дом-дерева
        onEnter и onExited скрываем тот элемент, который вызвал наше окно, а когда окно закрылась показывать обратно
        */
        <CSSTransition
            in={show}
            timeout={duration}
            unmountOnExit
            onEnter={() => setShowTrigger(false)}
            onExited={() => setShowTrigger(true)}
            classNames={'modal'}
        >
            <div className="modal mt-5 d-block">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Typical modal CSS window</h5>
                            <button onClick={() => onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body content</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => onClose(false)} type="button" className="btn btn-secondary">Close</button>
                            <button onClick={() => onClose(false)} type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </CSSTransition>
    )
}


function App() {
    const [showModal, setShowModal] = useState(false);
    const [showTrigger, setShowTrigger] = useState(true)

    return (
        <Container>
            {/*{showModal ? <Modal onClose={setShowModal}/> : null}*/}
            <Modal show={showModal} onClose={setShowModal} setShowTrigger={setShowTrigger}/>
            <br/>
            <ModalCssTransition show={showModal} onClose={setShowModal} setShowTrigger={setShowTrigger}/>
            {showTrigger ?
                <button
                    type="button"
                    className="btn btn-warning mt-5"
                    onClick={() => setShowModal(true)}>
                    Open Modal
                </button> : null
            }

        </Container>
    );
}

export default App;
