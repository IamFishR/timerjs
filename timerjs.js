
(function (globals) {
    'use strict';

    class Timer {
        /**
         * Create a timer.
         * @param {Object} params - The timer parameters.
         * @param {number} params.timeInSeconds - The time in seconds for the timer.
         * @param {Function} params.onStart - The function to call when the timer starts.
         * @param {Function} params.onStop - The function to call when the timer stops.
         * @param {Function} params.onPause - The function to call when the timer pauses.
         * @param {Function} params.onReset - The function to call when the timer resets.
         * @param {Function} params.onFinish - The function to call when the timer finishes.
         * @param {HTMLElement} params.targetElement - The element to update with the remaining time.
         * @param {string} params.defaultFormat - The default format for the timer display.
         */
        constructor(params) {
            this.timeInSeconds = params.timeInSeconds;
            this.onStart = params.onStart;
            this.onStop = params.onStop;
            this.onPause = params.onPause;
            this.onReset = params.onReset;
            this.onFinish = params.onFinish;
            this.targetElement = params.targetElement;
            this.defaultFormat = params.defaultFormat;

            this.configuration();
        }

        /**
         * Set the default configuration for the timer.
         */
        configuration() {
            this.defaultFormat = 'hh:mm:ss';
            this.defaultTimeInSeconds = 0;
            this.intervalId = null;
        }

        /**
         * Start the timer.
         */
        start() {
            this.intervalId = setInterval(() => {
                this.timeInSeconds--;

                if (this.timeInSeconds < 0) {
                    this.stop();
                    this.onFinish();
                    return;
                }

                this.updateDisplay();
            }, 1000);

            this.onStart();
        }

        /**
         * Pause the timer.
         */
        pause() {
            clearInterval(this.intervalId);
            this.onPause();
        }

        /**
         * Stop the timer.
         */
        stop() {
            clearInterval(this.intervalId);
            this.timeInSeconds = this.defaultTimeInSeconds;
            this.updateDisplay();
            this.onStop();
        }

        /**
         * Reset the timer.
         */
        reset() {
            this.timeInSeconds = this.defaultTimeInSeconds;
            this.updateDisplay();
            this.onReset();
        }

        /**
         * Update the display with the remaining time.
         */
        updateDisplay() {
            const time = new Date(this.timeInSeconds * 1000);
            const hours = time.getUTCHours().toString().padStart(2, '0');
            const minutes = time.getUTCMinutes().toString().padStart(2, '0');
            const seconds = time.getUTCSeconds().toString().padStart(2, '0');

            const formattedTime = `${hours}:${minutes}:${seconds}`;

            if (this.targetElement) {
                if (typeof this.targetElement === 'object') {
                    this.targetElement['hours'].innerHTML = hours;
                    this.targetElement['minutes'].innerHTML = minutes;
                    this.targetElement['seconds'].innerHTML = seconds;
                } else {
                    this.targetElement.innerHTML = formattedTime;
                }
            }
        }
    }

    globals.Timer = Timer;

})(window);