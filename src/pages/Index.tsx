import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BookOpen, Video, FileText, TrendingUp } from "lucide-react";
import { chapters } from "@/data/chapters";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-playfair font-bold text-foreground">
            Maths Hebeca
          </h1>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#chapters" className="text-muted-foreground hover:text-foreground transition-colors">Chapters</a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="https://www.youtube.com/@mathshebeca" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">YouTube</a>
            <ThemeToggle />
          </nav>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 gradient-teal dark:bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-foreground">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
                Master CBSE Class 12 Maths
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-foreground/90 leading-relaxed">
                Excel in your exams and JEE Mains with our comprehensive short videos, detailed notes, and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white dark:bg-white text-primary hover:bg-white/90 dark:hover:bg-white/90 shadow-xl text-lg px-8 py-6"
                  onClick={() => document.getElementById('chapters')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Chapters
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-foreground text-foreground hover:bg-foreground/10 text-lg px-8 py-6"
                  onClick={() => window.open('https://www.youtube.com/@mathshebeca', '_blank')}
                >
                  Watch on YouTube
                </Button>
              </div>
            </div>

            {/* Right Stats Cards */}
            <div className="bg-accent/30 dark:bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-foreground/20 dark:border-white/20 shadow-2xl">
              <h3 className="text-foreground text-2xl font-playfair font-bold mb-6">Complete Learning Package:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/95 dark:bg-card rounded-xl p-6 shadow-lg">
                  <p className="text-muted-foreground text-sm mb-2 font-medium">Chapters Covered</p>
                  <p className="text-4xl font-playfair font-bold text-primary">16</p>
                </div>
                <div className="bg-white/95 dark:bg-card rounded-xl p-6 shadow-lg">
                  <p className="text-muted-foreground text-sm mb-2 font-medium">Video Tutorials</p>
                  <p className="text-4xl font-playfair font-bold text-primary">80+</p>
                </div>
                <div className="bg-white/95 dark:bg-card rounded-xl p-6 shadow-lg">
                  <p className="text-muted-foreground text-sm mb-2 font-medium">Study Notes</p>
                  <p className="text-4xl font-playfair font-bold text-primary">30+</p>
                </div>
                <div className="bg-white/95 dark:bg-card rounded-xl p-6 shadow-lg">
                  <p className="text-muted-foreground text-sm mb-2 font-medium">Practice Sets</p>
                  <p className="text-4xl font-playfair font-bold text-primary">100+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4 text-foreground">
            Why Choose Maths Hebeca?
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Everything you need to excel in Class 12 Mathematics and beyond
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Video className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-4 text-foreground">Short Videos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Concise, engaging video lessons covering every concept. Learn at your own pace with clear explanations.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-4 text-foreground">CBSE Notes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive notes aligned with CBSE curriculum. Perfect for exam preparation and quick revision.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-4 text-foreground">JEE Mains Prep</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced notes and problem-solving techniques specifically designed for JEE Mains aspirants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section id="chapters" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4 text-foreground">
            Class 12 Maths Chapters
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Select a chapter to access comprehensive study materials and notes
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                onClick={() => navigate(`/chapter-notes?chapter=${chapter.id}`)}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 hover:border-primary/50"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">Chapter {chapter.id}</div>
                    <h3 className="text-xl font-playfair font-bold mb-2 group-hover:text-primary transition-colors">
                      {chapter.name}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {chapter.description}
                </p>
                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  View Notes
                  <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 gradient-teal dark:bg-background">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
                Ready to Excel in Mathematics?
              </h2>
            <p className="text-xl text-foreground/90 mb-8 leading-relaxed">
              Join thousands of students who have improved their scores with our proven learning methods.
            </p>
            <Button 
              size="lg" 
              className="bg-white dark:bg-white text-primary hover:bg-white/90 dark:hover:bg-white/90 shadow-xl text-lg px-8 py-6"
              onClick={() => window.open('https://www.youtube.com/@mathshebeca', '_blank')}
            >
              Start Learning Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Maths Hebeca. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
