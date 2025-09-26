import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Curriculum = () => {
  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Teaching Curriculum
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Comprehensive curriculum guide covering computer science and mathematics education approaches
            </p>
          </div>

          <div className="text-center mb-6">
            <Button variant="hero" size="lg" asChild>
              <a 
                href="/curriculum.pdf" 
                download="Sarah_Chen_Curriculum.pdf"
                className="inline-flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <object
              data="/curriculum.pdf"
              type="application/pdf"
              width="100%"
              height="800px"
              className="w-full"
            >
              <div className="p-8 text-center bg-muted">
                <p className="text-lg text-muted-foreground mb-4">
                  Your browser does not support viewing PDFs inline.
                </p>
                <Button variant="outline" asChild>
                  <a 
                    href="/curriculum.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </object>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;