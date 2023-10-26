import { puppies, puppies2, couple } from "../assets/images/";

export const applicationTypes = [
  {
    imgURL: puppies,
    label: "Puppy Waitlist Application",
    text: "Are You Looking To Add An Adorable Furry Companion To Your Family? Look No Further! Our Waitlist Is Carefully Curated To Connect Loving Families With Beautiful, Healthy, And Well-Socialized Puppies. By Joining Our Future Puppy Waitlist, You Can Ensure That You'll Be Among The First To Know When A New Litter Of Puppies Arrives.",
  },
  {
    imgURL: puppies2,
    label: "Breeding Rights Application",
    text: "Thank You For Your Interest In Our Breeding Program! To Ensure The Health And Welfare Of Our Puppies And Maintain The Integrity Of Our Breeding Lines, We Require Potential Breeders To Complete Our Breeding Rights Application. Please Fill Out The Application Form Below:",
  },
  {
    imgURL: couple,
    label: "Breeding Rights Application",
    text: "Thank You For Your Interest In Our Breeding Program! To Ensure The Health And Welfare Of Our Puppies And Maintain The Integrity Of Our Breeding Lines, We Require Potential Breeders To Complete Our Breeding Rights Application. Please Fill Out The Application Form Below:",
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
