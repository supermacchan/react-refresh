import { createPortal } from 'react-dom';
import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import css from "./Modal.module.css"

export const Modal = ({ onClose }) => {
    // const dispatch = useDispatch();
    useEffect(() => {
        const handleKeydown = event => {
            if (event.code === 'Escape') {
                onClose();
            };
        };

        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        }
    }, [onClose]);

    // no scroll on body when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => document.body.style.overflow = 'unset';
     }, []);

    const handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

    const modalRoot = document.querySelector('#modal-root');
    
    return createPortal(
        // backdrop
        <div onClick={handleOverlayClick} className={css.backdrop}>
            {/* modal */}
            <div className={css.modal}>
                shalala
            </div>
        </div>,
        modalRoot,
    );
};