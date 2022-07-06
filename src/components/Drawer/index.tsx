import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const DrawerMenu = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<HTMLButtonElement>(null);

	return (
		<>
			<Button
				colorScheme='transparent'
				onClick={onOpen}
				rightIcon={<GiHamburgerMenu color='black' size={'2em'} />}
			/>
			<Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					
					<DrawerBody m>
						<p>Some contents...</p>
						<p>Some contents...</p>
						<p>Some contents...</p>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default DrawerMenu;
