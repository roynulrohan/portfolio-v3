import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Code2, GanttChart, GitFork, GithubIcon, Globe, Play, Rocket } from "lucide-react";
import { HTMLAttributes, useCallback, useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/captions.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { cn } from "../lib/utils";
import { Project } from "./sections/Projects";
import { useIsMobile } from "../hooks/use-mobile";

// Function to dynamically get all images from a folder
const getProjectImages = (folderName: string) => {
    // Use Vite's import.meta.glob to get all images from the src directory
    const images = import.meta.glob("/src/assets/project-images/*/*.{png,jpg,jpeg,gif,webp}", { eager: true });

    // Filter images that belong to the specific folder
    const folderImages = Object.entries(images)
        .filter(([path]) => path.includes(`/project-images/${folderName}/`))
        .map(([_, module]) => ({
            path: (module as { default: string }).default,
            module: module as { default: string },
        }))
        .sort((a, b) => a.path.localeCompare(b.path)); // Sort for consistent order

    return folderImages;
};

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
    project: Project;
}

export default function ProjectCard({ project, className, ...props }: ProjectCardProps) {
    const isMobile = useIsMobile();
    const images = getProjectImages(project.imagesFolder);
    const [emblaRef, emblaApi] = useEmblaCarousel(
        images.length > 1
            ? {
                  loop: true,
                  align: "start",
                  dragFree: false,
                  containScroll: "trimSnaps",
              }
            : undefined,
        []
    );
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    const scrollTo = useCallback(
        (index: number) => {
            if (!emblaApi) return;
            emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    const scrollPrev = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div key={project.title} className={cn("group", className)} {...props}>
            <div
                className={cn(
                    "bg-base-300/50 rounded-xl overflow-hidden border border-teal-400/20 hover:border-teal-400/40 transition-all h-full",
                    project.isMobile && !isMobile ? "flex flex-row-reverse" : "flex flex-col"
                )}
            >
                <div className={cn("overflow-hidden relative group", project.isMobile && !isMobile ? "aspect-[19.5/9] rounded-xl m-2" : "aspect-[16/8]")}>
                    {images.length > 0 ? (
                        images.length === 1 ? (
                            // Single image - no carousel
                            <div
                                className="w-full h-full cursor-pointer"
                                onClick={() => {
                                    setLightboxIndex(0);
                                    setLightboxOpen(true);
                                }}
                            >
                                <img
                                    src={images[0].path}
                                    alt={`${project.title} screenshot`}
                                    className={cn(
                                        "w-full h-full group-hover:scale-105 transition-transform duration-300",
                                        project.isMobile ? "object-contain" : "object-cover object-top"
                                    )}
                                    loading="eager"
                                />
                            </div>
                        ) : (
                            // Multiple images - carousel
                            <div className="embla" ref={emblaRef}>
                                <div className="embla__container">
                                    {images.map((image, index) => (
                                        <div
                                            className="embla__slide cursor-pointer"
                                            key={image.path}
                                            onClick={() => {
                                                setLightboxIndex(index);
                                                setLightboxOpen(true);
                                            }}
                                        >
                                            <img
                                                src={image.path}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                className={cn("w-full h-full", project.isMobile ? "object-contain" : "object-cover object-top")}
                                                loading="eager"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation Arrows */}
                                <button
                                    onClick={scrollPrev}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                                >
                                    <ChevronLeft size={16} />
                                </button>
                                <button
                                    onClick={scrollNext}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                                >
                                    <ChevronRight size={16} />
                                </button>

                                {/* Navigation Dots */}
                                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-black/30 backdrop-blur-sm rounded-full px-2 py-1 flex gap-1.5">
                                        {images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => scrollTo(index)}
                                                className={cn(
                                                    "w-2 h-2 rounded-full transition-all duration-300",
                                                    selectedIndex === index ? "bg-teal-400 scale-125" : "bg-white/60 hover:bg-white/80"
                                                )}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    ) : (
                        <div className="w-full h-full bg-base-300/30 flex flex-col items-center justify-center gap-6 p-6 group-hover:bg-base-300/40 transition-colors">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col items-center gap-2 text-white/40 group-hover:text-teal-400/60 transition-colors">
                                    <Code2 size={32} strokeWidth={1.5} />
                                    <span className="text-xs font-medium">Source Code</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 text-white/40 group-hover:text-teal-400/60 transition-colors">
                                    <Rocket size={32} strokeWidth={1.5} />
                                    <span className="text-xs font-medium">In Development</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 text-white/40 group-hover:text-teal-400/60 transition-colors">
                                    <GitFork size={32} strokeWidth={1.5} />
                                    <span className="text-xs font-medium">Open Source</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 text-white/40 group-hover:text-teal-400/60 transition-colors">
                                    <GanttChart size={32} strokeWidth={1.5} />
                                    <span className="text-xs font-medium">Project Details</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className={cn("space-y-4 flex-1 flex flex-col justify-between", project.isMobile || isMobile ? "min-w-[50%] p-4" : "p-4")}>
                    <div className="space-y-2">
                        <div className={cn("flex items-center justify-between gap-2", project.isMobile || isMobile ? "flex-col" : "flex-row")}>
                            <h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors">{project.title}</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {project.date && (
                                    <span
                                        className={cn(
                                            "text-xs font-medium border rounded-full px-4 py-1 w-fit backdrop-blur-sm",
                                            "bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 border-blue-500/30"
                                        )}
                                    >
                                        {project.date}
                                    </span>
                                )}
                                {project.status && (
                                    <span
                                        className={cn(
                                            "text-xs font-medium border rounded-full px-4 py-1 w-fit backdrop-blur-sm",
                                            project.status === "Launched" &&
                                                "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30",
                                            project.status === "In Development" &&
                                                "bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 border-amber-500/30",
                                            project.status === "Archived" &&
                                                "bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-300 border-gray-500/30"
                                        )}
                                    >
                                        {project.status}
                                    </span>
                                )}
                                {project.info && (
                                    <span
                                        className={cn(
                                            "text-xs font-medium border rounded-full px-4 py-1 w-fit backdrop-blur-sm",
                                            "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30"
                                        )}
                                    >
                                        {project.info}
                                    </span>
                                )}
                            </div>
                        </div>
                        <p className="text-white/70 text-sm">{project.description}</p>
                    </div>
                    {project.features && (
                        <div>
                            <h4 className="text-sm font-medium text-white mb-2">Key Features</h4>
                            <ul className={cn("grid grid-cols-1 gap-1", project.isMobile ? "grid-cols-1" : "grid-cols-2")}>
                                {project.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-white/70 text-sm">
                                        <span className="text-teal-400 text-xs">▹</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="flex flex-col gap-3">
                        <div>
                            <h4 className="text-sm font-medium text-white mb-2">Technologies</h4>
                            <div className="flex flex-wrap gap-1.5">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="px-2 py-0.5 bg-teal-400/10 text-teal-400 rounded-full text-xs">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-3 pt-1">
                            {project.links &&
                                project.links.map((link) => (
                                    <a
                                        key={link.title}
                                        href={link.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            "flex-1 px-3 py-1.5 font-medium rounded-lg transition-all text-center text-sm flex items-center justify-center gap-2",
                                            link.type === "github" &&
                                                "bg-gray-800 hover:bg-gray-700 text-white border-gray-600 hover:border-gray-500 shadow-sm hover:shadow-md",
                                            link.type === "website" && "bg-teal-400 hover:bg-teal-500 text-black/80 hover:text-black",
                                            link.type === "demo" &&
                                                "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-purple-500 hover:border-purple-600 shadow-sm hover:shadow-md"
                                        )}
                                    >
                                        {link.type === "github" && <GithubIcon size={16} />}
                                        {link.type === "website" && <Globe size={16} />}
                                        {link.type === "demo" && <Play size={16} />}
                                        <span>{link.title}</span>
                                    </a>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={lightboxIndex}
                slides={images.map((image, index) => ({
                    src: image.path,
                    title: `${project.title} - Screenshot ${index + 1}`,
                    description: `View ${project.title} project screenshot`,
                }))}
                carousel={{
                    finite: true,
                }}
                plugins={[Thumbnails, Zoom, Counter]}
                thumbnails={{
                    position: "end",
                    width: 120,
                    height: 80,
                    padding: 4,
                    border: 2,
                    borderRadius: 4,
                    gap: 16,
                }}
                zoom={{
                    maxZoomPixelRatio: 3,
                    zoomInMultiplier: 2,
                    doubleTapDelay: 300,
                    doubleClickDelay: 300,
                    doubleClickMaxStops: 2,
                    keyboardMoveDistance: 50,
                    wheelZoomDistanceFactor: 100,
                    pinchZoomDistanceFactor: 100,
                    scrollToZoom: true,
                }}
                counter={{
                    container: { style: { top: "unset", bottom: 0 } },
                }}
            />
        </div>
    );
}
