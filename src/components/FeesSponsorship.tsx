import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const FeesSponsorship = () => {
    return (
        <section className="py-20" id="fees">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Registration Fee */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary font-heading">Registration Fee</h2>
                        <Card className="border-t-4 border-t-primary shadow-md">
                            <CardHeader>
                                <CardTitle>Fee Structure</CardTitle>
                                <CardDescription>Includes access to all sessions and conference materials</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <Table className="min-w-full">
                                        <TableHeader>
                                            <TableRow className="bg-muted/50">
                                                <TableHead className="font-bold">Categories</TableHead>
                                                <TableHead className="font-bold">Early Bird</TableHead>
                                                <TableHead className="font-bold">Late</TableHead>
                                                <TableHead className="font-bold">Standard</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="font-medium">Student/Researcher</TableCell>
                                                <TableCell>₹ 3000</TableCell>
                                                <TableCell>₹ 5000</TableCell>
                                                <TableCell>₹ 6000</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">Faculty/Scientist</TableCell>
                                                <TableCell>₹ 3000</TableCell>
                                                <TableCell>₹ 7000</TableCell>
                                                <TableCell>₹ 8000</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">International</TableCell>
                                                <TableCell>$50</TableCell>
                                                <TableCell>$100</TableCell>
                                                <TableCell>$100</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                                <p className="text-xs text-muted-foreground mt-4">
                                    * Accommodation fees not included. Check website for accommodation details.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sponsorship */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary font-heading">Sponsorship</h2>
                        <Card className="border-t-4 border-t-secondary shadow-md">
                            <CardHeader>
                                <CardTitle>Sponsorship Packages</CardTitle>
                                <CardDescription>Partner with us and showcase your brand</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHeader>
                                            <TableRow className="bg-muted/50">
                                                <TableHead className="font-bold">Category</TableHead>
                                                <TableHead className="font-bold">Indian</TableHead>
                                                <TableHead className="font-bold">Overseas</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="font-medium text-gray-500">Silver</TableCell>
                                                <TableCell>Rs. 50,000</TableCell>
                                                <TableCell>US $500</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium text-yellow-600">Gold</TableCell>
                                                <TableCell>Rs. 1,00,000</TableCell>
                                                <TableCell>US $1000</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium text-gray-800">Platinum</TableCell>
                                                <TableCell>Rs. 1,50,000</TableCell>
                                                <TableCell>US $1500</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium text-blue-400">Diamond</TableCell>
                                                <TableCell>Rs. 2,00,000</TableCell>
                                                <TableCell>US $2000</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium text-primary">Powered By</TableCell>
                                                <TableCell>Rs. 3,00,000</TableCell>
                                                <TableCell>US $2500</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeesSponsorship;
