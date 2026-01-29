Markdown
# RESTful API Activity – [Mark Joseph Baylon]
## Best Practices Implementation
**1.Environment Variables
 - Why did we put BASE_URL in .env instead of hardcoding it?
 - Answer: to make itconsistent,and easy touse of API
**2.Resource Modeling
 -Why did we use plural nouns (e.g. /dishes) for our routes?
 - Answer: to represent the collection of resources and follow the REST standard.
**3.Status Codes
 - When do we use 201 Created vs 200 OK?
 - Why is it important to return 404 instead of just an empty array or a generic error?
 - Answer: we use 201 created when have new resources successfully created while the 200 ok is successful requestbut dont have new reqsources.
 - It is important to return 404 to ensure client or user will understand and avoid confusion and know that the resources did not work.
   
**4Testing
Paste a screenshot of a successful GET request here
<img width="1366" height="768" alt="Screenshot from 2026-01-29 12-08-19" src="https://github.com/user-attachments/assets/e6b42112-b6d0-4f29-9af5-6824a617b2dc" />

