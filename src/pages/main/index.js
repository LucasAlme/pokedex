import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { Icon } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../../components/input';
import { cores } from '../../utils/Constants';
import styles from './style';
import api from '../../service/api';
import { useFocusEffect } from '@react-navigation/core';
const logoPokemon = require('../../assets/pokemonLogo.png');

export default function Main() {

    const [pokemonList, setPokemonList] = useState([{}]);
    const [type, setType] = useState([]);
    const [refresh, setRefresh] = useState(true);



    useEffect(() => {
        if (refresh) {
            setTimeout(() => {
                setRefresh(false);
                getData();
            }, 2000);
        }
    }, [refresh])

    useFocusEffect(
        React.useCallback(() => {
            getData();
        }, []));

    async function getData() {

        const pokemonResp = await api.get('pokemon');
        setPokemonList(pokemonResp.data);
        getPokemonData();

    }

    async function getPokemonData() {


        let typePokemon = [];
        for (let id = 1; id <= pokemonList.results.length; id++) {
            const respPokemon = await api.get(`pokemon/${id}`);
            typePokemon.push(respPokemon.data.types[0].type.name)
        }
        setType(typePokemon);
        console.log(type)

    }

    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Image source={logoPokemon} style={styles.logoStyle} />
                <View style={styles.rowStyle}>
                    <Input placeholder="Buscar Pokémon" customStyle={styles.inputStyle} width={"75%"} placeholderColor={"#838282"} />
                    <Icon name="sort" type="font-awesome-5" style={styles.iconStyle} />
                </View>
            </View>
            <ScrollView style={{ width: '100%', height: '100%' }} contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
                refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => getData()} />}
            >
                {pokemonList?.results?.map((pokemon, index) => (
                    <TouchableOpacity style={styles.containerCard}>
                        <LinearGradient colors={type[index] === "grass" ? ["#7CFFD0", "#4A7B42"] :
                            type[index] === "fire" ? ["#FD9E5A", "#FF6969"] :
                                type[index] === "water" ? ["#7CC0FF", "#5F29FF"] : [cores.branco, cores.preto]} style={styles.cardGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                            <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png` }} style={{ height: 100, width: 100, resizeMode: 'contain', position: 'absolute', alignSelf: 'center', bottom: '30%' }} />
                            <View style={styles.nameView}>
                                <Text style={styles.txtName}>{pokemon.name}</Text>
                            </View>
                        </LinearGradient >
                    </TouchableOpacity >
                ))
                }
            </ScrollView >
        </View >
    )
}