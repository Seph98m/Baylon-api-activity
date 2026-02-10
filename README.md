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

## activity 2
<img width="1366" height="768" alt="dishes" src="https://github.com/user-attachments/assets/63deb052-c694-40f5-a5e1-71f1bad1660e" />

* Why did i choose to Embed the Review?
  - i choose to embed the Review because the review is own by specific dish. the load of data is fast if they are together in one document.
* Why did i choose to reference the chef?
  -- i choose to reference the chef because one chef can have more dishes. in this way the data of chef dont repeat, and if the nameof needed to change only one ducumenmt is need to update.
  



