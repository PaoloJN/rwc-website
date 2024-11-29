import EventCard from "@/components/event-card";
import PaginationWithLinks from "@/components/pagination-with-links";

type Props = {
    searchParams: {
        page?: string;
        pageSize?: string;
    };
};

type Event = {
    id: string;
    name: string;
    thumbnail: string;
    link: string;
    date: string;
    description: string;
};

export default async function Page({ searchParams }: Props) {
    const page = parseInt(searchParams.page || "1", 10);
    const pageSize = parseInt(searchParams.pageSize || "6", 10);
    const [data, count] = await getEventsWithCount(page, pageSize);

    return (
        <div className="min-h-screen md:p-20 p-8">
            <div className="max-w-6xl mx-auto space-y-12">
                {/*  Page Title*/}
                <div className="text-center space-y-8">
                    <h1 className="text-4xl font-bold">Our Upcoming Events</h1>
                    <p className="text-lg text-gray-400">
                        Join our waitlist and get access to Rumor for discounted early-bird prices.
                    </p>
                </div>

                {/* Event Card List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {data.map((item, index) => (
                        <EventCard key={index} item={item} />
                    ))}
                </div>

                {/* Event Pagination */}
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

async function getEventsWithCount(page: number, pageSize: number): Promise<[Event[], number]> {
    const allEvents = Array(500)
        .fill({
            id: "1",
            name: "Hackathon",
            thumbnail: "/assets/images/image-placeholder-1.png",
            link: "https://example.com",
            date: "Sun 09/22",
            description: "MASQUERAID: 9:05 AM - 12:35 PM PDT ALLEGIANT STADIUM LOT B",
        })
        .map((event, index) => {
            return {
                ...event,
                id: index.toString(),
                name: `Hackathon #${index + 1}`,
                // loop through image-placeholder-1 / 2 / 3
                thumbnail: `/assets/images/image-placeholder-${(index % 3) + 1}.png`,
            };
        });

    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return [allEvents.slice(start, end), allEvents.length];
}
