
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Volunteer from '@/components/Volunteer';
import Interests from '@/components/Interests';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

// Sample portfolio data (would typically be fetched from an API or CMS)
const portfolioData = {
  "name": "Your Name",
  "label": "Professional Portfolio",
  "image_path": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=988&auto=format&fit=crop",
  "contact": {
    "email": "FirstLast@Sample.com",
    "phone": "123-456-7890",
    "location": "City, State, Country"
  },
  "summary": "A short summary of who you are, your background, experience, and interests to give visitors a quick introduction to you.",
  "base_url": "127.0.0.1:5500",
  "social_links": [
    {
      "label": "Personal Website",
      "url": "https://sample.com",
      "svg_path": "img/globe.svg"
    },
    {
      "label": "LinkedIn",
      "url": "https://sample.com",
      "svg_path": "img/linkedin.svg"
    },
    {
      "label": "GitHub",
      "url": "https://sample.com",
      "svg_path": "img/github.svg"
    }
  ],
  "work_experience": [
    {
      "company": "Latest Job",
      "position": "Position One",
      "url": "https://sample.com",
      "start_date": "01/01/2020",
      "end_date": "Present",
      "summary": "Short summary about present job and what the position entails",
      "highlights": [
        "First Duty of Current Job",
        "Second Duty of Current Job",
        "Third Duty of Current Job"
      ]
    },
    {
      "company": "Previous Job",
      "position": "Position Two",
      "url": "https://sample.com",
      "start_date": "01/01/2010",
      "end_date": "01/01/2020",
      "summary": "Short summary about previous job and what that position entailed",
      "highlights": [
        "First Duty of Previous Job",
        "Second Duty of Previous Job",
        "Third Duty of Previous Job"
      ]
    }
  ],
  "projects": [
    {
      "title": "My First Project",
      "summary": "Short summary about my first project",
      "url": "https://sample.com",
      "highlights": [
        "First Highlight of Project One",
        "Second Highlight of Project One",
        "Third Highlight of Project One"
      ],
      "images": [
        {
          "img_path": "https://picsum.photos/600/338?random=1",
          "caption": "Image Caption 1"
        },
        {
          "img_path": "https://picsum.photos/600/338?random=2",
          "caption": "Image Caption 2"
        },
        {
          "img_path": "https://picsum.photos/600/338?random=3",
          "caption": "Image Caption 3"
        }
      ]
    },
    {
      "title": "My Second Project",
      "summary": "Short summary about my second project",
      "url": "https://sample.com",
      "highlights": [
        "First Highlight of Project Two",
        "Second Highlight of Project Two",
        "Third Highlight of Project Two"
      ],
      "images": [
        {
          "img_path": "https://picsum.photos/600/338?random=4",
          "caption": "Image Caption 4"
        },
        {
          "img_path": "https://picsum.photos/600/338?random=5",
          "caption": "Image Caption 5"
        },
        {
          "img_path": "https://picsum.photos/600/338?random=6",
          "caption": "Image Caption 6"
        }
      ]
    }
  ],
  "volunteer_experience": [
    {
      "organization": "Latest Organization",
      "position": "Position One",
      "url": "https://sample.com",
      "start_date": "01/01/2020",
      "end_date": "Present",
      "summary": "Short summary about present volunteer work",
      "highlights": [
        "First Duty of Current Organization",
        "Second Duty of Current Organization",
        "Third Duty of Current Organization"
      ]
    },
    {
      "organization": "Previous Organization",
      "position": "Position Two",
      "url": "https://sample.com",
      "start_date": "01/01/2010",
      "end_date": "01/01/2020",
      "summary": "Short summary about previous volunteer work",
      "highlights": [
        "First Duty of Previous Organization",
        "Second Duty of Previous Organization",
        "Third Duty of Previous Organization"
      ]
    }
  ],
  "education": [
    {
      "institution": "Institution One",
      "location": "Institution One Location",
      "url": "https://sample.com",
      "degrees": [
        "Master of Science in Computer Science",
        "Minor in Mathematics"
      ],
      "honors": ["Outstanding Student Award", "Dean's List"],
      "gpa_cumulative": "3.5",
      "gpa_major": "4.0",
      "graduation_date": "01/01/2005"
    },
    {
      "institution": "Institution Two",
      "location": "Institution Two Location",
      "url": "https://sample.com",
      "degrees": ["Bachelor of Science in Physics"],
      "honors": ["Scholarship Recipient"],
      "gpa_cumulative": "3.2",
      "gpa_major": "3.9",
      "graduation_date": "01/01/2000"
    }
  ],
  "skills": [
    {
      "name": "My First Skill",
      "proficiency": 100,
      "proficiency_label": "Expert"
    },
    {
      "name": "My Second Skill",
      "proficiency": 80,
      "proficiency_label": "Advanced"
    },
    {
      "name": "My Third Skill",
      "proficiency": 65,
      "proficiency_label": "Intermediate"
    },
    {
      "name": "My Fourth Skill",
      "proficiency": 50,
      "proficiency_label": "Learning"
    }
  ],
  "interests": [
    {
      "name": "My First Hobby",
      "summary": "Short summary about my first Hobby",
      "images": [
        {
          "img_path": "https://picsum.photos/600/338?random=7",
          "caption": "Image Caption 7"
        },
        {
          "img_path": "https://picsum.photos/600/338?random=8",
          "caption": "Image Caption 8"
        }
      ]
    },
    {
      "name": "My Second Hobby",
      "summary": "Short summary about my second hobby",
      "images": [
        {
          "img_path": "https://picsum.photos/600/338?random=9",
          "caption": "Image Caption 9"
        },
        {
          "img_path": "https://picsum.photos/600/338?random=10",
          "caption": "Image Caption 10"
        }
      ]
    }
  ],
  "languages": [
    {
      "language": "English",
      "fluency": "Native speaker"
    },
    {
      "language": "American Sign Language",
      "fluency": "Professional Working Proficiency"
    }
  ],
  "references": [
    {
      "name": "Person One",
      "relation": "Previous Boss",
      "reference": "Some nice things that Person One said about you, your work ethic, and how you provided value to their team."
    },
    {
      "name": "Person Two",
      "relation": "Previous Coworker",
      "reference": "More kind things that Person Two said about you, what it was like working with you, and things you've accomplished."
    }
  ]
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header portfolioData={portfolioData} />
      <Hero portfolioData={portfolioData} />
      <About portfolioData={portfolioData} />
      <Experience portfolioData={portfolioData} />
      <Projects portfolioData={portfolioData} />
      <Education portfolioData={portfolioData} />
      <Skills portfolioData={portfolioData} />
      <Volunteer portfolioData={portfolioData} />
      <Interests portfolioData={portfolioData} />
      <Footer portfolioData={portfolioData} />
      <ScrollToTop />
    </div>
  );
};

export default Index;
