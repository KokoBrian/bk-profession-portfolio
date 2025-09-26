import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Award, Users, BookOpen, Code, Calendar, Target, Star, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-accent" />,
      title: "Teacher of the Year 2023",
      description: "Recognized for innovative teaching methods and outstanding student outcomes"
    },
    {
      icon: <Users className="w-6 h-6 text-secondary" />,
      title: "Math Team State Champions",
      description: "Led team to 3 consecutive state championship victories"
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "CS Club Founder",
      description: "Established computer science program with 150+ active members"
    }
  ];

  const projects = [
    {
      title: "Interactive Math Visualizations",
      description: "Created web-based tools for visualizing complex mathematical concepts, improving student comprehension by 40%",
      fullDescription: "Developed a comprehensive suite of interactive web applications that transform abstract mathematical concepts into visual, manipulable representations. Students can explore functions, geometric transformations, statistical distributions, and calculus concepts through dynamic visualizations. The platform includes real-time feedback systems and progress tracking.",
      technologies: ["JavaScript", "D3.js", "React"],
      link: "#",
      type: "Educational Tool",
      timeline: "6 months",
      impact: "Used by 200+ students across 5 schools",
      features: ["Interactive graphing", "3D visualizations", "Progress tracking", "Multi-language support"]
    },
    {
      title: "Code Learning Platform",
      description: "Developed a gamified coding platform for beginners, used by 500+ students across the district",
      fullDescription: "Built a comprehensive gamified learning management system that teaches programming fundamentals through interactive challenges, code puzzles, and project-based learning. Features include automated code evaluation, peer collaboration tools, and adaptive learning paths tailored to individual student progress.",
      technologies: ["Python", "Flask", "HTML/CSS"],
      link: "#",
      type: "Web Application",
      timeline: "8 months",
      impact: "95% completion rate, 40% improvement in coding assessments",
      features: ["Gamified challenges", "Auto-grading system", "Collaboration tools", "Adaptive learning paths"]
    },
    {
      title: "STEM Curriculum Design",
      description: "Designed integrated STEM curriculum connecting math, computer science, and real-world applications",
      fullDescription: "Created a comprehensive interdisciplinary curriculum that bridges mathematics, computer science, and real-world problem solving. The curriculum includes project-based learning modules, assessment rubrics, and teacher training materials. Designed to meet state standards while fostering critical thinking and creativity.",
      technologies: ["Curriculum Development", "Assessment Design"],
      link: "#",
      type: "Curriculum",
      timeline: "12 months",
      impact: "Adopted by 3 school districts, 1000+ students impacted",
      features: ["Project-based learning", "Standards alignment", "Teacher resources", "Assessment tools"]
    }
  ];

  const stats = [
    { number: "8+", label: "Years Teaching" },
    { number: "500+", label: "Students Taught" },
    { number: "3", label: "State Championships" },
    { number: "95%", label: "Student Success Rate" }
  ];


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Portfolio & Achievements
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Showcasing educational innovations, student successes, and professional accomplishments
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="text-center card-hover animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title} 
                className="card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-background rounded-lg shadow-sm w-fit">
                    {achievement.icon}
                  </div>
                  <CardTitle className="text-lg font-bold">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-center text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Educational Projects & Innovations
          </h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="p-2 h-8 w-8 hover:bg-accent/50 transition-all duration-200"
                          onClick={() => setSelectedProject(project)}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl animate-scale-in">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                            <Code className="w-6 h-6 text-primary" />
                            {project.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{project.timeline}</span>
                            </div>
                            <Badge variant="outline">{project.type}</Badge>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <Target className="w-4 h-4 text-primary" />
                              Project Overview
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {project.fullDescription}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <Star className="w-4 h-4 text-primary" />
                              Impact & Results
                            </h4>
                            <p className="text-muted-foreground">{project.impact}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Key Features</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {project.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge 
                                  key={tech} 
                                  variant="outline" 
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <CardTitle className="text-lg font-bold leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="animate-bounce-in" asChild>
              <a 
                href="/curriculum.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                View Full Curriculum
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link 
                to="/curriculum" 
                className="inline-flex items-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                View Inline
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="animate-bounce-in" asChild>
              <a 
                href="/resume.pdf" 
                download="Sarah_Chen_Resume.pdf"
                className="inline-flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download My Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;