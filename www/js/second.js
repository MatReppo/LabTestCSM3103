$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const employeeNumber = urlParams.get('id');

    if (employeeNumber) {
        $.ajax({
            url: `https://kerbau.odaje.biz/getstaffbyid.php?id=${employeeNumber}`,
            method: 'GET',
            success: function(response) {
                const data = JSON.parse(response);
                if (data.length > 1 && JSON.parse(data[0]).status === 1) {
                    const staff = JSON.parse(data[1]);
                    $('#employeeNumber').text(staff.employeeNumber || 'N/A');
                    $('#firstName').text(staff.firstName || 'N/A');
                    $('#lastName').text(staff.lastName || 'N/A');
                    $('#officeCode').text(staff.officeCode || 'N/A');
                    $('#extension').text(staff.extension || 'N/A');
                    $('#email').text(staff.email || 'N/A');
                    $('#jobTitle').text(staff.jobTitle || 'N/A');
                    $('#reportsTo').text(staff.reportsTo || 'N/A');
                } else {
                    console.error('Error: Staff not found');
                    $('#myTable td:nth-child(2)').text('N/A');
                }
            },
            error: function(error) {
                console.error('Error fetching staff details:', error);
                $('#myTable td:nth-child(2)').text('N/A');
            }
        });
    } else {
        console.error('Error: Employee number not provided');
        $('#myTable td:nth-child(2)').text('N/A');
    }
});
