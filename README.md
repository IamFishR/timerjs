# timerjs
A JavaScript class for creating and managing timers. It can be used to start, pause, stop, reset, and update the display of a timer. The Timer class also has callback functions that can be called when the timer starts, stops, pauses, resets, or finishes.

### Usage example

To use the Timer class, you first need to create a new instance of the class, passing in the desired time in seconds and any callback functions that you want to be called when the timer starts, stops, pauses, resets, or finishes.

For example, the following code creates a new timer instance with a time of 60 seconds, and will display the remaining time in the `div` element with the id `timer-display`:

```javascript
const timer = new Timer({
  timeInSeconds: 60,
  targetElement: document.getElementById('timer-display'),
});


Once you have created a new timer instance, you can start, pause, stop, reset, or update the display of the timer using the corresponding methods:

javascript
// Start the timer
timer.start();

// Pause the timer
timer.pause();

// Stop the timer
timer.stop();

// Reset the timer
timer.reset();

// Update the display with the remaining time
timer.updateDisplay();


### Callback functions

The Timer class has the following callback functions:

* `onStart`: This function is called when the timer starts.
* `onStop`: This function is called when the timer stops.
* `onPause`: This function is called when the timer pauses.
* `onReset`: This function is called when the timer resets.
* `onFinish`: This function is called when the timer finishes.

You can use these callback functions to perform custom actions when the timer starts, stops, pauses, resets, or finishes.

For example, the following code will display a message when the timer starts and finishes:

javascript
const timer = new Timer({
  timeInSeconds: 60,
  onStart: () => {
    console.log('The timer has started!');
  },
  onFinish: () => {
    console.log('The timer has finished!');
  },
});

timer.start();


### Conclusion

The Timer class is a powerful tool for creating and managing timers in JavaScript. It can be used to create simple timers, such as the timer in the example above, or more complex timers that meet the specific needs of your application.
