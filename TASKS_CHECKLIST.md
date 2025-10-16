High Level Scenarios are numbered
Below each high level scenario, you can find the test scenarios list for corresponding section.

# 🧱 1. General UI Display
## High Level Scenarios
- Confirm that the page title and browser tab display “Tasks” correctly.
- Confirm top menu options are visible, interactive and function as expected ("Search clients", "Create", "Announcements", "Messages", "Discount", "Profile icon").
- Navigate left menu options to ensure each redirects to the correct page.
- Verify the left menu highlights “Tasks” as the active section to indicate the current page.
- Validate Tasks page layout to ensure all primary sections are visible on page load.

# ➕ 2. Create Task
## High Level Scenario:
- Open the Create Task modal and confirm all expected input fields are available.
- Create a new task with valid data and verify it can be saved successfully.
- Ensure the newly created task appears in the Incomplete list with correct default status.

# ✅ 3. Task Completion
## High Level Scenarios:
- Mark an existing task as Complete and verify the status updates visually and functionally.
- Confirm that the completed task appears or disappears correctly when using the Status filter.

# 🔍 4. Filters and Sorting
## High Level Scenario: 
- Search for tasks by title or keyword and confirm the results are displayed correctly based on filters applied.
- Ensure the Status filter defaults to Incomplete and contains exactly three options (Incomplete, Complete, All).
- Change the Status filter and confirm the task list updates dynamically.
- Validate that the “Assigned to” drop-down displays the full list of users.
- Verify the Sorting drop-down contains exactly four options and tasks are sorted correctly.
- Create a task with "+ Add quick task" button

# 🔄 5. Task List Display
## High Level Test scenarios:
- Scroll through the task list and confirm initial tasks load correctly.
- Verify that infinite scroll loads additional tasks automatically without duplicates or missing entries.
- Ensure all tasks maintain consistent formatting and correct information (title, status, assignee).