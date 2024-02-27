document.addEventListener('DOMContentLoaded', function() {
    const apiSection = document.getElementById('api-section');

    const apiUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/departments?displayName=The Libraries&total=6';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const artworks = data.records;
            artworks.forEach(artwork => {
                const artworkTitle = document.createElement('p');
                artworkTitle.textContent = artwork.title;
                apiSection.appendChild(artworkTitle);
            });

            const departments = data.departments;
            const departmentList = document.createElement('ul');
            departments.forEach(department => {
                const departmentItem = document.createElement('li');
                departmentItem.textContent = department.displayName;
                departmentList.appendChild(departmentItem);
            });

            apiSection.appendChild(document.createElement('hr'));
            apiSection.appendChild(document.createElement('h2')).textContent = 'Departments';
            apiSection.appendChild(departmentList);
        })
        .catch(error => console.error('Error fetching data:', error));
});
