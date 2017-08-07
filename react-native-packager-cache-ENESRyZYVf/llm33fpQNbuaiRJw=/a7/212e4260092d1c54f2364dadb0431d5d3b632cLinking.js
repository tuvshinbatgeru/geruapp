/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Linking
 * 
 */
'use strict';

var NativeEventEmitter=require('NativeEventEmitter');
var NativeModules=require('NativeModules');
var Platform=require('Platform');

var invariant=require('fbjs/lib/invariant');

var LinkingManager=
NativeModules.IntentAndroid;

/**
 * `Linking` gives you a general interface to interact with both incoming
 * and outgoing app links.
 *
 * ### Basic Usage
 *
 * #### Handling deep links
 *
 * If your app was launched from an external url registered to your app you can
 * access and handle it from any component you want with
 *
 * ```
 * componentDidMount() {
 *   Linking.getInitialURL().then((url) => {
 *     if (url) {
 *       console.log('Initial url is: ' + url);
 *     }
 *   }).catch(err => console.error('An error occurred', err));
 * }
 * ```
 *
 * NOTE: For instructions on how to add support for deep linking on Android,
 * refer to [Enabling Deep Links for App Content - Add Intent Filters for Your Deep Links](http://developer.android.com/training/app-indexing/deep-linking.html#adding-filters).
 *
 * If you wish to receive the intent in an existing instance of MainActivity,
 * you may set the `launchMode` of MainActivity to `singleTask` in
 * `AndroidManifest.xml`. See [`<activity>`](http://developer.android.com/guide/topics/manifest/activity-element.html)
 * documentation for more information.
 *
 * ```
 * <activity
 *   android:name=".MainActivity"
 *   android:launchMode="singleTask">
 * ```
 *
 * NOTE: On iOS you'll need to link `RCTLinking` to your project by following
 * the steps described [here](docs/linking-libraries-ios.html#manual-linking).
 * In case you also want to listen to incoming app links during your app's
 * execution you'll need to add the following lines to you `*AppDelegate.m`:
 *
 * ```
 * #import <React/RCTLinkingManager.h>
 *
 * - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
 *   sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
 * {
 *   return [RCTLinkingManager application:application openURL:url
 *                       sourceApplication:sourceApplication annotation:annotation];
 * }
 *
 * // Only if your app is using [Universal Links](https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html).
 * - (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity
 *  restorationHandler:(void (^)(NSArray * _Nullable))restorationHandler
 * {
 *  return [RCTLinkingManager application:application
 *                   continueUserActivity:userActivity
 *                     restorationHandler:restorationHandler];
 * }
 *
 * ```
 *
 * And then on your React component you'll be able to listen to the events on
 * `Linking` as follows
 *
 * ```
 * componentDidMount() {
 *   Linking.addEventListener('url', this._handleOpenURL);
 * },
 * componentWillUnmount() {
 *   Linking.removeEventListener('url', this._handleOpenURL);
 * },
 * _handleOpenURL(event) {
 *   console.log(event.url);
 * }
 * ```
 * #### Opening external links
 *
 * To start the corresponding activity for a link (web URL, email, contact etc.), call
 *
 * ```
 * Linking.openURL(url).catch(err => console.error('An error occurred', err));
 * ```
 *
 * If you want to check if any installed app can handle a given URL beforehand you can call
 * ```
 * Linking.canOpenURL(url).then(supported => {
 *   if (!supported) {
 *     console.log('Can\'t handle url: ' + url);
 *   } else {
 *     return Linking.openURL(url);
 *   }
 * }).catch(err => console.error('An error occurred', err));
 * ```
 */var
Linking=function(_NativeEventEmitter){babelHelpers.inherits(Linking,_NativeEventEmitter);

function Linking(){babelHelpers.classCallCheck(this,Linking);return babelHelpers.possibleConstructorReturn(this,(Linking.__proto__||Object.getPrototypeOf(Linking)).call(this,
LinkingManager));
}

/**
   * Add a handler to Linking changes by listening to the `url` event type
   * and providing the handler
   */babelHelpers.createClass(Linking,[{key:"addEventListener",value:function addEventListener(
type,handler){
this.addListener(type,handler);
}

/**
   * Remove a handler by passing the `url` event type and the handler
   */},{key:"removeEventListener",value:function removeEventListener(
type,handler){
this.removeListener(type,handler);
}

/**
   * Try to open the given `url` with any of the installed apps.
   *
   * You can use other URLs, like a location (e.g. "geo:37.484847,-122.148386" on Android
   * or "http://maps.apple.com/?ll=37.484847,-122.148386" on iOS), a contact,
   * or any other URL that can be opened with the installed apps.
   *
   * NOTE: This method will fail if the system doesn't know how to open the specified URL.
   * If you're passing in a non-http(s) URL, it's best to check {@code canOpenURL} first.
   *
   * NOTE: For web URLs, the protocol ("http://", "https://") must be set accordingly!
   */},{key:"openURL",value:function openURL(
url){
this._validateURL(url);
return LinkingManager.openURL(url);
}

/**
   * Determine whether or not an installed app can handle a given URL.
   *
   * NOTE: For web URLs, the protocol ("http://", "https://") must be set accordingly!
   *
   * NOTE: As of iOS 9, your app needs to provide the `LSApplicationQueriesSchemes` key
   * inside `Info.plist` or canOpenURL will always return false.
   *
   * @param URL the URL to open
   */},{key:"canOpenURL",value:function canOpenURL(
url){
this._validateURL(url);
return LinkingManager.canOpenURL(url);
}

/**
   * If the app launch was triggered by an app link,
   * it will give the link url, otherwise it will give `null`
   *
   * NOTE: To support deep linking on Android, refer http://developer.android.com/training/app-indexing/deep-linking.html#handling-intents
   */},{key:"getInitialURL",value:function getInitialURL()
{
return LinkingManager.getInitialURL();
}},{key:"_validateURL",value:function _validateURL(

url){
invariant(
typeof url==='string',
'Invalid URL: should be a string. Was: '+url);

invariant(
url,
'Invalid URL: cannot be empty');

}}]);return Linking;}(NativeEventEmitter);


module.exports=new Linking();