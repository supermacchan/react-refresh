import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import css from "./Modal.module.css"

export const Modal = ({ onClose, data }) => {
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
                <p className={css.text}>{data}</p>
            </div>
        </div>,
        modalRoot,
    );
};