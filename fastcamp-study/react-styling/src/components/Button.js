import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default class Button extends React.Component {
  state = {
    loading: false,
  };

  click = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };
  render() {
    const { loading } = this.state;
    return (
      <button className={cx("button", { loading })} onClick={this.click}>
        버튼 {this.state.loading && "로딩 중..."}
      </button>
    );
  }
}
