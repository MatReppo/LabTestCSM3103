$(document).ready(function() {
    $.ajax({
        url: 'https://kerbau.odaje.biz/getstaff.php',
        method: 'GET',
        success: function(response) {
            const staffData = JSON.parse(response);
            const staffList = $('#staff-list');
            
            staffData.forEach(item => {
                const staff = JSON.parse(item);
                if (staff.email) {
                    staffList.append(`<li class="list-group-item"><a href="secondpage.html?id=${staff.employeeNumber}">${staff.email}</a></li>`);
                }
            });
        },
        error: function(error) {
            console.error('Error fetching staff data:', error);
        }
    });
});

