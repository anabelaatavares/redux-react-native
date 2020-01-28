import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, ActivityIndicator, TouchableHighlight, Image, SafeAreaView } from 'react-native'
import { connect } from "react-redux";
import { Avatar } from 'react-native-paper'
import { Item, Input, Icon } from 'native-base';

import { getData } from '../redux/actions/list';
import { searchData } from '../redux/actions/search';


class ListUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            data: {},
            userdata: 0
        };
    }
    handleChange = (text, name) => {
        this.setState({
            [name]: text
        })
    }
    onChangedata = () => {
        this.setState({ userdata: 1 })
    }

    onSearch = () => {
        let username = this.state.username
        this.props.searchData(username);
        this.onChangedata();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.list.data !== this.props.list.data) {
            this.setState(
                { data: this.props.list.data }
            )
        }
    }

    componentDidMount() {
        this.props.getData()
    }
    async componentWillMount() {
        this.setState(
            { data: await this.props.list.data }
        )
    }

    render() {
        const { width, height } = Dimensions.get('window');

        return (
            <SafeAreaView>
                <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
                    <View style={{ width: width * 75 / 100, height: 60, }} >
                        <Item regular style={{ borderRadius: 20, Colors: '#FF8A65' }}>
                            <Input style={{ color: 'black' }} placeholder='Search'
                                onChangeText={text => this.handleChange(text, "username")}
                                value={this.state.username}
                            />
                        </Item>
                    </View>
                    <View style={{ height: 52, width: 60, backgroundColor: "#9E9E9E", borderRadius: 50, marginLeft: 10 }}>
                        <TouchableHighlight onPress={() => { this.onSearch(this.state) }} underlayColor="white">
                            <Image
                                style={{ width: 30, height: 30, marginLeft: 16, marginTop: 12 }}
                                source={require('../image/magnifier.png')}
                            />

                        </TouchableHighlight>
                    </View>
                </View>
                {this.state.userdata === 0 &&
                    <FlatList style={{ marginTop: 54 }}
                        data={this.props.list.data}
                        extraData={this.state}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                            <View style={styles}>
                                <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10, marginRight: 10, marginTop: 10 }}>
                                    <View style={{ width: width * 25 / 100, height: 70 }} >
                                        <Avatar.Image size={70} source={{ uri: item.avatar_url }} />
                                    </View>
                                    <View style={{ width: width * 50 / 100, height: 70 }}>
                                        <Text style={{ fontSize: 20, marginBottom: 6, fontWeight: 'bold' }}>{item.login}</Text>
                                        <Text style={{ fontSize: 20 }}>{item.type}</Text>
                                    </View>
                                    <View style={{ width: width * 22 / 100, height: 70 }} />
                                </View>
                            </View>
                        }
                    />
                }
                {this.state.userdata > 0 &&
                    <View style={styles}>
                        <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10, marginRight: 10, marginTop: 60 }}>
                            <View style={{ width: width * 25 / 100, height: 70 }} >
                                <Avatar.Image size={70} source={{ uri: this.state.data.avatar_url }} />
                            </View>
                            <View style={{ width: width * 50 / 100, height: 70 }}>
                                <Text style={{ fontSize: 20, marginBottom: 6, fontWeight: 'bold' }}>{this.state.data.login}</Text>
                                <Text style={{ fontSize: 20 }}>{this.state.data.type}</Text>
                            </View>
                            <View style={{ width: width * 22 / 100, height: 70 }} />
                        </View>
                    </View>

                }
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },

})
const mapStateToProps = state => {
    return {
        list: state.list,
    }
}

const mapDispatchToProps = {
    getData,
    searchData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListUser);

