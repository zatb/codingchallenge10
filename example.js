// U36432650

// Implement a function to load data from a CSV file named purchase_orders.csv, located in a data directory at the root of your project.
function loadAndDisplayData() {
    const csvFilePath = 'data/purchase_orders.csv';
    
    // Use d3.dsv to fetch the data from the CSV file accurately.
    d3.csv(csvFilePath).then(data => {
        const ul = d3.select('#purchase-orders');
        
        // After loading the data, dynamically create and append an <li> element for each purchase order within an <ul> in the body of your HTML document. Each list item should display the format: "Customer Name - Order ID: Purchase Amount".
        data.forEach(order => {
            ul.append('li')
              .text(`${order.customerName} - Order ID: ${order.orderId} - Purchase Amount: ${order.purchaseAmount}`);
        });
    });
}
loadAndDisplayData();
