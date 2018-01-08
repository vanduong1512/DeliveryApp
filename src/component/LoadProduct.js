import React, { Component } from 'react';
import { Image, TouchableHighlight, StyleSheet, View, Text  } from 'react-native';
import { ListItem } from 'react-native-elements';

class LoadProduct extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <TouchableHighlight 
            // style={{ margin: 15 }}
            // onPress={() => this.props.objParent.navigate(this.props.objParent.products.navigation)}>
            //     <Image
            //         source={this.props.objParent.products.path}
            //     />
            // </TouchableHighlight>
            <ListItem
                onPress={() => this.props.objParent.navigate(this.props.objParent.products.navigation)}
                roundAvatar
                title={this.props.objParent.products.name}
                subtitle={
                    <View style={styles.subtitleView}>
                        <Image source={this.props.objParent.products.path} style={styles.ratingImage} />
                        <Text style={styles.ratingText}>Describe Product</Text>
                    </View>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
      },
      ratingImage: {
        height: 100,
        width: 100
      },
      ratingText: {
        paddingLeft: 10,
        color: 'grey'
      },
});

export default LoadProduct;