import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import {useNavigation, useIsFocused} from '@react-navigation/native';

export default function CatalogoScreen() {
    const productService = require('../services/productService');

    const [listProducts, setListProducts] = useState([])
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const goBack = () => {
        navigation.goBack()
    }

    useEffect(() => {
        getProducts()
    }, [isFocused])

    const getProducts = async() => {
        // Obtener datos con la API y pasarlos a setList
        var dataProducts = []

        try {
            const allProducts = await productService.getAll();

            if (allProducts != null) {
                allProducts.forEach((product) => {
                    dataProducts.push({name: product.Name, urlImg: product.Img, id: product._id})
                })
            }
        } catch(e) {
            console.log(e)
        }

        setListProducts(dataProducts)
    }

    const openProduct = (id) => {
        console.log(id)
        navigation.navigate('ProductDetails',{idProduct: id})
    }

    const openNewProduct = () => {
        navigation.navigate('EditProduct')
    }

    const renderItem = ({item}) => (
        <View style={styles.card}>
            <Image style={styles.imgProduct}source={{ uri: item.urlImg } } />
            <Text style={styles.cardName}>{item.name}</Text>
            <TouchableOpacity onPress={() => {openProduct(item.id)}}>
                <View style={styles.button}>
                    <Text style={styles.cardIcon}>Detalle</Text>
                </View>            
            </TouchableOpacity>
        </View>
    )

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.backBtn}>
                    <TouchableOpacity onPress={goBack}>
                        <Text style={styles.title2}>&lt;</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>Catálogo</Text>
                </View>
                <TouchableOpacity onPress={openNewProduct}>
                    <Text style={styles.title}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                style={styles.products}
                data={listProducts}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 30
    },

    header:  {
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#7D4F50',
        paddingHorizontal: 25,
    },

    backBtn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    title: {
        color: "#fff",
        fontSize: 25,
        fontWeight: 'bold',
    },

    title2: {
        color: "#fff",
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 10
    },

    products:  {
        flex: 1,
        paddingHorizontal: 25,
        paddingVertical: 30,
        marginBottom: 10
    },

    card:  {
        backgroundColor: '#fffcf2',
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 20,
        textAlign: 'center',
        marginVertical: 20,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: '42%'
    },
    
    cardName: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10
    },

    cardIcon: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        padding: 5,
    },

    button: {
        flex: 1,
        backgroundColor: '#7D4F50',
        borderRadius: 10
    },

    imgProduct: {
        width: 80,
        height: 80,
        alignSelf: 'center'
    }
});
