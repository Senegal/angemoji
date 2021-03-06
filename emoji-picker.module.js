"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var emoji_input_component_1 = require("./src/emoji-input/emoji-input.component");
var emoji_service_1 = require("./src/emoji.service");
var EmojiPickerModule = /** @class */ (function () {
    function EmojiPickerModule() {
    }
    EmojiPickerModule.forRoot = function () {
        return {
            ngModule: EmojiPickerModule,
            providers: [
                emoji_service_1.EmojiService
            ]
        };
    };
    EmojiPickerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        forms_1.FormsModule
                    ],
                    declarations: [
                        emoji_input_component_1.EmojiInputComponent
                    ],
                    providers: [
                        emoji_service_1.EmojiService
                    ],
                    exports: [
                        emoji_input_component_1.EmojiInputComponent
                    ],
                    schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
                },] },
    ];
    /** @nocollapse */
    EmojiPickerModule.ctorParameters = function () { return []; };
    return EmojiPickerModule;
}());
exports.EmojiPickerModule = EmojiPickerModule;
//# sourceMappingURL=emoji-picker.module.js.map