import declare from 'dojo/_base/declare';
import BaseWidget from 'jimu/BaseWidget';

// To create a widget, you need to derive from BaseWidget.
export default declare([BaseWidget], {

  // Custom widget code goes here

  baseClass: 'hello-world',

  // add additional properties here

  // methods to communication with app container:
  postCreate () {
    this.inherited(arguments);
    console.log('HelloWorld::postCreate');
  }
  // startup() {
  //   this.inherited(arguments);
  //   console.log('HelloWorld::startup');
  // },
  // onOpen() {
  //   console.log('HelloWorld::onOpen');
  // },
  // onClose(){
  //   console.log('HelloWorld::onClose');
  // },
  // onMinimize(){
  //   console.log('HelloWorld::onMinimize');
  // },
  // onMaximize(){
  //   console.log('HelloWorld::onMaximize');
  // },
  // onSignIn(credential){
  //   console.log('HelloWorld::onSignIn', credential);
  // },
  // onSignOut(){
  //   console.log('HelloWorld::onSignOut');
  // }
  // onPositionChange(){
  //   console.log('HelloWorld::onPositionChange');
  // },
  // resize(){
  //   console.log('HelloWorld::resize');
  // }
});
