import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import {useNavigation, useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Icon
import userIcon from '../assets/user.png'
import employeeIcon from '../assets/employee.png'
import clientIcon from '../assets/client.png'
import deliveryIcon from '../assets/delivery.png'
import purchaseIcon from '../assets/purchase.png'
import inventoryImg from '../assets/inventory.jpg'

export default function MenuScreen() {
    const productService = require('../services/productService');
    
    const isFocused = useIsFocused();
    const navigation = useNavigation();
    
    const [user, setUser] = useState({})

    useEffect(() => {
        getUser()
        getProducts()
    }, [isFocused])
    
    const getUser = async() => {
        // Obtener datos con la API y pasarlos a setUser
        setUser(
            { name: 'Admin', id: '1'}
        )
    }  
    
    const [listProducts, setListProducts] = useState([])

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

        setListProducts(dataProducts.slice(0,4))
    }

    const openCatalog = () => {
        navigation.navigate('Catalogo')
    }

    const openProduct = (id) => {
        console.log(id)
        navigation.navigate('ProductDetails',{idProduct: id})
    }

    const logOut = async () => {
        await AsyncStorage.removeItem('auth-token')
        navigation.navigate('Login')
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

    const renderFooter = () => {
        return(
            <TouchableOpacity onPress={openCatalog}>
                <View style={styles.showMoreIcon}>
                    <Text style={styles.moreIcon}>Mostrar{"\n"}Más</Text>
                    <Text style={styles.moreIcon}>+</Text>
                </View>
            </TouchableOpacity>
        )
    }
    
    return(
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <View style={styles.btnProfile}>
                    <Image source={userIcon} style={styles.userImg}/>
                    <TouchableOpacity>
                        <Text style={styles.title}>{user.name}</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={logOut}>
                    <View style={styles.btnLogout}>
                        <Text style={styles.txtBtnLogout}>Logout</Text>
                    </View>
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
        justifyContent: 'space-between',
        height: 100,
        alignItems: 'center',
        backgroundColor: '#7D4F50',
        paddingHorizontal: 25,
        paddingTop: '5%'
    },

    btnProfile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    btnLogout: {
        backgroundColor: '#e63946',
        padding: 10,
        borderRadius: 20
    },

    txtBtnLogout: {
        fontWeight: 'bold',
        color: '#fff'
    },

    title: {
        color: "#fff",
        fontSize: 25,
        fontWeight: 'bold'
    },

    userImg: {
        width: 40,
        height: 40,
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
        elevation: 5,
        alignItems: 'center',
    },

    btnMenu2: {
        backgroundColor: '#FFD670',
        elevation: 5,
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
        alignSelf: 'center',
    },

    bigBtn: {
        flex: 1,
        height: 150,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        backgroundColor: "#0000"
    },

    products:  {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 30,
    },

    showMoreIcon: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        borderRadius: 20,
        width: 125,
        height: '95%',
        marginRight: 30,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
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
        elevation: 2,
        width: '40%',
        marginRight: 30,
        marginBottom: 10
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