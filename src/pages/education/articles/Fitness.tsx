import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fitnessContent = {
  beginners: [
    {
      title: "Getting Started",
      content: `Starting a fitness journey can seem daunting, but it doesn't have to be. 
      Begin with simple exercises and gradually increase intensity as your fitness improves.`,
      tips: [
        "Start with walking 30 minutes daily",
        "Focus on proper form over weight/intensity",
        "Stay hydrated and listen to your body",
        "Set realistic, achievable goals"
      ]
    }
  ],
  strength: [
    {
      title: "Basic Strength Training",
      content: `Strength training is essential for building muscle, improving bone density, 
      and boosting metabolism. Start with bodyweight exercises before moving to weights.`,
      exercises: [
        "Push-ups: 3 sets of 10 reps",
        "Squats: 3 sets of 15 reps",
        "Planks: 3 sets of 30 seconds",
        "Lunges: 3 sets of 10 per leg"
      ]
    }
  ],
  cardio: [
    {
      title: "Cardiovascular Exercise",
      content: `Cardio exercises strengthen your heart and improve endurance. Mix different 
      types of cardio for best results.`,
      activities: [
        "Brisk walking",
        "Cycling",
        "Swimming",
        "Jump rope"
      ]
    }
  ]
};

export default function Fitness() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1">
        <div className="mt-16">
          <PageHeader
            title="Fitness & Exercise"
            subtitle="Guide to physical activity and workout routines"
          />
          <main className="container mx-auto px-4 py-8">
            <Tabs defaultValue="beginners" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="beginners">Getting Started</TabsTrigger>
                <TabsTrigger value="strength">Strength Training</TabsTrigger>
                <TabsTrigger value="cardio">Cardio Exercises</TabsTrigger>
              </TabsList>

              {Object.entries(fitnessContent).map(([key, sections]) => (
                <TabsContent key={key} value={key}>
                  <Card>
                    <CardContent className="p-6 space-y-6">
                      {sections.map((section, index) => (
                        <div key={index}>
                          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                          <p className="text-muted-foreground mb-6">{section.content}</p>
                          <ul className="list-disc pl-6 space-y-2">
                            {section.tips && section.tips.map((tip, i) => (
                              <li key={i}>{tip}</li>
                            ))}
                            {section.exercises && section.exercises.map((exercise, i) => (
                              <li key={i}>{exercise}</li>
                            ))}
                            {section.activities && section.activities.map((activity, i) => (
                              <li key={i}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
} 