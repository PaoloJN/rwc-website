import JobCard from "@/components/job-card";
import PaginationWithLinks from "@/components/pagination-with-links";

type Props = {
    searchParams: {
        page?: string;
        pageSize?: string;
    };
};

interface Job {
    id: number;
    title: string;
    level: string;
    description: string;
    isRemote: boolean;
    isFullTime: boolean;
    // link?: string;
}

export default async function Page({ searchParams }: Props) {
    const page = parseInt(searchParams.page || "1", 10);
    const pageSize = parseInt(searchParams.pageSize || "9", 10);
    const [data, count] = await getJobsWithCount(page, pageSize);

    return (
        <div className="min-h-screen md:p-20 p-8">
            <div className="max-w-6xl mx-auto space-y-12">
                {/*  Page Title*/}
                <div className="text-center space-y-8">
                    <h1 className="text-4xl font-bold text-foreground">Latest Job Openings</h1>
                    <p className="text-lg text-muted-foreground">
                        Join our waitlist and get access to Rumor for discounted early-bird prices.
                    </p>
                </div>

                {/* Job Card List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {data.map((item: Job, index: number) => (
                        <JobCard key={index} item={item} />
                    ))}
                </div>

                {/* Job Pagination */}
                <PaginationWithLinks
                    page={page}
                    pageSize={pageSize}
                    totalCount={count}
                    pageSizeSelectOptions={{ pageSizeOptions: [10, 20, 50, 100] }}
                />
            </div>
        </div>
    );
}

async function getJobsWithCount(page: number, pageSize: number): Promise<[Job[], number]> {
    const allJobs = Array(500)
        .fill({
            title: "Mern Stack Developer",
            level: "Mid Level",
            description: "We're looking for a mid-level product designer to join our team.",
            isRemote: true,
            isFullTime: true,
        })
        .map((job, index) => ({ ...job, id: index + 1, title: `${job.title} #${index + 1}` }));

    const start = (page - 1) * pageSize;
    const data = allJobs.slice(start, start + pageSize);

    return [data, allJobs.length];
}
