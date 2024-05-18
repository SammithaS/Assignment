"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const typescript_sdk_1 = require("@devrev/typescript-sdk");
function handleEvent(event) {
    return __awaiter(this, void 0, void 0, function* () {
        const devrevPAT = event.context.secrets.service_account_token;
        const API_BASE = event.execution_metadata.devrev_endpoint;
        const devrevSDK = typescript_sdk_1.client.setup({
            endpoint: API_BASE,
            token: devrevPAT,
        });
        const workCreated = event.payload.work_created.work;
        const priority = event.input_data.global_values.input_field_1;
        const body = {
            priority: priority,
            type: workCreated.type,
            id: workCreated.id
        };
        const response = yield devrevSDK.worksUpdate(body);
        return response;
    });
}
const run = (events) => __awaiter(void 0, void 0, void 0, function* () {
    console.info('events', JSON.stringify(events), '\n\n\n');
    for (let event of events) {
        const resp = yield handleEvent(event);
        console.log(JSON.stringify(resp.data));
    }
});
exports.run = run;
exports.default = exports.run;
