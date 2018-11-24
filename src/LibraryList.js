import React, { Component } from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import ListItem from "./LibraryItem";

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    console.log(this.props);
    return (
      <FlatList
        keyExtractor={library => library.id}
        data={this.props.libraries}
        renderItem={this.renderItem}
      />
    );
  }
}
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
