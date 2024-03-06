import React from "react";

function PrivacyPolicy() {
  return (
    <main className="min-w-full">
      <div className="min-w-full min-h-screen grid grid-cols-4 grid-rows-2 bg-slate-100">
        <div className="col-start-2 col-end-4">
          <h1>Privacy Policy</h1>

          <p>
            {`At Yan's Tile Setting Services, accessible from
            https://www.yanstiles.com, one of our main priorities is the privacy
            of our visitors. This Privacy Policy document contains types of
            information that is collected and recorded by Yan's Tile Setting
            Services and how we use it.`}
          </p>

          <p>
            {`Yan ("Yan," "we," or "us") respects your privacy and is committed to
            protecting your personal information. This Privacy Policy outlines
            how we collect, use, disclose, and safeguard your information when
            you use our tile setting services in the Las Vegas City area.`}
          </p>

          <p>
            {`We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.`}
          </p>
        </div>
      </div>

      <div className="col-start-3 col-end-5 my-auto p-24">
        <div>
          <h3>1. Information We Collect</h3>
          <p>
            Personal Information: When you use our services, we may collect
            personal information such as your name, contact information,
            address, and payment details.
          </p>
          <p>
            Usage Data: We may also collect non-personal information about your
            use of our website and services, including IP address, browser type,
            and device information.
          </p>
        </div>

        <div>
          <h3>2. How We Use Your Information</h3>

          <p>
            Provide Services: We use your personal information to provide tile
            setting services, including consultation, design, and installation.
          </p>
          <p>
            Communication: We may use your contact information to communicate
            with you about your project, schedule appointments, and provide
            updates.
          </p>
          <p>
            Marketing: With your consent, we may send you promotional materials
            and special offers about our services.
          </p>
        </div>

        <div>
          <h3>3. Information Sharing</h3>
          <p>
            Service Providers: We may share your information with third-party
            service providers who assist us in providing our services, such as
            payment processors and subcontractors.
          </p>
          <p>
            Legal Compliance: We may disclose your information when required by
            law or in response to lawful requests by public authorities.
          </p>
        </div>

        <div>
          <h3>4. Data Security</h3>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, alteration, or destruction.
          </p>
          <p>
            However, no method of transmission over the internet or electronic
            storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div>
          <h3>5. Data Retention</h3>
          <p>
            We will retain your information for as long as necessary to fulfill
            the purposes outlined in this Privacy Policy unless a longer
            retention period is required or permitted by law.
          </p>
          <p></p>
        </div>

        <div>
          <h3>6. Your Rights</h3>
          <p>
            You have the right to access, update, or delete your personal
            information. You may also have the right to object to or restrict
            the processing of your information.
          </p>
          <p>
            To exercise these rights, please contact us using the information
            provided below.
          </p>
        </div>

        <div>
          <h3>7. Changes to this Privacy Policy</h3>
          <p>
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be effective immediately upon posting on our
            website.
          </p>
        </div>

        <div>
          <h3>8. Contact Us</h3>
          <p>
            {`If you have any questions or concerns about this Privacy Policy or
            our privacy practices, please contact us at [insert contact
            information]. By using Yan's tile setting services, you consent to
            the collection and use of your information as outlined in this
            Privacy Policy. Thank you for trusting Yan with your privacy.`}
          </p>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
