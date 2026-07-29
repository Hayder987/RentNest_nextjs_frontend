"use client";

import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPageComponents() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold">
          Contact <span className="text-primary">Us</span>
        </h1>

        <p className="mt-4 text-muted-foreground">
          {"We'd"} love to hear from you. Feel free to contact us with any
          questions, feedback, or support requests.
        </p>
      </div>

      <div className="grid gap-10 mt-14 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="flex items-start gap-4 rounded-xl border p-5">
            <MapPin className="text-primary" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-muted-foreground">
                Pabna, Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border p-5">
            <Phone className="text-primary" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-muted-foreground">
                +880 1771814597
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border p-5">
            <Mail className="text-primary" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-muted-foreground">
                hayderbd4290@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-xl border p-6">
          <form className="space-y-5">
            <div>
              <Label>Name</Label>
              <Input placeholder="Enter your name" />
            </div>

            <div>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <Label>Subject</Label>
              <Input placeholder="Enter subject" />
            </div>

            <div>
              <Label>Message</Label>
              <Textarea
                rows={6}
                placeholder="Write your message..."
              />
            </div>

            <Button className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}