import React from "react";
import { bindActionCreators } from 'redux';
import * as actions from "./actions";
import { connect } from "react-redux";


class GlossaryTable extends React.Component {
  render() {
    let words = this.props.words;
    let isSortedAZ = this.props.isSortedAZ;

    return (
      <div className="glossaryTable">
        <div className="header">
          <h1>Glossary</h1>
          
          <button onClick={this.props.clickSort.bind(null, this.props)} className="btn btn-primary m-2">Sort</button>
          <button onClick={this.props.clickRemDup.bind(null, this.props)} className="btn btn-primary">Remove Duplicates</button>
        
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>English</th>
              <th>French</th>
            </tr>
          </thead>
          <tbody>
            {words.map((w, i) =>
              <tr key={i}>
                <td>{w.english}</td>
                <td>{w.french}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    words: state.words,
    isSortedAZ: state.isSortedAZ
  }
}


function mapDispatchToProps(dispatch){
 return bindActionCreators(actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(GlossaryTable);
