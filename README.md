# Angular-mini-project
Angular mini project details.
Create an angular application named as Github-Directory or Githuber. Github exposes some REST API's, which provides Github users info in various aspects. The purpose of this application is to consume these REST Services and show relevant information based on different components. The structure of Web-pages is as follows : 

1) Every view should have a header and footer.
2) The header and footer should be common components that are used in every view.
3) Here page refers to the middle component between header and footer which will keep on manipulating.
4) Header should contain Home and About tabs
5) Footer should contain information like Copyright @ Clairvoyant 2016. All Rights Reserved.
6) On clicking on Home tab will show Home [View-1]. Which is default view on app loading.
7) On clicking on About tab will show About [View-4].

Home [View-1] :
- This will have information of the github users which will be given by following end-point and refer to the screenhot of View-1 :
- Endpoint : https://api.github.com/users

User-Profile [View-2]  :
- This component is loaded when any of the user name card is clicked
- This view will have specific user info as given by following example end-point and refer to the screenhot of View-2 :
- Endpoint example : https://api.github.com/users/mojombo
- Note : mojombo is user name. Which will keep on varying based on the user card clicked on Home [View-1].

Respositories [View-3]  :
- This view will be loaded when user clicks on the View Repo button as shown in screenhot of View-3. The endpoint used will be :
- Endpoint example : https://api.github.com/users/mojombo/repos
- Note : mojombo is user name. Which will keep on varying based on the user card clicked on Home [View-1].

About [View-4] :
- This view will be loaded on clicking on About tab.
- The info to be shown can first section of link : http://www.clairvoyantsoft.com/company/
- Can refer to screenshot View-4
