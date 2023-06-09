import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://deadline.com/wp-content/uploads/2022/12/walt-disney-logo.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
          <p className="mb-5">
            Welcome to our GoyPlay Disney Toy Wonderland! Immerse yourself in a world of
            enchantment and endless fun. Explore our captivating collection of
            beloved characters, exciting playsets, and magical toys. Let your
            imagination soar as you embark on unforgettable adventures with
            Mickey, Elsa, Buzz, and more. Start the magic today!
          </p>
          <a className="btn btn-primary" href="#body">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
