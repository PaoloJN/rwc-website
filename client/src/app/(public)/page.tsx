// import Hero from "@/components/hero";
import Hero from "@/components/hero";
import SectionFive from "@/components/section-five";
import SectionFour from "@/components/section-four";
import SectionOne from "@/components/section-one";
import SectionThree from "@/components/section-three";
import SectionTwo from "@/components/section-two";

type Event = {
    id: string;
    name: string;
    thumbnail: string;
    link: string;
    date: string;
    description: string;
};

interface Job {
    title: string;
    level: string;
    description: string;
    isRemote: boolean;
    isFullTime: boolean;
}

export default async function Home() {
    const events = await getLatestEvents();
    const jobs = await getLatestJobs();

    return (
        <>
            <Hero />
            <SectionOne />
            <SectionTwo />
            <SectionThree events={events} />
            <SectionFour jobs={jobs} />
            <SectionFive />
        </>
    );
}

async function getLatestEvents(): Promise<Event[]> {
    const allEvents = Array(3)
        .fill({
            id: "1",
            name: "Hackathon",
            thumbnail: "/assets/images/image-placeholder-1.png",
            link: "/events/hackathon",
            date: "2022-12-31",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nisi ac nunc.",
        })
        .map((event, index) => ({
            ...event,
            id: index.toString(),
        }));

    return allEvents;
}

async function getLatestJobs(): Promise<Job[]> {
    const allJobs = Array(3)
        .fill({
            title: "Software Engineer",
            level: "Mid",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nisi ac nunc.",
            isRemote: true,
            isFullTime: true,
        })
        .map((job, index) => ({
            ...job,
            title: `${job.title} ${index}`,
        }));

    return allJobs;
}
