import {Text, View, TextInput, Button, TouchableOpacity} from 'react-native'
import React, {useState} from 'react';
import { styles } from '../assets/StyleSheet';


export default function CreateItem({navigation}) {
    const [itemName, setItemName] = useState('');

    return (
        <View style={{
            justifyContent: 'top', 
            flex: 1
        }}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Text style={{paddingLeft: 30, paddingBottom: 40, paddingTop: 20, fontWeight: 'bold'}}>&lt; Back</Text>
                </TouchableOpacity>
            </View>
            
            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
                <TextInput
                textAlign="center"
                style = {styles.textInputBarCreateItem}
                placeholder = 'Item Name'
                placeholderTextColor="#999"
                onChangeText={(val) => setItemName(val)}
                />
                
            </View>

            <View style={{paddingLeft: 40, justifyContent: 'center'}}>
                <TextInput
                textAlign="center"
                style = {styles.textInputBarCreateItem}
                placeholder = 'Location found: ex. Suzzallo'
                placeholderTextColor="#999"
                onChangeText={(val) => setItemName(val)}
                />
                
            </View>
            

        </View>
    )
}