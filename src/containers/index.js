import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, List, Skeleton, Avatar } from "antd";
import * as Sentry from "@sentry/browser";
import getList from "../store/actions/getList";

const Search = Input.Search;

const mapState = state => ({
  list: state.root.list,
  loading: state.root.loading
});

const mapDispatch = {
  getList
};

class Container extends Component {
  constructor(props) {
    super(props);

    Sentry.init({
      release: "foo",
      dsn: "https://fc0edcf6927a4397855797a033f04085@sentry.io/1417586",.gitignore
      // integrations: [new Sentry.Integrations.RewriteFrames()]
    });
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    console.log("error, errorInfo", { error, errorInfo });
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }
  render() {
    const { list, loading, getList } = this.props;
    const user = undefined;
    return (
      <div className="App">
        <button
          type="button"
          onClick={() => {
            console.log(user.email);
          }}
        >
          test error1
        </button>
        <div onClick={() => Sentry.showReportDialog()}>Report feedback1</div>
        <h1>Music Finder</h1>
        <br />
        <Search onSearch={value => getList(value)} enterButton />
        {loading && <Skeleton avatar title={false} loading={true} active />}
        {!loading && (
          <List
            itemLayout="horizontal"
            dataSource={list}
            locale={{ emptyText: <div /> }}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.artist.picture} />}
                  title={item.title}
                  description={item.artist.name}
                />
              </List.Item>
            )}
          />
        )}
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(Container);
