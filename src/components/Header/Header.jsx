import css from "./Header.module.css";
import { useState } from "react";
import { Modal } from "components/Modal/Modal";

export const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
    };

    return (
        <>
        <header className={css.header}>
            <h1>Cats catalog</h1>
            <button 
                type="button" 
                onClick={toggleModal}
                className={css.button}
            >
                Fun Fact
            </button>
        </header>

        {showModal &&
            <Modal
                onClose={toggleModal}
            />
        }
        </>
    )
}