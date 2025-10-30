import React from 'react';
import Footer from '../Footer';

const techStack = [
  { name: "ReactJS", img: "https://tse1.mm.bing.net/th?id=OIP.xJ9csn-63TcFxaxea8eoNwHaHa&pid=Api&P=0&h=180" },
  { name: "AngularJS", img: "https://tse2.mm.bing.net/th?id=OIP.JWcKdjkJlUbPCu8Z2lKHzgHaH3&pid=Api&P=0&h=180" },
  { name: "NodeJS", img: "https://tse3.mm.bing.net/th?id=OIP.tjD9YuDuahCxZnhTbc3SJAHaHa&pid=Api&P=0&h=180" },
  { name: "ExpressJS", img: "https://tse2.mm.bing.net/th?id=OIP.1oZo0qgO2ybBNcjCWcx06QHaDP&pid=Api&P=0&h=180" },
  { name: "MongoDB", img: "https://tse1.mm.bing.net/th?id=OIP.J87-_0ZpG_4d3bfD7q95YQHaEL&pid=Api&P=0&h=180" },
  { name: "HTML", img: "https://tse4.mm.bing.net/th?id=OIP.s5TSKci-kxNJLtwefzDEGAHaHa&pid=Api&P=0&h=180ng" },
  { name: "CSS", img: "https://tse4.mm.bing.net/th?id=OIP.yUIb5S_kj98Eg5tT-Onx1AHaHa&pid=Api&P=0&h=180s.png" },
  { name: "Bootstrap", img: "https://tse3.mm.bing.net/th?id=OIP.ylJGrEn_oTmoJTZTzb6UzQHaHN&pid=Api&P=0&h=180trap.png" },
  { name: "JavaScript", img: "https://tse4.mm.bing.net/th?id=OIP.8lG71Gr7LODSWlZITL-NfwHaHa&pid=Api&P=0&h=180javascript.png" },
  { name: "MySQL", img: "https://tse1.mm.bing.net/th?id=OIP.lIIc_svaWdGdEJuEk7TBlgHaHa&pid=Api&P=0&h=180es/mysql.png" },
  { name: "PHP", img: "https://tse3.mm.bing.net/th?id=OIP.sYfjsZhbCqc4CT2XzgKKtgHaD4&pid=Api&P=0&h=180/php.png" },
  { name: "Laravel", img: "https://tse3.mm.bing.net/th?id=OIP.Hh_tEbIb4-MagJsV6x_RZwHaHa&pid=Api&P=0&h=180" },
];

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className='bg-[url("https://pninfosys.org/bannerFinal.jpg")] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen flex items-center'>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-blue-500/60 bg-opacity-90 text-white p-10">
          {/* Left Text Section */}
          <div className="flex items-center h-full">
            <div>
              <h1 className="text-black text-4xl md:text-5xl font-semibold mb-6">
                Welcome to <br />
                <span className="font-bold text-black">PNINFOSYS</span>
              </h1>
              <p className="text-md leading-relaxed text-black">
                We offer comprehensive internships in web development where you'll
                gain hands-on experience working on real-world projects. Our expert
                team will mentor you in essential web technologies, including front-end
                and back-end development, while ensuring you build a strong foundation
                in user experience (UX) and responsive design. In addition to our training
                programs, we provide top-notch web services tailored to meet the diverse
                needs of businesses. Whether you're looking to create stunning websites
                or learn the craft, PN INFOSYS is your gateway to a successful future in tech!
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-white bg-opacity-90 p-10">
        <h1 className="text-4xl text-blue-700 font-bold text-center">WHO ARE WE?</h1>
        <p className="mt-6 text-center text-gray-700 max-w-6.5xl mx-auto text-lg leading-relaxed">
          We are part of this IT industry since 2018, we not only developed products and websites but also provides internship and trainning to students and make them capable to work in this It software industry, our internship and trainning program is totally based on hand to hand pratical with live projects.
        </p>
      </div>

      {/* about us */}
      <section className='bg-[url("https://pninfosys.org/contentBgTwo.jpg")] bg-cover bg-center bg-no-repeat bg-fixed  min-h-screen flex items-center'>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Text Section */}
          <div className="text-center md:text-left">
            <div className="col-span-full text-center ">
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
                🎓 Learning Environment,<br /> Free Internship To Novice Students
              </h2>
            </div>
            <p className="text-white text-justify leading-relaxed style-bold ">
              Something which makes PN INFOSYS different from other IT companies is that we train novice students and also make them work on Live projects. Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. Web design used to be focused on designing websites for desktop browsers; however, since the mid-2010s, design for mobile and tablet browsers has become ever-increasingly important. At PN INFOSYS, we pride ourselves on being more than just another IT company. One of the key aspects that makes us stand out is our commitment to nurturing the next generation of IT professionals. We don't just provide theoretical training to novice students—we actively involve them in hands-on learning through live projects. By doing this, we ensure that our trainees gain practical experience, develop critical problem-solving skills, and are better prepared to tackle real-world challenges. This unique approach gives our students a competitive edge, allowing them to transition smoothly from learners to professionals.

            </p>
          </div>

          {/* Right Image Section (Optional) */}
          <div className="flex justify-center">
            <img
              src="https://pninfosys.com/assets/e-learning-BJHR4tLg.png" // Replace with your image path
              alt="Web Designing"
              className="w-full max-w-md"
            />
          </div>

          {/* Left Text Section */}

          {/* left Image Section (Optional) */}
          <div className="flex justify-center">
            <img
              src="https://pninfosys.org/development-4536630_1280.png"
              alt="Web Designing"
              className="w-full max-w-md"
            />
          </div>
          <div className="text-center md:text-right">
            <div className="col-span-full text-center ">
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
                Web Development
              </h2>
            </div>
            <p className="text-white text-justify leading-relaxed style-bold ">
              Something which makes PN INFOSYS different from other IT companies is that we train novice students and also make them work on Live projects. Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.Among Web professionals, "Web development" usually refers to the main non-design aspects of building Web sites: writing markup and coding. Web development may use content management systems (CMS) to make content changes easier and available with basic technical skills.

            </p>
          </div>





          <div className="text-center md:text-left">
            <div className="col-span-full text-center ">
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
                App Development
              </h2>
            </div>
            <p className="text-white text-justify leading-relaxed style-bold ">
              Something which makes PN INFOSYS different from other IT companies is that we train novice students and also make them work on Live projects. Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. These software applications are designed to run on mobile devices, such as a smartphone or tablet computer. These applications can be pre-installed on phones during manufacturing platforms, or delivered as web applications using server-side or client-side processing (e.g., JavaScript) to provide an "application-like" experience within a web browser. Application software developers also must consider a long array of screen sizes, hardware specifications, and configurations because of intense competition in mobile software and changes within each of the platforms. Mobile app development has been steadily growing, in revenues and jobs created. A 2013 analyst report estimates there are 529,000 direct app economy jobs within the EU then 28 members (including the UK), 60 percent of which are mobile app developers.
            </p>
          </div>

          {/* Right Image Section (Optional) */}
          <div className="flex justify-center">
            <img
              src="https://pninfosys.org/3d-illustration-of-web-development-png.png"
              alt="Web Designing"
              className="w-full max-w-md"
            />
          </div>


        </div>

      </section>


      {/* Tech Stack Logos Section */}
      <section className='w-full py-10'>
        <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-12 gap-y-16">
          {techStack.map((tech) => (
            <div className="text-center" key={tech.name}>
              <img src={tech.img} alt={tech.name} className="mx-auto h-20" />
              <p className="mt-2 text-base font-semibold text-gray-700">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default Home;
