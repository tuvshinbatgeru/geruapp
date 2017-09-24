import React, { Component } from 'react';
import { View, Image, TouchableHighlightm, Platform } from 'react-native';
import Injector from 'react-native-injectable-component';
import ImageLoader from 'react-native-smart-image-loader'

export default function Brick (props) {
  // Avoid margins for first element
  const image = (props.onPress) ? _getTouchableUnit(props, props.gutter) : _getImageTag(props, props.gutter);
  const footer = (props.renderFooter) ? props.renderFooter(props.data) : null;
  const header = (props.renderHeader) ? props.renderHeader(props.data) : null;
  const overlay = _getOverlay(props, props.gutter); 
  
  return (
    <View key={props.brickKey} style={{ paddingHorizontal: 8, }}>
      {header}
      <View style={{ overflow: 'hidden', marginTop: props.gutter, width: props.width - 16, height: props.height, borderRadius: 15, backgroundColor: '#aecaec'}}>
        {image}
        {overlay}
      </View>
      {footer}
    </View>
  );
}

export function _getOverlay(props, gutter = 0) {
   const borderRadius = 15
   const defaultProps = {
      position: 'absolute',
      top: -borderRadius,
      bottom: -borderRadius,
      right: -borderRadius,
      left: -borderRadius,
      borderRadius: borderRadius,
      borderWidth: borderRadius,
      borderColor: '#fff'
   }

   return <View style={defaultProps}/>
}

// _getImageTag :: Image, Gutter -> Imag.eTag
export function _getImageTag (props, gutter = 0) {
  const imageProps = {
    key: props.uri,
    source: {
      uri: props.uri
    },
    borderRadius: 5,
    resizeMethod: 'auto',
    style: {
       ...props.imageContainerStyle,
       flex: 1,
       width: null,
       height: null,
       //width: props.width - 16,
       //height: props.height,
       //marginTop: gutter,
       borderRadius: 5,
    },
    options: {
      src: props.uri, 
      rowID: props.uri,
      placeholder: Platform.OS == 'ios' ? 'goods-placeholder' : 'goods_placeholder',
    }
  };

  return (
    <Injector
      defaultComponent={Image}
      defaultProps={imageProps}
      injectant={props.customImageComponent}
      injectantProps={props.customImageProps} />
  )
}

// _getTouchableUnit :: Image, Number -> TouchableTag
export function _getTouchableUnit (image, gutter = 0) {
  return (
      <TouchableHighlight
         key={image.uri}
         onPress={() => image.onPress(image.data)}>
            { _getImageTag(image, gutter) }
      </TouchableHighlight>
  );
}
