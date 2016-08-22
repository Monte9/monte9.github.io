---
title:  "Best online iOS Crash Course! (1 day)"
date:   2015-11-08 04:00:00
categories: [blogs]
tags: [tech]
---

**My Claim: ANYBODY* can learn to build an iOS app  24 hrs. Here’s how… (*Given the person wants to learn it in the first place)**

Fact: iOS development is a technical subject

Statement: Even a non-techy person can learn iOS development.

My Claim: ANYBODY* can learn to build an iOS app in one day. Here’s how… (*Given the person wants to learn it in the first place)

So the other day, I was wondering what kind of resources were available online for learning iOS development and so I googled “Learn iOS development” and predictable found enough online courses and tutorials to keep me busy learning iOS for the next year. It’s hard when you are trying to learn a new subject and there are not many resources available out there, but on the other hand it can be pretty overwhelming to find too many resources on a subject as well. I believe that the depth and duration of some of these courses offered online can seem unappealing to a complete newbie as nobody has so much time to commit these days with social media and life. Did you know that according to a new survey, Teens spend more time consuming media than they do sleeping. I am not even making that up, you can read more about the survey <a href="http://www.npr.org/2015/11/07/455120131/survey-finds-teens-spend-wealth-of-time-with-screens">here.</a>

So anyways, the reason I am writing this post in the first place is because in that huge dump of information relating to iOS development available online, I managed to find a gem of a crash course. It’s not too long, has just enough depth and is very hands on. Its called: <a href="http://www.ioscrashcour.se/">iOS Crash Course</a> taught by <a href="https://twitter.com/jmtrivedi">Janum trivedi</a>. I looked into the course and starting working on it immediately. The entire course is divided into ten session most of which have pdf’s that you can go through and some of those sessions also have accompanying xcode project files. It took me roughly 5-6 hrs to go through the entire material including xcode project files and by the end of it I was able to develop my own to-do list app from scratch.

I would specifically like to bring to your attention that despite having developed iOS apps before, the crash course really helped me solidify some of the core iOS development concepts that I was fuzzy on. The xcode project was very well documented and was explained well throughout the course. So as it turns out each session needs to be downloaded separately from the github repo and while I was working on it, I found this to be very cumbersome. So I have taken the liberty of putting all of those sessions into one zip file available for download here. You can thank me later for this folks!

As I went through the course, I took notes of some of the key concepts presented in the pdf’s. So after reading this list of concepts, if you feel pretty confident I would recommended trying to build the app yourself using the xcode project only as a reference. On the other hand, if you are unfamiliar with many of these concepts I would highly recommend going through the crash course itself.

Key Concepts-

1. MVC Architecture-
Almost each file in the project can be put into either a Model (data), View (what the user sees or UI) and Controller (the layer between the view and the model that connects them both)

Model <-> Controller <-> Views (The symbol <-> means two way interaction).

Note that in this architecture, the view is totally unaware of the data that it is presenting and likewise, the Model is totally unaware of how the data is presented to the user. The Model and the View do not interact directly with one another.


2. Delegation- concept of assigning responsibility to another object or class. Key concept in iOS developement.


3. Objective-C Blocks- A block of code enclosed within the curly braces {}. Basically, Blocks let us pass in a block of code as a method parameter.
An important implementation of the Blocks is Callback functions. A callback function essentially allows us to pass a notification as a callback method when the function execution is complete. Highly useful in the case of multithreading.


4. Multithreading- Concept of running multiple threads to complete independent tasks required by the main thread to get overworked and freezing the app eventually.
Grand Central Dispatch (GCD)- It is a multithreading and concurrency API library written in C.


5. Persistence- Concept of storing app data in a local (sandboxed) filesystem across multiple sessions. This helps our apps maintain user state.
There are several way to implement persistence in the app:
a. NSUserDefaults- Part of the Foundation class. More often slow and not flexible. Hence mainly used to store user settings.
b. NSCoding/ NSKeyedArchive- More flexible and fast. Recommended to store data.
c. SQLite
d. Core Data


6. Git/ Version Control- Concept of keeping track of your file changes and allowing collaboration on the same files.


Just to reiterate, I do not own any of the above content and all credit goes to Janum Trivedi for putting this course together. The zip file containing the crash course can be downloaded here. Thanks for reading and let me know if you found this blog post useful in any way.
