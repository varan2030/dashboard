# Dashboard

### Overview

- The application was created on Angular 7.

- The Angular dashboard component query node.js backend using Socket.IO to query the application status.

- The Node.JS backend will return randomly initialized JSON data represent the overall status of each application     [ {“name”: “app1”, “status” : “Critical”}, ..etc

- The Angular dashboard component will create a color coded score card components for each application according to the returned status in the previous step

- Each Score card component has onClick handler that navigate to the 2nd page.

 

### Page 1

![alt text](https://github.com/varan2030/dashboard/blob/master/dashboard-app/assets/images/page1.png)


### Page 2

- This page contains a randomly initialized chart and left side information panel.

- Chart content is being updated every 1 sec (Live – Chart)

![alt text](https://github.com/varan2030/dashboard/blob/master/dashboard-app/assets/images/page2.png)