import React from "react";

function ContactUs() {
  return (
    <main className="min-w-full">
      <div className="min-w-full min-h-screen grid grid-cols-4 bg-slate-100">
        <div className="col-start-2 col-end-4">
          <h3>🏗️ Transforming Spaces with Expert Tile Setting Services</h3>
          <p>
            Are you looking to elevate the aesthetic appeal of your home or
            workspace? Meet Yan, your trusted partner in crafting stunning tile
            designs that breathe new life into any environment. With over two
            decades of hands-on experience in construction work, Yan brings a
            wealth of expertise to every project he undertakes.
          </p>
          <p>
            {`Originally from Ukraine, Yan's journey in the United States has been
            nothing short of remarkable. After honing his skills in the bustling
            streets of New York City for 11 years, he now calls the vibrant city
            of Las Vegas his home.`}
          </p>
        </div>
      </div>

      <div className="min-w-full min-h-screen grid grid-cols-4 bg-slate-100">
        <div className=" col-start-2 col-end-4">
          <h1>Contact Us</h1>
          <div>
            <form className="w-1/2">
              <div>
                <label htmlFor=""></label>
                <input type="text" placeholder="enter first name" />
              </div>
              <div>
                <label htmlFor=""></label>
                <input type="text" placeholder="enter last name" />
              </div>

              <div>
                <label htmlFor=""></label>
                <input type="text" placeholder="enter email" />
              </div>

              <div>
                <label htmlFor=""></label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>

              <div>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactUs;
