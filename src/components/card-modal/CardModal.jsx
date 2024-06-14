import React, { useState } from 'react';
import styles from './CardModal.module.css'

export const CardModal = ({isOpen, onClose, children, modalTitle, content, modalLink}) => {
    if (!isOpen) return null;
    
    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <h1 className={styles.title}>{modalTitle}</h1>
                <p className={styles.content}>{content}</p>
                <a className={styles.anchor} href={modalLink} target='_blank'>Link</a>
                <button className={styles.modalCloseButton} onClick={onClose}>X</button> {children}
            </div>
        </div>
    )
}

