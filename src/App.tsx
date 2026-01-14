import { useEffect, useRef, useState } from 'react';
import profile from "./assets/profile.jpg"
import aws from "./assets/aws.png"
import aws_white from "./assets/aws-white.png"
import hashicorp from "./assets/hashicorp.png"
import hashicorp_white from "./assets/hashicorp-white.png"
import resumeFile from "./assets/Resume.docx"
import z from 'zod';

const api_url = "https://emrakh.com/v1/metric"

const endpoints = {
    page_views: "?metric_name=page_views",
    email_clicks: "?metric_name=email_clicks",
    github_redirects: "?metric_name=github_redirects",
    resume_downloads: "?metric_name=resume_downloads",
    linkedin_redirects: "?metric_name=linkedin_redirects",
    cert_redirects: "?metric_name=cert_redirects"
}

const endpoint_keys = Object.keys(endpoints) as (keyof typeof endpoints)[];

const metricsSchema = z.array(z.object({
    metric_name: z.enum(endpoint_keys),
    count_total: z.number()
}))

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const [pageViews, setPageViews] = useState<number>()
    const [emailClicks, setEmailClicks] = useState<number>()
    const [linkedinRedirects, setLinkedinRedirects] = useState<number>()
    const [resumeDownloads, setResumeDownloads] = useState<number>()
    const [certRedirects, setCertRedirects] = useState<number>()

    const about = useRef<HTMLDivElement>(null)

    useEffect(() => {
        startUp()
    }, [])

    async function startUp() {
        await handlePutRequest("page_views")
        await handleGetRequest()
    }

    async function handleGetRequest() {
        const data = await fetch(api_url, { method: "GET" })
        const json = await data.json()

        const parsed = metricsSchema.safeParse(json)

        if (!parsed.success) return

        for (const item of parsed.data) {
            switch (item.metric_name) {
                case "page_views":
                    setPageViews(item.count_total)
                    break
                case "email_clicks":
                    setEmailClicks(item.count_total)
                    break
                case "resume_downloads":
                    setResumeDownloads(item.count_total)
                    break
                case "linkedin_redirects":
                    setLinkedinRedirects(item.count_total)
                    break
                case "cert_redirects":
                    setCertRedirects(item.count_total)
                    break
            }
        }
    }

    async function handlePutRequest(type: keyof typeof endpoints) {
        await fetch(api_url + endpoints[type], { method: "PUT" })
    }

    const all_metrics: { title: string, metric?: number }[] = [
        {
            title: "Page\nViews",
            metric: pageViews
        },
        // {
        //     title: "Email\nClicks",
        //     metric: emailClicks
        // },
        {
            title: "Resume\nDownloads",
            metric: resumeDownloads
        },
        // {
        //     title: "LinkedIn\nRedirects",
        //     metric: linkedinRedirects
        // },
        // {
        //     title: "Credly\nRedirects",
        //     metric: certRedirects
        // },
    ]

    return (
        <div className={`w-screen ${isDarkMode ? 'dark' : ''}`}>
            <nav className="fixed w-full top-0 left-1/2 -translate-x-1/2 z-[999] bg-[#FBF7F2] dark:bg-[#2D2A27] py-2 shadow-xl">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div className='w-full'>
                        <p
                            onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                            className="w-fit text-3xl font-black text-[#F05454] no-underline relative group cursor-pointer"
                        >
                            <p>
                                E
                                <span className="inline-block max-w-0 group-hover:max-w-full align-bottom overflow-hidden whitespace-nowrap duration-200 ease-in-out">
                                    mrakh
                                </span>&nbsp;I
                            </p>
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
                        <a
                            onClick={() => about.current && about.current.scrollIntoView({ behavior: "smooth", block: "center" })}
                            className="text-2xl font-black text-[#F05454] no-underline relative cursor-pointer group"
                        >
                            About
                            <span className="absolute bottom-0 left-0 h-1 bg-[#F05454] w-0 group-hover:w-full transition-all duration-250 ease-in-out"></span>
                        </a>
                    </div>
                </div>
            </nav>

            <main className="flex flex-col gap-y-40 pt-20 pb-10 no-scrollbar bg-[#FBF7F2] text-[#F05454] dark:bg-[#2D2A27] font-sans font-black">
                <div className="container flex flex-col gap-y-20 mx-auto px-4 justify-center">
                    <div className="flex flex-col lg:flex-row justify-center items-center mt-12 gap-12 md:gap-8">
                        <div className="aspect-square mt-8 flex justify-center items-start overflow-hidden rounded-full h-[18rem] md:h-[22rem] xl:h-[28rem] shadow-[0px_0px_15px_#00000080] transition-all duration-300 ease-in-out hover:scale-[1.05]">
                            <img src={profile} alt="My Picture" className="w-auto h-full max-w-none" />
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
                                {/* <a 
                                    href='https://github.com/emrah-i'
                                    onClick={()=>{handlePutRequest("github_redirects"); githubRedirects !== undefined && setGithubRedirects(prev=>prev! + 1)}}
                                    target="_blank"
                                    className="h-full flex items-center px-3 bg-[#F05454] text-[#FBF7F2] dark:text-[#2D2A27] rounded-lg hover:rounded-xl hover:scale-[1.1] duration-250 cursor-pointer"
                                >
                                    <i className="text-2xl md:text-3xl fa-brands fa-github"></i>
                                </a> */}
                                <a
                                    href='https://www.linkedin.com/in/emrakh-i/'
                                    onClick={() => { handlePutRequest("linkedin_redirects"); linkedinRedirects !== undefined && setLinkedinRedirects(prev => prev! + 1) }}
                                    target="_blank"
                                    className="h-full flex items-center px-3 bg-[#F05454] text-[#FBF7F2] dark:text-[#2D2A27] rounded-lg hover:rounded-xl hover:scale-[1.1] duration-250 cursor-pointer"
                                >
                                    <i className="text-2xl md:text-3xl fa-brands fa-linkedin"></i>
                                </a>
                                <a
                                    href='mailto:ibraem1026@gmail.com'
                                    onClick={() => { handlePutRequest("email_clicks"); emailClicks !== undefined && setEmailClicks(prev => prev! + 1) }}
                                    className="h-full flex items-center px-3 bg-[#F05454] text-[#FBF7F2] dark:text-[#2D2A27] rounded-lg hover:rounded-xl hover:scale-[1.1] duration-250 cursor-pointer"
                                >
                                    <i className="text-2xl md:text-3xl fa-solid fa-envelope"></i>
                                </a>
                                <a 
                                    href={resumeFile}
                                    onClick={()=>{handlePutRequest("resume_downloads"); resumeDownloads !== undefined && setResumeDownloads(prev=>prev! + 1)}}
                                    download="Resume.docx"
                                    className="h-full flex items-center text-xl md:text-2xl flex items-center font-bold px-5 pb-0.5 bg-[#F05454] text-[#FBF7F2] dark:text-[#2D2A27] rounded-lg hover:rounded-xl hover:scale-[1.05] duration-250 cursor-pointer"
                                >
                                    Resume
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center gap-4 flex-wrap'>
                        {all_metrics.map(el => {
                            return <div className='w-32 bg-[#F05454] text-[#FBF7F2] dark:text-[#2D2A27] rounded-lg py-4 px-6 flex flex-col items-center justify-center gap-y-2'>
                                <p className='text-3xl'>{el.metric !== undefined ? el.metric : <i className="text-3xl fa-solid fa-spinner animate-spin"></i>}</p>
                                <p className='text-center font-normal whitespace-pre-line'>{el.title}</p>
                            </div>
                        })}
                    </div>
                    <div className="flex justify-center mt-">
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
                    <div ref={about} className="w-full border-4 border-[#F05454] rounded-2xl mx-auto">
                        <div className="bg-[#F05454] text-[#FBF7F2] dark:text-[#2D2A27] p-6 pt-4 text-lg font-normal">
                            <h1 className="text-4xl font-bold w-max mb-4">About Me</h1>
                            <p>
                                I'm a cloud engineer/full-stack developer with hands-on production experience in building, updating, and maintaining infrastructure.
                                As I've advanced in my career, I've developed not only the ability to deliver clean and efficient code, but also to design and maintain secure, scalable systems.
                                My mix of programming expertise and infrastructure management experience allows me to bridge development and operations seamlessly.
                            </p>
                            <div className='flex flex-col gap-y-2 mt-4'>
                                <p className='font-bold text-2xl'>Experience</p>
                                <div className='w-full flex justify-between'>
                                    <p className='font-semibold text-xl italic ml-6'>Full Stack Developer / Cloud Engineer, <span className='not-italic'>SOCSoter, Inc.</span></p>
                                    <p className='font-semibold'>November 2023 - Present</p>
                                </div>
                                <p className='ml-6'>
                                    In this role, I maintained and troubleshot company infrastructure—including servers and datastores—across multiple applications to ensure reliable operations. 
                                    Alongside that work, I built and operated a reporting platform that <u>delivered thousands of dynamic, customer-specific reports to end customers</u>. 
                                    I also implemented <b>Ansible</b> to roll out updates across hundreds of cloud SIEM devices and built a long-term log retention solution to meet customer compliance requirements using <b>Terraform</b> and <b>AWS</b>. 
                                    Additionally, I overhauled the cron orchestration server, <u>reducing job failures from 2-3 per week to zero</u>, and rebuilt authentication with 2FA and self-service password reset, reducing support tickets and strengthening account security. 
                                    I assisted with integrating <b>GitHub Actions</b> into the CI/CD pipeline, updated and maintained SIEM log ingestion to improve reporting data reliability to ~100%, 
                                    and supported the development of both a vulnerability management service (VMS) that scans customer networks and delivers actionable findings and an endpoint detection and response (EDR) service managing data for 10,000+ endpoints. 
                                    Finally, I built a phishing detection server that alerts on malicious websites identified in browser history.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-4 border-[#F05454] rounded-2xl">
                        <div className="flex flex-col gap-y-4 p-6 pt-4 text-lg font-medium">
                            <h1 className="text-4xl font-bold w-max">Certificates</h1>
                            <div className="flex justify-between flex-wrap gap-8 py-2">
                                <div className='w-fit flex items-center gap-x-6'>
                                    <div className="flex justify-center items-center min-w-20 max-w-20"><img src={isDarkMode ? aws_white : aws} className="w-16" /></div>
                                    <div className='flex flex-col justify-start gap-y-0.5'>
                                        <p className='text-lg font-bold'>AWS Solutions Architect - Associate (SAA-C03)</p>
                                        <p>Issued Jul 2025 · Expires Jul 2028</p>
                                        <p>Credential ID: 2a57772d-c2c9-43fa-a394-fb6e92b68e2c</p>
                                        <a
                                            target='_blank'
                                            href='https://www.credly.com/badges/2a57772d-c2c9-43fa-a394-fb6e92b68e2c/public_url'
                                            onClick={() => { handlePutRequest("cert_redirects"); certRedirects !== undefined && setCertRedirects(prev => prev! + 1) }}
                                            className='text-base flex gap-x-2 items-center px-2.5 py-1.5 mt-1 bg-[#F05454] text-[#FBF7F2] dark:text-[#2D2A27] rounded-lg hover:rounded-xl hover:scale-[1.05] duration-250 cursor-pointer w-fit'
                                        >
                                            Show Credential <i className="text-sm fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className='w-fit flex items-center gap-x-6'>
                                    <div className="flex justify-center items-center min-w-20 max-w-20"><img src={isDarkMode ? aws_white : aws} className="w-16" /></div>
                                    <div className='flex flex-col justify-start gap-y-0.5'>
                                        <p className='text-lg font-bold'>AWS SysOps Administrator - Associate (SOA-C02)</p>
                                        <p>Issued Aug 2025 · Expires Aug 2028</p>
                                        <p>Credential ID: 3147146e-5e57-4fce-a29c-388b0658098e</p>
                                        <a
                                            target='_blank'
                                            href='https://www.credly.com/earner/earned/badge/3147146e-5e57-4fce-a29c-388b0658098e'
                                            onClick={() => { handlePutRequest("cert_redirects"); certRedirects !== undefined && setCertRedirects(prev => prev! + 1) }}
                                            className='text-base flex gap-x-2 items-center px-2.5 py-1.5 mt-1 bg-[#F05454] text-[#FBF7F2] dark:text-[#2D2A27] rounded-lg hover:rounded-xl hover:scale-[1.05] duration-250 cursor-pointer w-fit'
                                        >
                                            Show Credential <i className="text-sm fa-solid fa-arrow-up-right-from-square"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className='w-fit flex items-center gap-x-6'>
                                    <div className="flex justify-center items-center min-w-20 max-w-20"><img src={isDarkMode ? hashicorp_white : hashicorp} className='w-12' /></div>
                                    <div className='flex flex-col justify-start gap-y-0.5'>
                                        <p className='text-lg font-bold'>Terraform Associate (003)</p>
                                        <p>Issued Sep 2025 · Expires Sep 2027</p>
                                        <p>Credential ID: a37d5bdd-e276-48a1-ba80-ab1334d459dc</p>
                                        <a
                                            target='_blank'
                                            href='https://www.credly.com/earner/earned/badge/a37d5bdd-e276-48a1-ba80-ab1334d459dc'
                                            onClick={() => { handlePutRequest("cert_redirects"); certRedirects !== undefined && setCertRedirects(prev => prev! + 1) }}
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
                        <div className="bg-[#F05454] text-[#FBF7F2] dark:text-[#2D2A27] p-6 pt-4 text-lg font-normal">
                            <h1 className="text-4xl font-bold w-max mb-4">About This Project</h1>
                            <div className='flex flex-col gap-y-2'>
                                <p>
                                    I designed and built a production-ready static portfolio website that showcases end-to-end DevOps practice.
                                    The site is built with Vite, TypeScript, React, and Tailwind CSS and served from an S3 bucket behind a CloudFront distribution, with a custom domain managed in Route 53 (A/AAAA records) and ACM-issued TLS for secure delivery.
                                    The dynamic portion of the infrastructure is codified in Terraform and deployed via a GitHub + Terraform HCP pipeline that plans and applies automatically on every push to main.
                                </p>
                                <p>
                                    A serverless metrics stack powers simple analytics: API Gateway triggers one Lambda to update a DynamoDB table and another to retrieve metrics.
                                    Security and reliability are baked in with AWS WAF in front of the API to restrict access and apply rate limiting, plus CloudWatch alarms for billing thresholds and Lambda activity.
                                    Alerts fan-out through SNS to email and Slack (via Amazon Q Developer), providing immediate notifications.
                                    The result is a secure, scalable, low-cost website with fully automated, repeatable deployments and production-grade monitoring and controls.
                                </p>
                                <br />
                                <p>
                                    <span>To view the GitHub repository: </span>
                                    <a
                                        className='underline hover:font-semibold duration-100'
                                        target='_blank'
                                        href='https://github.com/emrah-i/Portfolio'
                                    >
                                        click here
                                    </a>
                                </p>
                                <p>
                                    <span>To read a detailed explanation of the project: </span>
                                    <a
                                        className='underline hover:font-semibold duration-100'
                                        target='_blank'
                                        href='https://medium.com/@ibraem1026/my-journey-deploying-my-portfolio-to-the-cloud-b6361122b87d'
                                    >
                                        click here
                                    </a>
                                </p>
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
                                    <h1 className="pb-2 text-xl w-min sm:w-full font-bold relative w-max">Cloud Providers</h1>
                                    <div className='flex flex-col gap-y-2'>
                                        {["AWS"].map(skill =>
                                            <p key={skill} className="text-lg font-normal transition-all duration-250 ease-in-out hover:scale-110">{skill}</p>
                                        )}
                                    </div>
                                </div>
                                <div key={"DevOps Tools"} className="flex flex-col gap-y-3 items-center text-center">
                                    <div className="aspect-square h-24 w-24 flex items-center justify-center bg-[#F05454] rounded-full p-6 transition-all duration-250 ease-in-out hover:scale-[1.05]">
                                        <i className="text-[#FBF7F2] dark:text-[#2D2A27] text-4xl fa-solid fa-screwdriver-wrench"></i>
                                    </div>
                                    <h1 className="pb-2 text-xl w-min sm:w-full font-bold relative w-max">DevOps Tools</h1>
                                    <div className='flex flex-col gap-y-2'>
                                        {['Terraform', 'Ansible', 'Docker', 'Kubernetes', 'GitHub Actions', 'Linux CLI'].map(skill =>
                                            <p key={skill} className="text-lg font-normal transition-all duration-250 ease-in-out hover:scale-110">{skill}</p>
                                        )}
                                    </div>
                                </div>
                                <div key={"Languages"} className="flex flex-col gap-y-3 items-center text-center">
                                    <div className="aspect-square h-24 w-24 flex items-center justify-center bg-[#F05454] rounded-full p-6 transition-all duration-250 ease-in-out hover:scale-[1.05]">
                                        <i className="text-[#FBF7F2] dark:text-[#2D2A27] text-4xl fa-solid fa-code"></i>
                                    </div>
                                    <h1 className="pb-2 text-xl w-min sm:w-full font-bold relative w-max">Languages</h1>
                                    <div className='flex flex-col gap-y-2'>
                                        {['TypeScript', 'JavaScript', 'Python', 'PHP', 'Rust'].map(skill =>
                                            <p key={skill} className="text-lg font-normal transition-all duration-250 ease-in-out hover:scale-110">{skill}</p>
                                        )}
                                    </div>
                                </div>
                                <div key={"Datastores"} className="flex flex-col gap-y-3 items-center text-center">
                                    <div className="aspect-square h-24 w-24 flex items-center justify-center bg-[#F05454] rounded-full p-6 transition-all duration-250 ease-in-out hover:scale-[1.05]">
                                        <i className="text-[#FBF7F2] dark:text-[#2D2A27] text-4xl fa-solid fa-database"></i>
                                    </div>
                                    <h1 className="pb-2 text-xl w-min sm:w-full font-bold relative w-max">Datastores</h1>
                                    <div className='flex flex-col gap-y-2'>
                                        {['MySQL', 'PostgreSQL', 'AWS RDS', 'DynamoDB', 'Redis', 'MongoDB'].map(skill =>
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

