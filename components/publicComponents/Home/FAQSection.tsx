import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ContainerLg from "@/components/shared/Container/ContainerLg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I rent a property on RentNest?",
    answer:
      "Browse available properties, choose your preferred one, submit a rental request, wait for landlord approval, and complete the secure payment process.",
  },
  {
    question: "How does the payment system work?",
    answer:
      "Once your rental request is approved, you'll be able to make a secure online payment through our integrated payment gateway.",
  },
  {
    question: "Can I cancel my rental request?",
    answer:
      "Yes. You can cancel a pending rental request before it is approved by the landlord.",
  },
  {
    question: "Are all properties verified?",
    answer:
      "Yes. Every listed property is reviewed before publication to ensure accurate information and improve trust.",
  },
  {
    question: "Can landlords manage multiple properties?",
    answer:
      "Absolutely. Landlords can create, update, and manage multiple property listings from their dashboard.",
  },
  {
    question: "How can I contact the landlord?",
    answer:
      "After submitting a rental request and receiving approval, you can communicate through the contact information available in your dashboard.",
  },
];

const FAQSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-background via-primary/5 to-background" />

      <ContainerLg>
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-primary inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Got Questions?
            <span className="text-primary block">
              {"We've"} Got Answers
            </span>
          </h2>

          <p className="text-muted-foreground mt-6 text-base leading-8">
            Everything you need to know about renting properties through
            RentNest.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto max-w-4xl">
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="overflow-hidden rounded-2xl border bg-background px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground pb-6 leading-7">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-[32px] border bg-card p-10 text-center shadow-lg">
          <h3 className="text-2xl font-bold sm:text-3xl">
            Still Have Questions?
          </h3>

          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl leading-7">
            Our support team is here to help you with every step of your rental
            journey.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-8 rounded-full px-8"
          >
            <Link href="/contact">
              Contact Us
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </ContainerLg>
    </section>
  );
};

export default FAQSection;