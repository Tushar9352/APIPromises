function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data fetched successfully:', data);
            return data;
        })
        .catch(error => {
            console.error('Fetch error:', error);
            throw error;
        });
}

function processData(url) {
    fetchData(url)
        .then(data => {
            console.log('Processing data...');
            if (Array.isArray(data) && data.length > 0) {
                console.log('First item:', data[0]);
            }
        })
        .catch(error => {
            console.error('Process error:', error);
        });
}

const apiURL = 'https://api.example.com/data';
processData(apiURL);
