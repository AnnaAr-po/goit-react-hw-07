import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { useState } from "react";
import css from './ContactForm.module.css';


const ContactForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
    };
    

  return (
        <form onSubmit={handleSubmit} className={css.form}>
          <label>
            Name
            <input
              type="text"
              name="name"
                  className={css.input}
                  onChange={(e) => setName(e.target.value)}
              placeholder="Введіть ім'я"
            />
          </label>

          <label>
            Number
            <input
              type="text"
              name="number"
              className={css.input}
              placeholder="Введіть номер телефону"
            />
          </label>

          <button type="submit" className={css.button}>
            Add Contact
          </button>
        </form>
      )}

export default ContactForm;