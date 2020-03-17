import React,{Component} from 'react';
import {TouchableOpacity,AsyncStorage} from 'react-native';
import {Navigation} from 'react-native-navigation';
class OneClickButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            country:'',
            clicked:false,
        };
        this.getData('country');
    }
    getData = async (info) => {
        try {
          const value = await AsyncStorage.getItem(info);
          if (value !== null) {
            this.setState({country: value});
            await this.getCountry();
          }
        } catch (e) {
            console.log(e);
        }
    }
    async changeCountry(value){
        this.setState({country:value});
    }
    async getCountry(){
        if (this.state.country === 'Egypt MSC'){
            await this.changeCountry('homeEgypt');
        } else {
            await this.changeCountry('homeBrazil');
        }
    }
    async changeClicked(){
        this.setState({clicked:true});
      }
    render(){
        return (
            <TouchableOpacity onPress={async()=>{
                if (!this.state.clicked){
                    await this.changeClicked();
                    await Navigation.push(this.state.country, {
                        component: {
                          name: this.props.page,
                        }});
                }
                this.setState({clicked:false});
            }
        }
            disabled={this.state.clicked}
            style={this.props.style}>
                {this.props.children}
            </TouchableOpacity>
        );
    }
}

export default OneClickButton;
