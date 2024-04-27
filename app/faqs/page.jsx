
import FaqsBox from "@/components/FAQsBox";
import FAQForm from "@/components/forms/FAQForm";


function Faqs() {

  return (
    <main className="min-w-full">
      <div className="min-w-full min-h-screen flex flex-col items-center justify-around space-y-8 bg-picton-blue-400 p-16">
        <div className=" space-y-6">
          <h2 className=" max-w-lg text-lg font-semi-bold text-center md:text-xl lg:text-4xl text-picton-blue-100">FAQ: Your Guide to Expert Tile Setting Services</h2>

          <h4 className="max-w-md text-sm font-semi-bold text-center  mb-2 md:text-md lg:text-lg text-picton-blue-200">
            Your Comprehensive Resource for Answers to Common Questions About
            Tile Setting Services
          </h4>
        </div>

          <div className="flex flex-col md:flex-row p-16">
          <p className="max-w-md mx-auto p-6 text-base text-center mb-4 text-white lg:text-lg lg:text-left lg:mt-0 lg:mx-0">
           Whether you&apos;re curious about our process, wondering what sets us
            apart, or seeking guidance on your upcoming tile project, you&apos;ll
            find the answers you need right here. Explore our frequently asked
            questions below. 
          </p>

          <p className="max-w-md mx-auto p-6 text-base text-center mb-4 text-white lg:text-lg lg:text-left lg:mt-0 lg:mx-0">If you don&apos;t see
            your question listed, don&apos;t hesitate to reach out to us directly for
            personalized assistance. Let&apos;s turn your vision into reality
            together.</p>
          </div>
        
      </div>

      <div id="faq-accordian" className="flex flex-col md:flex-row p-16">
        <div className="container flex flex-col items-center justify-start mx-auto p-6 mb-32 space-y-4">
          <h4 className="max-w-md mx-auto text-lg text-center text-picton-blue-400 lg:text-xl lg:mt-0 lg:mx-0">Have a question you can ask right here!</h4>

          <FAQForm />
        </div>

        <div className="container mx-auto px-6">
          <FaqsBox />
        </div>
      </div>
    </main>
  );
}

export default Faqs;
