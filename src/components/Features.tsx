import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Smart Automation",
    description: "Automate repetitive tasks with AI-driven workflows. Save up to 10 hours per week by letting intelligent algorithms handle routine operations, data entry, and scheduling.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Turn data into actionable insights with real-time analytics dashboards. Predictive models help you make informed decisions and identify growth opportunities before your competition.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Connect your team with AI-powered communication tools. Smart suggestions, automated meeting notes, and context-aware notifications keep everyone aligned and productive.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to supercharge productivity and drive results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
