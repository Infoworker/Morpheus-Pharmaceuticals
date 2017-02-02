"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var office_ui_fabric_react_1 = require('office-ui-fabric-react');
var Zion_module_scss_1 = require('./Zion.module.scss');
var Zion = (function (_super) {
    __extends(Zion, _super);
    function Zion() {
        _super.apply(this, arguments);
    }
    Zion.prototype.render = function () {
        return (React.createElement("div", {className: Zion_module_scss_1.default.helloWorld}, 
            React.createElement("div", {className: Zion_module_scss_1.default.container}, 
                React.createElement("div", {className: office_ui_fabric_react_1.css('ms-Grid-row ms-bgColor-themeDark ms-fontColor-white', Zion_module_scss_1.default.row)}, 
                    React.createElement("div", {className: 'ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1'}, 
                        React.createElement("span", {className: 'ms-font-xl ms-fontColor-white'}, this.props.title), 
                        React.createElement("p", {className: 'ms-font-l ms-fontColor-white'}, "Customize SharePoint experiences using Web Parts."), 
                        React.createElement("p", {className: 'ms-font-l ms-fontColor-white'}, this.props.description), 
                        React.createElement("a", {className: office_ui_fabric_react_1.css('ms-Button', Zion_module_scss_1.default.button), href: this.props.url}, 
                            React.createElement("span", {className: 'ms-Button-label'}, "Learn more")
                        ))
                )
            )
        ));
    };
    return Zion;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Zion;

//# sourceMappingURL=Zion.js.map
