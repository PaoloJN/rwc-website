import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Job {
    title: string;
    level: string;
    description: string;
    isRemote: boolean;
    isFullTime: boolean;
}

interface JobCardProps {
    item: Job;
}

export default function JobCard({ item }: JobCardProps) {
    return (
        <Card className="rounded-md">
            <CardHeader className="space-y-3 px-5 py-3">
                <CardTitle className="text-xl font-semibold text-foreground">
                    {item.title}
                </CardTitle>
                <div className="inline-flex">
                    <span className=" text-xs px-3 py-1 rounded-sm border border-border">
                        {item.level}
                    </span>
                </div>
            </CardHeader>
            <CardContent className="space-y-4 px-4 pb-5">
                <p className="text-muted-foreground text-lg">{item.description}</p>
                <div className="flex items-center space-x-6">
                    {item.isRemote && (
                        <div className="flex items-center space-x-2 text-muted-foreground/80">
                            <MapPin className="w-4 h-4" />
                            <span className="text-md">Remote</span>
                        </div>
                    )}
                    {item.isFullTime && (
                        <div className="flex items-center space-x-2 text-muted-foreground/80">
                            <Clock className="w-4 h-4" />
                            <span className="text-md">Full-time</span>
                        </div>
                    )}
                </div>
            </CardContent>
            <CardFooter className="p-4">
                <Button
                    className="w-full dark:bg-transparent dark:hover:bg-primary border border-primary
                    rounded-[4px] py-5 text-md font-medium transition-colors duration-200"
                    variant="default"
                >
                    Apply Now
                </Button>
            </CardFooter>
        </Card>
    );
}
