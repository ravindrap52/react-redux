import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuestions } from "../actions/questionsAction";
import { Link } from "react-router-dom";
import Card from "./Card";

export class Cards extends Component {
  componentWillMount() {
    this.props.fetchQuestions();
  }
  render() {
    return (
      <>
        <h1 className="subHeading pb-8">Questions</h1>
        <div className="card--container">
          {this.props.questions.map(question => {
            return (
              <Link key={question.url} to={`${question.url}`}>
                <Card question={question} />
              </Link>
            );
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions.questions
});

export default connect(mapStateToProps, { fetchQuestions })(Cards);
