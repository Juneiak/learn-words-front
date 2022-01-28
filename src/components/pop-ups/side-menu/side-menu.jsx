import React from "react";
import styles from './side-menu.module.css';
import Layout from "../layout/layout";
import NavTab from "../../nav-tab/nav-tab";
import { CloseIcon } from "../../icons";
import { useDispatch } from 'react-redux'
import ProfileButton from '../../buttons/profile-button/profile-button';
import { TOGGLE_SIDE_MENU_OPEN } from '../../../services/actions/constants';

function SideMenu() {

  const [ isOpen, setIsOpen ] = React.useState(false)
  const dispatch = useDispatch();

  const handleCLose = () => {
    dispatch({type: TOGGLE_SIDE_MENU_OPEN})
  }
  
  React.useEffect(() => {
    setIsOpen(true)
  }, []);

    return (
      <Layout closeHandler={handleCLose} >
        <section className={`
          ${styles.sideMenu}
          ${isOpen && styles.sideMenuOpened}
        `}>
          <button
                type="button"
                onClick={handleCLose}
                className={`${styles.closeButton} button-animation `}>
              <CloseIcon />
            </button>
          <NavTab isVertical={true}/>
          <ProfileButton />
        </section>
      </Layout>
    )
}

export default SideMenu;
