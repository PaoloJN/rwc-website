import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// interface HeroProps {}

export default function Hero({}) {
    return (
        <section>
            <div className="container">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-center py-32 text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left">
                        <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                            We’re RWC
                        </h1>
                        <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                            Montgomery College’s Computer Science Club
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            <Button className="w-full sm:w-auto">
                                <ArrowRight className="mr-2 size-4" />
                                Sign up for free
                            </Button>
                            <Button variant="outline" className="w-full sm:w-auto">
                                View Events
                            </Button>
                        </div>
                    </div>
                    <div className="relative aspect-[3/4]">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                viewBox="0 0 800 800"
                                className="size-full text-muted-foreground opacity-20"
                            >
                                {Array.from(Array(720).keys()).map((dot, index, array) => {
                                    const angle = 0.2 * index;
                                    const scalar = 40 + index * (360 / array.length);
                                    const x = Math.round(Math.cos(angle) * scalar);
                                    const y = Math.round(Math.sin(angle) * scalar);

                                    return (
                                        <circle
                                            key={index}
                                            r={(3 * index) / array.length}
                                            cx={400 + x}
                                            cy={400 + y}
                                            opacity={1 - Math.sin(angle)}
                                        />
                                    );
                                })}
                            </svg> */}

                            <Image
                                src="/assets/images/logo.png"
                                alt="Raptors Who Code Logo"
                                className="z-10"
                                width={800}
                                height={800}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
