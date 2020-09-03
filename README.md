# miles-scrolled
> *Scrolling in the deep*

Chrome extension to track scrolling activity in Chrome over time, and keeping an up to date total of how many miles on every website ever.

## Tasks/Stories

### MVP:

#### 1. Figure out a sensible way to keep an accurate pixel total without impacting performance at all.

##### Edge Cases:

* A user scrolls up and down really fast
* User scrolls one direction really fast

##### Considerations:

* window.scroll firing and all this stuff happening causes latency. So it probably should do some quick addition on scroll then do the more intense local storage stuff less frequently.

#### 2. Add localstorage with a total pixel total.

##### Considerations:

* What is the cost of connecting to and updating localstorage? Should we keep a running count somewhere else before local storage and only do that at certain points (see point 3 for more points) Basically, at what point should we update the pixel total
* Would something besides local storage make more sense, or more than just one key-value pairs instead of more than one.


#### 3. Create function in extension to update localstorage either on tab change, tab focus change or tab/window close or direction change.

##### Edge Cases:

* User quitting chrome in different ways:  Computer crash, force quit, normal quit, tab close, chrome window close.
What does each one mean in terms of keeping an accurate pixels scrolled total?

#### 4. Convert pixels scrolled to miles and display in chrome dropdown.

* This must be based on a users montior and maybe other factors such as, mouse scroll sensitivity, zoom level, screen preferences, dpi, etc. Figure out how those relate to each other and affect the "pixels scrolled total"
  * A way to maybe start figuring it out is to first just get pixels scrolled without worrying about. Once that pixel total 

### V2:

* Adds ability for user to start and stop a recording and save it by datetiem interval maybe. Sort of like measuring how many miles you have driven and being able to reset to 0. Except here it would save each of those sessions somewhere with title 05-21-2020_1058AM__to__05-22-2020_0100PM
* Adds fitlers and data analysis
  * Keeps track and saves more data around where the user is scrolling to be able to do things like:
    * Filter or breakdown total by website.
    * Give user ability to see distance per chrome session
* After doing user testing on the MVP, what other features would be cool
