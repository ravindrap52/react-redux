import React, { Component } from "react";
import { connect } from "react-redux";
import { viewQuestion } from "../actions/viewQuestionAction";

export class Details extends Component {
  componentWillMount() {
    this.props.viewQuestion(this.props.match.params.id);
  }
  render() {
    let details;
    if (this.props.questions.choices && this.props.questions.choices.length) {
      details = this.props.questions.choices.map(choice => {
        return (
          <div className="details--container" key={choice.url}>
            <p className="caption text-center width">
              {" "}
              Choice: {choice.choice}
            </p>
            <p className="caption text-center width">Votes: {choice.votes}</p>
            <p className="caption text-center width">
              Percentage: {choice.votes / 100} %
            </p>
          </div>
        );
      });
    }

    return (
      <div>
        <h1 className="subHeading pb-8">Questions Detail</h1>
        <div className="pb-8">
          <span className="heading">Question:</span>{" "}
          <span className="heading">{this.props.questions.question}</span>
        </div>
        <div className="details">{details}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions.viewQuestion
});

export default connect(mapStateToProps, { viewQuestion })(Details);
