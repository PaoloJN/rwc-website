import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import JobCard from "./job-card";

interface Job {
    title: string;
    level: string;
    description: string;
    isRemote: boolean;
    isFullTime: boolean;
}

interface SectionFourProps {
    jobs: Job[];
}

export default function SectionFour({ jobs }: SectionFourProps) {
    return (
        <div className="w-full py-24 px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-14">
                <div className="text-center space-y-8">
                    <h1 className="text-4xl font-bold">Latest Jobs</h1>
                    <p className="text-lg text-muted-foreground">
                        Join our waitlist and get access to Rumor for discounted early-bird prices.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job, index) => (
                        <JobCard key={index} item={job} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link
                        href="/jobs"
                        className={cn(buttonVariants({ variant: "default" }), "h-12 px-8 text-md")}
                    >
                        View all jobs
                    </Link>
                </div>
            </div>
        </div>
    );
}
