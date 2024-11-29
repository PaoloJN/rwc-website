import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";

type Event = {
    id: string;
    name: string;
    thumbnail: string;
    link: string;
    date: string;
    description: string;
};

interface EventCardProps {
    item: Event;
}

export default function EventCard({ item }: EventCardProps) {
    return (
        <Card className="rounded-md">
            <CardHeader className="space-y-3 px-3 py-3">
                <Image
                    src={item.thumbnail}
                    alt=""
                    width={200}
                    height={200}
                    className="w-full h-[240px] rounded-md"
                />
            </CardHeader>
            <CardContent className="space-y-2 px-4 pb-5">
                <h2 className="text-xl font-bold tracking-tight">{item.name}</h2>
                <p className="text-lg text-zinc-400">{item.date}</p>
                <p className="text-muted-foreground text-lg">{item.description}</p>
            </CardContent>
            <CardFooter className="p-4">
                <Button
                    className="w-full dark:bg-transparent dark:hover:bg-primary border border-primary
                    rounded-[4px] py-5 text-md font-medium transition-colors duration-200"
                    variant="default"
                >
                    Register Now
                </Button>
            </CardFooter>
        </Card>
    );
}
