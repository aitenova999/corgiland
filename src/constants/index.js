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
        title: "puppy information",
        url: "puppyInformation",
      },
      {
        title: "upcoming litters",
        url: "/upcomingLitters",
      },
      {
        title: "current litters",
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
        title: "about us",
        url: "/about-us",
      },
      {
        title: "Cordigan Welsh Corgis",
        url: "/about-breed",
      },
      {
        title: "History of the breed",
        url: "history",
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
        title: "health and genetics",
        url: "/health-and-genetics",
      },
      {
        title: "DNA and testing",
        url: "/DNA",
      },
    ],
  },
];
