import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

// import Categories from "../Categories"
// import Tags from "../Tags"

import styles from "../../styles/sidemenu.module.css";

export default function SideMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");
  return (
    <>
      <Button colorScheme="white" onClick={onOpen}>
        <HamburgerIcon w={8} h={8} color="black" />
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">AlbertcacV</DrawerHeader>
          <DrawerBody>
            <p>Desarrollo Web</p>
            <p>Cibeseguridad</p>
            <p>Proyectos Personales</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
    // <div className={styles.wrapper}>
    //   <aside className={styles.sidemenu}>
    //     <header className={styles.sidemenu__header}>
    //       <button className={styles.btn}></button>
    //     </header>
    //     <h2>AlbertcacV</h2>
    //     <Categories />
    //     <Tags />
    //   </aside>
    // </div>
  );
}
