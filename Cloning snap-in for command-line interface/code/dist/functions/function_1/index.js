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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const axios_1 = __importDefault(require("axios"));
const readline_1 = __importDefault(require("readline"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const input = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const Token = process.env.TOKEN; // Replace with your actual access token
    if (!Token) {
        console.error('TOKEN is not defined in the .env file');
        return;
    }
    const token = 'eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzJlRHFnakhsMzM6ZGV2dS8xIiwiZXhwIjoxODEwNDAxMjM3LCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VpZCI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by9zdXBlcjphdXRoMF91c2VyL2dvb2dsZS1vYXV0aDJ8MTA4NDg1MzU5ODYxMzE5NDk3NzcwIiwiaHR0cDovL2RldnJldi5haS9hdXRoMF91c2VyX2lkIjoiZ29vZ2xlLW9hdXRoMnwxMDg0ODUzNTk4NjEzMTk0OTc3NzAiLCJodHRwOi8vZGV2cmV2LmFpL2Rldm9fZG9uIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzJlRHFnakhsMzMiLCJodHRwOi8vZGV2cmV2LmFpL2Rldm9pZCI6IkRFVi0yZURxZ2pIbDMzIiwiaHR0cDovL2RldnJldi5haS9kZXZ1aWQiOiJERVZVLTEiLCJodHRwOi8vZGV2cmV2LmFpL2Rpc3BsYXluYW1lIjoiNG5tMjBjczE1MSIsImh0dHA6Ly9kZXZyZXYuYWkvZW1haWwiOiI0bm0yMGNzMTUxQG5tYW1pdC5pbiIsImh0dHA6Ly9kZXZyZXYuYWkvZnVsbG5hbWUiOiIgU0FNTUlUSEEgUyBQT09KQVJZIiwiaHR0cDovL2RldnJldi5haS9pc192ZXJpZmllZCI6dHJ1ZSwiaHR0cDovL2RldnJldi5haS90b2tlbnR5cGUiOiJ1cm46ZGV2cmV2OnBhcmFtczpvYXV0aDp0b2tlbi10eXBlOnBhdCIsImlhdCI6MTcxNTc5MzIzNywiaXNzIjoiaHR0cHM6Ly9hdXRoLXRva2VuLmRldnJldi5haS8iLCJqdGkiOiJkb246aWRlbnRpdHk6ZHZydi1pbi0xOmRldm8vMmVEcWdqSGwzMzp0b2tlbi82T21IQlJ1QiIsIm9yZ19pZCI6Im9yZ18xb3FRd1ZhVUhOSkhZWlJhIiwic3ViIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzJlRHFnakhsMzM6ZGV2dS8xIn0.O9mF4mqGaigeBy1P4-qPrBql7klRvnPd3e_GIajJsk6-q1u6tXvYzlCeZBou1Kc9YS_tlX60CjXz1MkJOlRtG4OW_rZhNdnp3HxyGy4kItA1RXvfe-LGo7t9bOeW7iKCwHcbLN7_w3n0bFnyQftR0ibIsdo-2iSE1F1YX8zBo0LR0rw1DYWrpkQ_7evRjUdCZ9ARWZUfL-K7RyTvCbLFVhb16v_09f_J0089vJnl94aCumc2czDVMa1_K9wXJmC-AwoEmJrVtcDNF8FYP7QLSq6qHWg6PRvVTIcpYpCl2SW6fS0XjK5LoCnx-7Bqu2Nwuz4EkyubgWdHjzhnS9k8_w';
    if (token === Token) {
        console.log('matcges');
    }
    else {
        console.log(token);
        console.log(Token);
    }
    // Regular expression to match ticket IDs
    const ticketIdRegex = /^don:core:.*:.*\/.*:ticket/;
    // Regular expression to match issue IDs
    const issueIdRegex = /^don:core:.*:.*\/.*:issue/;
    // Function to clone a work-item
    function cloneWorkItem(workItemId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // GET request to fetch work-item
                const response = yield axios_1.default.get('https://api.devrev.ai/works.get', {
                    headers: {
                        'Authorization': token
                    },
                    params: {
                        id: workItemId
                    }
                });
                const workItemData = response.data;
                let { type, applies_to_part, body, title } = workItemData.work;
                let createdBy = workItemData.work.created_by.display_id;
                // Customize work-item
                const cloneCustomize = yield getUserInput(`Do you want to customize details?[yes/no]: `);
                if (cloneCustomize === "yes") {
                    createdBy = yield getUserInput(`Enter your ID: `);
                    const titleQuery = yield getUserInput(`Do you want to change title?[yes/no]: `);
                    if (titleQuery === "yes") {
                        title = yield getUserInput(`Enter your title: `);
                    }
                    const bodyQuery = yield getUserInput(`Do you want to change description?[yes/no]: `);
                    if (bodyQuery === "yes") {
                        body = yield getUserInput(`Enter your description: `);
                    }
                }
                const payload = {
                    type: type,
                    applies_to_part: applies_to_part.id,
                    owned_by: [createdBy],
                    title: title,
                    body: body
                };
                // POST request to create a clone
                const response1 = yield axios_1.default.post('https://api.devrev.ai/works.create', payload, {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    }
                });
                console.log('Cloned work item created successfully:', response1.data);
            }
            catch (error) {
                console.error('Error cloning work item:', error);
            }
        });
    }
    // Function to get user input
    function getUserInput(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                input.question(prompt, (answer) => {
                    resolve(answer);
                });
            });
        });
    }
    // Function to list work-items
    function listWorkItems(workType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get('https://api.devrev.ai/works.list', {
                    headers: {
                        'Authorization': token
                    }
                });
                response.data.works.forEach((work) => {
                    if (work.type === workType || workType === 'all') {
                        console.log(`Type: "${work.type}", ID: "${work.id}", Title: "${work.title}"`);
                    }
                });
            }
            catch (error) {
                console.error('Error:', error);
            }
        });
    }
    // Command to clone work-item
    const command = yield getUserInput("");
    // Clone single work-item
    if (command === "clone-work-item") {
        const itemType = yield getUserInput("Enter 'ticket' or 'issue' to clone respective work-item: ");
        const list = yield getUserInput("Do you know work-item ID?[yes/no]: ");
        if (list === 'no') {
            const listOption = yield getUserInput("Enter 'List-all' or 'List-ticket' or 'List-issue':");
            yield listWorkItems(listOption.replace('List-', ''));
        }
        if (itemType === 'ticket' || itemType === 'issue') {
            const regPattern = itemType === 'ticket' ? ticketIdRegex : issueIdRegex;
            let itemId = yield getUserInput(`Enter the ID of the ${itemType} to clone: `);
            // Check if the ID matches the expected format
            if (!regPattern.test(itemId)) {
                console.error(`Invalid ${itemType} ID format.`);
                itemId = yield getUserInput(`Please enter a valid ${itemType} ID (e.g., don:core:dvrv-in-1:devo/2eDqgjHl33:${itemType}/1):`);
            }
            yield cloneWorkItem(itemId);
        }
        else {
            console.error('Invalid command.');
        }
    }
    // Clone multiple work-items
    else if (command === "clone-work-item m") {
        const list = yield getUserInput("Do you know work-item ID?[yes/no]: ");
        if (list === 'no') {
            const listOption = yield getUserInput("Enter 'List-all' or 'List-ticket' or 'List-issue':");
            yield listWorkItems(listOption.replace('List-', ''));
        }
        const idsIn = yield getUserInput("Enter all work-items ID separated by commas (eg: id1,id2): ");
        const ids = idsIn.split(',').map(id => id.trim());
        for (const id of ids) {
            yield cloneWorkItem(id);
        }
    }
    else {
        console.error('Invalid command.');
    }
    input.close();
});
exports.run = run;
exports.default = exports.run;
