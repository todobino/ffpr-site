import { Leaf, DollarSign, Zap, Users, Briefcase, Calendar } from 'lucide-react';

export const features = [
  {
    icon: Leaf,
    title: 'Sustainable Agriculture',
    description: 'We use regenerative farming techniques to improve soil health and biodiversity.',
  },
  {
    icon: Zap,
    title: 'Carbon Negative',
    description: 'Our agroforestry approach sequesters more carbon than we emit, helping to combat climate change.',
  },
  {
    icon: DollarSign,
    title: 'Profitable Model',
    description: 'A viable business model that proves sustainability can be financially rewarding.',
  },
];

export const teamMembers = [
  {
    name: 'Dr. Elena Vance',
    role: 'Founder & CEO',
    image: 'team-member-1',
    bio: 'With a PhD in Environmental Science, Elena founded Freedom Farms to create a scalable model for profitable, carbon-negative agriculture.'
  },
  {
    name: 'Marco Diaz',
    role: 'Lead Agriculturist',
    image: 'team-member-2',
    bio: 'Marco brings over 20 years of experience in tropical agroecology, managing our diverse crop and forestry systems.'
  },
  {
    name: 'Sofia Reyes',
    role: 'Community & Investment Manager',
    image: 'team-member-3',
    bio: 'Sofia connects the farm with the local community and our investment partners, ensuring our mission thrives.'
  }
];

export const events = [
  {
    title: 'Farm-to-Table Dinner',
    date: 'Saturday, August 17, 2024',
    time: '6:00 PM - 9:00 PM',
    description: 'An exclusive dining experience featuring a multi-course meal prepared with the freshest ingredients from our farm.',
    image: 'event-1',
    icon: Calendar
  },
  {
    title: 'Volunteer Day & Composting Workshop',
    date: 'Saturday, September 7, 2024',
    time: '9:00 AM - 1:00 PM',
    description: 'Join us for a day of hands-on learning and contribution. Learn the basics of large-scale composting and help us tend to our crops.',
    image: 'event-2',
    icon: Users
  }
];

export const careers = [
    {
        title: 'Agroforestry Technician',
        location: 'High-Elevation, Puerto Rico',
        type: 'Full-Time',
        description: 'We are seeking a skilled Agroforestry Technician to assist in the management of our food forest systems. The ideal candidate will have experience with tropical plants, soil management, and sustainable farming practices.',
        responsibilities: [
            'Planting, pruning, and harvesting crops.',
            'Monitoring for pests and diseases using organic methods.',
            'Maintaining irrigation and composting systems.',
            'Collecting data for our carbon sequestration monitoring.'
        ],
        qualifications: [
            '2+ years of experience in agriculture or forestry.',
            'Knowledge of regenerative and organic farming principles.',
            'Ability to work outdoors in various weather conditions.',
            'Passion for sustainability and environmental stewardship.'
        ]
    },
    {
        title: 'Hospitality & Events Coordinator',
        location: 'High-Elevation, Puerto Rico',
        type: 'Part-Time',
        description: 'Freedom Farms is looking for an organized and enthusiastic coordinator to manage our on-farm events, from farm-to-table dinners to educational workshops.',
        responsibilities: [
            'Planning and executing on-farm events.',
            'Coordinating with vendors and staff.',
            'Managing guest communications and bookings.',
            'Ensuring a high-quality experience for all visitors.'
        ],
        qualifications: [
            'Experience in event planning or hospitality.',
            'Excellent communication and organizational skills.',
            'Creative and able to work independently.',
            'Bilingual (Spanish/English) is a strong plus.'
        ]
    }
]
