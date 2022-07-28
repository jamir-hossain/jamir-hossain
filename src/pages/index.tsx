import type { NextPage } from "next";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import Card from "components/Card";

const Home: NextPage = () => {
  const items = ["home", "about", "works"];
  const [isShowing, setIsShowing] = useState("home");

  const buttonHandler = (value: string) => {
    if (isShowing === value) {
      setIsShowing(value);
    } else {
      setIsShowing("");
      setTimeout(() => setIsShowing(value), 100);
    }
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-8"
      style={{ maxHeight: "700px", height: "100%" }}
    >
      <Card className="md:col-span-3 z-50">
        <h1>hello left</h1>
        <div className="flex">
          <button onClick={() => buttonHandler("home")}>Home</button>
          <button onClick={() => buttonHandler("about")}>About</button>
          <button onClick={() => buttonHandler("works")}>Works</button>
        </div>
      </Card>

      <div className="relative md:col-span-5">
        <div>
          {items.map((item) => (
            <Transition
              key={item}
              show={isShowing === item}
              enter="transition ease-in-out duration-1000 transform"
              enterFrom="-translate-x-full opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="transition ease-in-out duration-1000 transform"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="-translate-x-full opacity-0"
              className="absolute top-4 bottom-4 m-auto bg-white rounded-r-lg w-full"
            >
              <div>
                <h1>I will appear and disappear.</h1>
              </div>
            </Transition>
          ))}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Home;
