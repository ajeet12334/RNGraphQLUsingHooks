import React, { Component } from 'react'
import {View, Text} from 'react-native'

class Link extends Component {
    render() {
        return (
            <View>
                <Text>
                    {this.props.link.countryName} {this.props.link.countryCode}
                </Text>
            </View>
        )
    }
}

export default Link