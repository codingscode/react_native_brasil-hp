
import React, { Component } from 'react'
import { View, Text } from 'react-native'


class Filmes extends Component {


    render() {

        return (
            <View>
                <Text>{this.props.dados.nome}</Text>
            </View>
        )

    }


}


export default Filmes
