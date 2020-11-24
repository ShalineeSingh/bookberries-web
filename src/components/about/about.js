import React from "react"
import Image from "../image"
import "./about.scss"

const About = () => (
  <div className="about-container">
    <p className="text-center about-header pt-5 heading-4">
      We have a huge collection of new and pre - owned books.
      <br />
      Pick whatever suits you best.
    </p>
    <div className="row">
      <div className="col-md-6 offset-md-1">
        <div className="step-container clearfix">
          <div className="step-image float-left">
            <Image alt="store icon" filename="store.png" />
          </div>
          <div className="step-text float-right">
            <p className="text-yellow heading-4">Step 1:</p>
            <p className="text-sky-blue">Find your favourite book</p>
            <p>
              Visit the store or check if we have a copy of the book you have in
              mind here.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* --------- */}
    <div className="row">
      <div className="col-md-5 offset-md-5">
        <div className="step-container clearfix">
          <div className="step-text float-left">
            <p className="text-yellow heading-4">Step 2:</p>
            <p className="text-sky-blue">Add it to your bag</p>
            <p>Purchase the book you like at the price mentioned.</p>
          </div>
          <div className="step-image float-right">
            <Image alt="store icon" filename="book_bag.png" />
          </div>
        </div>
      </div>
    </div>
    {/* ------- */}
    <div className="row">
      <div className="col-md-6 offset-md-2">
        <div className="step-container clearfix">
          <div className="step-image float-left">
            <Image alt="store icon" filename="credit.png" />
          </div>
          <div className="step-text float-right">
            <p className="text-yellow heading-4">Step 3:</p>
            <p className="text-sky-blue">Read, Return and Repeat...</p>
            <p>
              After you have read the book, you can come back and return it to
              us and we will give you store credits upto 60% of the original
              price.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* --------- */}
    <div className="row">
      <div className="col-md-6 mx-auto">
        <p className="text-center about-header pt-5 heading-4">
          Use your store credits to find the next set of books you would like to
          read.
        </p>
      </div>
    </div>
    <hr className="text-sky-blue" />
  </div>
)
export default About
