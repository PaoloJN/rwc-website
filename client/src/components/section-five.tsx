import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SectionFive() {
    return (
        <div className="w-full py-24 px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-14">
                <div className="text-center space-y-8">
                    <h1 className="text-4xl font-bold">Frequently Ask Question</h1>
                    <p className="text-lg text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis enim{" "}
                        sapien. Pellentesque lacinia laoreet magna, non pretium vel.
                    </p>
                </div>
                <div className="w-full mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <AccordionItem key={index} value={"index-" + index}>
                                <AccordionTrigger>
                                    This is the start of something new
                                </AccordionTrigger>
                                <AccordionContent>
                                    Managing a small business today is already tough. Avoid further
                                    complications by ditching outdated, tedious trade methods. Our
                                    goal is to streamline SMB trade, making it easier and faster
                                    than ever.
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="flex justify-center">
                    <Link
                        href="/contact"
                        className={cn(buttonVariants({ variant: "default" }), "h-12 px-8 text-md")}
                    >
                        Still Have Questions? Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}
