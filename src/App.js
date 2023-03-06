import "./App.css";
import React from "react";
import Slideshow1 from "./components/Slideshow1.js";
import Slideshow3 from "./components/Slideshow3.js";
import Dashboard from "./components/Dashboard.js";
import InfoTitle from "./components/InfoTitle";
import ParagraphInfo from "./components/ParagraphInfo";
import CardImageDiv from "./components/CardImageDiv";
import CardIconDiv from "./components/CardIconDiv";
import SubInfoTitle from "./components/SubInfoTitle";
import BackgroundImage from "./components/BackgroundImage";
import IconInfo from "./components/IconInfo";
import BarCard from "./components/BarCard";
import IconTitledInfo from "./components/IconTitledInfo";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const images = [
  require("./images/IMG_1310.JPG"),
  require("./images/IMG_1313.JPG"),
  require("./images/IMG_1316.JPG"),
  require("./images/IMG_1319.JPG"),
  require("./images/IMG_1320.JPG"),
];

function App() {
  return (
    <div>
      <span id="HOME"></span>
      <Dashboard />
      <Slideshow1 images={images} />
      <span id="ABOUT US"></span>
      <InfoTitle black="WHO WE" green="ARE" />
      <ParagraphInfo>
        LuTreeCo is a native African for profit social enterprise that conserves
        trees and shrubs that are native to tropical Africa (Native), with
        emphasis on threatened species. We develop novel value chain that only
        emerge from, but also support and advance, our conservartion goals by
        enhancing our ecosystem sustainability, community and education. We aim
        to raise the profile of biodiversity conservation and restoration in
        tropical Africa.
        <br />
        LuTreeCo is located on an 80 acre site on Bunjakko island, in Uganda,
        approximately 60 miles from Kampala by road. LuTreeCo is 100% solar
        powered and has a permanent water supply. We are a proud member of
        Botanical Gardens Conservation International (BGCI; BGCN# 5390).
      </ParagraphInfo>
      <div className=" bg-light">
        <InfoTitle black="Our core" green="Competencies" />
        <CardImageDiv />
      </div>
      <InfoTitle black="Our Defining" green="Strengths" />
      <CardIconDiv />
      <span id="SERVICES"></span>
      <InfoTitle black="Our" green="Services" />
      <span id="NATIVE-NURSERY"></span>
      <SubInfoTitle>Dedicated Non-Retail Native Nursery</SubInfoTitle>
      <BackgroundImage image={require("./images/IMG_1313.JPG")}>
        <BarCard height={"short"}>
          <IconInfo
            weight={"normal"}
            icon={require("./images/icons/green/bambotree.png")}
          >
            threatened species as determined by the international Union for
            Conservation of Nature(IUCN), have priority
          </IconInfo>
        </BarCard>
        <BarCard height={"short"}>
          <IconInfo
            weight={"normal"}
            icon={require("./images/icons/green/pinetree.png")}
          >
            Mature seedlings are either grown on site in our species-rich forest
            or will be utilized in regeneration and LuTreeCo driven community
            planting efforts
          </IconInfo>
        </BarCard>
        <div className=" bg-slideshow">
          <div className=" d-none d-lg-block mt-4">
            <Slideshow3 images={images} />
          </div>
          <div className=" d-lg-none mt-4">
            <Slideshow1 display="d-none" height="300px" images={images} />
          </div>
        </div>
      </BackgroundImage>
      <span id="NATIVE-FOREST"></span>
      <SubInfoTitle>Species-Rich Native Forest</SubInfoTitle>
      <BackgroundImage image={require("./images/IMG_1313.JPG")}>
        <BarCard height={"tall"} title={"Planting for Resilience"}>
          <IconInfo
            weight={"light"}
            icon={require("./images/icons/green/circleleaf.png")}
          >
            15 aces, will grow to 70
          </IconInfo>
          <IconInfo
            weight={"light"}
            icon={require("./images/icons/green/treegroup.png")}
          >
            Some legacy non native trees present.
          </IconInfo>
        </BarCard>
        <BarCard height={"tall"} title={"Planting for Resilience"}>
          <IconInfo
            weight={"light"}
            icon={require("./images/icons/green/bambotree.png")}
          >
            Threatened: 5 copies per provenance; 3 to 5 provenances.
          </IconInfo>
          <IconInfo
            weight={"light"}
            icon={require("./images/icons/green/pinetree.png")}
          >
            Least concern: 5 copies per species
          </IconInfo>
          <IconInfo
            weight={"light"}
            icon={require("./images/icons/green/leaf.png")}
          >
            Meticulous provenance records.
          </IconInfo>
        </BarCard>
        <div className=" bg-slideshow">
          <div className=" d-none d-lg-block mt-4">
            <Slideshow3 images={images} />
          </div>
          <div className=" d-lg-none mt-4">
            <Slideshow1 display="d-none" height="200px" images={images} />
          </div>
        </div>
      </BackgroundImage>
      <span id="APIARY"></span>
      <SubInfoTitle>The Apiary</SubInfoTitle>
      <BackgroundImage image={require("./images/IMG_1313.JPG")}>
        <div>
          <p className="text-white ms-lg-5 ps-lg-4 paragraph">
            LuTreeCo recognizes the crucial role of bees as a keystone species
            in maintaining a thriving forest ecosystem. The abundance and
            diversity of bee species are critical factors in the health of the
            forest. To support this, the organization manufactures Langstroth
            hives and traps its own bees. The revenue generated from the apiary
            will help further its conservation goals and contribute to the
            overall health of the forest.
          </p>
        </div>
        <div className="bg-slideshow">
          <div className=" d-none d-lg-block mt-4">
            <Slideshow3 images={images} />
          </div>
          <div className=" d-lg-none mt-4">
            <Slideshow1 display="d-none" height="400px" images={images} />
          </div>
        </div>
      </BackgroundImage>
      <span id="COMMUNITY"></span>
      <InfoTitle green="Community" />
      <BackgroundImage image={require("./images/IMG_1313.JPG")}>
        <div>
          <h2 className=" text-white">
            Community young tree maintenance program (CYTMP)
          </h2>
          <p className="text-white paragraph2">
            The CYTMP is a joint initiative between LuTreeCo and local
            subsistence farmers that aims to promote conservation and
            sustainable development. As part of the program, farmers are
            permitted to cultivate annual food crops for their families within
            the young forest at no cost, while also actively participating in
            the care and maintenance of the young trees. This not only reduces
            the cost of weeding but also strengthens the farmers' involvement in
            conservation efforts. The young trees will eventually mature with in
            4-5 years thereby make food production untenable, but the CYTMP will
            have established a positive reputation for LuTreeCo in the local
            community, which will help ensure the continued success of the
            project. in terms of increase monitoring of the tree by multiple
            people. Biannual meetings serve as an educational platform,
            promoting sustainability and the principles of conservation among
            the farmers. This collaborative approach to conservation leverages
            the involvement of local communities, making the CYTMP an innovative
            and effective solution for promoting sustainable development.
          </p>
        </div>
        <div className=" bg-slideshow">
          <div className=" d-none d-lg-block mt-4">
            <Slideshow3 images={images} />
          </div>
          <div className=" d-lg-none mt-4">
            <Slideshow1 display="d-none" height="200px" images={images} />
          </div>
        </div>
      </BackgroundImage>
      <span id="PUBLIC ADVOCACY"></span>
      <InfoTitle black="Public Advocacy" green="& Conservation Leadership" />
      <ParagraphInfo>
        LuTreeCo frequently publishes informative content on its Linkedin and
        Facebook platforms to increase awareness and promote conservation
        efforts. The company introduces native tree species, detailing their
        utility and importance, and shares these posts with impactful groups
        across Africa and beyond. Additionally, LuTreeCo founded and manages the
        Indigenous Tree and Shrub Species of Uganda Facebook page to further
        promote conservation and education.
        <br />
        LuTreeCo is also a strong advocate for indigenous tree planting and bee
        farming and works to engage local communities, through its CYTMP and LC1
        leadership, to promote these initiatives. The company is committed to
        engaging international organizations in future conservation work and
        actively seeks opportunities to collaborate on conservation initiatives.
      </ParagraphInfo>
      <span id="RESEARCH"></span>
      <InfoTitle green="Research" />
      <ParagraphInfo>
        LuTreeCo is dedicated to advancing the understanding and preservation of
        rare tree and shrub species through research. The organization is
        actively working on developing and optimizing propagation protocols,
        conducting seed viability tests, and sharing its findings in open-source
        journals. As part of its ongoing research efforts, LuTreeCo conducts
        annual ecosystem surveys to track the impact on the plants, insects,
        mammals, and reptiles in the surrounding environment. Looking ahead, the
        organization is focused on expanding its research efforts through
        product development studies, offering internship opportunities, and
        supporting graduate and undergraduate research.
      </ParagraphInfo>
      <span id="CONTACT US"></span>
      <InfoTitle black="Contact" green="Us" />
      <div className="row">
        <ContactInfo title={"Contact Information"}>
          <IconTitledInfo
            title={"location"}
            icon={require("./images/icons/contact/contact.png")}
          >
            Bunjakko island, in Uganda, approximately 60 miles from Kampala by
            road.
          </IconTitledInfo>
          <IconTitledInfo
            title={"phone number"}
            icon={require("./images/icons/contact/contact.png")}
          >
            +256758841256
          </IconTitledInfo>
          <IconTitledInfo
            title={"whatsapp number"}
            icon={require("./images/icons/contact/contact.png")}
          >
            +256758841256
          </IconTitledInfo>
          <IconTitledInfo
            title={"email"}
            icon={require("./images/icons/contact/contact.png")}
          >
            lutreeCo@gmail.com
          </IconTitledInfo>
          <IconTitledInfo
            title={"LinkedIn"}
            icon={require("./images/icons/contact/contact.png")}
          >
            LutreeCo
          </IconTitledInfo>
          <IconTitledInfo
            title={"Facebook"}
            icon={require("./images/icons/contact/contact.png")}
          >
            LuTreeCo
          </IconTitledInfo>
        </ContactInfo>
        <ContactForm title={"Send us a Message"} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
