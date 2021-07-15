# Interview Assignment

## Quick Overview
Congratulations! You've passed our initial round of interviews and we're
curious about your technical chops. Our team is in the business of building
web applications and services and we will be testing you with some of the
basic building blocks we use on a day-to-day basis. This exercise should not take more than about 2 hours max.


## Requirements

Please share your solutions within a git repo of your own the can be cloned by members of our team. Github or a similar hosted repo is most likely your easiest solution.

1. Backend:
    * Parse the provided CSV file in `properties.csv` 
    * Stand up a simple backend server that can serve the parsed results as a JSON object at `/data`.
    * Add instructions on how to start/access in README (can just be a development server on localhost)
    * Results must contain **only properties in California**, and contain the following:
        1. PROP_NAME
        2. ADDRESS
        3. CITY
        4. STATE_ID
        5. ZIP
        6. MISSING_FIELD_COUNT (number of fields in a record that is missing data)
        7. MISSING_DATA_ENCODING - a number where each digit indicates consecutive columns with and without data
            - e.g. [a,b,c,,,d,e] will be 322 (3 columns with data followed by 2 columns with missing data followed by 2 columns with data)

2. React frontend:
    * Render 1 button that fetches data from `/data` being served from your simple backend when pressed
    * Upon success, render the result to be easily read.
    * Feel free to install other libs as necessary, but be prepared to explain why

3. Component State:

   Given the following JSON string

         {
           "headerData": ["30%", "$2000000", "85%"],
           "contentA": "This should be displayed in Panel A. This is visible by default"
           "contentB": "This should be displayed in Panel B. This should be hidden by default"
         }

    Please implement the following:
      * Add code to parse the json string.
      * Displays header data horizontally in a header section. This is always visible
      * The header section should display a "-" sign by default. When a user clicks this, it will change to a "+" sign.
      * Displays a content section by default under the header section. When the "-" sign in the header is clicked, this content section becomes hidden.
      * The content section contains 2 panels side by side. The first panel (panel A) should display contentA data. Content in this panel is visible by default.
      * The second panel (panel B) should display contentB data. The contents of this panel is hidden by default. The background of this should be *EEEEEE by default.
      * When panel B (with the hidden content) is clicked the background should change to *FFFFFF and the content should become visible.
      * When panel B content becomes visible, panel A content should become hidden and the background color should change to *EEEEEE.
      * The hide/show behavior above should be repeatable any number of times.

See mockup.png for a reference.
