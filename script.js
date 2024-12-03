document.addEventListener('DOMContentLoaded', function () {
    // Get references to radio buttons and fieldsets
    const radioEmployee = document.querySelector('input[value="Employee"]');
    const radioCompany = document.querySelector('input[value="Company"]');
    const employeeInfo = document.getElementById('employee-info');
    const companyInfo = document.getElementById('company-info');

    // Function to toggle visibility
    function toggleSections() {
        if (radioEmployee.checked) {
            employeeInfo.style.display = 'block';
            companyInfo.style.display = 'none';
        } else if (radioCompany.checked) {
            employeeInfo.style.display = 'none';
            companyInfo.style.display = 'block';
        }
    }

    // Add event listeners to radio buttons
    radioEmployee.addEventListener('change', toggleSections);
    radioCompany.addEventListener('change', toggleSections);

    // Initialize the visibility based on the default selection
    toggleSections();
});
