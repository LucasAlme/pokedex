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
    const [refresh, setRefresh] = useState(false);
    const [limit, setLimit] = useState(20)
    const [countPokemon, setCountPokemon] = useState(0);

    useEffect(() => {

        getData();

    }, [])

    useEffect(() => {
        getDataPages();
    }, [limit])

    async function getData() {
        const pokemonResp = await api.get(`pokemon`);
        setPokemonList(pokemonResp.data);
        setCountPokemon(pokemonResp.data.count);
        setTimeout(() => {
            getPokemonData();
        }, 1000)
    }

    async function getDataPages() {
        const pokemonResp = await api.get(`pokemon?limit=${limit}`);
        setPokemonList({ ...pokemonList, results: pokemonResp.data.results });
        console.log(pokemonList)

    }

    async function getPokemonData() {

        let typePokemon = [];
        for (let id = 1; id <= pokemonList.results.length; id++) {
            const respPokemon = await api.get(`pokemon/${id}`);
            typePokemon.push(respPokemon.data.types[0].type.name)
        }
        setType(typePokemon);
    }

    function nextPage() {

        if (pokemonList.results.length < countPokemon) {
            setLimit(limit + 20);
        }
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
                onScroll={(e) => {
                    let paddingToBottom = 10;
                    paddingToBottom += e.nativeEvent.layoutMeasurement.height;
                    if (e.nativeEvent.contentOffset.y >= e.nativeEvent.contentSize.height - paddingToBottom) {
                        nextPage();
                    }
                }}
            >
                {pokemonList?.results?.map((pokemon, index) => (
                    <TouchableOpacity style={styles.containerCard}>
                        <LinearGradient colors={type[index] === "grass" ? ["#7CFFD0", "#4A7B42"] :
                            type[index] === "fire" ? ["#FD9E5A", "#FF6969"] :
                                type[index] === "water" ? ["#7CC0FF", "#5F29FF"] :
                                    type[index] === "bug" ? ["#00E911", "#006911"] :
                                        type[index] === "normal" ? ["#FADEED", "#C7DEED"] : [cores.branco, cores.preto]} style={styles.cardGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
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