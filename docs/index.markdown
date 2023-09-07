---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: <img src="./assets/img/sswdory-logo.png" alt="SSW Dory Logo">
---
![Email SharePoint](./assets/img/email-sharepoint.png)
***Figure: Example email sent out to remind users to check in their SharePoint files***

![Email GitHub](./assets/img/email-github.png)
***Figure: Example email sent out to remind users to merge their open GitHub PRs***

# How it works

### Powered by Microsoft Power Automate
![SSW.Dory Power Automate flow](./assets/img/dory-architecture-diagram.png)
SSW Dory is a low-code solution developed in Power Automate. Each morning, the SSW Dory flow is triggered and run. It goes out and looks for SharePoint files that have not yet been checked back in or GitHub pull requests that have not yet been merged. It then consolidates this information into a single SharePoint list for anyone to view and sends off email reminders to the relevent people. 

### Discover checked-out SharePoint pages
![Checked out SharePoint file](./assets/img/old-sharepoint.png)
SSW Dory uses the native SharePoint connection in Power Automate to find checked-out files in your SharePoint site. 

### Identify long-pending GitHub pull requests
![Stale GitHub PR](./assets/img/old-github.png)
SSW Dory uses the GitHub API to look for open Pull Requests in your GitHub repos. It then filters them out for ones that have been open for longer than a certain period of time e.g., one day. 

### Consolidate these potential blockers into a dedicated SharePoint list
![Sharepoint list](./assets/img/sharepoint-list.png)
A SharePoint list can be set up for SSW Dory to populate. This list can be used to view all outstanding tasks, or only the ones you need to action.