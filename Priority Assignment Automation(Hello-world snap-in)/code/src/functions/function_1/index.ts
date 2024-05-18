import { client } from "@devrev/typescript-sdk";

// Function to handle each event
async function handleEvent(
  event: any,
) {
  const devrevPAT = event.context.secrets.service_account_token;
  const API_BASE = event.execution_metadata.devrev_endpoint;

  // Client setup
  const devrevSDK = client.setup({
    endpoint: API_BASE,
    token: devrevPAT,
  })

  // Extract from payload
  const workCreated = event.payload.work_created.work;
  // Extract from input given during Configuration
  const priority = event.input_data.global_values.input_field_1;
  
  const body = {
    priority: priority,
    type: workCreated.type,
    id:  workCreated.id
  }

  // Post request to update
  const response = await devrevSDK.worksUpdate(body as any);
  return response;
}

export const run = async (events: any[]) => {
  console.info('events', JSON.stringify(events), '\n\n\n');
  for (let event of events) {
    const resp = await handleEvent(event);
    console.log(JSON.stringify(resp.data));
  }
};

export default run;
