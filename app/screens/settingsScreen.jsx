import React, {useState} from 'react';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';
import SettingsCard from '../components/displaySettings/settingsCard';
// import styles from '../styles/settingsStyle';

const SettingsScreen = ({navigation}) =>  {
	const [serverIpValue, setServerIp] = useState('192.168.1.5');

	return(
		<View style={styles.view}>
			<SettingsCard serverIpValue={serverIpValue} setServerIp={setServerIp}></SettingsCard>
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: '#271F30'
	}
});

export default SettingsScreen
