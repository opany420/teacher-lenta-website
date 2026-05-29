
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const tutorData = {
  name: "Teacher Lenta",
  bio: "I am a dedicated and experienced tutor with a passion for helping students succeed. I specialize in providing personalized one-on-one and group tutoring sessions, both online and in-person. My goal is to create a supportive and engaging learning environment for every student.",
  contact: {
    phone: "+254795770464",
    email: "teacherlenta@gmail.com",
    location: "Nairobi, Kenya"
  }
};

export const services = [
  {
    title: "Online Tutoring",
    price: "7",
    features: [
      "Interactive virtual classroom",
      "Flexible scheduling",
      "Personalized lesson plans",
      "Accessible from anywhere"
    ]
  },
  {
    title: "In-Person Tutoring",
    price: "10",
    features: [
      "Face-to-face interaction",
      "Hands-on learning activities",
      "Available in Nairobi",
      "Safe and comfortable environment"
    ]
  }
];

export const features = [
  {
    title: "Expert Knowledge",
    description: "With years of experience and a deep understanding of the curriculum, I provide expert guidance to help students grasp complex concepts."
  },
  {
    title: "Flexible Scheduling",
    description: "I offer flexible scheduling options to accommodate the busy lives of students and parents. Learning should be convenient."
  },
  {
    title: "Child-Friendly Approach",
    description: "My teaching style is patient, encouraging, and tailored to be child-friendly, ensuring that learning is a positive experience."
  },
  {
    title: "Proven Results",
    description: "My students consistently show significant improvement in their grades and confidence. I am committed to their academic success."
  }
];

export const testimonials = [
  {
    quote: "Teacher Lenta is an amazing tutor! My daughter's grades have improved significantly, and she enjoys learning now. Highly recommended!",
    author: "Sarah Johnson",
    relation: "Parent"
  },
  {
    quote: "The online sessions are fantastic. The platform is easy to use, and my son is always engaged. Thank you for your dedication.",
    author: "Michael Chen",
    relation: "Parent"
  },
  {
    quote: "A truly patient and knowledgeable tutor. My child feels comfortable asking questions and has gained so much confidence.",
    author: "Emma Thompson",
    relation: "Parent"
  }
];

export const contactInfo = [
    {
        icon: <FaWhatsapp />,
        label: "WhatsApp",
        value: tutorData.contact.phone,
        link: `https://wa.me/${tutorData.contact.phone}?text=Hi%20Teacher%20Lenta!%20I%20would%20like%20to%20book%20a%20tutoring%20session.`
    },
    {
        icon: <FaEnvelope />,
        label: "Email",
        value: tutorData.contact.email,
        link: `mailto:${tutorData.contact.email}`
    },
    {
        icon: <FaMapMarkerAlt />,
        label: "Location",
        value: tutorData.contact.location,
        link: "#"
    }
]
