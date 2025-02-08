export function AboutSection() {
    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">About Me</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                    I'm a Full Stack Developer with a passion for building elegant, user-centric applications. With expertise in both frontend and backend technologies, I create seamless digital experiences that solve real-world problems.
                </p>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Technical Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <h4 className="text-teal-400 font-medium">Frontend Development</h4>
                        <ul className="list-disc list-inside text-white/80 space-y-1">
                            <li>React.js & Next.js</li>
                            <li>TypeScript</li>
                            <li>Tailwind CSS</li>
                            <li>Redux & Context API</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-teal-400 font-medium">Backend Development</h4>
                        <ul className="list-disc list-inside text-white/80 space-y-1">
                            <li>Node.js & Express</li>
                            <li>Python & Django</li>
                            <li>MongoDB & PostgreSQL</li>
                            <li>RESTful APIs & GraphQL</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Experience</h3>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <h4 className="text-teal-400 font-medium">Senior Full Stack Developer</h4>
                            <span className="text-white/60 text-sm">2021 - Present</span>
                        </div>
                        <p className="text-white/80">Leading development of scalable web applications, mentoring team members, and implementing best practices.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <h4 className="text-teal-400 font-medium">Full Stack Developer</h4>
                            <span className="text-white/60 text-sm">2019 - 2021</span>
                        </div>
                        <p className="text-white/80">Developed and maintained multiple web applications, focusing on performance optimization and user experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 