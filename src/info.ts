import {
  MdMailOutline,
  MdOutlineVolunteerActivism,
  MdWorkOutline,
} from "react-icons/md"
import { FaTerminal } from "react-icons/fa"
import {
  SiAmazonaws,
  SiAsciidoctor,
  SiCss3,
  SiDocker,
  SiExpo,
  SiFigma,
  SiFirebase,
  SiGatsby,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJava,
  SiKubuntu,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si"
import { langInfo } from "../lib/types"
import { BsLinkedin, BsGithub, BsGlobe } from "react-icons/bs"
const info: { en: langInfo; no: langInfo } = {
  en: {
    lang: "en",
    profile: {
      name: "Johan August Østbye",
      role: "Developer",
    },
    info: {
      about: {
        title: "Profile",
        text: "I am a 23 year old student from Nesodden. I am now in the 4th year of the NTNU master's in Informatics with a focus on databases and search. I am a very social person and like to collaborate on projects.",
      },
      contact: {
        title: "Details",
        adress: ["Nyborgbakken 8", "1458, Fjellstrand"],
        phone: "+47 913 01 594",
        links: [
          {
            Icon: MdMailOutline,
            link: "mailto:johan.august@outlook.com",
            text: "Johan.August@outlook.com",
          },
          {
            Icon: BsLinkedin,
            link: "https://www.linkedin.com/in/johan-august-%C3%B8stbye-6b0669192/",
            text: "Johan August Østbye",
          },
          {
            Icon: BsGithub,
            link: "https://github.com/JohanAOstbye",
            text: "JohanAOstbye",
          },
          {
            Icon: BsGlobe,
            link: "https://johanaostbye.github.io",
            text: "johanaostbye.github.io",
          },
        ],
      },
      skills: [
        {
          title: "Frontend",
          techs: [
            SiCss3,
            SiExpo,
            SiGatsby,
            SiHtml5,
            SiJava,
            SiNextdotjs,
            SiReact,
            SiTailwindcss,
            SiTypescript,
          ],
        },
        {
          title: "Backend / UI less",
          techs: [SiGraphql, SiJava, SiNodedotjs, SiPython],
        },
        {
          title: "Database",
          techs: [SiFirebase, SiMongodb, SiMysql, SiPostgresql],
        },
        {
          title: "Development eviroment",
          techs: [SiGit, SiKubuntu, SiLinux, FaTerminal, SiVisualstudiocode],
        },
        {
          title: "Other",
          techs: [SiAmazonaws, SiAsciidoctor, SiDocker, SiFigma, SiTerraform],
        },
      ],
    },
    content: {
      education: [
        {
          title: "Master of Science in Informatics",
          location: "Norwegian University of Science and Technology",
          positions: [
            {
              timerange: "August 2021 - Current",
              description:
                "Databases and Search - Master's degree programme, 2 years, Trondheim",
            },
          ],
        },
        {
          title: "Bachelor in Information technology",
          location: "Norwegian University of Science and Technology",
          positions: [
            {
              timerange: "August 2017 - June 2021",
              description: "Bachelor's degree programme, 2 years, Trondheim",
            },
          ],
        },
      ],
      experience: [
        {
          title: "Work Experience",
          Icon: MdWorkOutline,
          locations: [
            {
              title: "Superinstruktørene AS",
              location: "Nesodden",
              positions: [
                {
                  timerange: "June 2021 - August 2021",
                  description: "Head instructor",
                  text: "Assembled the academic part of a course for primary school students together with academically responsible manager from Superinstruktørene",
                },
              ],
            },
            {
              title: "Spisskammerset AS",
              location: "Nesodden, Fagerstrand",
              positions: [
                {
                  timerange: "2016 - 2020",
                  description: "Delivery driver, waiter, helping chef",
                  text: "Derlivered catering food and equipment i Oslo and Viken. If needed i stepped in as waiter or helping chef. On a daily basis i was the contactpoint for the customers.",
                },
              ],
            },
          ],
        },
        {
          title: "Voluntary Work Experience",
          Icon: MdOutlineVolunteerActivism,
          locations: [
            {
              title: "Student organization, Online",
              location: "NTNU",
              positions: [
                {
                  timerange: "March 2019 - March 2020",
                  description: "Deputy head - Academic courses committee",
                  text: "Accompany and assist the leader in sustaining the committees purpose: Activly work to stimulate the students' academic interests and offer academic-related courses.",
                },
                {
                  timerange: "March 2020 - November 2021",
                  description:
                    "Representative from Academic courses committee - Banking and finance committee",
                  text: "Assist the committee in keeping track of the available funds and plan future spending to be able to adapt according to the students' needs",
                },
                {
                  timerange: "November 2021 - Current",
                  description:
                    "Project leader - Digitization of Banking and finance committee",
                  text: "Project leader and owner of the project that is supposed to digitalize all the necessary parts of the Banking and finance committee",
                },
              ],
            },
          ],
        },
      ],
      projects: [
        {
          image: {
            src: "onlinelogo",
            alt: "Online logo",
          },
          website: {
            link: "https://faktura.online.ntnu.no/",
            text: "webpage",
          },
          title: "Invoice info",
          githubLink: "https://github.com/JohanAOstbye/invoiceinfo",
          text: "A website for collecting invoice information from companies that the Student organization, Online collaborates with",
        },
        {
          image: {
            src: "taco",
            alt: "Taco picture",
          },
          website: {
            link: "https://tacomanager.vercel.app/",
            text: "webpage",
          },
          title: "Tacomanager",
          githubLink: "https://github.com/JohanAOstbye/tacomanager",
          text: "A website to keep track of who will be attending tacofridays in the house",
        },
        {
          image: {
            src: "me",
            alt: "Me",
          },
          website: {
            link: "https://johanaostbye.github.io/me/",
            text: "webpage",
          },
          title: "My website",
          githubLink: "https://github.com/JohanAOstbye/tacomanager",
          text: "A website about me as a person and what I do",
        },
        {
          image: {
            src: "more",
            alt: "More picture",
          },
          title: "More projects",
          githubLink: "https://github.com/JohanAOstbye",
          text: "The rest of my projects such as this CV are on my github profile",
        },
      ],
    },
  },
  no: {
    lang: "no",
    profile: {
      name: "Jonas Aasland",
      role: "Student - teknologiledelse",
    },
    info: {
      about: {
        title: "Profil",
        text: "Jeg er en 23 år gammel student fra Sandefjord. Jeg går nå 4. året på NTNU Handelshøyskolen i Trondheim, og suderer 1. året på master i Ledelse av teknologi. Våren 2021 fullførte jeg en bachelorgrad i Fornybar Energi, et ingeniørstudie på NTNU Gløshaugen. Jeg er en veldig sosial person, og har gjennom utdanning, verv og jobb opparbeidet god erfaring med å arbeide i team.",
      },
      contact: {
        title: "Detaljer",
        adress: ["Dalsaunevegen 3C", "7037, Trondheim"],
        phone: "+47 413 41 902",
        links: [
          {
            Icon: MdMailOutline,
            link: "mailto:jonas.aasland99@gmail.com",
            text: "jonas.aasland99@gmail.com",
          },
          {
            Icon: BsLinkedin,
            link: "https://www.linkedin.com/in/jonas-aasland-b97b31187/",
            text: "Jonas Aasland",
          },
        ],
      }
    },
    content: {
      education: [
        {
          title: "Ledelse av Teknologi",
          location: "Norges teknisk-naturvitenskapelige universitet",
          positions: [
            {
              timerange: "08.2021 - 06.2023",
              description: "Master innen økonomi- og ledelsesfag - Masterprogram 2-årig, Trondheim",
            },
          ],
        },
        {
          title: "Bachelor i Fornybar energi",
          location: "Norges teknisk-naturvitenskapelige universitet",
          positions: [
            {
              timerange: "08.2018 - 06.2021",
              description: "Bachelor i teknisk-naturvitenskapelige fag, Bachelorprogram 2-årig, Trondheim",
            },
          ],
        },
      ],
      experience: [
        {
          title: "Arbeidserfaring",
          Icon: MdWorkOutline,
          locations: [
            {
              title: "Enevo AS",
              location: "Trondheim",
              positions: [
                {
                  timerange: "08.2019",
                  description: "Salgskonsulent",
                  text: "Telefonsalg frem til høsten 2020. Feltsalg etter dette. Jobber med ren provisjonslønn. Har solgt ulike strømavtaler, medlemskap TV-løsninger osv. I dag har jeg spesialert mef mot salg av fiber.",
                },
              ],
            },
            {
              title: "Attåtnæring",
              location: "Trondheim",
              positions: [
                {
                  timerange: "12.2018 - 06.2019",
                  description: "Producr Demonstrator",
                  text: "Delte ut smaksprøver av Ølsprøtt for markedsføring av nytt produkt.",
                },
              ],
            },
            {
              title: "Meny AS",
              location: "Sandefjord",
              positions: [
                {
                  timerange: "04.2017 - 08.2018",
                  description: "Butikkmedarbeider",
                  text: "Jobbet på deltid i kasse og kolonial. ",
                },
              ],
            },
          ],
        },
        {
          title: "Frivillig arbeid",
          Icon: MdOutlineVolunteerActivism,
          locations: [
            {
              title: "Online Linjeforening",
              location: "NTNU",
              positions: [
                {
                  timerange: "Mars 2019 - Mars 2020",
                  description: "Nestleder - Fag- og kurskomiteen",
                  text: "Bitså lederen med å opprettholde komiteens formål: Aktivt arbeide for å stimulere studentenes faglige interesser og tilby faglig relaterte kurs",
                },
                {
                  timerange: "Mars 2020 - November 2021",
                  description:
                    "Økonomiansvarlig, Fag- og kurskomiteen - Bank- og økonomikomiteen",
                  text: "Bistå komiteen med å holde oversikt over tilgjengelige midler og planlegge fremtidige utgifter for å kunne tilpasse seg studentenes behov",
                },
                {
                  timerange: "November 2021 - Nå",
                  description:
                    "Prosjektleder - Digitalisering av Bank- og økonomikomiteen",
                  text: "Prosjektleder og eier av prosjektet som skal digitalisere alle nødvendige deler av Bank- og økonomikomiteen",
                },
              ],
            },
          ],
        },
      ],
    },
  },
}

export default info
