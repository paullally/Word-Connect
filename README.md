
# **Table of Contents**

* [**Purpose**](#purpose)
* [**User Experience Design (UX)**](#user-experience-design)
  * [**User stories**](#user-stories)
  * [**Structure**](#structure)
  * [**Design**](#Design)
    * [**Colour Scheme**](#colour-scheme)
    * [**Typography**](#typography)
    * [**Frameworks**](#frameworks)
    * [**API**](#api)
     * [**Icons**](#icons)
    * [**Wireframes**](#Wireframes)
- [**Features**](#features)
    * [**Existing Features**](#existing-features)
    * [**Features on every page**](#features-on-every-page)
    * [**Home page**](#home-page)
    * [**Future Features**](#future-features)
- [**Technologies Used**](#technologies-used)
    * [**Front End Technologies**](#front-end-technologies)
    * [**Other Technologies**](#other-technologies)
* [**Testing**](#testing)
    * [**Code Testing**](#code-testing)
      * [**Validator Testing**](#validator-testing)
    * [**User Story Testing**](#User-Story-Testing)
    * [**Manual Testing**](#manual-testing)
      * [**Lighthouse**](#lighthouse)
      * [**Responsive Testing**](#responsive-testing)
    * [**Bug Report**](#bug-report)
* [**Deployment**](#deployment)
    * [**GitHub Pages**](#using-github-pages)
    * [**Locally**](run-locally)
* [**Credits**](#credits)
     * [**Code**](#code)
  * [**Content**](#content)
  * [**Media**](#media)
  * [**Acknowledgements**](#acknowledgements)

# **Word-Connect**
## **Purpose**

I created this website to be able to play a game similar gameshow called only connect hosted by the bbc. This Website focuses on the final round of the game show only connect where a 4x4 grid of jumbled words appear and the players have to find out which four words are linked together and what links them together.

**Word-Connect** offers a experience similar to only connects final round so users can play the game without going onto the show themselves. Users get a final score to at the end of the game and also have the ability to add games to the website through the sumbission form page. 

# **User Experience Design**

## **User Stories**
- As a user, I want to be able learn how to play this game through a set of instructions so I can understand how to play.
- As a user, I want to be able to see what rules the game has so I know what rules I have to follow  . 
- As a user, I want to be able to see all social media involed with this website so I can follow them on social media. 
- As a user, I want to be able view the website on all devices so I can show others the website on my mobile phone or laptop. 
- As a user, I want to be able to navigate through the website easily.
- As a user, I want to be able know my final score when the game is over so I can check if my scores are getting better. 
- As a user, I want to be able start a new game after my game has finished without having to refresh the page. 
- As a user, I want to be able to see a timer and lives counter so I can keep track of my time and lives remaining. 
- As a user, I want to be able to add games so I can see if my words and links will make it onto the website. 
- As a user, I want a well designed UX so it is easy for me to play the game and navigate the website.

## **Structure**
Every page contains a Navigation bar at the top of the webpage that will dissapear when you scroll down and reappear when you scroll up. it will direct them to new pages making it easy to navigate the website 
<br>This fufils the user story:
> As a user, I want to be able to navigate through the website easily.

All pages  contain a Footer Element with links to the **Word-Connect** social media and a copyright disclaimer
<br>This fufils the user story:
>As a user, I want to be able to see all social media involed with this website so I can follow them on social media.

All pages are fully responsive and the layouts will change dependant on screen size. To ensure that content is displayed properly and is readable on every device
<br>This fufils the user stories:

> As a user, I want to be able view the website on all devices so I can show others the website on my mobile phone or laptop. 
> As a user, I want a well designed UX so it is easy for me to play the game and navigate the website.

The home page contains 3 sections, each of these sections give the relavant information on how to play **Word-Connect**, the rules of **Word-Connect** and the Acknowledgements 
<br>
This fufils the user stories:

> As a user, I want to be able learn how to play this game through a set of instructions so I can understand how to play.
> As a user, I want to be able to see what rules the game has so I know what rules I have to follow. 

The Play game page is the page that allows you to start the game it shows you your score,lives and time remaining, once the game ends your score will appear and you will be able to press a button to restart the game.
<br>
This fufils the user stories:

>As a user, I want to be able know my final score when the game is over so I can check if my scores are getting better. 
>As a user, I want to be able start a new game after my game has finished without having to refresh the page.
>As a user, I want to be able to see a timer and lives counter so I can keep track of my time and lives remaining

The Add Game page has a form that you can fill out to create your own game this data will be posted to an google sheet through the google sheets api which will then be reviewed to see if its appropriate to add to the game 
<br>
This fufils the user story:
>As a user, I want to be able to add games so I can see if my words and links will make it onto the website. 


## **Design**
---

### **Colour Scheme**

<h2 align=center id="top"><img src="assets/imgs/colourscheme.png" max-height=200px></h2>


### **Typography**

- [**Press Start 2P**](https://fonts.google.com/specimen/Press+Start+2P?query=pres)
    - The primary font across the website.
    - Press Start 2P was used for the main heading tags and the end game screen. 
    - Press Start 2P was chosen due its distinct style.

- [**Roboto**](https://fonts.google.com/specimen/Roboto?query=rob)
    - The secondary font across the website.
    - Roboto was used for the Navigation bar Links and paragraphs and some headings in fonts weights of 500 and 700.
    - Roboto was chosen for its readablity.

### **Frameworks**
- [MDBoostrap](https://mdbootstrap.com/)
    - Taking the responsiveness of Bootstrap and the front-end UI of Materialize, MDBoostrap makes use of both of these. So all aspects of the site were clean and accessible for all users. 

- [JQuery](https://code.jquery.com/jquery/)
    - In order to minimalize the amount of Javascript used across the application, I chose to implement a lot of the JS functionality with JQuery.

### **API**
- [**Google sheets api**](https://developers.google.com/sheets/api)
    - This was uses to post data from the form on the ***Word-Connect** website to a google spreadsheet.


### **Icons**


### **Wireframes**

#### **Desktop**


#### **Tablet**



#### **Moblie**


## **Features**
---
### **Existing Features**
###  **Features on every page**



### **Home page**

### **Game page**

### **Form page**


### **Future Features**


## **Technologies Used** 
---
- ### **Front End Technologies**

- ### **Other Technologies** 

## **Testing** 
---

### **Code Testing**
#### **validator testing**


    

### **User Story Testing**



### **Manual Testing**



#### **Lighthouse**


### **Responsive Testing**




### **Desktop Testing**


### **Laptop Testing**



    
### **Tablet Testing**


### **Mobile Testing**





## **Bug Report**


# **Deployment**

### **Using Github Pages**

### **Run Locally**


# **Credits**

## **Code**


 ## **Content** 



 ## **Media** 



 ## **Acknowledgements**
