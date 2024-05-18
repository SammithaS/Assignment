import axios from "axios";
import readline from 'readline';
import dotenv from 'dotenv';

dotenv.config();

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const run = async () => {
    const token = process.env.TOKEN; // Replace with your actual access token
    if (!token) {
        console.error('TOKEN is not defined in the .env file');
        return;
    }
   
    // Regular expression to match ticket IDs
    const ticketIdRegex = /^don:core:.*:.*\/.*:ticket/;
    // Regular expression to match issue IDs
    const issueIdRegex = /^don:core:.*:.*\/.*:issue/;

    // Function to clone a work-item
    async function cloneWorkItem(workItemId: string): Promise<void> {
        try {
            // GET request to fetch work-item
            const response = await axios.get('https://api.devrev.ai/works.get', {
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
            const cloneCustomize = await getUserInput(`Do you want to customize details?[yes/no]: `);

            if (cloneCustomize === "yes") {
                createdBy = await getUserInput(`Enter your ID: `);
                const titleQuery = await getUserInput(`Do you want to change title?[yes/no]: `);
                if (titleQuery === "yes") {
                    title = await getUserInput(`Enter your title: `);
                }
                const bodyQuery = await getUserInput(`Do you want to change description?[yes/no]: `);
                if (bodyQuery === "yes") {
                    body = await getUserInput(`Enter your description: `);
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
            const response1 = await axios.post('https://api.devrev.ai/works.create', payload, {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            });

            console.log('Cloned work item created successfully:', response1.data);
        } catch (error) {
            console.error('Error cloning work item:', error);
        }
    }

    // Function to get user input
    async function getUserInput(prompt: string): Promise<string> {
        return new Promise((resolve) => {
            input.question(prompt, (answer) => {
                resolve(answer);
            });
        });
    }

    // Function to list work-items
    async function listWorkItems(workType: string): Promise<void> {
        try {
            const response = await axios.get('https://api.devrev.ai/works.list', {
                headers: {
                    'Authorization': token
                }
            });
            
            //List each item
            response.data.works.forEach((work: any) => {
                if (work.type === workType || workType === 'all') {
                    console.log(`Type: "${work.type}", ID: "${work.id}", Title: "${work.title}"`);
                }
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Command to clone work-item
    const command = await getUserInput("");

    // Clone single work-item
    if (command === "clone-work-item") {
        const itemType = await getUserInput("Enter 'ticket' or 'issue' to clone respective work-item: ");
        const list = await getUserInput("Do you know work-item ID?[yes/no]: ");

        if (list === 'no') {
            const listOption = await getUserInput("Enter 'List-all' or 'List-ticket' or 'List-issue':");
            await listWorkItems(listOption.replace('List-', ''));
        }

        if (itemType === 'ticket' || itemType === 'issue') {
            const regPattern = itemType === 'ticket' ? ticketIdRegex : issueIdRegex;

            let itemId = await getUserInput(`Enter the ID of the ${itemType} to clone: `);

            // Check if the ID matches the expected format
            if (!regPattern.test(itemId)) {
                console.error(`Invalid ${itemType} ID format.`);
                itemId = await getUserInput(`Please enter a valid ${itemType} ID (e.g., don:core:dvrv-in-1:devo/2eDqgjHl33:${itemType}/1):`);
            }
            await cloneWorkItem(itemId);
        } else {
            console.error('Invalid command.');
        }
    }

    // Clone multiple work-items
    else if (command === "clone-work-item m") {
        const list = await getUserInput("Do you know work-item ID?[yes/no]: ");
        if (list === 'no') {
            const listOption = await getUserInput("Enter 'List-all' or 'List-ticket' or 'List-issue':");
            await listWorkItems(listOption.replace('List-', ''));
        }
        const idsIn = await getUserInput("Enter all work-items ID separated by commas (eg: id1,id2): ");
        const ids = idsIn.split(',').map(id => id.trim());

        for (const id of ids) {
            await cloneWorkItem(id);
        }
    }
    
    else {
        console.error('Invalid command.');
    }

    input.close();
};

export default run;





