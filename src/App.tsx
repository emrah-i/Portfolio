import { useState } from 'react';
import profile from "./assets/profile.jpg"
import aws from "./assets/aws.png"
import aws_white from "./assets/aws-white.png"
import hashicorp from "./assets/hashicorp.png"
import hashicorp_white from "./assets/hashicorp-white.png"
import resumeFile from "./assets/Resume.docx";

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className={`w-screen ${isDarkMode ? 'dark' : ''}`}>
            <nav className="fixed w-full top-0 left-1/2 -translate-x-1/2 z-[999] bg-[#FBF7F2] dark:bg-[#2D2A27] py-2 shadow-xl">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div className='w-full'>
                        <p onClick={()=>scrollTo(0, 0)} className="text-3xl font-black text-[#F05454] no-underline relative group cursor-pointer">
                            <span>E<span className="inline-block max-w-0 group-hover:max-w-full align-bottom overflow-hidden whitespace-nowrap duration-450 ease-in-out">mrakh</span>&nbsp;I</span>
                        </p>
                    </div>
                    <div className="w-full flex justify-center items-center space-x-6">
                        <button 
                            onClick={() => setIsDarkMode(!isDarkMode)} 
                            className="w-12 h-12 flex justify-center items-center bg-transparent cursor-pointer border-none rounded-full p-2 duration-150 ease-in-out hover:bg-[#E1DED980] hover:scale-[1.05]">
                            <i className={`text-[#F05454] text-3xl fa-solid ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>                        
                        </button>
                    </div>
                    <div className="w-full flex justify-end">
                        <a href="#about_section" className="text-2xl font-black text-[#F05454] no-underline relative group">
                            About
                            <span className="absolute bottom-0 left-0 h-1 bg-[#F05454] w-0 group-hover:w-full transition-all duration-250 ease-in-out"></span>
                        </a>
                    </div>
                </div>
            </nav>

            <main className="flex flex-col gap-y-40 pt-20 pb-10 no-scrollbar bg-[#FBF7F2] text-[#F05454] dark:bg-[#2D2A27] font-sans font-black">
                <div className="container mx-auto px-4 justify-center">
                    <div className="flex flex-col lg:flex-row justify-center items-center mt-12 gap-12 md:gap-8">
                        <div className="aspect-square mt-8 flex justify-center items-start overflow-hidden rounded-full h-[18rem] md:h-[22rem] xl:h-[28rem] shadow-[0px_0px_15px_#00000080] transition-all duration-300 ease-in-out hover:scale-[1.05]">
                            <img src={profile} alt="My Picture" className="w-auto h-full max-w-none"/>
                        </div>
                        <div className="flex flex-col gap-y-1 justify-center text-start md:ml-20">
                            <p className="text-xl md:text-2xl xl:text-3xl font-semibold">Hello I'm,</p>
                            <p className="text-3xl md:text-4xl xl:text-5xl text-start font-bold">Emrakh Ibragimov</p>
                            <div className="w-full flex flex-col justify-start items-start text-xl md:text-2xl xl:text-3xl font-semibold">
                                <span>Cloud Engineer</span> 
                                <span>Frontend Developer</span>
                                <span>Backend Developer</span>
                            </div>
                            <div className="flex flex-wrap justify-start gap-4 mt-4 h-11 md:h-13">
                                <a 
                                    href='https://github.com/emrah-i'
                                    target="_blank"
                                    className="h-full flex items-center px-3 bg-[#F05454] text-[#FBF7F2] dark:text-[#2D2A27] rounded-lg hover:rounded-xl hover:scale-[1.1] duration-250 cursor-pointer"
                                >
                                    <i className="text-2xl md:text-3xl fa-brands fa-github"></i>
                                </a>
                                <a 
                                    href='https://www.linkedin.com/in/emrakh-i/'
                                    target="_blank"
                                    className="h-full flex items-center px-3 bg-[#F05454] text-[#FBF7F2] dark:text-[#2D2A27] rounded-lg hover:rounded-xl hover:scale-[1.1] duration-250 cursor-pointer"
                                >
                                    <i className="text-2xl md:text-3xl fa-brands fa-linkedin"></i>
                                </a>
                                <a 
                                    href='mailto:ibraem1026@gmail.com'
                                    className="h-full flex items-center px-3 bg-[#F05454] text-[#FBF7F2] dark:text-[#2D2A27] rounded-lg hover:rounded-xl hover:scale-[1.1] duration-250 cursor-pointer"
                                >
                                    <i className="text-2xl md:text-3xl fa-solid fa-envelope"></i>
                                </a>
                                <a 
                                    href={resumeFile}
                                    download="Resume"
                                    className="h-full flex items-center text-xl md:text-2xl flex items-center font-bold px-5 pb-0.5 bg-[#F05454] text-[#FBF7F2] dark:text-[#2D2A27] rounded-lg hover:rounded-xl hover:scale-[1.05] duration-250 cursor-pointer"
                                >
                                    Resume
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-30">
                        <button className="bg-transparent rounded-full aspect-square border-none">
                        <i className="text-3xl fa-solid fa-chevron-down"></i>
                        </button>
                    </div>
                </div>
                <div className="container mx-auto px-4">
                    <div className="text-start flex flex-col gap-y-2 text-2xl lg:text-3xl">
                        <p>"The only way to do great work is to love what you do."</p>
                        <p>- Steve Jobs</p>
                    </div>
                </div>

                <div className="container flex flex-col gap-y-16 mx-auto px-4">
                    <div id="about_section" className="w-full border-4 border-[#F05454] rounded-2xl mx-auto">
                        <div className="bg-[#F05454] text-[#FBF7F2] dark:text-[#2D2A27] p-6 pt-4 text-lg font-normal">
                            <h1 className="text-4xl font-bold w-max mb-4">About Me</h1>
                            <p className="font-semibold">I'm a full-stack developer with hands-on production experience in building, updating, and maintaining infrastructure. My journey began with Harvard's CS50 course, which laid a strong foundation and sparked my drive to continually learn and grow in the field.</p>
                            <p className="mt-4">As I've advanced, I've developed not only the ability to deliver clean and efficient code, but also to design and maintain secure, scalable systems. I am currently pivoting toward DevOps/SRE, where my mix of programming expertise and infrastructure management experience allows me to bridge development and operations seamlessly.</p>
                            <p className="mt-4">Beyond the technical skills, I bring adaptability, persistence, and a collaborative mindset. My strength lies in not just working hard, but in going deep into the details to achieve reliable, high-impact results.</p>
                        </div>
                    </div>
                    <div className="w-full border-4 border-[#F05454] rounded-2xl">
                        <div className="flex flex-col gap-y-4 p-6 pt-4 text-lg font-medium">
                            <h1 className="text-4xl font-bold w-max">Certificates</h1>
                            <div className="flex justify-between flex-wrap gap-8 py-2">
                                <div className='w-fit flex items-center gap-x-6'>
                                    <div className="flex justify-center items-center min-w-20 max-w-20"><img src={isDarkMode ? aws_white : aws} className="w-16"/></div>
                                    <div className='flex flex-col justify-start gap-y-0.5'>
                                        <p className='text-lg font-bold'>AWS Solutions Architect - Associate (SAA-C03)</p>
                                        <p>Issued Jul 2025 · Expires Jul 2028</p>
                                        <p>Credential ID: 2a57772d-c2c9-43fa-a394-fb6e92b68e2c</p>
                                        <a 
                                            target='_blank' 
                                            href='https://www.credly.com/badges/2a57772d-c2c9-43fa-a394-fb6e92b68e2c/public_url'
                                            className='text-base flex gap-x-2 items-center px-2.5 py-1.5 mt-1 bg-[#F05454] text-[#FBF7F2] dark:text-[#2D2A27] rounded-lg hover:rounded-xl hover:scale-[1.05] duration-250 cursor-pointer w-fit'
                                        >
                                            Show Credential <i className="text-sm fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className='w-fit flex items-center gap-x-6'>
                                    <div className="flex justify-center items-center min-w-20 max-w-20"><img src={isDarkMode ? aws_white : aws} className="w-16"/></div>
                                    <div className='flex flex-col justify-start gap-y-0.5'>
                                        <p className='text-lg font-bold'>AWS SysOps Administrator - Associate (SOA-C02)</p>
                                        <p>Issued Aug 2025 · Expires Aug 2028</p>
                                        <p>Credential ID: 3147146e-5e57-4fce-a29c-388b0658098e</p>
                                        <a 
                                            target='_blank' 
                                            href='https://www.credly.com/earner/earned/badge/3147146e-5e57-4fce-a29c-388b0658098e'
                                            className='text-base flex gap-x-2 items-center px-2.5 py-1.5 mt-1 bg-[#F05454] text-[#FBF7F2] dark:text-[#2D2A27] rounded-lg hover:rounded-xl hover:scale-[1.05] duration-250 cursor-pointer w-fit'
                                        >
                                            Show Credential <i className="text-sm fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className='w-fit flex items-center gap-x-6'>
                                    <div className="flex justify-center items-center min-w-20 max-w-20"><img src={isDarkMode ? hashicorp_white : hashicorp} className='w-12'/></div>
                                    <div className='flex flex-col justify-start gap-y-0.5'>
                                        <p className='text-lg font-bold'>Terraform Associate (003)</p>
                                        <p>Issued Sep 2025 · Expires Sep 2027</p>
                                        <p>Credential ID: a37d5bdd-e276-48a1-ba80-ab1334d459dc</p>
                                        <a 
                                            target='_blank' 
                                            href='https://www.credly.com/earner/earned/badge/a37d5bdd-e276-48a1-ba80-ab1334d459dc'
                                            className='text-base flex gap-x-2 items-center px-2.5 py-1.5 mt-1 bg-[#F05454] text-[#FBF7F2] dark:text-[#2D2A27] rounded-lg hover:rounded-xl hover:scale-[1.05] duration-250 cursor-pointer w-fit'
                                        >
                                            Show Credential <i className="text-sm fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-4 border-[#F05454] rounded-2xl mx-auto">
                        <div className="bg-[#F05454] text-[#FBF7F2] dark:text-[#2D2A27] p-6 pt-4 text-lg font-medium">
                            <h1 className="text-4xl font-bold w-max">Projects</h1>
                            <div className='flex flex-col gap-y-2 p-4 pt-5'>
                                <div className='flex flex-col gap-y-2'>
                                    <p className='text-[1.75rem] font-semibold'>1. Portfolio</p>
                                    <div className='ml-8 flex flex-col gap-y-2'>
                                        <p>Designed, deployed, and maintained a personal portfolio website by leveraging AWS S3 for static site hosting, Route 53 for domain management, and AWS Certificate Manager (ACM) for SSL/TLS encryption, ensuring secure and highly available access.</p>
                                        <p>Implemented Infrastructure as Code (IaC) with Terraform to automate provisioning, configuration, and updates, enabling repeatable deployments and reducing setup time.</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-y-2'>
                                    <p className='text-[1.75rem] font-semibold'>2. Cybersecurity Training Platform</p>
                                    <div className='ml-8 flex flex-col gap-y-2'>
                                        <p>Developed a cybersecurity training platform tailored for students pursuing professional certifications, providing an interactive environment to practice and master core security concepts.</p>
                                        <p>Built a learning portal enabling users to access structured articles, labs, images, and video tutorials, improving knowledge retention and offering multiple learning modalities.</p>
                                        <p>Implemented end-to-end user functionality, including registration, authentication, and subscription purchasing workflows, ensuring secure access control and monetization.</p>
                                        <p>Completed infrastructure design and full implementation; <u>capable of presenting a detailed deployment strategy covering scalability, security hardening, and cloud-based hosting options.</u></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-4 border-[#F05454] rounded-2xl mx-auto">
                        <div className="p-6 pb-7 pt-4 text-lg font-medium">
                            <h1 className="text-4xl font-bold w-max">Technologies</h1>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                                <div key={"Cloud"} className="flex flex-col gap-y-3 items-center text-center">
                                    <div className="aspect-square h-24 w-24 flex items-center justify-center bg-[#F05454] rounded-full p-7 pb-7.5 transition-all duration-250 ease-in-out hover:scale-[1.05]">
                                        <i className="text-[#FBF7F2] dark:text-[#2D2A27] text-4xl fa-solid fa-cloud"></i>
                                    </div>
                                    <h1 className="pb-2 text-xl w-min sm:w-full font-black relative w-max">Cloud Providers</h1>
                                    <div className='flex flex-col gap-y-2'>
                                        {["AWS"].map(skill=>
                                            <p key={skill} className="text-lg font-normal transition-all duration-250 ease-in-out hover:scale-110">{skill}</p>
                                        )}
                                    </div>
                                </div>
                                <div key={"DevOps Tools"} className="flex flex-col gap-y-3 items-center text-center">
                                    <div className="aspect-square h-24 w-24 flex items-center justify-center bg-[#F05454] rounded-full p-6 transition-all duration-250 ease-in-out hover:scale-[1.05]">
                                        <i className="text-[#FBF7F2] dark:text-[#2D2A27] text-4xl fa-solid fa-screwdriver-wrench"></i>
                                    </div>
                                    <h1 className="pb-2 text-xl w-min sm:w-full font-black relative w-max">DevOps Tools</h1>
                                    <div className='flex flex-col gap-y-2'>
                                        {['Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Linux CLI'].map(skill=>
                                            <p key={skill} className="text-lg font-normal transition-all duration-250 ease-in-out hover:scale-110">{skill}</p>
                                        )}
                                    </div>
                                </div>
                                <div key={"Languages"} className="flex flex-col gap-y-3 items-center text-center">
                                    <div className="aspect-square h-24 w-24 flex items-center justify-center bg-[#F05454] rounded-full p-6 transition-all duration-250 ease-in-out hover:scale-[1.05]">
                                        <i className="text-[#FBF7F2] dark:text-[#2D2A27] text-4xl fa-solid fa-code"></i>
                                    </div>
                                    <h1 className="pb-2 text-xl w-min sm:w-full font-black relative w-max">Languages</h1>
                                    <div className='flex flex-col gap-y-2'>
                                        {['TypeScript', 'JavaScript', 'Python', 'PHP', 'Rust'].map(skill=>
                                            <p key={skill} className="text-lg font-normal transition-all duration-250 ease-in-out hover:scale-110">{skill}</p>
                                        )}
                                    </div>
                                </div>
                                <div key={"Datastores"} className="flex flex-col gap-y-3 items-center text-center">
                                    <div className="aspect-square h-24 w-24 flex items-center justify-center bg-[#F05454] rounded-full p-6 transition-all duration-250 ease-in-out hover:scale-[1.05]">
                                        <i className="text-[#FBF7F2] dark:text-[#2D2A27] text-4xl fa-solid fa-database"></i>
                                    </div>
                                    <h1 className="pb-2 text-xl w-min sm:w-full font-black relative w-max">Datastores</h1>
                                    <div className='flex flex-col gap-y-2'>
                                        {['MySQL', 'PostgreSQL', 'AWS RDS', 'DynamoDB', 'Redis', 'MongoDB'].map(skill=>
                                            <p key={skill} className="text-lg font-normal transition-all duration-250 ease-in-out hover:scale-110">{skill}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

