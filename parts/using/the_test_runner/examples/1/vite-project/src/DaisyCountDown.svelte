  <script type="ts">
    import type { ActivityContent } from "models/github";
    import logo from "./assets/svelte.png";

    /// export let stopDate; // the date time when the count will stop at zero
    export let days;
    export let hours;
    export let minutes;
    export let seconds;




   // Count Down JS Code

   // Get the root element
    // var r = document.querySelector('.count.down.seconds.digit');

    // Create a function for getting a variable value
    function inspectSeconds() {
      // Get the HTML element for the digit
      var seconds_digit_elmt = document.querySelector('.count.down.seconds.digit');
      // var seconds_digit_elmt = document.querySelector('#fleuron_seconds_digit');

      // Get the styles (properties and values) for the root
      var seconds_digit_elmt_cs = getComputedStyle(seconds_digit_elmt);
      // Alert the value of the --value variable
      console.log(`Voici l'élément [seconds] sélectionné, dont le [--value] vaut [${seconds_digit_elmt_cs.getPropertyValue('--value')}] : ` + JSON.stringify(seconds_digit_elmt, " ", 4 ))
    }
    function inspectMinutes() {
      // Get the HTML element for the digit
      var minutes_digit_elmt = document.querySelector('.count.down.minutes.digit');
      // var minutes_digit_elmt = document.querySelector('#fleuron_minutes_digit');

      // Get the styles (properties and values) for the root
      var minutes_digit_elmt_cs = getComputedStyle(minutes_digit_elmt);
      // Alert the value of the --value variable
      console.log(`Voici l'élément [minutes] sélectionné, dont le [--value] vaut [${minutes_digit_elmt_cs.getPropertyValue('--value')}] : ` + JSON.stringify(minutes_digit_elmt, " ", 4 ))
    }
    function inspectHours() {
      // Get the HTML element for the digit
      var hours_digit_elmt = document.querySelector('.count.down.hours.digit');
      // var hours_digit_elmt = document.querySelector('#fleuron_hours_digit');

      // Get the styles (properties and values) for the root
      var hours_digit_elmt_cs = getComputedStyle(hours_digit_elmt);
      // Alert the value of the --value variable
      console.log(`Voici l'élément [hours] sélectionné, dont le [--value] vaut [${hours_digit_elmt_cs.getPropertyValue('--value')}] : ` + JSON.stringify(hours_digit_elmt, " ", 4 ))
    }
    function inspectDays() {
      // Get the HTML element for the digit
      var days_digit_elmt = document.querySelector('.count.down.days.digit');
      // var days_digit_elmt = document.querySelector('#fleuron_days_digit');

      // Get the styles (properties and values) for the root
      var days_digit_elmt_cs = getComputedStyle(days_digit_elmt);
      // Alert the value of the --value variable
      console.log(`Voici l'élément [days] sélectionné, dont le [--value] vaut [${days_digit_elmt_cs.getPropertyValue('--value')}] : ` + JSON.stringify(days_digit_elmt, " ", 4 ))
    }
    function inspectCountdown() {
      inspectSeconds()
      inspectMinutes()
      inspectHours()
      inspectDays()
    }

    // Utilities to parse seconds / etc...
    /**
     * give it a string, it will return a boolean to tell you if yes or no that string is parseable to a finite Number
     */
    function isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
    /**
     * give it a string, it will return a boolean to tell you if yes or no that string is parseable to an Integer, and that integer is greater or equal to zero.
     */
    function isNatural(n) {
      return !isNaN(parseInt(n)) && ((parseInt(n)) >= 0);
    }

      // ------------------------------------------------------------------------------------------------------ //
      // ------------------------------------------------------------------------------------------------------ //
      // Create functions for incrementing countdown using the [--value] css variable value
      // ------------------------------------------------------------------------------------------------------ //
      // ------------------------------------------------------------------------------------------------------ //

      /**
       * => if and only if seconds are not 00, Sets the value of variable --value to decremented value, if and only if seconds are strictly greater than 0 <=> if and only if seconds are not exactly 0
       * => if and only if seconds are exactly 00, then :
       *       1./ Set the value of variable --value to 59 value
       *       2./ Decrement Minutes by invoking decrementMinutes
       */
      function decrementSeconds() {
        console.log(` << << << << << << [ =========================== ] >> >> >> >> >> >>  `)
        console.log(` << << << << << << [ function decrementSeconds() ] >> >> >> >> >> >>  `)
        console.log(` << << << << << << [ =========================== ] >> >> >> >> >> >>  `)

        // Get the HTML element for the digit
        var seconds_digit_elmt = document.querySelector('.count.down.seconds.digit');
        // var seconds_digit_elmt = document.querySelector('#fleuron_seconds_digit');

        // ---
        // Get the value, to check it is an integer between zero and 59
        var seconds_digit_elmt_cs = getComputedStyle(seconds_digit_elmt);
        var secondsValueAsString = seconds_digit_elmt_cs.getPropertyValue('--value');
        // Log the value of the --value variable
        console.log(`[function decrementSeconds()] >> Voici l'élément [seconds] sélectionné, dont le [--value] vaut [${secondsValueAsString}] : ` + JSON.stringify(seconds_digit_elmt, " ", 4 ))

        if (isNatural(secondsValueAsString)) {
          var secondsValueAsInt = parseInt(secondsValueAsString)
          if (secondsValueAsInt != 0) {
            seconds_digit_elmt.style.setProperty('--value', `${secondsValueAsInt - 1}`);
          } else {
            seconds_digit_elmt.style.setProperty('--value', `59`);
            decrementMinutes()
          }
        }
        console.log(`[function decrementSeconds()] >> AFTER DECREMENTING SECONDS, INSPECTING NEW COUNTDOWN : `)
        inspectCountdown()
    }


    function decrementMinutes() {
      console.log(` << << << << << << [ =========================== ] >> >> >> >> >> >>  `)
      console.log(` << << << << << << [ function decrementMinutes() ] >> >> >> >> >> >>  `)
      console.log(` << << << << << << [ =========================== ] >> >> >> >> >> >>  `)

      // Get the HTML element for the digit
      var minutes_digit_elmt = document.querySelector('.count.down.minutes.digit');
      // var minutes_digit_elmt = document.querySelector('#fleuron_minutes_digit');

      // ---
      // Get the value, to check it is an integer between zero and 59
      var minutes_digit_elmt_cs = getComputedStyle(minutes_digit_elmt);
      var minutesValueAsString = minutes_digit_elmt_cs.getPropertyValue('--value');
      // Log the value of the --value variable
      console.log(`[function decrementMinutes()] >> Voici l'élément [minutes] sélectionné, dont le [--value] vaut [${minutesValueAsString}] : ` + JSON.stringify(minutes_digit_elmt, " ", 4 ))

      if (isNatural(minutesValueAsString)) {
        var minutesValueAsInt = parseInt(minutesValueAsString)
        if (minutesValueAsInt != 0) {
          minutes_digit_elmt.style.setProperty('--value', `${minutesValueAsInt - 1}`);
        } else {
          minutes_digit_elmt.style.setProperty('--value', `59`);
          decrementMinutes()
        }
      }
      console.log(`[function decrementMinutes()] >> AFTER DECREMENTING MINUTES, INSPECTING NEW COUNTDOWN : `)
      inspectCountdown()
  }
    // ------------------------------------------------------------------------------------------------------ //
    // ------------------------------------------------------------------------------------------------------ //
    // Create functions for incrementing countdown using the [--value] css variable value
    // ------------------------------------------------------------------------------------------------------ //
    // ------------------------------------------------------------------------------------------------------ //

    /**
     * => if and only if seconds are not 59, Sets the value of variable --value to incremented value, if and only if seconds are less than 60 <=> if and only if seconds are exactly 59
     * => if and only if seconds are exactly 59, then :
     *       1./ Set the value of variable --value to zero value
     *       2./ Increment Minutes by invoking incrementMinutes
     */
    function incrementSeconds() {
      console.log(` << << << << << << [ =========================== ] >> >> >> >> >> >>  `)
      console.log(` << << << << << << [ function incrementSeconds() ] >> >> >> >> >> >>  `)
      console.log(` << << << << << << [ =========================== ] >> >> >> >> >> >>  `)

      // Get the HTML element for the digit
      var seconds_digit_elmt = document.querySelector('.count.down.seconds.digit');
      // var seconds_digit_elmt = document.querySelector('#fleuron_seconds_digit');

      // ---
      // Get the value, to check it is an integer between zero and 59
      var seconds_digit_elmt_cs = getComputedStyle(seconds_digit_elmt);
      var secondsValueAsString = seconds_digit_elmt_cs.getPropertyValue('--value');
      // Log the value of the --value variable
      console.log(`[function incrementSeconds()] >> Voici l'élément [seconds] sélectionné, dont le [--value] vaut [${secondsValueAsString}] : ` + JSON.stringify(seconds_digit_elmt, " ", 4 ))

      // Set the value of variable --value to incremented value, if and only if seconds are less than 60 <=> if and only if seconds are exactly 59
      seconds_digit_elmt.style.setProperty('--value', 'lightblue');
      // if and only if seconds are exactly 59, then :
      //   1./ Set the value of variable --value to zero value
      //   2./ Increment Minutes by invoking incrementMinutes

      if (isNatural(secondsValueAsString)) {
        var secondsValueAsInt = parseInt(secondsValueAsString)
        if (secondsValueAsInt != 59) {
          seconds_digit_elmt.style.setProperty('--value', `${secondsValueAsInt+1}`);
        } else {
          seconds_digit_elmt.style.setProperty('--value', `0`);
          incrementMinutes()
        }
      }
      console.log(`[function incrementSeconds()] >> AFTER INCREMENTING SECONDS, INSPECTING NEW COUNTDOWN : `)
      inspectCountdown()
  }
  function incrementMinutes() {
     console.log(` << << << << << << [ =========================== ] >> >> >> >> >> >>  `)
     console.log(` << << << << << << [ function incrementMinutes() ] >> >> >> >> >> >>  `)
     console.log(` << << << << << << [ =========================== ] >> >> >> >> >> >>  `)


     // Get the HTML element for the digit
     var minutes_digit_elmt = document.querySelector('.count.down.minutes.digit');
     // var minutes_digit_elmt = document.querySelector('#fleuron_minutes_digit');

     // ---
     // Get the value, to check it is an integer between zero and 59
     var minutes_digit_elmt_cs = getComputedStyle(minutes_digit_elmt);
     var minutesValueAsString = minutes_digit_elmt_cs.getPropertyValue('--value');
     // Log the value of the --value variable
     console.log(`[function incrementminutes()] >> Voici l'élément [minutes] sélectionné, dont le [--value] vaut [${minutesValueAsString}] : ` + JSON.stringify(minutes_digit_elmt, " ", 4 ))

     // Set the value of variable --value to incremented value, if and only if minutes are less than 60 <=> if and only if minutes are exactly 59
     minutes_digit_elmt.style.setProperty('--value', 'lightblue');
     // if and only if minutes are exactly 59, then :
     //   1./ Set the value of variable --value to zero value
     //   2./ Increment Hours by invoking incrementMinutes

     if (isNatural(minutesValueAsString)) {
       var minutesValueAsInt = parseInt(minutesValueAsString)
       if (minutesValueAsInt != 59) {
         minutes_digit_elmt.style.setProperty('--value', `${minutesValueAsInt+1}`);
       } else {
         minutes_digit_elmt.style.setProperty('--value', `0`);
         incrementHours()
       }
     }

     console.log(`[function incrementMinutes()] >> AFTER INCREMENTING MINUTES, INSPECTING NEW COUNTDOWN : `)
     inspectCountdown()

  }

  function incrementHours() {
     console.log(` << << << << << << [ =========================== ] >> >> >> >> >> >>  `)
     console.log(` << << << << << << [ function incrementHours() ] >> >> >> >> >> >>  `)
     console.log(` << << << << << << [ =========================== ] >> >> >> >> >> >>  `)
     console.log(` [function incrementHours() ] >>  Not implemented `)

  }
  function incrementDays() {
     console.log(` << << << << << << [ =========================== ] >> >> >> >> >> >>  `)
     console.log(` << << << << << << [ function incrementDays() ] >> >> >> >> >> >>  `)
     console.log(` << << << << << << [ =========================== ] >> >> >> >> >> >>  `)
     console.log(` [function incrementDays() ] >>  Not implemented `)

  }



  ///
  // ------------------------------------------------------------------------------------------------------ //
  // ------------------------------------------------------------------------------------------------------ //
  // RXJS TIMER
  // ------------------------------------------------------------------------------------------------------ //
  // ------------------------------------------------------------------------------------------------------ //
  // RxJS v6+
  // ---
  //     https://www.learnrxjs.io/learn-rxjs/operators/creation/timer
  //     may also use interval to be able to start / stop / reset the countdown :
  //       - https://www.learnrxjs.io/learn-rxjs/recipes/stop-watch
  //       - https://stackblitz.com/edit/rxjs-stop-watch-2ud3od?file=index.ts
  // ---
  ///

  import { timer } from 'rxjs';

  //emit 0 after 1 second then complete, since no second argument is supplied
  const source = timer(1000, 900);
  //output: 0
  const subscribe = source.subscribe(iteration => {
    console.log(`Count Down iteration = ${iteration}`);
    decrementSeconds()
  });

  </script>

  <div class="p-3 m-3 text-zinc-500 rounded bg-cyan-700 ">

    <!--
    <div class="flex flex-row items-center">
      <button class="btn btn-warning m-3" on:click={decrementSeconds}>
        Debug decrement countdown
      </button>
    </div>
    <div class="flex flex-row items-center">
      <button class="btn btn-warning m-3" on:click={incrementSeconds}>
        Debug increment countdown
      </button>
    </div>
    -->
    <article class="prose prose-slate flex flex-row items-center center mx-auto m-7 text-green-500"><!-- the prose css class comes from tailwind typography plugin -->
        <h1 class="font-large leading-tight text-4xl justify-center text-green-500">Daisy UI Reactive (RxJS) Countdown </h1>
    </article>
    <div class="flex flex-row items-center center mx-auto">

      <div class="grid grid-flow-col gap-5 text-center auto-cols-max justify-center center mx-auto">
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
            <span class="count down days digit" style="--value:{days};"></span>
          </span>
          days
        </div>
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
            <span class="count down hours digit" style="--value:{hours};"></span>
          </span>
          hours
        </div>
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
            <span class="count down minutes digit" style="--value:{minutes};"></span>
          </span>
          min
        </div>
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span class="countdown font-mono text-5xl">
            <span id="fleuron_seconds_digit" class="count down seconds digit" style="--value:{seconds};"></span>
          </span>
          sec
        </div>
      </div>
    </div>
  </div>
