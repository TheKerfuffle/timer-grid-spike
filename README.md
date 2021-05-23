This document contains information about my time developing a Timer and Grid system for use with my Puzzle Application.

Timer element

     I began by building a simple stopwatch timer that would display on the DOM and could be manipulated with a simple stop start and reset for its function. This timer existed only on the client side of things and was not able to speak with a reducer so when one navigated away from the page, it would not store its value

     Next I worked on drawing from a timer reducer so that ones progress could be stored and persist from one timer page to another. I also included a save button which dispatches the timers current status to the reducer.

     Next I am going to try and create a dispatch when someone loses focus on the screen.

Grid element

    This has been a tough challenge. Nonograms need data to populate a large grid and the puzzle app I plan to build will do need to store an individual user's progress on a puzzle as well. I can get a layout I am happy with, however I need to find a way to get the vertical and horizontal tabs to show their data as well without having to store said data.
    
    Next I plan next to try and manipulate the color of the boxes created on click.