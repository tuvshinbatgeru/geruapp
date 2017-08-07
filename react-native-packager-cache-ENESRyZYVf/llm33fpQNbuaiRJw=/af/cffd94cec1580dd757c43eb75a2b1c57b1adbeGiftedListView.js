'use strict';

var React = require('react');

var _require = require('react-native'),
    ListView = _require.ListView,
    Platform = _require.Platform,
    TouchableHighlight = _require.TouchableHighlight,
    View = _require.View,
    Text = _require.Text,
    RefreshControl = _require.RefreshControl;

function MergeRecursive(obj1, obj2) {
  for (var p in obj2) {
    try {
      if (obj2[p].constructor == Object) {
        obj1[p] = MergeRecursive(obj1[p], obj2[p]);
      } else {
        obj1[p] = obj2[p];
      }
    } catch (e) {
      obj1[p] = obj2[p];
    }
  }
  return obj1;
}

var GiftedSpinner = require('react-native-gifted-spinner');

var GiftedListView = React.createClass({
  displayName: 'GiftedListView',
  getDefaultProps: function getDefaultProps() {
    return {
      customStyles: {},
      initialListSize: 10,
      firstLoader: true,
      pagination: true,
      refreshable: true,
      refreshableColors: undefined,
      refreshableProgressBackgroundColor: undefined,
      refreshableSize: undefined,
      refreshableTitle: undefined,
      refreshableTintColor: undefined,
      renderRefreshControl: null,
      headerView: null,
      sectionHeaderView: null,
      scrollEnabled: true,
      withSections: false,
      onFetch: function onFetch(page, callback, options) {
        callback([]);
      },


      paginationFetchingView: null,
      paginationAllLoadedView: null,
      paginationWaitingView: null,
      emptyView: null,
      renderSeparator: null
    };
  },


  propTypes: {
    customStyles: React.PropTypes.object,
    initialListSize: React.PropTypes.number,
    firstLoader: React.PropTypes.bool,
    pagination: React.PropTypes.bool,
    refreshable: React.PropTypes.bool,
    refreshableColors: React.PropTypes.array,
    refreshableProgressBackgroundColor: React.PropTypes.string,
    refreshableSize: React.PropTypes.string,
    refreshableTitle: React.PropTypes.string,
    refreshableTintColor: React.PropTypes.string,
    renderRefreshControl: React.PropTypes.func,
    headerView: React.PropTypes.func,
    sectionHeaderView: React.PropTypes.func,
    scrollEnabled: React.PropTypes.bool,
    withSections: React.PropTypes.bool,
    onFetch: React.PropTypes.func,

    paginationFetchingView: React.PropTypes.func,
    paginationAllLoadedView: React.PropTypes.func,
    paginationWaitingView: React.PropTypes.func,
    emptyView: React.PropTypes.func,
    renderSeparator: React.PropTypes.func
  },

  _setPage: function _setPage(page) {
    this._page = page;
  },
  _getPage: function _getPage() {
    return this._page;
  },
  _setRows: function _setRows(rows) {
    this._rows = rows;
  },
  _getRows: function _getRows() {
    return this._rows;
  },
  paginationFetchingView: function paginationFetchingView() {
    if (this.props.paginationFetchingView) {
      return this.props.paginationFetchingView();
    }

    return React.createElement(
      View,
      { style: [this.defaultStyles.paginationView, this.props.customStyles.paginationView] },
      React.createElement(GiftedSpinner, null)
    );
  },
  paginationAllLoadedView: function paginationAllLoadedView() {
    if (this.props.paginationAllLoadedView) {
      return this.props.paginationAllLoadedView();
    }

    return React.createElement(
      View,
      { style: [this.defaultStyles.paginationView, this.props.customStyles.paginationView] },
      React.createElement(
        Text,
        { style: [this.defaultStyles.actionsLabel, this.props.customStyles.actionsLabel] },
        '~'
      )
    );
  },
  paginationWaitingView: function paginationWaitingView(paginateCallback) {
    if (this.props.paginationWaitingView) {
      return this.props.paginationWaitingView(paginateCallback);
    }

    return React.createElement(
      TouchableHighlight,
      {
        underlayColor: '#c8c7cc',
        onPress: paginateCallback,
        style: [this.defaultStyles.paginationView, this.props.customStyles.paginationView]
      },
      React.createElement(
        Text,
        { style: [this.defaultStyles.actionsLabel, this.props.customStyles.actionsLabel] },
        'Load more'
      )
    );
  },
  headerView: function headerView() {
    if (this.state.paginationStatus === 'firstLoad' || !this.props.headerView) {
      return null;
    }
    return this.props.headerView();
  },
  emptyView: function emptyView(refreshCallback) {
    if (this.props.emptyView) {
      return this.props.emptyView(refreshCallback);
    }

    return React.createElement(
      View,
      { style: [this.defaultStyles.defaultView, this.props.customStyles.defaultView] },
      React.createElement(
        Text,
        { style: [this.defaultStyles.defaultViewTitle, this.props.customStyles.defaultViewTitle] },
        'Sorry, there is no content to display'
      ),
      React.createElement(
        TouchableHighlight,
        {
          underlayColor: '#c8c7cc',
          onPress: refreshCallback
        },
        React.createElement(
          Text,
          null,
          '\u21BB'
        )
      )
    );
  },
  renderSeparator: function renderSeparator() {
    if (this.props.renderSeparator) {
      return this.props.renderSeparator();
    }

    return React.createElement(View, { style: [this.defaultStyles.separator, this.props.customStyles.separator] });
  },
  getInitialState: function getInitialState() {
    this._setPage(1);
    this._setRows([]);

    var ds = null;
    if (this.props.withSections === true) {
      ds = new ListView.DataSource({
        rowHasChanged: function rowHasChanged(row1, row2) {
          return row1 !== row2;
        },
        sectionHeaderHasChanged: function sectionHeaderHasChanged(section1, section2) {
          return section1 !== section2;
        }
      });
      return {
        dataSource: ds.cloneWithRowsAndSections(this._getRows()),
        isRefreshing: false,
        paginationStatus: 'firstLoad'
      };
    } else {
      ds = new ListView.DataSource({
        rowHasChanged: function rowHasChanged(row1, row2) {
          return row1 !== row2;
        }
      });
      return {
        dataSource: ds.cloneWithRows(this._getRows()),
        isRefreshing: false,
        paginationStatus: 'firstLoad'
      };
    }
  },
  componentDidMount: function componentDidMount() {
    this.props.onFetch(this._getPage(), this._postRefresh, { firstLoad: true });
  },
  setNativeProps: function setNativeProps(props) {
    this.refs.listview.setNativeProps(props);
  },
  _refresh: function _refresh() {
    this._onRefresh({ external: true });
  },
  _onRefresh: function _onRefresh() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (this.isMounted()) {
      this.setState({
        isRefreshing: true
      });
      this._setPage(1);
      this.props.onFetch(this._getPage(), this._postRefresh, options);
    }
  },
  _postRefresh: function _postRefresh() {
    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.isMounted()) {
      this._updateRows(rows, options);
    }
  },
  _onPaginate: function _onPaginate() {
    if (this.state.paginationStatus === 'allLoaded') {
      return null;
    } else {
      this.setState({
        paginationStatus: 'fetching'
      });
      this.props.onFetch(this._getPage() + 1, this._postPaginate, {});
    }
  },
  _postPaginate: function _postPaginate() {
    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    this._setPage(this._getPage() + 1);
    var mergedRows = null;
    if (this.props.withSections === true) {
      mergedRows = MergeRecursive(this._getRows(), rows);
    } else {
      mergedRows = this._getRows().concat(rows);
    }
    this._updateRows(mergedRows, options);
  },
  _updateRows: function _updateRows() {
    var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (rows !== null) {
      this._setRows(rows);
      if (this.props.withSections === true) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRowsAndSections(rows),
          isRefreshing: false,
          paginationStatus: options.allLoaded === true ? 'allLoaded' : 'waiting'
        });
      } else {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(rows),
          isRefreshing: false,
          paginationStatus: options.allLoaded === true ? 'allLoaded' : 'waiting'
        });
      }
    } else {
      this.setState({
        isRefreshing: false,
        paginationStatus: options.allLoaded === true ? 'allLoaded' : 'waiting'
      });
    }
  },
  _renderPaginationView: function _renderPaginationView() {
    if (this.state.paginationStatus === 'fetching' && this.props.pagination === true || this.state.paginationStatus === 'firstLoad' && this.props.firstLoader === true) {
      return this.paginationFetchingView();
    } else if (this.state.paginationStatus === 'waiting' && this.props.pagination === true && (this.props.withSections === true || this._getRows().length > 0)) {
      return this.paginationWaitingView(this._onPaginate);
    } else if (this.state.paginationStatus === 'allLoaded' && this.props.pagination === true) {
      return this.paginationAllLoadedView();
    } else if (this._getRows().length === 0) {
      return this.emptyView(this._onRefresh);
    } else {
      return null;
    }
  },
  renderRefreshControl: function renderRefreshControl() {
    if (this.props.renderRefreshControl) {
      return this.props.renderRefreshControl({ onRefresh: this._onRefresh });
    }
    return React.createElement(RefreshControl, {
      onRefresh: this._onRefresh,
      refreshing: this.state.isRefreshing,
      colors: this.props.refreshableColors,
      progressBackgroundColor: this.props.refreshableProgressBackgroundColor,
      size: this.props.refreshableSize,
      tintColor: this.props.refreshableTintColor,
      title: this.props.refreshableTitle
    });
  },
  render: function render() {
    return React.createElement(ListView, babelHelpers.extends({
      ref: 'listview',
      dataSource: this.state.dataSource,
      renderRow: this.props.rowView,
      renderSectionHeader: this.props.sectionHeaderView,
      renderHeader: this.headerView,
      renderFooter: this._renderPaginationView,
      renderSeparator: this.renderSeparator,

      automaticallyAdjustContentInsets: false,
      scrollEnabled: this.props.scrollEnabled,
      canCancelContentTouches: true,
      refreshControl: this.props.refreshable === true ? this.renderRefreshControl() : null

    }, this.props, {

      style: this.props.style
    }));
  },


  defaultStyles: {
    separator: {
      height: 1,
      backgroundColor: '#CCC'
    },
    actionsLabel: {
      fontSize: 20
    },
    paginationView: {
      height: 44,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF'
    },
    defaultView: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
    },
    defaultViewTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 15
    }
  }
});

module.exports = GiftedListView;