import profilePic from "../assets/web.jpg";
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16">Nimasha Nimnadi</h1>
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Software Quality Engineer</span>
                <p className="my-2 max-w-xl py-6 font-light tracking-tight">
                    I am a fresh Software Quality Engineer to the industry. I have a strong passion for software testing and quality assurance. I am a self-motivated individual who is always willing to learn new technologies and tools. I have experience in both manual and automation testing. 
                    I am a quick learner and a team player who is always ready to take on new challenges.
                </p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <img src={profilePic} alt="Nimnadi img 01" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;