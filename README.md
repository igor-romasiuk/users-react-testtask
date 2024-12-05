## Task Decomposition

## Create shared layout for all pages
1. **Initialize React project**
2. **Setup Routing with react-router**
3. **Create Layout component with styling and use it on all pages**

## Users Page

### Users Table

  #### 1. Create the table layout:

    * Display a table on the page.
    * Create columns for data: Full Name, Department, Country, and Status.
    * Add a delete button (trash icon) in each row for removing users.

  #### 2. Style the table:

    * Apply only a bottom border to the column headers.
    * Style the delete button and icon (resize, add hover animations).

  #### 3. Populate the table with user data:

    * Fetch user data from an API.
    * Format and display the data in the appropriate table cells.

  #### 4. Implement user deletion functionality:

    * Create a function to delete a user from the list when the delete button * is clicked.
    * Update the table state after a user is removed.

  #### 5. Limit the number of displayed users:

    * Show only 5 users per page.
    * Optionally, implement pagination to navigate through additional users.

  #### 6. Display the delete icon:

    * Use a custom icon.
    * Ensure the icon path is correctly referenced and displayed.

  #### 7. Add event handling for the delete button:

    * Connect the delete function to the button click event.
