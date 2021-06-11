import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import Button from '../Common/Button';
import {CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Modal from 'react-native-modal';
import {ScrollView} from 'react-native';
const {height} = Dimensions.get('window');
class Selected extends Component {
  state = {
    checked: false,
    searchText: '',
    searchModal: false,
    searchData: [],
    selectedSubCatData: [],
    categoryArray: [
      {id: '1', categoryName:'Sort'},
      {id: '2', categoryName: 'Category'},
      {id: '3', categoryName: 'Count'},
      {id: '4', categoryName: 'Seller Type'},
      {id: '5', categoryName: 'Color'},
      {id: '6' ,categoryName: 'Payment Terms'},
      {id: '7', categoryName: 'Seller Name'},
      {id: '8', categoryName: 'Status'},
      
    ],

    subCategoryArray: [
      {id: '1', mainId: '1', categoryName: 'Alphabetically'},
      {id: '2', mainId: '1', categoryName: 'Date'},
      {id: '3', mainId: '1', categoryName: 'Relevance'},
      {id: '4', mainId: '2', categoryName: 'Cotton'},
      {id: '5', mainId: '2', categoryName: 'Texturise'},
      {id: '6', mainId: '2', categoryName: 'PSF'},
      {id: '7', mainId: '2', categoryName: 'PC'},
      {id: '8', mainId: '2', categoryName: 'PV'},
      {id: '9', mainId: '2', categoryName: 'Viscose'},
      {id: '10', mainId: '2', categoryName: 'CP'},
      {id: '11', mainId: '2', categoryName: 'Linen'},
      {id: '12', mainId: '2', categoryName: 'Modal'},
      {id: '13', mainId: '2', categoryName: 'Rayon'},
      {id: '14', mainId: '2', categoryName: 'Option'},
    ],
    subCategoryArrayHolder: [
      {
        subId: '1',
        mainId: '1',
        categoryName: 'Sort',
        subCategoryName: 'Alphabetically',
      },
      {
        subId: '2',
        mainId: '1',
        categoryName: 'Sort',
        subCategoryName: 'Date',
      },
      {
        subId: '3',
        mainId: '1',
        categoryName: 'Sort',
        subCategoryName: 'Relevance',
      },
      {
        subId: '4',
        mainId: '2',
        categoryName: 'Category',
        subCategoryName: 'Cotton',
      },
      {
        subId: '5',
        mainId: '2',
        categoryName: 'Category',
        subCategoryName: 'Texturise',
      },
      {
        subId: '6',
        mainId: '2',
        categoryName: 'Category',
        subCategoryName: 'PSF',
      },
      {
        subId: '7',
        mainId: '2',
        categoryName: 'Category',
        subCategoryName: 'PC',
      },
      {
        subId: '8',
        mainId: '2',
        categoryName: 'Category',
        subCategoryName: 'PV',
      },
      {
        subId: '9',
        mainId: '2',
        categoryName: 'Category',
        subCategoryName: 'Viscose',
      },
      {
        subId: '10',
        mainId: '2',
        categoryName: 'Category',
        subCategoryName: 'CP',
      },
      {
        subId: '11',
        mainId: '2',
        categoryName: 'Category',
        subCategoryName: 'Linen',
      },
      {
        subId: '12',
        mainId: '2',
        categoryName: 'Category',
        subCategoryName: 'Modal',
      },
      {
        subId: '13',
        mainId: '2',
        categoryName: 'Category',
        subCategoryName: 'Rayon',
      },
      {
        subId: '14',
        mainId: '2',
        categoryName: 'Category',
        subCategoryName: 'Options',
      },
     
    ],

    selectedCategory: '',
  };

  selectSubCategory = (subCategoryId) => {
    const blankArray = this.state.selectedSubCatData;
    if (blankArray.some((oldData) => oldData == subCategoryId)) {
      var index = blankArray.indexOf(subCategoryId);
      blankArray.splice(index, 1);
      this.setState({
        selectedSubCatData: blankArray,
      });
    } else {
      blankArray.push(subCategoryId);
      this.setState({selectedSubCatData: blankArray});
    }
  };

  filtersearch = (text) => {
    const newData = this.state.subCategoryArrayHolder.filter(function (item) {
      const itemData1 = item.categoryName
        ? item.categoryName.toUpperCase()
        : ''.toUpperCase();
      const itemData2 = item.subCategoryName
        ? item.subCategoryName.toUpperCase()
        : ''.toUpperCase();
      const itemData = itemData1.concat(itemData2);
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      searchData: newData,
    });
  };

  closeModal = () => {
    this.setState({searchModal: false});
  };

  render() {
    const {
      categoryArray,
      subCategoryArray,
      selectedCategory,
      selectedSubCatData,
      searchText,
      searchData,
      searchModal,
    } = this.state;

    return (
      <ScrollView style={[styles.mainStyle]}>
        <Modal
          isVisible={searchModal}
          animationIn={'fadeIn'}
          animationInTiming={1}
          animationOutTiming={1}
          onBackdropPress={this.closeModal}
          style={{
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 0,
          }}>
          <View style={{flex: 1}}>
            <View
              style={{
                height: height / 3.73,

                alignItems: 'center',
                justifyContent: 'center',
              }}></View>
            <View
              style={{
                height: '73%',
                width: '100%',
                paddingHorizontal: '5%',
              }}>
              <View style={[styles.search_bar_view]}>
                <TouchableOpacity>
                  <Icon
                    name={'search'}
                    style={{color: '#DADADA', fontSize: 20}}
                  />
                </TouchableOpacity>
                <TextInput
                  style={styles.normal_text}
                  placeholder="Search"
                  onChangeText={(text) => this.filtersearch(text)}
                  autoFocus={true}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  height: 'auto',
                  borderRadius: 10,
                  paddingHorizontal: '2%',
                  backgroundColor: '#F4F8F9',
                  width: '100%',
                  alignSelf: 'center',
                }}>
                <FlatList
                  data={searchData}
                  keyboardShouldPersistTaps="handled"
                  style={{width: '100%'}}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item: category}) => {
                    return (
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({selectedCategory: category.SubId})
                        }
                        style={{
                          backgroundColor:
                            selectedCategory == category.SubId
                              ? '#FFF'
                              : '#F4F8F9',
                          height: 50,
                          width: '100%',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                        }}>
                        <Text style={{fontFamily: 'HelveticaLight'}}>
                          {category.categoryName}
                          {' - '} {category.subCategoryName}
                        </Text>
                        <CheckBox
                          onPress={() => this.selectSubCategory(category.subId)}
                          checked={selectedSubCatData.some(
                            (data) => data == category.subId,
                          )}
                         // checkedIcon={
                           // <Image source={require('../Assets/checked.png')} />
                          //}
                         // uncheckedIcon={
                           // <Image
                             // source={require('../Assets/unchecked.png')}
                            ///>
                         // }
                        />
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
       
        <View
          style={{
            height: height / 1.33,
            width: '100%',
            paddingHorizontal: '5%',
          }}>
          <TouchableOpacity
            style={{
            
            }}><Text style={{color: 'orange',
            marginTop: '20%',
            fontSize: 22,
            fontFamily: 'HelveticaLight',
            fontWeight: 'bold',
            marginVertical: '10%',
            
            }}>
          {' < -  Sort & Filter  '}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => this.setState({searchModal: true})}
            style={[styles.search_bar_view, {justifyContent: 'flex-start'}]}>
            <Icon name={'search'} style={{color: '#DADADA', fontSize: 20}} />
            <Text
              style={{
                fontFamily: 'HelveticaLight',
                paddingLeft: 5,
                fontSize: 14,
                fontWeight: '500',
              }}>
              Search
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              height: '75%',
              marginVertical: '2%',
              borderRadius: 10,
              paddingHorizontal: '2%',
              backgroundColor: '#F4F8F9',
              width: '100%',
            }}>
            <FlatList
              data={categoryArray}
              keyboardShouldPersistTaps="handled"
              style={{width: '50%', height: '100%'}}
              showsVerticalScrollIndicator={false}
              renderItem={({item: category}) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({selectedCategory: category.id})
                    }
                    style={{
                      backgroundColor:
                        selectedCategory == category.id ? '#fff' : '#F4F8F9',
                      height: 50,
                      width: '100%',

                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontFamily: 'HelveticaLight'}}>
                      {category.categoryName}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
            {/* <Text>Select all</Text> */}
            <FlatList
              data={subCategoryArray}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              style={{
                width: '50%',
                backgroundColor: selectedCategory ? '#fff' : '#F4F8F9',
              }}
              renderItem={({item: subCategory}) => {
                return selectedCategory == subCategory.mainId ? (
                    
                  <TouchableOpacity
                  
                  onPress={() =>
                      this.props.navigation.navigate('SignUp')
                    }
                    style={{
                      flexDirection: 'row',
                      height: 50,
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontFamily: 'HelveticaLight'}}>
                      {subCategory.categoryName}
                    </Text>
                    <CheckBox
                      onPress={() => this.selectSubCategory(subCategory.id)}
                      checked={selectedSubCatData.some(
                        (data) => data == subCategory.id,
                      )}
                      //checkedIcon={
                        //<Image source={require('../Assets/checked.png')} />
                      //}
                      //uncheckedIcon={
                       // <Image source={require('../Assets/unchecked.png')} />
                      //}
                    />
                  </TouchableOpacity>
                ) : null;
              }}
            />
          </View>
        </View>

        <View style={{height: height / 5,paddingTop: 50}}>
        
          <Button
            onPress={() => this.props.navigation.navigate('Profiles')}
            bgcolor="#33A532"
            btnwidth="45%">
            Apply{' '}
            
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
  },
  search_bar_view: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: '3%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#313D8A',
  },
  normal_text: {
    color: '#000',
    fontFamily: 'HelveticaLight',
    width: '90%',
    height: '100%',
  },
});

export default Selected;