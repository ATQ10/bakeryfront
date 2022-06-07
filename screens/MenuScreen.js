import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React, { Component, useState, useEffect } from 'react'

// Icon
import userIcon from '../assets/user.png'
import employeeIcon from '../assets/employee.png'
import clientIcon from '../assets/client.png'
import deliveryIcon from '../assets/delivery.png'
import purchaseIcon from '../assets/purchase.png'
import inventoryImg from '../assets/inventory.jpg'

export default function MenuScreen() {

    const [user, setUser] = useState({})

    useEffect(() => {
        getUser()
        getProducts()
    }, [])
    
    const getUser = async() => {
        // Obtener datos con la API y pasarlos a setUser
        setUser(
            { name: 'Admin', id: '1'}
        )
    }  
    
    const [listProducts, setListProducts] = useState([])

    const getProducts = async() => {
        // Obtener 3 Productos con la API y pasarlos a setList
        setListProducts([
            { name: 'Cuernito', urlImg: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c0a7.png', id: '1'},
            { name: 'Baguette', urlImg: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c09c.png', id: '2'},
            { name: 'Pan', urlImg: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c0a0.png', id: '3'},
            { name: 'Panque', urlImg: 'http://assets.stickpng.com/thumbs/5c5bf488e4b8dd029ff259c2.png', id: '4'},
            { name: 'Semita', urlImg: 'http://assets.stickpng.com/images/5c5bf492e4b8dd029ff259c3.png', id: '5'},
        ])
    }

    
    const renderItem = ({item}) => (
        <View style={styles.card}>
            <Image style={styles.imgProduct}source={{ uri: item.urlImg } } />
            <Text style={styles.cardName}>{item.name}</Text>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.cardIcon}>Detalle</Text>
                </View>            
            </TouchableOpacity>
        </View>
    )

    const renderFooter = () => {
        return(
            <TouchableOpacity>
                <View style={styles.showMoreIcon}>
                    <Text style={styles.moreIcon}>Mostrar Más</Text>
                    <Text style={styles.moreIcon}>+</Text>
                </View>
            </TouchableOpacity>
        )
    }
    
    return(
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <Image source={userIcon} style={styles.userImg}/>
                <TouchableOpacity>
                    <Text style={styles.title}>{user.name}</Text>
                </TouchableOpacity>
            </View>

            {/* MAIN CONTENT */}
            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                {/* MENU BTNS */}
                <View style={styles.container2}>
                    <Text style={styles.titleMenu}>Menú</Text>
                    <View style={styles.containerBtns}>
                        <TouchableOpacity>
                            <View style={{...styles.btnMenu, ...styles.btnMenu2}}>
                                <View style={styles.circle}>
                                    <Image source={employeeIcon} style={styles.imgBtn}/>
                                </View>
                                <Text>Empleados</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.btnMenu}>
                                <View style={styles.circle}>
                                    <Image source={clientIcon} style={styles.imgBtn}/>
                                </View>
                                <Text>Clientes</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerBtns}>
                        <TouchableOpacity>
                            <View style={styles.btnMenu}>
                                <View style={styles.circle}>
                                    <Image source={deliveryIcon} style={styles.imgBtn}/>
                                </View>
                                <Text>Entregas</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.btnMenu}>
                                <View style={styles.circle}>
                                    <Image source={purchaseIcon} style={styles.imgBtn}/>
                                </View>
                                <Text>Compras</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                
                {/* INVENTORY */}
                <View style={styles.container2}>
                    <Text style={styles.titleMenu}>Inventario</Text>
                    <TouchableOpacity>
                        <ImageBackground source={inventoryImg} style={styles.bigBtn}  imageStyle={{ borderRadius: 30}} />
                    </TouchableOpacity>
                </View>

                {/* CATALOG */}
                <View style={styles.container2}>
                    <Text style={styles.titleMenu}>Catálogo</Text>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.products}
                        data={listProducts}
                        renderItem={renderItem}
                        ListFooterComponent={renderFooter}
                    />
                </View>
            </ScrollView>
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
        alignItems: 'center',
        backgroundColor: '#7D4F50',
        paddingHorizontal: 25,
    },

    title: {
        color: "#fff",
        fontSize: 25,
        fontWeight: 'bold'
    },

    userImg: {
        width: 50,
        height: 50,
        marginRight: 20
    },

    container2: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 25,
        paddingVertical: 30
    },

    titleMenu: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },

    containerBtns: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },

    btnMenu: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        width: 150,
        height: 60,
        backgroundColor: '#fffcf2',
        borderRadius: 50,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        alignItems: 'center',
    },

    btnMenu2: {
        backgroundColor: '#FFD670',
    },

    circle: {
        width: 30,
        height: 30,
        backgroundColor: '#f8f9fa',
        borderRadius: 50,
        justifyContent: 'center',
    },

    imgBtn: {
        width: 20,
        height: 20,
        alignSelf: 'center'
    },

    bigBtn: {
        flex: 1,
        height: 150,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3
    },

    products:  {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 30
    },

    showMoreIcon: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
        height: '100%',
        width: 125,
        marginRight: 30,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },

    moreIcon: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: 'bold'
    },

    card:  {
        flex: 1,
        backgroundColor: '#fffcf2',
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 20,
        textAlign: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: '40%',
        marginRight: 30
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