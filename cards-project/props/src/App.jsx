import React from 'react'
import Card from "./components/Card" 
import { Car } from 'lucide-react';


const App = () => {

//   const jobOpenings = [
//   {
//     brandLogo: "data:image/webp;base64,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",
//     companyName: "Google",
//     datePosted: "5 days ago",
//     post: "Frontend Engineer",
//     tag1: "Full Time",
//     tag2: "Junior Level",
//     pay: "$55/hr",
//     location: "Bangalore, India"
//   },
//   {
//     brandLogo: "https://logo.clearbit.com/amazon.com",
//     companyName: "Amazon",
//     datePosted: "10 days ago",
//     post: "Backend Developer",
//     tag1: "Full Time",
//     tag2: "Senior Level",
//     pay: "$80/hr",
//     location: "Hyderabad, India"
//   },
//   {
//     brandLogo: "https://logo.clearbit.com/apple.com",
//     companyName: "Apple",
//     datePosted: "3 days ago",
//     post: "iOS Developer",
//     tag1: "Full Time",
//     tag2: "Mid Level",
//     pay: "$70/hr",
//     location: "Mumbai, India"
//   },
//   {
//     brandLogo: "https://logo.clearbit.com/netflix.com",
//     companyName: "Netflix",
//     datePosted: "8 days ago",
//     post: "UI/UX Designer",
//     tag1: "Part Time",
//     tag2: "Junior Level",
//     pay: "$45/hr",
//     location: "Remote, India"
//   },
//   {
//     brandLogo: "https://logo.clearbit.com/meta.com",
//     companyName: "Meta",
//     datePosted: "6 days ago",
//     post: "React Developer",
//     tag1: "Full Time",
//     tag2: "Mid Level",
//     pay: "$65/hr",
//     location: "Gurugram, India"
//   },
//   {
//     brandLogo: "https://logo.clearbit.com/microsoft.com",
//     companyName: "Microsoft",
//     datePosted: "2 days ago",
//     post: "Cloud Engineer",
//     tag1: "Full Time",
//     tag2: "Senior Level",
//     pay: "$90/hr",
//     location: "Hyderabad, India"
//   },
//   {
//     brandLogo: "https://logo.clearbit.com/openai.com",
//     companyName: "OpenAI",
//     datePosted: "4 days ago",
//     post: "Machine Learning Engineer",
//     tag1: "Full Time",
//     tag2: "Senior Level",
//     pay: "$100/hr",
//     location: "Remote, India"
//   },
//   {
//     brandLogo: "https://logo.clearbit.com/tesla.com",
//     companyName: "Tesla",
//     datePosted: "9 days ago",
//     post: "Software Engineer - Embedded Systems",
//     tag1: "Full Time",
//     tag2: "Mid Level",
//     pay: "$75/hr",
//     location: "Pune, India"
//   },
//   {
//     brandLogo: "https://logo.clearbit.com/nvidia.com",
//     companyName: "NVIDIA",
//     datePosted: "7 days ago",
//     post: "AI Research Engineer",
//     tag1: "Full Time",
//     tag2: "Senior Level",
//     pay: "$110/hr",
//     location: "Bangalore, India"
//   },
//   {
//     brandLogo: "https://logo.clearbit.com/stripe.com",
//     companyName: "Stripe",
//     datePosted: "1 day ago",
//     post: "Full Stack Developer",
//     tag1: "Part Time",
//     tag2: "Junior Level",
//     pay: "$50/hr",
//     location: "Remote, India"
//   }

  
// ];


const jobOpenings = [
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    }
  ];



  return (
    <div className='parent'> 
     {jobOpenings.map(function(elem){
      return <Card  company={elem.companyName}  datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandLogo={elem.brandLogo} />
    })} 
     
      </div>
  )
}

export default App