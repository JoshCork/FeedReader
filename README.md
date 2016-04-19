# FeedReader
In this project, I learned about testing with Javascript. Testing is an important part of the development process and many organizations practice a standard known as "test-driven development" or TDD. This is when developers write tests first, before they ever start developing their application.  Whether you work in an organization that writes tests extensively to inform product development or one that uses tests to encourage iteration, testing has become an essential skill in modern web development!

## Using this Repo
1. Clone the repo down onto your machine
2. Open the repo folder in the editor of your choice.
3. Navigate to the feedReader folder.
4. Open the index.html page in your browser.

## Repo Structure
This repo contains both my classroom material and notes along with the project itself.  There are two main folders in this repo:

1. ClassroomMaterial:  This contains the course work and my modifications.
2. feedReader: This contains the project repo that I cloned down to my machine.  It has all the changes I made to create and pass the tests for the project. 

## Daily Notes

### 4/19/2016 

#### 1pm - Refactored out the 'hackiness feeling'
Updated that last test to not be dependent on the first test.  

#### 11:45am - Completed tests that were marked as todo
My last one seems a bit hacked.  I first create an expectations just to complete an async run and get the initial article title.  Then I call the loadFeed function again with a different ID and test that the article title is not the same as the first. Feels like i should be able to do this in one step but I coulnd't figure out the async part to do that. 

### 4/17/2016 - Completed Classroom Material. 
Now moving on to the project in the classroom material, adding robust testing to the feed reader application that was already built. 
