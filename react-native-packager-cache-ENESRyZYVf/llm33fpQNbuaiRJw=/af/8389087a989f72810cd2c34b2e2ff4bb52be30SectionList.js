/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SectionList
 * 
 */
'use strict';

var MetroListView=require('MetroListView');
var Platform=require('Platform');
var React=require('React');
var VirtualizedSectionList=require('VirtualizedSectionList');











































































































var defaultProps=babelHelpers.extends({},
VirtualizedSectionList.defaultProps,{
stickySectionHeadersEnabled:false});




/**
 * A performant interface for rendering sectioned lists, supporting the most handy features:
 *
 *  - Fully cross-platform.
 *  - Configurable viewability callbacks.
 *  - List header support.
 *  - List footer support.
 *  - Item separator support.
 *  - Section header support.
 *  - Section separator support.
 *  - Heterogeneous data and item rendering support.
 *  - Pull to Refresh.
 *  - Scroll loading.
 *
 * If you don't need section support and want a simpler interface, use
 * [`<FlatList>`](/react-native/docs/flatlist.html).
 *
 * If you need _sticky_ section header support, use `ListView` for now.
 *
 * Simple Examples:
 *
 *     <SectionList
 *       renderItem={({item}) => <ListItem title={item.title}}
 *       renderSectionHeader={({section}) => <H1 title={section.key} />}
 *       sections={[ // homogenous rendering between sections
 *         {data: [...], key: ...},
 *         {data: [...], key: ...},
 *         {data: [...], key: ...},
 *       ]}
 *     />
 *
 *     <SectionList
 *       sections={[ // heterogeneous rendering between sections
 *         {data: [...], key: ..., renderItem: ...},
 *         {data: [...], key: ..., renderItem: ...},
 *         {data: [...], key: ..., renderItem: ...},
 *       ]}
 *     />
 *
 * This is a convenience wrapper around [`<VirtualizedList>`](/react-native/docs/virtualizedlist.html),
 * and thus inherits the following caveats:
 *
 * - Internal state is not preserved when content scrolls out of the render window. Make sure all
 *   your data is captured in the item data or external stores like Flux, Redux, or Relay.
 * - This is a `PureComponent` which means that it will not re-render if `props` remain shallow-
 *   equal. Make sure that everything your `renderItem` function depends on is passed as a prop that
 *   is not `===` after updates, otherwise your UI may not update on changes. This includes the
 *   `data` prop and parent component state.
 * - In order to constrain memory and enable smooth scrolling, content is rendered asynchronously
 *   offscreen. This means it's possible to scroll faster than the fill rate ands momentarily see
 *   blank content. This is a tradeoff that can be adjusted to suit the needs of each application,
 *   and we are working on improving it behind the scenes.
 * - By default, the list looks for a `key` prop on each item and uses that for the React key.
 *   Alternatively, you can provide a custom `keyExtractor` prop.
 */var
SectionList=function(_React$PureComponent){babelHelpers.inherits(SectionList,_React$PureComponent);function SectionList(){babelHelpers.classCallCheck(this,SectionList);return babelHelpers.possibleConstructorReturn(this,(SectionList.__proto__||Object.getPrototypeOf(SectionList)).apply(this,arguments));}babelHelpers.createClass(SectionList,[{key:"render",value:function render()





{
var List=this.props.legacyImplementation?MetroListView:VirtualizedSectionList;
return React.createElement(List,this.props);
}}]);return SectionList;}(React.PureComponent);SectionList.defaultProps=defaultProps;


module.exports=SectionList;