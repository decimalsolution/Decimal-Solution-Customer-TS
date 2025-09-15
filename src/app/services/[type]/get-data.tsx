export const getData = (type: string) => {
  switch (type) {
    case "website-development":
      return {
        title: "Website Development",
        image: "/services-cover-images/web-development.png",
        shortDescription:
          "Professional website development services including custom web applications, CRM solutions, healthcare platforms, and e-commerce solutions.",
        keywords: [
          "website development",
          "web applications",
          "custom websites",
          "responsive design",
          "e-commerce",
          "CRM solutions",
        ],
        sections: [
          {
            title: "Website Development",
            description:
              "Create unique websites that accurately represent your business to improve your internet presence. In order to provide the best possible online experience, our skilled developers create aesthetically pleasing and intuitive websites while maintaining optimal performance and responsiveness. We design digital places that not only successfully exhibit your brand but also capture and hold the attention of your target audience, all while keeping a close eye on user engagement and easy navigation.",
            image: "/website-development/image-1.png",
          },
          {
            title: "CRM Based Solutions",
            description:
              "Solutions for managing customer relationships that have been designed to improve interactions, simplify processes, and increase overall company efficiency while building deep and enduring client connections. Our customer relationship management (CRM) tools are tailored to provide actionable insights, enabling you to make informed decisions and foster long-term customer loyalty. Harness the power of data-driven strategies and personalized customer engagement to drive growth and enhance your business relationships.",
            image: "/website-development/image-2.png",
          },
          {
            title: "Health Based Solutions",
            description:
              "Complete and innovative ideas that improve patient outcomes, optimize healthcare operations for a more effective, stronger healthcare environment. Using cutting-edge technologies and data-driven approaches, our solutions streamline workflows, reduce administrative burdens, and contribute to a more efficient and patient-centric healthcare system. With a commitment to advancing medical innovation, we strive to empower healthcare professionals with tools that revolutionize care delivery and elevate the overall quality of patient experiences.",
            image: "/website-development/image-3.png",
          },
          {
            title: "E-Commerce Solutions",
            description:
              "Use our comprehensive e-commerce solutions to completely change your online business. We provide specific solutions to improve the customer's purchasing experience and enhance your online business, ranging from user-friendly interfaces to secure payment methods. With a focus on scalability and personalized features, our e-commerce solutions are designed to adapt and grow with your business, ensuring a seamless and future-proof online shopping experience for your customers.",
            image: "/website-development/image-4.png",
          },
        ],
      };
    case "mobile-app-development":
      return {
        title: "Mobile App Development",
        image: "/services-cover-images/mobile-app-development.png",
        shortDescription:
          "Expert mobile app development for iOS and Android platforms, including native and cross-platform solutions.",
        keywords: [
          "mobile app development",
          "iOS development",
          "Android development",
          "native apps",
          "cross-platform",
          "mobile applications",
        ],
        sections: [
          {
            title: "Android App Development",
            description:
              "Creating state-of-the-art mobile applications for Android with smooth operation, user-friendly UI, and creative features that respond to a wide range of user requirements. Our dedicated team of developers ensures not only technical excellence but also a focus on user experience, resulting in applications that not only meet industry standards but also delight users with intuitive interfaces and cutting-edge functionalities.",
            image: "/mobile-app-development/image-1.png",
          },
          {
            title: "iOS Development",
            description:
              "Customized apps for iOS can enhance your visibility on the internet. Using the most recent iOS technology to provide lag-free and simple experiences, our skilled developers maximize performance on all Apple devices. We are committed to delivering not just applications, but seamless digital experiences that captivate iOS users, ensuring your brand stands out in the competitive app landscape while meeting the highest standards of quality and innovation.",
            image: "/mobile-app-development/image-2.png",
          },
          {
            title: "Native Application Development",
            description:
              "We create dependable, high-performing apps that are suited to certain platforms by fully using native technology, ensuring the best possible user experiences and functionalities. Leveraging native capabilities, our applications are optimized for performance and seamlessly integrate with device features, providing users with a fluid and intuitive experience that aligns with the specific characteristics of each platform.",
            image: "/mobile-app-development/image-3.png",
          },
          {
            title: "Mobile App Development",
            description:
              "Using personalized mobile applications, your ideas may become reality. Our talented developers guarantee creative, approachable solutions that satisfy a range of requirements and provide a flawless mobile experience. By combining innovative design with cutting-edge technology, we transform concepts into user-friendly and impactful mobile solutions that resonate with your audience and set your brand apart in the digital landscape.",
            image: "/mobile-app-development/image-4.png",
          },
        ],
      };
    case "digital-marketing":
      return {
        title: "Digital Marketing",
        image: "/services-cover-images/digital-marketing.png",
        shortDescription:
          "Comprehensive digital marketing services including social media marketing, SEO, PPC advertising, and social advertising campaigns.",
        keywords: [
          "digital marketing",
          "social media marketing",
          "SEO services",
          "PPC advertising",
          "online marketing",
          "brand promotion",
        ],
        sections: [
          {
            title: "Social Media Marketing",
            description:
              "Boost the online visibility of your company with clever and engaging social media marketing. Our customized solutions promote brand visibility, audience engagement, and company expansion across a variety of media. By leveraging strategic content and interactive campaigns, we not only enhance your brand's digital presence but also foster meaningful connections with your target audience, driving sustained growth and loyalty in the competitive digital landscape.",
            image: "/digital-marketing/image-1.png",
          },
          {
            title: "SEO Services",
            description:
              "Enhancing your online visibility and ranking with our strategic search engine optimization solutions. We optimize your digital presence for increased discoverability and organic traffic growth. Utilizing the latest SEO techniques and analytics, we continuously refine our strategies to adapt to search engine algorithms, ensuring your business maintains a prominent position in search results and stays ahead in the ever-evolving digital landscape.",
            image: "/digital-marketing/image-2.png",
          },
          {
            title: "Social Advertising Campaign",
            description:
              "Increase brand awareness and interaction on social media by running focused ads. Our campaigns provide significant outcomes, growing your audience and optimizing return on investment across media. Through data-driven insights and continuous campaign optimization, we ensure that your social media advertising efforts not only reach the right audience but also resonate with them, driving meaningful engagement and lasting connections with your brand.",
            image: "/digital-marketing/image-3.png",
          },
          {
            title: "Pay Per Click Advertising",
            description:
              "Increasing your internet presence and precisely directing targeted traffic. With our PPC campaigns, you may increase the impact of your digital marketing while maintaining a reasonable cost. Our meticulous keyword research and ad optimization strategies ensure that every click counts, delivering a high return on investment and maximizing the visibility of your products or services in the competitive online landscape.",
            image: "/digital-marketing/image-4.png",
          },
        ],
      };
    case "graphics-designing":
      return {
        title: "Graphic Designing",
        image: "/services-cover-images/graphic-designing.png",
        shortDescription:
          "Professional graphic design services including UI/UX design, corporate branding, and web design solutions.",
        keywords: [
          "graphic design",
          "UI/UX design",
          "corporate branding",
          "web design",
          "visual identity",
          "brand design",
        ],
        sections: [
          {
            title: "UI/UX Designing",
            description:
              "Using our skilled design team, we can elevate digital experiences. We create visually appealing and user-focused interfaces which ensure smooth and enjoyable interactions for maximum user pleasure. Our design philosophy prioritizes not only aesthetics but also user accessibility and engagement, resulting in interfaces that not only captivate but also enhance overall user satisfaction, fostering positive brand experiences. With a user-centric approach, we strive to create designs that resonate with your audience and leave a lasting impact.",
            image: "/graphic-designing/image-1.png",
          },
          {
            title: "Corporate Branding",
            description:
              "Our comprehensive approach include developing unified graphic identities that capture the essence of your company. We concentrate on building a memorable and significant brand presence across a range of channels, from designing unique logos to developing a unified brand language. To make sure your business identity sticks out in the competitive marketplace, our design specialists place a high priority on aesthetics, usefulness, and brand resonance.",
            image: "/graphic-designing/image-3.png",
          },
          {
            title: "Web Designing",
            description:
              "Converting ideas into aesthetically beautiful websites. Our skilled developers create user-focused interfaces which ensure your audience will have a smooth and interesting online experience. From responsive design to intuitive navigation, we go beyond aesthetics to deliver websites that not only look stunning but also provide seamless functionality, ensuring a memorable and engaging digital journey for every visitor.",
            image: "/graphic-designing/image-4.png",
          },
        ],
      };
    case "ar-vr":
      return {
        title: "AR/VR Game Development",
        image: "/services-cover-images/ar-vr.png",
        shortDescription:
          "Cutting-edge AR/VR development services using Google AR Core, Vuforia, and AR Foundation for immersive experiences.",
        keywords: [
          "AR development",
          "VR development",
          "augmented reality",
          "virtual reality",
          "AR Core",
          "Vuforia",
          "immersive technology",
        ],
        sections: [
          {
            title: "Google AR Core, Easy AR",
            description:
              "By utilizing innovative augmented reality technology, these platforms enable developers to produce smooth and captivating augmented reality experiences, paving the way for interactive apps across a range of platforms. With a focus on user engagement and immersion, our AR solutions redefine digital interactions, offering endless possibilities for industries such as gaming, education, retail, and more, creating memorable experiences that bridge the gap between the virtual and physical worlds.",
            image: "/ar-vr/image-3.png",
          },
          {
            title: "VUFORIA AR",
            description:
              "Unlocking the potential of augmented reality with Vuforia, a cutting-edge platform that empowers developers to create immersive and interactive AR experiences for various applications and industries. By seamlessly blending the digital and physical worlds, our AR solutions not only enhance user engagement but also open new possibilities for education, training, marketing, and beyond, revolutionizing the way businesses and users interact with the world around them.",
            image: "/ar-vr/image-1.png",
          },
          {
            title: "AR Foundation",
            description:
              "A versatile development framework that harnesses the power of augmented reality, enabling seamless creation of AR experiences across different platforms and devices for immersive and engaging applications. With its robust capabilities, our AR framework not only transforms user interactions but also provides businesses with innovative opportunities to connect with their audience, driving a new era of interactive and captivating digital experiences that extend beyond traditional boundaries.",
            image: "/ar-vr/image-2.png",
          },
          // {
          //   title: "VUFORIA AR",
          //   description:
          //     "Unlocking the potential of augmented reality with Vuforia, a cutting-edge platform that empowers developers to create immersive and interactive AR experiences for various applications and industries. By seamlessly blending the digital and physical worlds, our AR solutions not only enhance user engagement but also open new possibilities for education, training, marketing, and beyond, revolutionizing the way businesses and users interact with the world around them.",
          //   image: "/ar-vr/image-1.png",
          // },
          {
            title: "Location Marker Based Augmentation",
            description:
              "Enhancing augmented reality experiences by utilizing location markers, providing context-aware and interactive content overlays in real-world environments for a dynamic and engaging user experience. Our innovative use of location-based AR not only brings digital elements seamlessly into the physical world but also opens up opportunities for businesses to deliver personalized and location-specific content, creating immersive and memorable interactions that captivate users in unique and meaningful ways.",
            image: "/ar-vr/image-4.png",
          },
        ],
      };
    case "erp":
      return {
        title: "ERP and Business Solutions",
        image: "/services-cover-images/erp.png",
        shortDescription:
          "Comprehensive ERP and business solutions including custom business software, real estate software, and accounting systems.",
        keywords: [
          "ERP solutions",
          "business software",
          "enterprise resource planning",
          "real estate software",
          "accounting software",
          "business automation",
        ],
        sections: [
          {
            title: "Custom Business Solutions",
            description:
              "Software for enterprise resource planning, or ERP, is becoming more and more necessary for handling corporate requirements. We are prepared to offer the best ERP systems to effectively manage departments like as finance, HR, supply chain, procurement, manufacturing, inventory, marketing, etc. Thanks to the experience and enthusiasm of our staff. It will simplify the management of your daily company operations and free up space for increased productivity",
            image: "/erp/image-1.png",
          },
          {
            title: "Real Estate Softwares",
            description:
              "Providing real estate agents cutting-edge digital solutions for sales, property administration, and efficient operations to boost productivity and customer satisfaction in the sector. Our innovative technologies and user-friendly platforms are designed to streamline workflows, enhance communication, and empower real estate professionals to stay ahead in a dynamic market, ensuring a seamless and successful real estate experience for both agents and clients.",
            image: "/erp/image-2.png",
          },
          {
            title: "Accounting Softwares",
            description:
              "Financial management may be made more efficient by using reliable and user-friendly accounting software. Our solutions provide accurate, efficient, and secure financial processes while meeting a wide range of corporate demands. With robust reporting tools and real-time insights, our accounting software empowers businesses to make informed financial decisions, fostering transparency and compliance in a rapidly evolving financial landscape.",
            image: "/erp/image-3.png",
          },
        ],
      };
    case "game-development":
      return {
        title: "Game Development",
        image: "/services-cover-images/erp.png",
        shortDescription:
          "Professional game development services for various platforms including mobile, desktop, and console games.",
        keywords: [
          "game development",
          "mobile games",
          "desktop games",
          "console games",
          "game programming",
          "game design",
        ],
        sections: [
          {
            title: "Custom Business Solutions",
            description:
              "Software for enterprise resource planning, or ERP, is becoming more and more necessary for handling corporate requirements. We are prepared to offer the best ERP systems to effectively manage departments like as finance, HR, supply chain, procurement, manufacturing, inventory, marketing, etc. Thanks to the experience and enthusiasm of our staff. It will simplify the management of your daily company operations and free up space for increased productivity",
            image: "/erp/image-1.png",
          },
          {
            title: "Real Estate Softwares",
            description:
              "Providing real estate agents cutting-edge digital solutions for sales, property administration, and efficient operations to boost productivity and customer satisfaction in the sector. Our innovative technologies and user-friendly platforms are designed to streamline workflows, enhance communication, and empower real estate professionals to stay ahead in a dynamic market, ensuring a seamless and successful real estate experience for both agents and clients.",
            image: "/erp/image-2.png",
          },
          {
            title: "Accounting Softwares",
            description:
              "Financial management may be made more efficient by using reliable and user-friendly accounting software. Our solutions provide accurate, efficient, and secure financial processes while meeting a wide range of corporate demands. With robust reporting tools and real-time insights, our accounting software empowers businesses to make informed financial decisions, fostering transparency and compliance in a rapidly evolving financial landscape.",
            image: "/erp/image-3.png",
          },
        ],
      };
  }
};
