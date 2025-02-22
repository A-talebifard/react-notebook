import React, { useState } from 'react';
import styles from './InputYaddasht.module.css'
import save from './svg/Arrow - Bottom.svg'
import trash from './svg/Trash-2.svg'


const InputYaddasht = () => {
    const [note , setNote] = useState('')
    const [noteid , setNoteid] = useState('')
    const [svBool, setSvBool] = useState(false);  //  استفاده از  useState
    const [svBoolError, setSvBoolError] = useState(false); // استفاده از useState
    
    const handleInputChange = (event) => {
        setNote(event.target.value);
    }
    const handleIdChange = (event) => {
        setNoteid(event.target.value);
    }


    const saveNote = () => {
        // ذخیره یادداشت در localStorage با استفاده از setStoredValue
        if (noteid && note) {
            window.localStorage.setItem(noteid, JSON.stringify(note))
            // console.log('Note saved with ID:', noteid);
            setSvBool(true);
            setSvBoolError(false);
            window.location.reload(true);

        } else {
            // console.log('Please enter both ID and note');
            setSvBool(false);
            setSvBoolError(true);

        }
    };


    const deleteNote = () =>{
        // console.log('Delete button clicked');
        setNote('');
        setNoteid('');
        setSvBool(false);
        setSvBoolError(false);

    }
    return (
        <div className={styles.container}>

            <textarea className={styles.input} type="text" placeholder="یادداشت خود را وارد کنید" onChange={handleInputChange} value={note}/>
            <div className={styles.btngroup} >
                <button onClick={saveNote} className={styles.btn}> ذخیره <img src={save} alt='save'></img></button>
                <button onClick={deleteNote}  className={styles.btndel}><img src={trash} alt='del'></img></button>
                <input className={styles.inputid} type='number' onChange={handleIdChange} value={noteid}/>
                <span className={styles.inputidlabel} >آیدی یادداشت</span>

                {svBool ? <span className={styles.svspan}>ذخیره شد</span> : null}
                {svBoolError ? <span className={styles.svspanError}>ذخیره نشد!!!</span> : null}
                
            </div>
        </div>
    );
};

export default InputYaddasht;