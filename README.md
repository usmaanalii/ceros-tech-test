# Ceros Ski Code Challenge - TypeScript Edition

Welcome to the Ceros Ski Code Challenge!

For this challenge, we have included some base code for Ceros Ski, our version of the classic Windows game SkiFree. If
you've never heard of SkiFree, Google has plenty of examples. Better yet, you can play our version here:
http://ceros-ski.herokuapp.com/

Or deploy it locally by running:

```
npm install
npm run dev
```

**How To Play**

-   Use the arrow keys to turn the skier.
-   The skier will crash if they hit an obstacle. Use the left/right keys to move away from the obstacle and then down
    to resume skiing.
-   At some point the rhino will appear, chasing the skier. It will inevitably catch the skier and eat them, ending the
    game.

**Time Limit**

Solutions should be submitted within a week of receiving the challenge. We expect the challenge to take around two
hours of your time, but you may spend as long as you need to create a robust solution. We understand that everyone has
varying levels of free time, and we'd rather you take the time and produce a solution up to your ability than rush and
turn in a suboptimal challenge. If you require more time, please reach out to us. Look through the requirements below
and let us know when you will have something for us to look at. If anything is unclear, don't hesitate to reach out.

**Requirements**

Throughout your completion of these requirements, be mindful of the design/architecture of your solution and the
quality of your code. We've provided the base code as a sample of what we expect. That being said, we're sure there are
ways the that the design and architecture could be better. If you find a better way to do something, by all means, make
it better! Your solution can only gain from having a better foundation.

-   **Add a New Feature:**

    Add in the ability for the skier to jump. The asset files for the ramp and the jumping skier are included. All you
    need do is make them jump.

    Acceptance Criteria:

    -   Jump ramps are added to the game world and appear randomly as the skier skis.
    -   The skier should enter the jumping state when they hit the jump ramp.
    -   The skier should also enter the jumping state when the user presses the spacebar.
    -   The skier should do a flip while jumping, at least one cycle through the jump images provided.
    -   While jumping, the skier should be able to jump over some obstacles:
        -   Rocks can be jumped over
        -   Trees can NOT be jumped over

-   **Future Considerations**

    All products evolve over time. In the future, our game will have many more obstacles to crash into or interact with.
    Some of them may be animated as well, we're just waiting for our design department to provide the assets. Please
    make sure your code is written in a way that will make it easy to add these future features.

-   **Documentation:**

    Update this README file with your comments about your work.

    -   What did you do and, more importantly, why you built it the way you did.
    -   Are there any known bugs?
    -   Did you do any bonus items?
    -   Tell us how to run it, either locally or through a cloud provider.

-   **Be original:**

    This should go without saying but don’t copy someone else’s game implementation! We have access to Google too!

**Grading**

Your challenge will be graded based upon the following criteria. **Before spending time on any bonus items, make sure
you have fulfilled this criteria to the best of your ability, especially the quality of your code and the
design/architecture of your solutions. We cannot stress this enough!**

-   How well you've followed the instructions. Did you do everything we said you should do?
-   The quality of your code. We have a high standard for code quality and we expect all code to be up to production
    quality before it gets to code review. Is it clean, maintainable, unit-testable, and scalable?
-   The design of your solution and your ability to solve complex problems through simple and easy to read solutions.
-   How well you document your solution. We want to know what you did and **why** you did it.

**Bonus**

_Note: You won’t be marked down for excluding any of this, it’s purely bonus. If you’re really up against the clock,
make sure you complete all of the listed requirements and to focus on writing clean, well organized, well documented
code before taking on any of the bonus._

If you're having fun with this, feel free to add more to it. Here's some ideas or come up with your own. We love seeing
how creative candidates get with this.

-   Provide a way to reset the game once it's over
-   Provide a way to pause and resume the game
-   Add a score that increments as the skier skis further
-   Increase the difficulty the longer the skier skis (increase speed, increase obstacle frequency, etc.)
-   Deploy the game to a server so that we can play it without having to install it locally
-   Write unit tests for your code

We are looking forward to see what you come up with!!

**Developer Notes**

Hello, pleasure to have you review my code. It's been a while since I used classes in Javascript, but this was a fun experience and took me back to my django days! I hope my solution doesn't make you want to break your laptop!

**What did you do and, more importantly, why you built it the way you did.**

-   I could tell immediately that there was a hint in the `README` towards needing the animation logic to be reusable. The animation logic was tightly coupled to the rhino and the skier needed similar functionality, therefore the first thing I did was create a class to encapsulate the animation logic. I think it's important to use and build on the existing patterns in the codebase you're working in, therefore I utilised the approach for `Obstacles` by colocating the `Animation` with an `AnimationManager` similar to how the `Obstacle` is colocated with it's `ObstacleManager`

-   The creation of the class was largely just shifting code from the `Rhino` class to it, the only design decision I had to think about was, how and where to pass in the callback to handle updating the image when the frame changes. The two standout options were to pass it into the constructor and reference it from an internal class field, or pass it into a relevent method. I opted for the latter simply because it didn't feel right instantiating a class with a callback (I could be wrong about this, as I've not written enough OOP Javascript recently), this does mean that the `animate` function takes in another argument, which is again something I think would need to be curbed or refactored, as I don't think functions or components (in the React world) should have a ton of props/parameters. In fact, my practice is to use objects for parameters by default, as this makes it more explicit in the code when calling a function, what each parameter is. Another option would have been to add this to the `Entity` class but I decided against this, as a means of separating concerns.

-   The next step was to make the skier jump, I initially implemented this with the use of the space key, as there was already a pattern for how to interact with key events, and a (now) reusable class to handle the animation logic. It made sense to begin with this as opposed to the ramp, as the ramp added another layer of complexity with existing functionality (obstacle interaction) also needing to be modified. this also meant that, if the jump on space click was implemented, then the jump via ramp intersection would be made simpler.

-   Implementing the jump was pretty simple, as it just meant adding a new state, and calling the animation based methods similar to how the rhino did. It meant adding a new case to the `handleInput` switch statement. I also needed to be careful to make sure the skier could only jump whilst skiing to prevent perpetual jumping.

-   Handling the ramp intersecton was perhaps the most complex part of the task, as it involved changing existing functionality. With the jump logic now implemented, I only had to worry about creating a scalable approach to allowing various obstacles to be interacted with in a variety of different ways.

-   The approach I opted for, was to create a getter and setter method for handling the intersected obstacle, instead of returning a boolean based on obstacle intersection as was done in the `checkIfHitObstacle` method. We now have a method which returns the instersected obstacle (if intersected), and a setter method to add it to the `Skier` class. This property could then be used to react to obstacle intersection based on the obstacle in question. The reason for handling getting and setting separately, was due to the need to reset the intersected obstacle to null after the interaction logic has been completed.

-   I implemented a similar switch statement as seen in `handleInput` to match the object intersected with and allow developers handle their interactions in a centralised space for each entity. This allowed me to implement the behaviour for jumping over trees and rocks nicely. I intentionally used the same pattern to maintain consistency in the codebase. There is room for improvement here, as I think we should be restricting the potential matches to only obstacle image names.

**Are there any known bugs?**

I'm not sure if the following are bugs, or if they were implemented by design. But some of the things I notices that might be "fixed" or changed were.

-   When the skier is not skiing, for example moving right, clicking the opposite direction to the one the skier is facing causes the skier to ski in the direction they were already facing. An example being: the skier is facing right, the user clicks the left key, the skier then continues skiing down and right. This could be updated to simply turn the skier around to the direction the user clicked.

-   Whent the user crashes, they are obstructed by the obstacle when attempting to move, this makes it much more difficult to escape the rhino. I looked at the original game and it seems the skier is able to carry on skiing if they crash despite being on the same location as the obstacle intersected with.

**Did you do any bonus items?**

I gauged from the `README` that there was a stress on making sure the requested feature was delivered properly and with a sound architecture, so I made the conscious decision to spend my time on making sure the requested feature was delivered to the best of my ability, coupled with an extensive explanation of why and how I did what I did. I also spent time focusing on writing/updating the annotations for the variables/methods to make sure the codebase is still up to date with the latest changes.

My intention was to spend some time on the bonus items, but as I write this, my wife (3 weeks early) has just unexpectedly given birth to our third child who I had to deliver at my home without much notice! I will switch priorities to little man and hope I've done enough to move forward to the next stage! I really appreciate being given the opportunity to present my code to you. Hope to speak soon.

**Tell us how to run it, either locally or through a cloud provider.**

Visit https://usmaanalii.github.io/ceros-tech-test/, the game was deployed using github pages as it's really easy and convenient.
