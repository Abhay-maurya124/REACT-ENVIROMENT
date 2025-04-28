function App() {
  return (
    <div className="container-fluid">
      <div className="nav-bar h-[80px] width-[100%] ">
        <div className="row flex justify-evenly pt-5">
          <div className="logo">
            <img
              src="/images/vecteezy_nike-transparent-icon_50816834.png"
              alt="logo"
              className="h-[40px] w-[auto]"
            />
          </div>
          <ul class="nav flex justify-center gap-10 ">
            <li class="nav-item">
              <a class="nav-link uppercase" href="#">
                menu
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link uppercase" href="#">
                location
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link uppercase" href="#">
                about
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link uppercase ">contact</a>
            </li>
          </ul>
          <button>
            <a
              href="#"
              className="hover:bg-blue-600 text-white px-4 py-2 rounded uppercase bg-red-400 transition ease duration-300"
           id="login" >
              login
            </a>
          </button>
        </div>
      </div>
      <div class="row flex justify-evenly" id="row-both">
        <div class="col h-[0.6rem]  w-[100%] text-center ps-16 ">
          <h1 className="text-9xl font-black text-left ps-1" id="h1">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p
            className="text-left text-xl h-[90px] 
          w-[32rem] mt-[20px] indent-8" 
          >
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HEAR TO HELP YOU WITH
            OUR SHOE.
          </p>
          <div className="btn-area text-left mt-3">
            <button>
              <a
                href="#"
                className=" inline-block h-[35px] w-[145px]  mx-5 uppercase py-1 rounded-[1vh] text-white stroke-2 bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 transition ease duration-300 font-semibold"
              >
                shop-now
              </a>
            </button>
            <button>
              <a
                href="#"
                className="inline-block h-[35px] w-[145px] border-2 border-gray-600 mx-5 uppercase py-1 rounded-[1vh] hover:bg-violet-600 transition ease duration-300 font-semibold"
              >
                contegory
              </a>
            </button>
          </div>
          <div className="text-p">
            <p className="uppercase font-semibold text-left mt-5 ps-3">available on</p>
            <div className="platform flex mt-3 ms-3">
              <img src="public/images/pngwing.com (3).png" className="w-[35px] mx-4" />
              <img src="public/images/pngwing.com (4).png" className="w-[35px] mx-4" />
            </div>
          </div>
        </div>
        <div class="col0 h-[40.6rem] w-[100%] overflow-hidden">
          <img
            src="public/images/pngwing.com (2).png"
            className="h-[105%] w-[auto]"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
