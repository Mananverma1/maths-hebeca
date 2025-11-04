import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FileText, BookOpen, ArrowLeft } from "lucide-react";
import { chapters } from "@/data/chapters";

const ChapterNotes = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const chapterId = parseInt(searchParams.get('chapter') || '1');
  const chapter = chapters.find((c) => c.id === chapterId) || chapters[0];

  const handleNoteType = (type: 'jee' | 'cbse') => {
    navigate(`/notes-preview?chapter=${chapterId}&type=${type}`);
  };

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

      {/* Chapter Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Chapters
          </Button>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-foreground">
            {chapter.name}
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            {chapter.description}
          </p>
        </div>
      </section>

      {/* Notes Options */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-foreground">
            Choose Your Notes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* JEE Notes */}
            <div
              onClick={() => handleNoteType('jee')}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 hover:border-primary/50"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-4 text-foreground">JEE Mains Notes</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Comprehensive handwritten notes specifically designed for JEE Mains preparation with advanced problem-solving techniques.
              </p>
              <Button className="w-full">
                View JEE Notes
              </Button>
            </div>

            {/* CBSE Notes */}
            <div
              onClick={() => handleNoteType('cbse')}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2 hover:border-primary/50"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-4 text-foreground">CBSE Notes</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Class 12 CBSE syllabus notes aligned with board exam requirements. Perfect for quick revision and exam preparation.
              </p>
              <Button className="w-full">
                View CBSE Notes
              </Button>
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

export default ChapterNotes;
