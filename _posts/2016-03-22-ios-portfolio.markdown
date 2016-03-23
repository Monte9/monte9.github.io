---
title:  "iOS Portfolio"
date:   2016-03-22 19:24:00
categories: [blogs]
tags: [iOS]
---
**"I _live_, _breathe_ and _sleep_ Swift." - Monte Thakkar**

I am really passionate about iOS development and I find developing new iOS apps challenging yet fun. I am looking for internship/ full-time opportunities as a iOS Developer to work on ideas that are making (or plan to make) a difference

## Tools and Resources-

1. Written in Swift
2. Use Cocoapods
3. Auto Layout all the way (iPhone 5/5s, 6/6s, 6Plus/6sPlus)
4. Git for source control via terminal

## Implemented features-

{{ '[x]' | checked }} GET/POST Request (API Calls)

{{ '[x]' | checked }} OAuth

{{ '[x]' | checked }} Table View/ Collection View (duh..)

{{ '[x]' | checked }} Pull to referesh & Infinite Scroll

{{ '[x]' | checked }} Autolayout

{{ '[x]' | checked }} Map View

{{ '[x]' | checked }} Camera


## Code Samples-

1. Tab Bar setup

```swift
func setupTabBars() {
    // Set up the Tweets View Controller
    let tweetsNavigationController = storyboard.instantiateViewControllerWithIdentifier("TweetsNavigationController") as! UINavigationController
    let tweetsViewController = tweetsNavigationController.topViewController as! TweetsViewController
    tweetsNavigationController.tabBarItem.title = "Home"
    tweetsNavigationController.tabBarItem.image = UIImage(named: "home")

    //Customize Tweets navigation bar UI
    tweetsNavigationController.navigationBar.titleTextAttributes = [NSForegroundColorAttributeName: UIColor(rgba: "#55acee").CGColor]

    // Set up the Home View Controller
    let meViewController = storyboard.instantiateViewControllerWithIdentifier("ProfileViewController")
    meViewController.tabBarItem.title = "Me"
    meViewController.tabBarItem.image = UIImage(named: "me")

    // Set up the Tab Bar Controller to have two tabs
    tabBarController.viewControllers = [tweetsNavigationController, meViewController]
    UITabBar.appearance().tintColor = UIColor(rgba: "#55acee")
    //    UITabBar.appearance().barTintColor = UIColor.blackColor()

    // Create an Image View to replace the Title View
    var imageView: UIImageView = UIImageView(frame: CGRectMake(0.0, 0.0, 40.0, 40.0))
    imageView.contentMode = UIViewContentMode.ScaleAspectFit
    var image: UIImage = UIImage(named: "Icon-Small-50")!
    imageView.image = image
    tweetsNavigationController.navigationBar.topItem?.titleView = imageView

    // Make the Tab Bar Controller the root view controller
    window?.rootViewController = tabBarController
    window?.makeKeyAndVisible()

}
```

## Other resources-
1. [CodePath University][codepath]: _"Without CodePath, I would still be trying to learn swift from a physical book"_
2. [Slack][slack]: _"Helping teams everywhere 'Be less busy'"_
3. [LiceCap][licecap]: _"Gifs created with LiceCap"_
4. [icons8][icons8]: _"All the Icons You Need. Guaranteed."_

[codepath]:      https://codepath.com/
[slack]:   https://slack.com/
[licecap]: http://www.cockos.com/licecap/
[icons8]: https://icons8.com/