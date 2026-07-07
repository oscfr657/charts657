async function renderChart(pathToDataSource, elementId='charts657') {
    try {
        const response = await fetch(pathToDataSource);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const jsonData = await response.json();

        const ctx = document.getElementById(elementId).getContext('2d');

        new Chart(ctx, jsonData);

    } catch (error) {
        console.error('An error occurred while loading the chart:', error);
    }
}
