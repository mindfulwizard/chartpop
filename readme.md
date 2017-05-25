New Classrooms Software Developer Trial Project

Front End

Please make a single-page web app that shows infographics about a set of people based on JSON data from Random User Generator (https://randomuser.me/).

On the initial page load, the user should see a form that allows them to either paste the JSON into a text input field or upload it as a file.

Once they do one or the other, they should see charts showing:
Percentage female versus male
Percentage of first names that start with A-M versus N-Z
Percentage of last names that start with A-M versus N-Z
Percentage of people in each state, up to the top 10 most populous states
Percentage of females in each state, up to the top 10 most populous states
Percentage of males in each state, up to the top 10 most populous states
Percentage of people in the following age ranges: 0-20, 21-40, 41-60, 61-80, 81-100, 100+

Feel free to be as fancy as you like with page style, layout, and functionality. For coding style, pick whichever guide or standard you like as long as you follow it consistently (and tell us what you picked). For both the user interface and the code base, clean readability is as important as correctness.

For bonus points, think of any other statistics you might find interesting and display them in the most effective way possible.

Back End

Please expose a REST API endpoint that takes the same Random User Generator JSON data and a file format as input, and returns a file containing the same output data (percentages) displayed in the charts described in the Front End section, but as formatted data rather than charts. Supported file formats should include JSON, plain text, and XML. For example, if the user requests a plain text file, it should contain a line like “Percentage female versus male: 66.6%”. Feel free to include other file formats if you like. Please use the same coding style you used for the front end.

For bonus points, instead of requiring the user to specify the file format, determine it automatically from the “Accept:” header in the HTTP request.