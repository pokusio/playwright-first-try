  <script type="ts">
    import type { ActivityContent } from "models/github";
    import logo from "./assets/svelte.png";

    // ------------------------------------------------------------------------------------------------------ //
    // ------------------------------------------------------------------------------------------------------ //
    // RXJS TIMER: Carousel 1
    // ------------------------------------------------------------------------------------------------------ //
    // ------------------------------------------------------------------------------------------------------ //
    // RxJS v6+
    import { timer } from 'rxjs';

    //emit 0 after 1 second then complete, since no second argument is supplied
    const source = timer(1000, 900);
    //output: 0
    /*
    const subscribe = source.subscribe(iteration => {
      console.log(`Count Down iteration = ${iteration}`);
      decrementSeconds()
    });
    */
  </script>

  <div class="p-3 m-3 text-zinc-500 rounded bg-cyan-700 ">
    <article class="prose prose-slate flex flex-row items-center center mx-auto m-7 text-green-500"><!-- the prose css class comes from tailwind typography plugin -->
        <h1 class="font-large leading-tight text-4xl justify-center text-green-500">Daisy UI Reactive Carousel </h1>
    </article>

    <!-- Carousel 1 -->
    <h1 class="font-large leading-tight text-4xl justify-center text-white"> Carousel 1  :</h1>
    <h1 class="font-large leading-tight text-2xl justify-center text-white italic mb-5 ">(hover and scroll up/down) </h1>
    <div class="flex flex-row items-center center mx-auto p-5 ">

      <div class="h-96 carousel carousel-vertical rounded-box">
        <div class="carousel-item h-full">
          <img src="https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2" />
        </div>
        <div class="carousel-item h-full">
          <img src="https://api.lorem.space/image/game?w=256&h=400&hash=500B67FB" />
        </div>
        <div class="carousel-item h-full">
          <img src="https://api.lorem.space/image/game?w=256&h=400&hash=A89D0DE6" />
        </div>
        <div class="carousel-item h-full">
          <img src="https://api.lorem.space/image/game?w=256&h=400&hash=225E6693" />
        </div>
        <div class="carousel-item h-full">
          <img src="https://api.lorem.space/image/game?w=256&h=400&hash=9D9539E7" />
        </div>
        <div class="carousel-item h-full">
          <img src="https://api.lorem.space/image/game?w=256&h=400&hash=BDC01094" />
        </div>
        <div class="carousel-item h-full">
          <img src="https://api.lorem.space/image/game?w=256&h=400&hash=7F5AE56A" />
        </div>
      </div>

    </div>


    <!-- Carousel 2 -->
    <h1 class="font-large leading-tight text-4xl justify-center text-white"> Carousel 2 :</h1>
    <h1 class="font-large leading-tight text-2xl justify-center text-white italic mb-5 ">(automatically rotates) </h1>
    <div class="flex flex-row items-center center mx-auto w-full">

      <div class="carousel w-full">
        <div id="horizontalItem1" class="carousel-item w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" class="w-full" />
        </div>
        <div id="horizontalItem2" class="carousel-item w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-full" />
        </div>
        <div id="horizontalItem3" class="carousel-item w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-full" />
        </div>
        <div id="horizontalItem4" class="carousel-item w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full" />
        </div>
      </div>
    </div>
    <div class="flex flex-row items-center center mx-auto w-full p-1">
      <div class="flex justify-center w-full py-2 gap-2 w-full">
        <a href="#horizontalItem1" class="btn btn-xs">1</a>
        <a href="#horizontalItem2" class="btn btn-xs">2</a>
        <a href="#horizontalItem3" class="btn btn-xs">3</a>
        <a href="#horizontalItem4" class="btn btn-xs">4</a>
      </div>
    </div>




    <!-- Carousel 3 -->
    <h1 class="font-large leading-tight text-4xl justify-center text-white"> Carousel 3  :</h1>
    <h1 class="font-large leading-tight text-2xl justify-center text-white italic mb-5 ">(arrows to rotate) </h1>
    <div class="flex flex-row items-center center mx-auto">

      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" class="w-full"> /
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">❮</a>
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-full"> /
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a>
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-full"> /
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a>
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full"> /
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">❮</a>
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>





  </div>
