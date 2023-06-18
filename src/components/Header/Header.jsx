import css from "./Header.module.css";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { operations } from 'redux/operations';
import { Modal } from "components/Modal/Modal";

export const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [fact, setFact] = useState('');
    const dispatch = useDispatch();

    const handleButtonClick = async () => {
        try {
            const data = await dispatch(operations.getRandomFact());
            setFact(data.payload);
            toggleModal();
        } catch (error) {
            console.error(error);
        }
    }

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
    };

    return (
        <>
        <header className={css.header}>
            <h1>Cats catalog</h1>
            <button 
                type="button" 
                onClick={handleButtonClick}
                className={css.button}
            >
                Fun Fact
            </button>
        </header>

        {showModal &&
            <Modal
                onClose={toggleModal}
                data={fact}
            />
        }
        </>
    )
}