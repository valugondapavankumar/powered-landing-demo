import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$29",
    description: "Perfect for individuals and small teams getting started",
    features: [
      "Up to 5 team members",
      "Basic automation workflows",
      "Standard analytics dashboard",
      "Email support",
      "5GB cloud storage",
      "Mobile app access",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$99",
    description: "Advanced features for growing teams and businesses",
    features: [
      "Up to 25 team members",
      "Advanced AI automation",
      "Real-time analytics & insights",
      "Priority 24/7 support",
      "100GB cloud storage",
      "Custom integrations",
      "API access",
      "Advanced security features",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited team members",
      "Custom AI model training",
      "Enterprise analytics suite",
      "Dedicated success manager",
      "Unlimited cloud storage",
      "White-label options",
      "SLA guarantee",
      "On-premise deployment",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in ${
                plan.highlighted ? "border-primary shadow-elegant scale-105" : "border-border/50"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                {plan.highlighted && (
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold mb-2 w-fit">
                    Most Popular
                  </div>
                )}
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant={plan.highlighted ? "hero" : "outline"}
                  className="w-full"
                  onClick={scrollToContact}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
