import {
  puppies,
  puppies2,
  couple,
  Hank12,
  Margo12,
  Margo13,
  MargoHank2,
} from "../assets/images/";

export const applicationTypes = [
  {
    imgURL: Hank12,
    label: "Puppy Waitlist Application",
    text: "Are You Looking To Add An Adorable Furry Companion To Your Family? Look No Further! Our Waitlist Is Carefully Curated To Connect Loving Families With Beautiful, Healthy, And Well-Socialized Puppies. By Joining Our Future Puppy Waitlist, You Can Ensure That You'll Be Among The First To Know When A New Litter Of Puppies Arrives.",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSdADXBCsN0-wWt3L7nsvLITCURhRNc2J2l5Vh0et8f0PJYn4g/viewform?usp=sf_link",
  },
  {
    imgURL: MargoHank2,
    label: "Breeding Rights Application",
    text: "Thank You For Your Interest In Our Breeding Program! To Ensure The Health And Welfare Of Our Puppies And Maintain The Integrity Of Our Breeding Lines, We Require Potential Breeders To Complete Our Breeding Rights Application. Please Fill Out The Application Form Below:",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSdFXlGXjkJ0SHpfje1p8tZB4oFplNIYmVVp1BjOefK6WD4o0w/viewform?usp=sf_link",
  },
  {
    imgURL: Margo12,
    label: "Guardian home application",
    text: "Interested in becoming a part of our beloved Corgiland community? Discover the perks of joining our Corgiland family as a Guardian Family and share with us all about yourself, your loved ones, and much more!",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSeKOtmzX0KmM2qqAM52Il2OqjqVRbslzXoPMDFS3g7qfVUQ3Q/viewform?usp=sf_link",
  },
];

export const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Puppies",
    url: "/puppies",
    submenu: [
      {
        title: "Our puppies program",
        url: "/our-puppies-program",
      },
      {
        title: "Upcoming litters",
        url: "/upcomingLitters",
      },
      {
        title: "Current litters",
        url: "/currentLitters",
      },
    ],
  },
  {
    title: "Our Corgis",
    url: "our-corgis",
    submenu: [
      {
        title: "Margo",
        url: "/margo",
      },
      {
        title: "Hank",
        url: "/hank",
      },
    ],
  },
  {
    title: "Info",
    url: "/info",
    submenu: [
      {
        title: "About Us",
        url: "/about-us",
      },
      {
        title: "Cardigan Welsh Corgis",
        url: "/about-breed",
      },
      {
        title: "History of the breed",
        url: "history",
      },
      {
        title: "Our program",
        url: "/our-program",
      },
    ],
  },
  {
    title: "Waitlist",
    url: "/waitlist",
  },
  {
    title: "Health & Genetics",
    url: "/health-and-genetics",
    submenu: [
      {
        title: "Health and Genetics",
        url: "/health-and-genetics",
      },
      // {
      //   title: "DNA and testing",
      //   url: "/DNA",
      // },
    ],
  },
];

export const puppyProgram = [
  {
    title: "Responsible Breeding",
    text1:
      "We specialize in responsible breeding practices that prioritize the health, temperament, and lineage of our Cardigan Welsh Corgis.",
    text2:
      "Our breeding program adheres to ethical standards and ensures that our Corgis are raised in a loving and nurturing environment. ",
  },

  {
    title: "Exceptional Care",
    text1:
      "Our Corgis receive top-notch care, including regular veterinary check-ups, vaccinations, and proper nutrition.",
    text2:
      "Socialization and mental stimulation are essential aspects of our daily routines to raise well-adjusted and happy Corgis.",
  },

  {
    title: "Health Screening",
    text1:
      "We conduct thorough health screenings and genetic testing to minimize the risk of hereditary diseases within our breeding lines.",
    text2:
      "Your Corgi’s health is our priority, from the moment they are born and throughout their lives",
  },

  {
    title: "Education and Support",
    text1:
      "We’re here to provide you with valuable information and support, from choosing the right Corgi for your lifestyle to raising and training your new companion.",
    text2: "Our expertise is just a message or a call away. ",
  },

  {
    title: "Finding Forever Homes",
    text1:
      " • Our joy comes from seeing our Corgis find loving forever homes where they’ll be cherished members of the family.",
    text2:
      "We carefully match Corgis with new families to ensure a happy and harmonious future together.",
  },
  {
    title: "Community Engagement",
    text1:
      "We actively engage with the Cardigan Welsh Corgi community, participating in events, and sharing our knowledge and love for the breed.",
    text2: "We’re dedicated to promoting responsible Corgi ownership.",
  },
];
