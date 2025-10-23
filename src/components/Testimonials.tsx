import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow Inc.",
    content: "Innovexa has transformed how our team operates. The AI automation saved us countless hours, and the analytics gave us insights we never had before. It's like having a smart assistant for the entire company.",
    initials: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Product Manager, DataSync",
    content: "The collaboration features are phenomenal. Our remote team stays perfectly in sync, and the AI suggestions actually understand our workflow. We've seen a 40% increase in project completion speed.",
    initials: "MR",
  },
  {
    name: "Emily Watson",
    role: "Operations Director, CloudVentures",
    content: "Implementation was seamless, and ROI was visible within weeks. The predictive analytics helped us identify bottlenecks we didn't know existed. This is the future of productivity tools.",
    initials: "EW",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our customers say about transforming their workflows
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-soft transition-all duration-300 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
