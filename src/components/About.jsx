import aboutImg from '../assets/web2.jpg'

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl ">About
             <span className="text-neutral-500 text-5xl  "> Me</span> </h1>
             <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                     <div className="flex items-center justify-center">
                        <img className='rounded-2xl' src={aboutImg} alt="about" />
                     </div>
                        
                </div>
                    <div className="w-full lg:w-1/2">
                            <div className="flex justify-center lg:justify-start">
                                 <p className='my-2 maxw-xl py-6'> I am a fresh Software Quality Engineer to the industry. I have a strong passion for software testing and quality assurance. 
                                    I am a self-motivated individual who is always willing to learn new technologies and tools. I have experience in both manual and automation
                                     testing.
                                </p>
                            </div>
                    </div>
             </div>
      
    </div>
  )
}

export default About