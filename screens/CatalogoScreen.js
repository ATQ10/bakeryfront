import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component, useState, useEffect } from 'react'


export default function CatalogoScreen() {
    const [listProducts, setListProducts] = useState([])

    const displayProduct = (id) => {
        
    }

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async() => {
        // Obtener datos con la API y pasarlos a setList
        setListProducts([
            { name: 'Cuernito', urlImg: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c0a7.png', id: '1'},
            { name: 'Baguette', urlImg: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c09c.png', id: '2'},
            { name: 'Pan', urlImg: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c0a0.png', id: '3'},
            { name: 'Panque', urlImg: 'http://assets.stickpng.com/thumbs/5c5bf488e4b8dd029ff259c2.png', id: '4'},
            { name: 'Semita', urlImg: 'http://assets.stickpng.com/images/5c5bf492e4b8dd029ff259c3.png', id: '5'},
            { name: 'Pan Nata', urlImg: 'http://assets.stickpng.com/thumbs/5c5bf49ce4b8dd029ff259c4.png', id: '6'},
            { name: 'Pay', urlImg: 'http://assets.stickpng.com/thumbs/5e8e01d563d9ba000492d51e.png', id: '7'}
        ])
    }

    const renderItem = ({item}) => (
        <View style={styles.card}>
            <Image style={styles.imgProduct}source={{ uri: item.urlImg } } />
            <Text style={styles.cardName}>{item.name}</Text>
            <TouchableOpacity onPress={displayProduct(item.id)}>
                <View style={styles.button}>
                    <Text style={styles.cardIcon}>Detalle</Text>
                </View>            
            </TouchableOpacity>
        </View>
    )

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Catalogo</Text>
                <TouchableOpacity>
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
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    header:  {
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#7D4F50',
        paddingHorizontal: 25,
    },

    title: {
        color: "#fff",
        fontSize: 25,
        fontWeight: 'bold'
    },

    products:  {
        flex: 1,
        paddingHorizontal: 25,
        paddingVertical: 30
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
