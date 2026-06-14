async function fetchDashboardData() {
    const resultBox = document.getElementById("result-box");
    const attendanceData = document.getElementById("attendance-data");

    try {
        // Yeh line tumhare chalte hue local backend server se baat karegi
        let response = await fetch('http://localhost:8080/api/student/1/dashboard');
        
        if (!response.ok) {
            throw new Error("Backend se sahi response nahi mila!");
        }

        let data = await response.json();
        
        // Data ko screen par dikhana
        resultBox.style.display = "block";
        attendanceData.innerHTML = `
            <strong>Subject:</strong> ${data.attendance[0].subject}<br>
            <strong>Status:</strong> <span class="status">${data.attendance[0].status}</span><br>
            <strong>Date:</strong> ${data.attendance[0].date}
        `;
    } catch (error) {
        alert("Error! Kya tumne backend server chalu kiya hai? Terminal check karo.");
        console.error(error);
    }
}