// Add click event to all subject cells
document.querySelectorAll('.subject').forEach(cell => {
    cell.addEventListener('click', () => {
        const teacherInfo = cell.getAttribute('data-info');
        const newWindow = window.open('', '_blank');
        newWindow.document.write(`
            <html>
                <head><title>Teacher Info</title></head>
                <body style="font-family: Arial, sans-serif;">
                    <h1>Teacher Details</h1>
                    <p>${teacherInfo}</p>
                    <button onclick="window.close()">Close</button>
                </body>
            </html>
        `);
    });
});
