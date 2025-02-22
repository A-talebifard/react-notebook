import React, { useEffect, useState } from 'react';
import style from './LastNote.module.css'
import Note from './Note.js'
import Message from './svg/Message - 4.svg'




const LastNote = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const loadedNotes = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
    
            // تبدیل کلید به عدد و بررسی اعتبار
            const id = parseInt(key, 10); // استفاده از radix 10 برای جلوگیری از مشکلات parsing
            if (!isNaN(id)) { // اطمینان از اینکه کلید عدد معتبری است
                let value = JSON.parse(localStorage.getItem(key));
    
                // اطمینان از اینکه مقدار موجود در localStorage معتبر است
                if (value !== null) {
                    if (value.length> 570) {
                        value = value.substring(0, 570) + '...'
                    }
                    loadedNotes.push({ id: id.toString(), text: value }); // ذخیره کلید به صورت رشته
                }
            }
        }
    
        // مرتب‌سازی بر اساس آیدی (نزولی)
        loadedNotes.sort((a, b) => parseInt(b.id, 10) - parseInt(a.id, 10));
    
        setNotes(loadedNotes);
    }, []); 

    return (
        <div className={style.container} >
            <div className={style.noteheader} >
                <img src={Message}></img>
                <h3>یادداشت های اخیر</h3>

            </div>
            {notes.map((note) => (
                <Note key={note.id} id={note.id} text={note.text} />
            ))}        </div>
    );
};

export default LastNote;