function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
var getRandomCharacter = require('randomCharacter');
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Button } from 'react-native';
import { Colors, Header, LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function Section(_ref) {
  var children = _ref.children,
    title = _ref.title;
  var isDarkMode = useColorScheme() === 'dark';
  return /*#__PURE__*/_jsxs(View, {
    style: styles.sectionContainer,
    children: [/*#__PURE__*/_jsx(Text, {
      style: [styles.sectionTitle, {
        color: isDarkMode ? Colors.white : Colors.black
      }],
      children: title
    }), /*#__PURE__*/_jsx(Text, {
      style: [styles.sectionDescription, {
        color: isDarkMode ? Colors.light : Colors.dark
      }],
      children: children
    })]
  });
}

// Define a few sample functions (f1 through f5)
function f1() {
  return "Function 1 is called.";
}
function f2() {
  return "Function 2 is called.";
}
function f3() {
  return "Function 3 is called.";
}
function f4() {
  return "Function 4 is called.";
}
function f5() {
  return "Function 5 is called.";
}
function App() {
  var isDarkMode = useColorScheme() === 'dark';
  var backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };
  var getDummyValue = function getDummyValue() {
    var x = 42; // Replace 42 with your desired value
    return x;
  };
  var result = getDummyValue();
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];

  // A function to increment the count
  var incrementCount = function incrementCount() {
    setCount(count + 1);
  };
  var randomChar = getRandomCharacter();
  return /*#__PURE__*/_jsxs(SafeAreaView, {
    style: backgroundStyle,
    children: [/*#__PURE__*/_jsx(StatusBar, {
      barStyle: isDarkMode ? 'light-content' : 'dark-content',
      backgroundColor: backgroundStyle.backgroundColor
    }), /*#__PURE__*/_jsxs(ScrollView, {
      contentInsetAdjustmentBehavior: "automatic",
      style: backgroundStyle,
      children: [/*#__PURE__*/_jsx(Header, {}), /*#__PURE__*/_jsxs(View, {
        style: {
          backgroundColor: isDarkMode ? Colors.black : Colors.white
        },
        children: [/*#__PURE__*/_jsxs(Section, {
          title: "Step One",
          children: ["Dummy value is ", result]
        }), /*#__PURE__*/_jsx(Section, {
          title: "See Your Changes",
          children: f1()
        }), /*#__PURE__*/_jsx(Section, {
          title: "Debug",
          children: f2()
        }), /*#__PURE__*/_jsx(Section, {
          title: "Learn More",
          children: f3()
        }), /*#__PURE__*/_jsx(Section, {
          title: "Custom Function 4",
          children: f4()
        }), /*#__PURE__*/_jsx(Section, {
          title: "Custom Function 5",
          children: f5()
        }), /*#__PURE__*/_jsxs(Text, {
          children: ["Count: ", count]
        }), /*#__PURE__*/_jsx(Button, {
          title: "Increment",
          onPress: incrementCount
        }), /*#__PURE__*/_jsx(LearnMoreLinks, {})]
      })]
    })]
  });
}
var styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400'
  },
  highlight: {
    fontWeight: '700'
  }
});
export default App;