 
 function onClick() {
    // API key for authorization
    const apiKey =''; //replace with your PAT
    const owner = ''; //replace with your id

    // API endpoint
    const url = 'https://api.devrev.ai/works.create';

    
    const type = document.getElementById("type").value;
    const part = document.getElementById("part").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    
    // Various properties for creating work-items
    const payload = {
        type: type,
        applies_to_part: part,
        owned_by: [owner],
        title: title,
        body: description
      };
      
      // POST request to create work item
      axios.post(url, payload, {
        headers: {
          'Authorization': apiKey,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log('Work item created successfully:', response.data);
      })
      .catch(error => {
        console.error('Error creating work item:', error);
      });
  
}
