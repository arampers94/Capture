import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Content
} from 'native-base';
import realm, { updateNotePane, deleteNotePane, queryAllNotePanes, insertNewNote } from '../database/allSchemas';

//import styles
import { styles } from '../styles/stylesheet';

export default class ExistingNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      paneID: this.props.navigation.state.params.paneID,
      note: this.props.navigation.state.params.note,
    };
  }

  render() {
    const { goBack } = this.props.navigation;
    console.log('PANE ID OF ExistingNote=========', this.state.paneID);
    const slideAnimation = new SlideAnimation ({
      slideFrom: 'bottom',
    });

    return (
      <Container>

        <Header style={styles.headerStyle}>
          <Left>
            <Button
              transparent
              onPress={() => goBack()}
            >
              <Icon style={styles.iconStyle} name='arrow-back' />
            </Button>
          </Left>
          <Body style={styles.positionStyle}>
            <Text style={styles.textStyle}>
              Existing Header
            </Text>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => null}
            >
              <Icon type='Feather' name='edit' style={styles.iconStyle} />
            </Button>
          </Right>
        </Header>

        <Content>
          <Text> {this.state.note} </Text>
        </Content>

        <Footer style={styles.footerStyle}>
          <FooterTab style={styles.footerStyle}>
            <Button onPress={null} >
              <Icon type='Feather' name='trash-2' />
            </Button>
            <Button >
              <Icon type='Feather' name='edit-2' />
            </Button>
            <Button >
              <Icon type='Feather' name='image' />
            </Button>
            <Button>
              <Icon type='Feather' name='check' />
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}
