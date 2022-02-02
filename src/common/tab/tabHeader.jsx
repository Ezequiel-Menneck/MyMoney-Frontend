import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectTab } from "./tabActions";

class TabHeader extends Component {
    render() {
        return (
            <li>
                <a
                    href="javascript:;"
                    data-toggle="tab"
                    onClick={() => this.props.selectTab(this.props.target)}
                    data-target={this.props.target}
                >
                    <i className={`fa fa-${this.props.icon}`}></i>
                    {this.props.label}
                </a>
            </li>
        );
    }
}

const mapStateToProps = (state) => ({ tab: state.tab });
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ selectTab }, dispatch);
export default connect(mapDispatchToProps, mapDispatchToProps)(TabHeader);
