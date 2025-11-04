import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft, Lock, Check } from "lucide-react";
import { chapters } from "@/data/chapters";

const NotesPreview = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const chapterId = parseInt(searchParams.get('chapter') || '1');
  const noteType = searchParams.get('type') || 'jee';
  const chapter = chapters.find((c) => c.id === chapterId) || chapters[0];

  const noteTypeLabel = noteType.toUpperCase();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-playfair font-bold text-foreground">
            Maths Hebeca
          </a>
          <ThemeToggle />
        </div>
      </header>

      {/* Notes Preview Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <Button
            variant="ghost"
            onClick={() => navigate(`/chapter-notes?chapter=${chapterId}`)}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Options
          </Button>

          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
            {chapter.name} - {noteTypeLabel} Notes
          </h1>
          <p className="text-muted-foreground text-lg mb-12">
            Preview the first 3 pages. Purchase to access full notes.
          </p>

          {/* PDF Preview Placeholder */}
          <div className="grid gap-6 mb-12">
            {[1, 2, 3].map((page) => (
              <div
                key={page}
                className="bg-card border border-border rounded-xl p-8 shadow-lg"
              >
                <div className="border-b border-border pb-4 mb-6">
                  <h3 className="text-2xl font-playfair font-bold text-primary">
                    Page {page}
                  </h3>
                </div>
                <div className="bg-muted/30 rounded-lg p-12 text-center min-h-[400px] flex items-center justify-center">
                  <iframe
                    src={`/pdfs/${noteType}/chapter${chapterId}/page${page}.pdf`}
                    className="w-full h-full min-h-[400px] border-0 rounded-lg"
                    title={`Page ${page} Preview`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Payment Section */}
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Lock className="w-10 h-10 text-primary" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-foreground">
                Unlock Full Notes
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Purchase full access to view all pages of these notes
              </p>

              <div className="mb-8">
                <div className="text-5xl font-playfair font-bold text-primary mb-2">
                  ₹99
                </div>
                <p className="text-muted-foreground">
                  One-time payment for full chapter notes
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left max-w-md mx-auto">
                {[
                  'Complete handwritten notes',
                  'Solved examples & practice problems',
                  'Downloadable PDF format',
                  'Lifetime access'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="w-full sm:w-auto px-12 py-6 text-lg mb-6"
                onClick={() => {
                  alert('Payment integration will be added here. For now, this is a demo.');
                }}
              >
                Purchase Now
              </Button>

              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground mb-4">We accept:</p>
                <div className="flex justify-center gap-6 text-2xl opacity-70">
                  <span>◇</span>
                  <span>◈</span>
                  <span>◉</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 px-6 border-t border-border mt-20">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Maths Hebeca. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotesPreview;
