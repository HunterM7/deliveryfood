import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

// React native components
import {
	View,
	Text,
	SafeAreaView,
	Image,
	TextInput,
} from 'react-native'

// Files
import styles from './HomeScreen.module.scss'
import { logoIcon } from '../../assets/links'
import {
	UserIcon,
	ChevronDownIcon,
	AdjustmentsVerticalIcon,
	MagnifyingGlassIcon,
} from 'react-native-heroicons/outline'

const HomeScreen = () => {
	const navigation = useNavigation()

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	}, [])

	return (
		<SafeAreaView style={styles.header}>
			<View style={styles.header__container}>
				<Image
					source={{
						uri: `${logoIcon}`,
					}}
					style={styles.logo}
				/>

				<View style={styles.location}>
					<Text style={styles.suptitle}>Deliver now!</Text>
					<Text style={styles.title}>
						Current Location
						<ChevronDownIcon size={20} color='#00ccbb' />
					</Text>
				</View>

				<UserIcon size={34} color='#00ccbb' />
			</View>

			{/* Search */}

			<View>
				<View>
					<MagnifyingGlassIcon />
					<TextInput
						placeholder='Restaurants and cuisines'
						keyboardType='default'
					/>
				</View>
				<AdjustmentsVerticalIcon color='#00ccbb' />
			</View>
		</SafeAreaView>
	)
}

export default HomeScreen
