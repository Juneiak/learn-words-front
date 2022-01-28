import React from "react";
import styles from './layout.module.css';

function Layout({ children, closeHandler }) {
  const [ isOpen, setIsOpen ] = React.useState(false)
  const overlayClose = (evt) => {
    if (evt.target === evt.currentTarget) {
      closeHandler()
    }
  }
  React.useEffect(() => {
    setIsOpen(true);
  }, [])

    return (
      <div 
        onClick={overlayClose} 
        className={`
          ${styles.layout}
          ${isOpen && styles.layoutIsOpen}
        `}>
        {children}
      </div>
    )
}

export default Layout;
