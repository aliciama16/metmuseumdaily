document.addEventListener('DOMContentLoaded', function() {
    const apiSection = document.getElementById('api-section');

    // Replace 'YOUR_API_ENDPOINT' with the actual MET museum API endpoint
    const apiUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/departments?displayName=The Libraries&total=6';

    // Fetching data from the MET museum API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Handle the artworks data
            const artworks = data.records; // Adjust this based on the actual structure of the API response

            // Example: Display the titles of artworks
            artworks.forEach(artwork => {
                const artworkTitle = document.createElement('p');
                artworkTitle.textContent = artwork.title;
                apiSection.appendChild(artworkTitle);
            });

            // Handle the departments data
            const departments = data.departments;

            // Example: Display the department names
            const departmentList = document.createElement('ul');
            departments.forEach(department => {
                const departmentItem = document.createElement('li');
                departmentItem.textContent = department.displayName;
                departmentList.appendChild(departmentItem);
            });

            // Add the department list to the HTML
            apiSection.appendChild(document.createElement('hr')); // Add a horizontal line for separation
            apiSection.appendChild(document.createElement('h2')).textContent = 'Departments';
            apiSection.appendChild(departmentList);
        })
        .catch(error => console.error('Error fetching data:', error));
});
