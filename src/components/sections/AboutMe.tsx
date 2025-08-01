import { motion } from "framer-motion";
import { useMemo } from "react";

export function AboutMeSection() {
    const myJourneySection = useMemo(
        () => (
            <motion.div className="space-y-6">
                <div className="flex items-center gap-3">
                    <h2 className="text-3xl font-bold text-white flex items-center gap-3 mb-3">
                        <span className="text-teal-400 text-3xl">{"{"}</span>
                        My Journey
                        <span className="text-teal-400 text-3xl">{"}"}</span>
                    </h2>
                </div>
                <div className="prose prose-invert prose-teal max-w-none">
                    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-[23px] before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-teal-400/50 before:to-transparent">
                        <div className="relative flex items-start gap-6">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-base-300/70 border border-teal-400/30 shrink-0">
                                <span className="text-4xl">👶</span>
                            </div>
                            <div className="flex-1 bg-base-300/30 rounded-lg p-4 border border-teal-400/20">
                                <h3 className="text-white/90 text-lg font-semibold mb-2 flex items-center gap-2">
                                    The Early Days
                                    <span className="text-sm text-teal-400/70">2010-2016</span>
                                </h3>
                                <p className="text-lg text-white/80 leading-relaxed">
                                    My journey began with video games, which naturally led to understanding technology. I became the family's unofficial IT
                                    support, and got my first glimpse of programming through Scratch in middle school. Setting up a Minecraft server introduced
                                    me to networking concepts like port forwarding.
                                </p>
                            </div>
                        </div>

                        <div className="relative flex items-start gap-6">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-base-300/70 border border-teal-400/30 shrink-0">
                                <span className="text-4xl">👨‍💻</span>
                            </div>
                            <div className="flex-1 bg-base-300/30 rounded-lg p-4 border border-teal-400/20">
                                <h3 className="text-white/90 text-lg font-semibold mb-2 flex items-center gap-2">
                                    High School Programming
                                    <span className="text-sm text-teal-400/70">2016-2020</span>
                                </h3>
                                <p className="text-lg text-white/80 leading-relaxed">
                                    In grade 10, I started with Java and quickly became proficient enough to help my classmates. Taking on a grade 12 C++ course
                                    in grade 11 helped me grasp object-oriented programming. Feeling like a prodigy, I even tried Kali Linux—turns out hacking
                                    wasn't as easy as Mr. Robot made it seem like.
                                </p>
                                <p className="text-lg text-white/80 leading-relaxed mt-4">
                                    I dabbled in Flutter apps, Unity games, and JavaScript projects—mostly following tutorials and tinkering. Everything changed
                                    when a university friend challenged me with a second-year full-stack summative, a massive leap from my tutorial-based
                                    projects. Completing it in high school was a game-changer—I knew this was what I wanted to do.
                                </p>
                            </div>
                        </div>

                        <div className="relative flex items-start gap-6">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-base-300/70 border border-teal-400/30 shrink-0">
                                <span className="text-4xl">🧙‍♂️</span>
                            </div>
                            <div className="flex-1 bg-base-300/30 rounded-lg p-4 border border-teal-400/20">
                                <h3 className="text-white/90 text-lg font-semibold mb-2 flex items-center gap-2">
                                    Professional Career
                                    <span className="text-sm text-teal-400/70">2020-Present</span>
                                </h3>
                                <p className="text-lg text-white/80 leading-relaxed">
                                    Fresh out of high school, I tutored programming and took on freelance projects. Simple landing pages quickly evolved into
                                    full-stack apps.
                                </p>
                                <p className="text-lg text-white/80 leading-relaxed mt-4">
                                    I applied for a student developer position with the government, but after a month of working with them, they skipped the
                                    student program and offered me a full-time contract role on the spot.
                                </p>

                                <p className="text-lg text-white/80 leading-relaxed mt-4">
                                    The corporate world opened my eyes to more than just coding. I discovered the importance of clear communication, learned to
                                    navigate project management, and thrived in an agile team environment. Each day brought new challenges that helped me blend
                                    technical expertise with essential soft skills.
                                </p>

                                <p className="text-lg text-white/80 leading-relaxed mt-4">
                                    Today, I'm back in the freelance world, crafting my own path while pursuing a college education. I split my time between
                                    developing my own startups and helping other startups bring their ideas to life. My focus spans across integrating AI
                                    capabilities into applications, strengthening server-side expertise, and exploring native mobile development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        ),
        []
    );

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="space-y-12">
            {myJourneySection}
        </motion.div>
    );
}
