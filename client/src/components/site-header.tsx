import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function SiteHeader() {
    return (
        <header className="border-b border-gray-800">
            <div className="container flex h-20 items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <img src="/assets/images/logo-icon.png" alt="Raptors" className="w-4" />
                        <span className="font-bold">Raptors</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link
                            href="/events"
                            className="text-sm font-medium text-muted-foreground hover:text-primary"
                        >
                            Events
                        </Link>
                        <Link
                            href="/jobs"
                            className="text-sm font-medium text-purple-500 hover:text-purple-400"
                        >
                            Jobs
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-medium text-muted-foreground hover:text-primary"
                        >
                            About Us
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <Button
                        asChild
                        className="hidden md:inline-flex bg-transparent border-purple-600 border"
                    >
                        <Link href="/sign-in">Sign In</Link>
                    </Button>
                    <Button
                        asChild
                        className="hidden md:inline-flex bg-purple-500 hover:bg-purple-400"
                    >
                        <Link href="/sign-up">Sign Up</Link>
                    </Button>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            {/* <div className="flex flex-col space-y-4 mt-4">
                                <Link
                                    href="/events"
                                    className="text-sm font-medium text-muted-foreground hover:text-primary"
                                >
                                    Events
                                </Link>
                                <Link
                                    href="/jobs"
                                    className="text-sm font-medium text-purple-500 hover:text-purple-400"
                                >
                                    Jobs
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-sm font-medium text-muted-foreground hover:text-primary"
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="/sign-in"
                                    className="text-sm font-medium text-muted-foreground hover:text-primary"
                                >
                                    Login
                                </Link>
                                <Button asChild className="bg-purple-500 hover:bg-purple-400">
                                    <Link href="/sign-up">Sign Up</Link>
                                </Button>
                            </div> */}
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
