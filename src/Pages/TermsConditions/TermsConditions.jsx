import React from "react";
import bg7 from "../../assets/images/bg7.png";

export default function TermsConditions() {
  const sections = [
    {
      title: "Highlights",
      content: (
        <div className="space-y-4">
          <p>
            The following contains the Terms of Use (the "Terms" or "Agreement")
            in full, but here are a few key points that will help outline the
            details. 
          </p>
          <p>
            This is a binding contract. These Terms form an agreement between
            you and Florle LLC and will always govern your use of Florle LLC’s
            services anywhere and everywhere across the Florle LLC Platform. By
            accessing or using the Florle LLC Platform in any way, you are
            agreeing to these Terms. You may also enter into or accept
            additional agreements or policies with Florle LLC when you use
            certain services as described in Section 1.
          </p>
          <p>
            These Terms include intellectual property licenses. While you retain
            ownership of rights to the content you post or share, you provide us
            with a broad license to make your content available to Florle LLC
            and our community of users. In exchange, we provide you with a
            license to use the Florle LLC Platform for your use and enjoyment.
          </p>
          <p>
            We have a specific process for dispute resolution, and these Terms
            include an arbitration agreement, a class action waiver, and a jury
            trial waiver that affect your rights, unless you choose to opt out,
            as described in Section 10. We also require that you reach out to us
            first to help us resolve your dispute informally.
          </p>
          <p>We have a Privacy Policy that sets forth our privacy practices.</p>
          <p>
            You have certain rights and remedies under these Terms, including
            the right to terminate the Agreement (but some provisions may
            survive, as set forth in Section 12). We will not be liable for any
            damages, and in any event, our liability is limited to USD$100 or
            the amount you paid us, if any, in the past six months for the
            services giving rise to the claim.
          </p>
        </div>
      ),
    },
    {
      title: "1. The Florle Platform and Which Terms Apply to You",
      content: (
        <div className="">
          <p>
            This section describes the Florle Platform and which terms and
            policies apply to you based on your use of the Florle Platform.
          </p>
        </div>
      ),
    },
    {
      title: "This is a Binding Agreement",
      content: (
        <div className="space-y-4">
          <p>
            These Terms set forth the binding legal agreement between you
            and Florle LLC (“Florle,” “we,” “our,” or “us”). These Terms govern
            your use of florle.com and all related websites (including those on
            other country code top-level domains operated by Florle), mobile
            applications, products, software, service, programs, and networks
            offered by Florle, including our plug-ins, integrations, embed
            tools, browser extensions, and any other products or features owned,
            operated, branded, or offered by Florle (collectively, the “Florle
            Platform”).
          </p>
          <p>
            If you are accessing or using the Florle Platform or its services on
            behalf of a business or other legal entity:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              (a) references to “you” and “your” include both you and that
              business or entity;
            </li>
            <li>
              (b) you represent and warrant that you are an authorized
              representative with authority to bind the entity to this
              Agreement; and
            </li>
            <li>
              (c) the entity is legally responsible for your access and use of
              the Florle Platform, as well as the access or use of your account
              by employees, agents, contractors, or other affiliated persons.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "The Florle Platform",
      content: (
        <div className="space-y-4">
          <p>
            The Florle Platform is an online platform and mobile application
            that connects homeowners with gardening and landscaping concepts,
            designs, professionals and retail establishments and provides tools
            for outdoor project planning, garden design, budgeting, plant
            selection, and related services.
          </p>
          <p>Some common terms you may see in this Agreement:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-bold">“Florle”</span>refers to Florle LLC.
            </li>
            <li>
              <span className="font-bold">“Florle Marketplace”</span>refers to
              any e-commerce or supplier marketplace made available through the
              Florle Platform for the purchase or sale of gardening-related
              goods, plants, materials, or services.
            </li>
          </ul>
          <p>
            We encourage you to review these Terms carefully. By accessing or
            using the Florle Platform in any way — including browsing florle.com
            or related websites — you agree to these Terms. If you do not agree,
            you may not use the Florle Platform.
          </p>
        </div>
      ),
    },
    {
      title: "Policies and Agreements",
      content: (
       <div>
         <p>
         The following agreements and policies are incorporated into these Terms and apply to all users of the Florle Platform:
        </p>
        <ul>
            <li>
                Terms of Use
            </li>
        </ul>
       </div>
      ),
    },
    {
      title: "6. Disclaimer of Warranties & Limitation of Liability",
      content: (
        <div className="space-y-4">
          <p>
            The App, AI Features, content, and services are provided on an "AS
            IS" and "AS AVAILABLE" basis. Florle LLC disclaims all warranties,
            express or implied.
          </p>
          <p>
            To the fullest extent permitted by law, Florle LLC's total
            cumulative liability shall not exceed the greater of $100 or the
            amount paid by the User to the Company in the twelve (12) months
            preceding the claim.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#F8F8F8] min-h-screen py-20 pt-40 px-4 sm:px-6 lg:px-8 relative font-rubik">
      <img src={bg7} alt="" className="absolute top-40 left-0" />
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-2xl lg:text-3xl font-semibold text-[#1F2D16] text-center mb-16 underline decoration-transparent">
          FLORLE LLC Terms of Use
        </h1>

        <div className="space-y-8 text-gray-700">
          <p>
            Florle LLC is a platform for gardening design and landscaping,
            providing an all-in-one software solution for individuals to plant
            and update their gardens from start to finish. Using Florle LLC,
            individuals can find ideas and inspiration, find professionals and
            local retailers. As part of the Florle LLC Platform, Florle LLC is a
            cloud-based, AI-powered project management and design software
            program that helps individuals design their gardens from start to
            finish. Florle LLC Pro also provides their clients with 24/7 access
            to project information, 3D visualizations and a social platform
            where they can interact and get inspired with fellow gardeners. 
          </p>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-bold text-[#1F2D16] pb-2">
                  {section.title}
                </h3>
                <div className="leading-relaxed">{section.content}</div>
              </div>
            ))}
          </div>

          <div className="pt-12 text-sm text-gray-500 border-t border-gray-200">
            <p>
              If you wish to exercise any of the rights set out above, please
              contact us at{" "}
              <span className="font-bold">support@florle.com.</span>
            </p>
            <p className="mt-2 italic">Last updated: February 23, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
