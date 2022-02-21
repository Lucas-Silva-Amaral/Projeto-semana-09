import Man from "../../images/men.png"
import Woman from "../../images/Female.png"
import book from "../../images/🗒️.svg"
import computer from "../../images/💻.svg"
import pencil from "../../images/🖍.svg"
import rocket from "../../images/🚀.svg"

const dataColumn = [
  {
    title: "To do",
    icon: book,
    bgColumn: "#59B4D1",
    data: [
      {
        name: "Christmas Banners",
        image: Man,
        tag: "Label",
        bgTag: "#59B4D1",
      },
      {
        name: "Redo Portfolio",
        image: Man,
        tag: "Label",
        bgTag: "#59B4D1",
      },
    ],
  },
  {
    title: "In progress",
    icon: computer,
    bgColumn: "#D0935A",
    data: [
      {
        name: "Coffee Break",
        image: Woman,
        tag: "Always",
        bgTag: "#D0935A",
      },
      {
        name: "Updating Portfolio",
        image: Woman,
        tag: "Webflow",
        bgTag: "#D0935A",
      },
    ],
  },
  {
    title: "Review",
    icon: pencil,
    bgColumn: "#945AD1",
    data: [
      {
        name: "Release to Figma Community",
        image: Man,
        tag: "Release",
        bgTag: "#945AD1",
      },
      {
        name: "User Feedback",
        image: Man,
        tag: "Feedback",
        bgTag: "#945AD1",
      },
      {
        name: `Background images from  h͟u͟m͟a͟a͟a͟n͟s͟.c͟o͟m`,
        image: Man,
        tag: "Sourcing",
        bgTag: "#945AD1",
      },
    ],
  },
  {
    title: "Done",
    icon: rocket,
    bgColumn: "#59D090",
    data: [
      {
        name: "Style Guide",
        image: Woman,
        tag: "UI",
        bgTag: "#59D090",
      },
      {
        name: "Component Library",
        image: Woman,
        tag: "UI",
        bgTag: "#59D090",
      },
      {
        name: "Sticker Components",
        image: Woman,
        tag: "UI",
        bgTag: "#59D090",
      },
    ],
  },
]

export default dataColumn
