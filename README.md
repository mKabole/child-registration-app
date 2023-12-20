# registration_app
The following is the documentation for the React application designed to manage children's information. This application offers a seamless experience for registering children, viewing a list of said children and accessing each child’s individual profile. The application has a user-friendly interface and easy-to-use features. The app is backed by a node.js API and an SQLite database. This app streamlines the process of capturing essential details such as names, ages, genders, and immunizations, enabling easy organization and access to vital child-related information.

# Registration Form

Purpose
The "RegistrationForm" component renders a form for registering a child with input fields for first name, last name, age, gender, and immunizations.

Props
- onSubmit: (Function) Callback function to handle form submission.
State
- formData: (Object) Represents the form data for child registration (firstName, lastName, age, gender, immunizations).
Methods
- handleInputChange(event: object): Handles input change events in the form fields.
- handleDropdownChange(event: object): Handles dropdown change event for gender selection.
- handleCheckboxChange(event: object): Handles checkbox change events for immunization selection.
- handleSubmit(event: object): Handles form submission and validation.
Functionality
- Captures child's registration information via input fields.
- Performs input validation and displays error messages for invalid inputs.
- Allows selection of gender and multiple immunizations using dropdown and checkboxes, respectively.

# Listview
Purpose
The ListView component renders a list of children and provides functionality to sort the list by age or name.

Props
- The ListView component does not receive any props.

State
- children: (Array) Represents the list of children fetched from the API.
Methods
- handleSort(criteria: string): Handles sorting of the children list based on the provided criteria ('age' or 'name').
Component Structure
- Card: Material Tailwind React component for the UI card.
- CardHeader: Material Tailwind React component for the card header.
- Typography: Material Tailwind React component for typography elements.
- Button: Material Tailwind React component for buttons.
Functionality
- Fetches children data from the specified API endpoint using Axios.
- Provides buttons to sort the list of children by age or name.
- Displays each child's details (first name, last name) in a list format.
- Links to a "Profile" page for each child using React Router's Link component.
Considerations
- Update the API URL (API_URL) according to the backend server's address and port.
- Ensure the backend API returns data in the expected format (array of child objects).

# Profile
Purpose
The ChildProfile component displays information about a selected child.

Props
- match: (Object) Contains information about how the ChildProfile component was loaded (specifically, match.params.id to identify the child).
State
- childData: (Object) Represents the details of the selected child.
Methods
- fetchChildData(childId: string): Fetches data for the selected child from the API.
Functionality
- Retrieves child data based on the provided ID from the API.
- Displays information such as the child's name, age, gender, and immunizations on the profile page.


