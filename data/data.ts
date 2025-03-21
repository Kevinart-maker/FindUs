import { FaWrench } from "react-icons/fa";
import { GiWoodBeam } from "react-icons/gi";
import { AiOutlineCar } from "react-icons/ai";
import { MdCleaningServices } from "react-icons/md";

interface ServiceProvider {
    id: number;
    name: string;
    service: string;
    price: number;
    location: string;
    rating: number;
    experience: number; // years
    image: string;
}

export const serviceProviders: ServiceProvider[] = [
    {
        id: 1,
        name: "John Smith",
        service: "Plumbing",
        price: 75, // per hour
        location: "Manhattan, NY",
        rating: 4.8,
        experience: 12,
        image: '/profile.webp'
    },
    {
        id: 2,
        name: "Maria Garcia",
        service: "Cleaning",
        price: 45,
        location: "Brooklyn, NY", 
        rating: 4.9,
        experience: 8,
        image: '/profile.webp'
    },
    {
        id: 3,
        name: "David Wilson",
        service: "Carpentry",
        price: 85,
        location: "Queens, NY",
        rating: 4.7,
        experience: 15,
        image: '/profile.webp'
    },
    {
        id: 4,
        name: "James Chen",
        service: "Vehicle Repair",
        price: 95,
        location: "Staten Island, NY",
        rating: 4.9,
        experience: 20,
        image: '/profile.webp'
    },
    {
        id: 5,
        name: "Sarah Johnson",
        service: "Cleaning",
        price: 50,
        location: "Bronx, NY",
        rating: 4.6,
        experience: 5,
        image: '/profile.webp'
    },
    {
        id: 6,
        name: "Michael Brown",
        service: "Plumbing",
        price: 80,
        location: "Jersey City, NJ",
        rating: 4.8,
        experience: 10,
        image: '/profile.webp'
    },
    {
        id: 7,
        name: "Ana Rodriguez",
        service: "Cleaning",
        price: 40,
        location: "Newark, NJ",
        rating: 4.7,
        experience: 6,
        image: '/profile.webp'
    },
    {
        id: 8,
        name: "Robert Taylor",
        service: "Carpentry",
        price: 90,
        location: "Yonkers, NY",
        rating: 4.9,
        experience: 18,
        image: '/profile.webp'
    },
    {
        id: 9,
        name: "William Lee",
        service: "Vehicle Repair",
        price: 100,
        location: "New Rochelle, NY",
        rating: 4.8,
        experience: 15,
        image: '/profile.webp'
    },
    {
        id: 10,
        name: "Emma Davis",
        service: "Cleaning",
        price: 55,
        location: "White Plains, NY",
        rating: 4.6,
        experience: 7,
        image: '/profile.webp'
    },
    {
        id: 11,
        name: "Thomas Anderson",
        service: "Plumbing",
        price: 70,
        location: "Stamford, CT",
        rating: 4.7,
        experience: 9,
        image: '/profile.webp'
    },
    {
        id: 12,
        name: "Lisa Martinez",
        service: "Cleaning",
        price: 48,
        location: "Greenwich, CT",
        rating: 4.8,
        experience: 4,
        image: '/profile.webp'
    },
    {
        id: 13,
        name: "Kevin Thompson",
        service: "Carpentry",
        price: 95,
        location: "Hoboken, NJ",
        rating: 4.9,
        experience: 22,
        image: '/profile.webp'
    },
    {
        id: 14,
        name: "Carlos Ruiz",
        service: "Vehicle Repair",
        price: 90,
        location: "Elizabeth, NJ",
        rating: 4.7,
        experience: 12,
        image: '/profile.webp'
    },
    {
        id: 15,
        name: "Patricia White",
        service: "Cleaning",
        price: 52,
        location: "Paterson, NJ",
        rating: 4.6,
        experience: 6,
        image: '/profile.webp'
    },
    {
        id: 16,
        name: "George Miller",
        service: "Plumbing",
        price: 85,
        location: "Mount Vernon, NY",
        rating: 4.8,
        experience: 14,
        image: '/profile.webp'
    },
    {
        id: 17,
        name: "Sandra Clark",
        service: "Cleaning",
        price: 47,
        location: "Union City, NJ",
        rating: 4.7,
        experience: 5,
        image: '/profile.webp'
    },
    {
        id: 18,
        name: "Joseph Wright",
        service: "Carpentry",
        price: 88,
        location: "Bridgeport, CT",
        rating: 4.8,
        experience: 16,
        image: '/profile.webp'
    },
    {
        id: 19,
        name: "Frank Turner",
        service: "Vehicle Repair",
        price: 98,
        location: "New Haven, CT",
        rating: 4.9,
        experience: 19,
        image: '/profile.webp'
    },
    {
        id: 20,
        name: "Helen Young",
        service: "Cleaning",
        price: 51,
        location: "Norwalk, CT",
        rating: 4.6,
        experience: 8,
        image: '/profile.webp'
    },
    {
        id: 21,
        name: "Daniel Lewis",
        service: "Plumbing",
        price: 78,
        location: "Danbury, CT",
        rating: 4.7,
        experience: 11,
        image: '/profile.webp'
    },
    {
        id: 22,
        name: "Nancy Walker",
        service: "Cleaning",
        price: 49,
        location: "Waterbury, CT",
        rating: 4.8,
        experience: 7,
        image: '/profile.webp'
    },
    {
        id: 23,
        name: "Peter Hall",
        service: "Carpentry",
        price: 92,
        location: "Clifton, NJ",
        rating: 4.9,
        experience: 20,
        image: '/profile.webp'
    },
    {
        id: 24,
        name: "Mark Evans",
        service: "Vehicle Repair",
        price: 94,
        location: "Passaic, NJ",
        rating: 4.7,
        experience: 13,
        image: '/profile.webp'
    },
    {
        id: 25,
        name: "Linda Scott",
        service: "Cleaning",
        price: 53,
        location: "Bayonne, NJ",
        rating: 4.6,
        experience: 6,
        image: '/profile.webp'
    },
    {
        id: 26,
        name: "Richard King",
        service: "Plumbing",
        price: 82,
        location: "East Orange, NJ",
        rating: 4.8,
        experience: 15,
        image: '/profile.webp'
    },
    {
        id: 27,
        name: "Betty Adams",
        service: "Cleaning",
        price: 46,
        location: "West New York, NJ",
        rating: 4.7,
        experience: 4,
        image: '/profile.webp'
    },
    {
        id: 28,
        name: "Edward Baker",
        service: "Carpentry",
        price: 87,
        location: "North Bergen, NJ",
        rating: 4.8,
        experience: 17,
        image: '/profile.webp'
    },
    {
        id: 29,
        name: "Donald Nelson",
        service: "Vehicle Repair",
        price: 96,
        location: "Kearny, NJ",
        rating: 4.9,
        experience: 21,
        image: '/profile.webp'
    },
    {
        id: 30,
        name: "Margaret Hill",
        service: "Cleaning",
        price: 54,
        location: "Fort Lee, NJ",
        rating: 4.6,
        experience: 9,
        image: '/profile.webp'
    }
];

interface Service {
    name: string;
    icon: React.ElementType;
}

export const services: Service[] = [
    {
        name: "Plumbing",
        icon: FaWrench
    },
    {
        name: "Carpentry", 
        icon: GiWoodBeam
    },
    {
        name: "Vehicle Repair",
        icon: AiOutlineCar
    },
    {
        name: "Cleaning",
        icon: MdCleaningServices
    }
];