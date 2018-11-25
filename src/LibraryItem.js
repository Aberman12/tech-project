import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./componenets/common";
import * as actions from "./actions";

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    console.log(this.props);
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <CardSection>
          <Text style={titleStyle}>{title}</Text>
        </CardSection>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(
  null,
  actions
)(ListItem);
