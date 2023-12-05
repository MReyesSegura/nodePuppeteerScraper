# nodePuppeteerScraper
**Purpose:**
This API allows you to scrape tasks from Trello and push them to Todoist.

**Installation:**
1. Run `npm install` to install dependencies.
2. Run `npm run watch` to compile TypeScript and watch for changes.
3. Run `npm start` to start the server.

**Available Routes:**

- **Pull 5 Tasks from Trello:**
  - Route: http://localhost:5050/api/pull/pullFivetasks
  - Description: Pulls 5 tasks from Trello and pushes them to Todoist.

- **Pull All Tasks from Trello:**
  - Route: http://localhost:5050/api/pull/pullAllTasks
  - Description: Pulls all tasks from Trello and pushes them to Todoist.

- **Pull Tasks by Number:**
  - Route: http://localhost:5050/api/pull/pullByNumber?number=1
  - Description: Pulls the specified number by query of tasks from Trello and pushes them to Todoist.
