import { Project } from '@/types/project';

export const projects: Project[] = [
   {
      title: "Red Kite Candy",
     role: "Independent Project, Brand Story",
      tags: ["Product Marketing", "Brand Story", "Content Strategy", "Digital Marketing"],
      thumbnail: "/RedKitecandy.webp",
     slug: "red-kite-candy",
     summary: "Transformed a local confectionery into a digitally engaged brand with a measurable content + distribution system.",
     challenge: "Inconsistent brand narrative and lack of digital measurement.",
     strategy: ["Founder-led positioning", "IG content series", "QR tracking"],
     results: ["[150 QR scans]", "[200 new followers]", "[15% engagement]"]
   },
   {
     title: "Replom.com",
     role: "Service Provider",
     tags: ["Consulting", "Product Marketing", "Content Strategy"],
      thumbnail: "/replom.png",
     slug: "replom",
     summary: "Offer paid expert answers on product marketing, content strategy, and digital growth through Replom.",
     challenge: "Need for accessible expert advice in niche areas.",
     strategy: ["Platform partnership", "Specialized Q&A", "Value-driven responses"],
     results: ["Ongoing consultations", "Client satisfaction", "Knowledge sharing"]
   }
];