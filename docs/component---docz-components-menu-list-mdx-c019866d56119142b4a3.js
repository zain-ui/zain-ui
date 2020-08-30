(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{tsz9:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return f})),n.d(t,"default",(function(){return T}));var i=n("Fcif"),l=n("+I+c"),r=n("/FXl"),o=n("TjRS"),s=n("ZFoC"),u=n("/NZN"),a=n("bzer"),f=(n("aD51"),{});void 0!==f&&f&&f===Object(f)&&Object.isExtensible(f)&&!f.hasOwnProperty("__filemeta")&&Object.defineProperty(f,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docz/Components/MenuList.mdx"}});var c={_frontmatter:f},m=o.a;function T(e){var t,n=e.components,T=Object(l.a)(e,["components"]);return Object(r.b)(m,Object(i.a)({},c,T,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"menulist"},"MenuList"),Object(r.b)("p",null,"MenuList"),Object(r.b)("h2",{id:"zain-ui-menulist"},"Zain UI MenuList"),Object(r.b)(s.c,{__position:0,__code:"() => {\n  /**\n   * 文件菜单栏\n   */\n  const fileMenuListItem = [\n    { key: '1', leftText: 'New File', rightText: 'Ctrl+N' },\n    { key: '2', leftText: 'New Window', rightText: 'Ctrl+Shift+N' },\n    { splitLine: true },\n    { key: '3', leftText: 'Open File...', rightText: 'Ctrl+O' },\n    { key: '4', leftText: 'Open Folder...', rightText: 'Ctrl+K Ctrl+O' },\n    {\n      key: '5',\n      leftText: 'Open Recent',\n      menuListItems: [\n        {\n          key: '5-1',\n          leftText: 'Reopen Closed Editor',\n          rightText: 'Ctrl+Shift+T',\n          menuListItems: [\n            {\n              key: '5-1-1',\n              leftText: 'Reopen Closed Editor',\n              rightText: 'Ctrl+Shift+T',\n            },\n            { splitLine: true },\n            { key: '5-1-2', leftText: 'D:\\\\Documents\\\\Git\\\\Zain\\\\zainote' },\n            {\n              key: '5-1-3',\n              leftText: 'D:\\\\Documents\\\\Git\\\\Zain\\\\zainote.github.io',\n            },\n            { key: '5-1-4', leftText: 'D:\\\\Documents\\\\Git\\\\Zain\\\\vscode' },\n            { splitLine: true },\n            { key: '5-1-5', leftText: 'More...', rightText: 'Ctrl+R' },\n            { splitLine: true },\n            { key: '5-1-6', leftText: 'Clear Recently Opened' },\n          ],\n        },\n        { splitLine: true },\n        { key: '5-2', leftText: 'D:\\\\Documents\\\\Git\\\\Zain\\\\zainote' },\n        {\n          key: '5-3',\n          leftText: 'D:\\\\Documents\\\\Git\\\\Zain\\\\zainote.github.io',\n        },\n        { key: '5-4', leftText: 'D:\\\\Documents\\\\Git\\\\Zain\\\\vscode' },\n        { splitLine: true },\n        { key: '5-5', leftText: 'More...', rightText: 'Ctrl+R' },\n        { splitLine: true },\n        { key: '5-6', leftText: 'Clear Recently Opened' },\n      ],\n    },\n    { splitLine: true },\n    { key: '6', leftText: 'Save', rightText: 'Ctrl+S' },\n    { key: '7', leftText: 'Save As...', rightText: 'Ctrl+Shift+S' },\n  ]\n  menuListItemReturn = menuListItemReturn => {\n    console.log('zain>>>>>menuListItemReturn', menuListItemReturn)\n  }\n  return (\n    <>\n      <MenuList\n        menuListItems={fileMenuListItem}\n        onClickMenuListItem={menuListItemReturn}\n      >\n        <Button variant=\"contained\" color=\"primary\">\n          Menu List\n        </Button>\n      </MenuList>\n    </>\n  )\n}",__scope:(t={props:T,DefaultLayout:o.a,Playground:s.c,Props:s.d,Button:u.a,MenuList:a.a},t.DefaultLayout=o.a,t._frontmatter=f,t),mdxType:"Playground"},(function(){return menuListItemReturn=function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){console.log("zain>>>>>menuListItemReturn",e)})),Object(r.b)(React.Fragment,null,Object(r.b)(a.a,{menuListItems:[{key:"1",leftText:"New File",rightText:"Ctrl+N"},{key:"2",leftText:"New Window",rightText:"Ctrl+Shift+N"},{splitLine:!0},{key:"3",leftText:"Open File...",rightText:"Ctrl+O"},{key:"4",leftText:"Open Folder...",rightText:"Ctrl+K Ctrl+O"},{key:"5",leftText:"Open Recent",menuListItems:[{key:"5-1",leftText:"Reopen Closed Editor",rightText:"Ctrl+Shift+T",menuListItems:[{key:"5-1-1",leftText:"Reopen Closed Editor",rightText:"Ctrl+Shift+T"},{splitLine:!0},{key:"5-1-2",leftText:"D:\\Documents\\Git\\Zain\\zainote"},{key:"5-1-3",leftText:"D:\\Documents\\Git\\Zain\\zainote.github.io"},{key:"5-1-4",leftText:"D:\\Documents\\Git\\Zain\\vscode"},{splitLine:!0},{key:"5-1-5",leftText:"More...",rightText:"Ctrl+R"},{splitLine:!0},{key:"5-1-6",leftText:"Clear Recently Opened"}]},{splitLine:!0},{key:"5-2",leftText:"D:\\Documents\\Git\\Zain\\zainote"},{key:"5-3",leftText:"D:\\Documents\\Git\\Zain\\zainote.github.io"},{key:"5-4",leftText:"D:\\Documents\\Git\\Zain\\vscode"},{splitLine:!0},{key:"5-5",leftText:"More...",rightText:"Ctrl+R"},{splitLine:!0},{key:"5-6",leftText:"Clear Recently Opened"}]},{splitLine:!0},{key:"6",leftText:"Save",rightText:"Ctrl+S"},{key:"7",leftText:"Save As...",rightText:"Ctrl+Shift+S"}],onClickMenuListItem:menuListItemReturn,mdxType:"MenuList"},Object(r.b)(u.a,{variant:"contained",color:"primary",mdxType:"Button"},"Menu List")))})),Object(r.b)("h2",{id:"menulist-props"},"MenuList Props"),Object(r.b)(s.d,{of:a.a,mdxType:"Props"}))}void 0!==T&&T&&T===Object(T)&&Object.isExtensible(T)&&!T.hasOwnProperty("__filemeta")&&Object.defineProperty(T,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docz/Components/MenuList.mdx"}}),T.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docz-components-menu-list-mdx-c019866d56119142b4a3.js.map