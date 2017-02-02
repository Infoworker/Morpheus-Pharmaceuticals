"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDom = require('react-dom');
var sp_core_library_1 = require('@microsoft/sp-core-library');
var sp_webpart_base_1 = require('@microsoft/sp-webpart-base');
var strings = require('zionStrings');
var Zion_1 = require('./components/Zion');
var ZionWebPart = (function (_super) {
    __extends(ZionWebPart, _super);
    function ZionWebPart() {
        _super.apply(this, arguments);
    }
    ZionWebPart.prototype.render = function () {
        var element = React.createElement(Zion_1.default, {
            title: this.properties.title,
            description: this.properties.description,
            url: this.properties.url
        });
        //var coolstuff: React.ReactElement<IZionProps> = React.createElement(Zion, ) = "<div><h1>Cool stuff</h1></div>"
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(ZionWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ZionWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('title', {
                                    label: 'Title'
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: 'Description',
                                    multiline: true
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('url', {
                                    label: 'URL'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return ZionWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ZionWebPart;

//# sourceMappingURL=ZionWebPart.js.map
