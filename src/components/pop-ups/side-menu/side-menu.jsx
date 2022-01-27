import React from "react";
import styles from './side-menu.module.css';
import Layout from "../layout/layout";
import NavTab from "../../nav-tab/nav-tab";
import { CloseIcon } from "../../icons";
import { useDispatch, useSelector } from 'react-redux'
import ProfileButton from '../../buttons/profile-button/profile-button';

function SideMenu() {
  const dispatch = useDispatch();
  const isOpen = true;
  const handleCLose = () => {
    dispatch({type: 'fuck'})
  }

  React.useState(() => {

  }, []);

    return (
      <Layout>
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
