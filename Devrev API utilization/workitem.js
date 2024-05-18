 
 function onClick() {
    // API key for authorization
    const apiKey ='eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzJlRHFnakhsMzM6ZGV2dS8xIiwiZXhwIjoxODEwNDAxMjM3LCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VpZCI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by9zdXBlcjphdXRoMF91c2VyL2dvb2dsZS1vYXV0aDJ8MTA4NDg1MzU5ODYxMzE5NDk3NzcwIiwiaHR0cDovL2RldnJldi5haS9hdXRoMF91c2VyX2lkIjoiZ29vZ2xlLW9hdXRoMnwxMDg0ODUzNTk4NjEzMTk0OTc3NzAiLCJodHRwOi8vZGV2cmV2LmFpL2Rldm9fZG9uIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzJlRHFnakhsMzMiLCJodHRwOi8vZGV2cmV2LmFpL2Rldm9pZCI6IkRFVi0yZURxZ2pIbDMzIiwiaHR0cDovL2RldnJldi5haS9kZXZ1aWQiOiJERVZVLTEiLCJodHRwOi8vZGV2cmV2LmFpL2Rpc3BsYXluYW1lIjoiNG5tMjBjczE1MSIsImh0dHA6Ly9kZXZyZXYuYWkvZW1haWwiOiI0bm0yMGNzMTUxQG5tYW1pdC5pbiIsImh0dHA6Ly9kZXZyZXYuYWkvZnVsbG5hbWUiOiIgU0FNTUlUSEEgUyBQT09KQVJZIiwiaHR0cDovL2RldnJldi5haS9pc192ZXJpZmllZCI6dHJ1ZSwiaHR0cDovL2RldnJldi5haS90b2tlbnR5cGUiOiJ1cm46ZGV2cmV2OnBhcmFtczpvYXV0aDp0b2tlbi10eXBlOnBhdCIsImlhdCI6MTcxNTc5MzIzNywiaXNzIjoiaHR0cHM6Ly9hdXRoLXRva2VuLmRldnJldi5haS8iLCJqdGkiOiJkb246aWRlbnRpdHk6ZHZydi1pbi0xOmRldm8vMmVEcWdqSGwzMzp0b2tlbi82T21IQlJ1QiIsIm9yZ19pZCI6Im9yZ18xb3FRd1ZhVUhOSkhZWlJhIiwic3ViIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzJlRHFnakhsMzM6ZGV2dS8xIn0.O9mF4mqGaigeBy1P4-qPrBql7klRvnPd3e_GIajJsk6-q1u6tXvYzlCeZBou1Kc9YS_tlX60CjXz1MkJOlRtG4OW_rZhNdnp3HxyGy4kItA1RXvfe-LGo7t9bOeW7iKCwHcbLN7_w3n0bFnyQftR0ibIsdo-2iSE1F1YX8zBo0LR0rw1DYWrpkQ_7evRjUdCZ9ARWZUfL-K7RyTvCbLFVhb16v_09f_J0089vJnl94aCumc2czDVMa1_K9wXJmC-AwoEmJrVtcDNF8FYP7QLSq6qHWg6PRvVTIcpYpCl2SW6fS0XjK5LoCnx-7Bqu2Nwuz4EkyubgWdHjzhnS9k8_w';
    // ID of the owner
    const owner = 'don:identity:dvrv-in-1:devo/2eDqgjHl33:devu/1';

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
