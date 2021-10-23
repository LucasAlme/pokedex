import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../../components/input';
import { cores } from '../../utils/Constants';
import styles from './style';
import api from '../../service/api';
const logoPokemon = require('../../assets/pokemonLogo.png');

export default function Main() {

    const [pokemonList, setPokemonList] = useState([{}]);


    useEffect(() => {
        getData();

    }, [])

    async function getData() {
        const pokemonResp = await api.get('pokemon');
        setPokemonList(pokemonResp.data)
    }


    // async function getPokemonData(url) {
    //     let urlSplit = url.split('/')


    //     console.log(urlSplit[6])
    //     return urlSplit[6];
    // }


    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Image source={logoPokemon} style={styles.logoStyle} />
                <View style={styles.rowStyle}>
                    <Input placeholder="Buscar Pokémon" customStyle={styles.inputStyle} width={"75%"} placeholderColor={"#838282"} />
                    <Icon name="sort" type="font-awesome-5" style={styles.iconStyle} />
                </View>
            </View>

            <ScrollView style={{ width: '100%', height: '100%' }} contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {pokemonList?.results?.map((pokemon, index) => (
                    <TouchableOpacity style={styles.containerCard} onPress={() => getPokemonData(pokemon.url)}>
                        <LinearGradient colors={["#7CFFD0", "#4A7B42"]} style={styles.cardGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                            <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png` }} style={{ height: 100, width: 100, resizeMode: 'contain', position: 'absolute', alignSelf: 'center', bottom: '30%'}} />
                            <View style={styles.nameView}>
                                <Text style={styles.txtName}>{pokemon.name}</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                ))
                }
            </ScrollView>


        </View >
    )
}