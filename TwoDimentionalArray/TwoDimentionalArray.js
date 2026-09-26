
        // 1. Declare and initialize a 2D array [Name, Math, Science, English]
        const studentGrades = [
            ["Alice", 85, 92, 88],
            ["Bob", 78, 81, 75],
            ["Charlie", 95, 89, 94]
        ];

        // 2. Accessing individual elements
        // Index syntax: array[row][column]
        console.log("Bob's Science grade:", studentGrades[1][2]); // Output: 81

        // 3. Render the 2D array into an HTML table dynamically
        let tableHTML = `
            <table>
                <tr>
                    <th>Name</th>
                    <th>Math</th>
                    <th>Science</th>
                    <th>English</th>
                </tr>
        `;

        // Outer loop iterates through rows
        for (let i = 0; i < studentGrades.length; i++) {
            tableHTML += "<tr>";
            // Inner loop iterates through columns of each row
            for (let j = 0; j < studentGrades[i].length; j++) {
                tableHTML += `<td>${studentGrades[i][j]}</td>`;
            }
            tableHTML += "</tr>";
        }

        tableHTML += "</table>";

        // Display the table inside the #output div
        document.getElementById("output").innerHTML = tableHTML;
    